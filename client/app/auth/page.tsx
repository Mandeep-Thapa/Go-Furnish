"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/components/ui/use-toast"

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const router = useRouter()
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent, isAdmin = false) => {
    e.preventDefault()
    // Here you would typically send this data to your backend API
    console.log("Form submitted:", { email, password, name, isAdmin })

    // Simulate a successful login/signup
    toast({
      title: isLogin ? "Logged in successfully" : "Signed up successfully",
      description: isAdmin ? "Welcome, admin!" : "Welcome to GoFurnish!",
    })

    // Redirect to appropriate page
    if (isAdmin) {
      router.push("/admin")
    } else {
      router.push("/")
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto">
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <form onSubmit={(e) => handleSubmit(e)} className="space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary-dark text-white">
                Login
              </Button>
              <Button type="button" variant="outline" className="w-full mt-2" onClick={(e) => handleSubmit(e, true)}>
                Login as Admin
              </Button>
            </form>
          </TabsContent>
          <TabsContent value="signup">
            <form onSubmit={(e) => handleSubmit(e)} className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} required />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary-dark text-white">
                Sign Up
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

