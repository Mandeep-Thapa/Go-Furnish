import { createClient } from "redis"

const redisClient = createClient({
  url: process.env.REDIS_URL,
})

redisClient.on("error", (err) => console.log("Redis Client Error", err))

export async function getRedisClient() {
  if (!redisClient.isOpen) {
    await redisClient.connect()
  }
  return redisClient
}

export async function getCachedImage(key: string): Promise<Buffer | null> {
  const client = await getRedisClient()
  const cachedImage = await client.get(key)
  return cachedImage ? Buffer.from(cachedImage, "base64") : null
}

export async function setCachedImage(key: string, imageBuffer: Buffer): Promise<void> {
  const client = await getRedisClient()
  await client.set(key, imageBuffer.toString("base64"), {
    EX: 60 * 60 * 24, // Cache for 24 hours
  })
}

