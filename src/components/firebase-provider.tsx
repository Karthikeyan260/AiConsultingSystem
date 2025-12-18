"use client"

import { useEffect } from "react"
import "@/firebase/firebase"

export function FirebaseProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Firebase is initialized via the import above
    // This component ensures it only happens on the client side
  }, [])

  return <>{children}</>
}
