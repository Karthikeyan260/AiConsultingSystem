import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"
import { FirebaseProvider } from "@/components/firebase-provider"

// Using system fonts as fallback for sandboxed environment
const geistSans = {
  variable: "--font-geist-sans",
}

const geistMono = {
  variable: "--font-geist-mono",
}

export const metadata: Metadata = {
  title: "AI-Driven Consulting",
  description: "AI-powered expert consulting system",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <FirebaseProvider>
          {children}
          <Toaster />
        </FirebaseProvider>
      </body>
    </html>
  )
}
