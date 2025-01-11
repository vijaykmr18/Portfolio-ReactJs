"use client"

import { useState, useEffect } from 'react'
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

export default function VideoBackground() {
  const [isLoading, setIsLoading] = useState(true)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-0">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 1 }}
        className={cn(
          "absolute inset-0 bg-black/20 transition-opacity duration-1000",
          isLoading ? "opacity-100" : "opacity-0"
        )}
      />
      <video
        className="min-w-full min-h-full object-cover scale-105 animate-slow-zoom"
        autoPlay
        loop
        muted
        playsInline
        poster="https://cdna.artstation.com/p/assets/images/images/028/102/058/original/pixel-jeff-matrix-s.gif"
        onLoadedData={() => setIsLoading(false)}
        style={{
          willChange: 'transform',
          backfaceVisibility: 'hidden',
        }}
      >
        <source 
          src="https://static.videezy.com/system/resources/previews/000/051/938/original/Abstract_46.mp4" 
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/50 to-background/90">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-background/0 via-background/0 to-background/90" />
      </div>
    </div>
  )
}
  
  