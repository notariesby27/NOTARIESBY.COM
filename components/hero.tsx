"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface HeroProps {
  eyebrow?: string
  title: string
  subtitle?: string
  ctaPrimary?: { href: string; label: string }
  ctaSecondary?: { href: string; label: string }
  backgroundImage?: string
}

export function Hero({
  eyebrow,
  title,
  subtitle,
  ctaPrimary,
  ctaSecondary,
  backgroundImage = "/images/banners/banner10-1600x500.jpg"
}: HeroProps) {
  return (
    <section className="relative h-[360px] flex items-center justify-center bg-muted mt-16 lg:mt-20 overflow-hidden">
      <Image 
        src={backgroundImage || "/placeholder.svg"} 
        alt="" 
        fill 
        className="object-cover" 
        priority 
      />
      
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
      
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light mb-4 text-balance">
          {title}
        </h1>
        
        {subtitle && (
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
        
        {(ctaPrimary || ctaSecondary) && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            {ctaPrimary && (
              <Link href={ctaPrimary.href}>
                <Button 
                  size="lg" 
                  variant="secondary" 
                  className="min-w-[200px] border border-white"
                >
                  {ctaPrimary.label}
                </Button>
              </Link>
            )}
            {ctaSecondary && (
              <Link href={ctaSecondary.href}>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="min-w-[200px] border border-white text-white bg-black/30 hover:bg-white/10"
                >
                  {ctaSecondary.label}
                </Button>
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
