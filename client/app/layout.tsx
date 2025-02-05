import "./globals.css"
import { Playfair_Display, Lato } from "next/font/google"
import type { ReactNode } from "react"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
})

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-lato",
})

export const metadata: Metadata = {
  title: {
    default: "GoFurnish - Your Modern Furniture Store",
    template: "%s | GoFurnish",
  },
  description: "Discover stylish and affordable furniture for your home at GoFurnish.",
  keywords: ["furniture", "home decor", "modern furniture", "affordable furniture"],
  authors: [{ name: "GoFurnish Team" }],
  creator: "GoFurnish",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gofurnish.com",
    siteName: "GoFurnish",
    title: "GoFurnish - Your Modern Furniture Store",
    description: "Discover stylish and affordable furniture for your home at GoFurnish.",
    images: [
      {
        url: "https://gofurnish.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GoFurnish - Modern Furniture Store",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GoFurnish - Your Modern Furniture Store",
    description: "Discover stylish and affordable furniture for your home at GoFurnish.",
    images: ["https://gofurnish.com/twitter-image.jpg"],
    creator: "@GoFurnish",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${playfairDisplay.variable} ${lato.variable} scroll-smooth`}>
      <body className="flex flex-col min-h-screen font-sans bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

