"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface WhatsAppButtonProps {
  number: string
  text: string
  message?: string
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive"
  size?: "default" | "sm" | "lg" | "icon"
  className?: string
}

export default function WhatsAppButton({
  number,
  text,
  message = "",
  variant = "default",
  size = "default",
  className,
}: WhatsAppButtonProps) {
  const [isHovering, setIsHovering] = useState(false)

  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${number}?text=${encodedMessage}`, "_blank")
  }

  return (
    <Button
      variant={variant}
      size={size}
      className={cn("group relative overflow-hidden", className)}
      onClick={handleClick}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <span
        className={`absolute inset-0 bg-gradient-to-r from-green-500/20 to-green-600/20 transition-opacity duration-300 ${isHovering ? "opacity-100" : "opacity-0"}`}
      ></span>
      <MessageCircle
        className={`h-4 w-4 mr-2 transition-transform duration-300 ${isHovering ? "scale-125" : ""} relative z-10`}
      />
      <span className="relative z-10">{text}</span>
    </Button>
  )
}

