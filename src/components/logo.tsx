import type React from "react"

interface LogoProps {
  className?: string
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg blur-sm opacity-70 animate-pulse"></div>
      <div className="relative bg-background dark:bg-background/80 rounded-lg flex items-center justify-center h-full w-full border border-border/50">
        <img
          src="https://cdn-icons-png.flaticon.com/512/900/900961.png"
          alt="AI Consulting Logo"
          className="h-1/2 w-1/2 object-contain"
        />
      </div>
    </div>
  )
}

export default Logo
