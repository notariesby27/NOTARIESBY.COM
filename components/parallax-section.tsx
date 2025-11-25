"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

interface ParallaxSectionProps {
  imageSrc: string
  imageAlt?: string
  speed?: number
  overlay?: boolean
  overlayOpacity?: number
  children: React.ReactNode
  className?: string
}

export function ParallaxSection({
  imageSrc,
  imageAlt = "",
  speed = 0.5,
  overlay = true,
  overlayOpacity = 0.2,
  children,
  className = "",
}: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const [offset, setOffset] = useState(0)
  const [isReducedMotion, setIsReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setIsReducedMotion(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches)
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  useEffect(() => {
    if (isReducedMotion) return

    const handleScroll = () => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight

      if (rect.top < windowHeight && rect.bottom > 0) {
        const scrollProgress = (windowHeight - rect.top) / (windowHeight + rect.height)
        const parallaxOffset = (scrollProgress - 0.5) * rect.height * speed
        setOffset(parallaxOffset)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed, isReducedMotion])

  return (
    <section ref={sectionRef} className={`relative overflow-hidden ${className}`}>
      <div
        className="absolute inset-0 will-change-transform"
        style={{
          transform: isReducedMotion ? "none" : `translate3d(0, ${offset}px, 0)`,
          top: "-20%",
          bottom: "-20%",
        }}
      >
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={imageAlt}
          fill
          className="object-cover"
          style={{ transform: "scale(1.3)" }}
        />
      </div>
      {overlay && <div className="absolute inset-0" style={{ backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})` }} />}
      <div className="relative z-10">{children}</div>
    </section>
  )
}
