import type { NextApiRequest, NextApiResponse } from "next"
import { getCachedImage, setCachedImage } from "../../../lib/redis"
import axios from "axios"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { path } = req.query
  const imagePath = Array.isArray(path) ? path.join("/") : path
  const cacheKey = `image:${imagePath}`

  try {
    // Check Redis cache
    const cachedImage = await getCachedImage(cacheKey)

    if (cachedImage) {
      res.setHeader("Content-Type", "image/jpeg")
      res.setHeader("Cache-Control", "public, max-age=86400")
      return res.send(cachedImage)
    }

    // Fetch image from source
    const imageUrl = `https://your-image-source.com/${imagePath}`
    const response = await axios.get(imageUrl, { responseType: "arraybuffer" })
    const imageBuffer = Buffer.from(response.data, "binary")

    // Cache the image
    await setCachedImage(cacheKey, imageBuffer)

    // Send the image
    res.setHeader("Content-Type", "image/jpeg")
    res.setHeader("Cache-Control", "public, max-age=86400")
    res.send(imageBuffer)
  } catch (error) {
    console.error("Error fetching image:", error)
    res.status(500).json({ error: "Failed to fetch image" })
  }
}

