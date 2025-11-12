"use client"

import Image from "next/image"

export function ImageCarousel() {
  const images = [
    { src: "/images/carousel/signature-1.jpg", alt: "Professional signature" },
    { src: "/images/carousel/document-pen.jpg", alt: "Document with pen" },
    { src: "/images/carousel/notaries-signature.jpg", alt: "Notaries signature" },
    { src: "/images/carousel/house-model.jpg", alt: "House model for real estate" },
    { src: "/images/carousel/jill-portrait.jpg", alt: "Jill Munoz portrait" },
    { src: "/images/carousel/signing-document.jpg", alt: "Signing document" },
    { src: "/images/carousel/handshake-house.jpg", alt: "Business handshake" },
    { src: "/images/carousel/syringe.jpg", alt: "Medical notarization" },
    { src: "/images/carousel/munoz-signature.jpg", alt: "Munoz signature" },
    { src: "/images/carousel/house-keys.jpg", alt: "House keys" },
  ]

  return (
    <div className="relative overflow-hidden bg-background py-3 md:py-6 lg:py-8">
      <div className="carousel-track flex gap-4 md:gap-6">
        {images.map((image, index) => (
          <div
            key={`first-${index}`}
            className="carousel-item flex-shrink-0 w-48 h-32 md:w-56 md:h-40 lg:w-64 lg:h-48 rounded-lg overflow-hidden relative"
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover transition-all duration-500"
              sizes="(max-width: 768px) 192px, (max-width: 1024px) 224px, 256px"
            />
          </div>
        ))}
        {images.map((image, index) => (
          <div
            key={`second-${index}`}
            className="carousel-item flex-shrink-0 w-48 h-32 md:w-56 md:h-40 lg:w-64 lg:h-48 rounded-lg overflow-hidden relative"
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover transition-all duration-500"
              sizes="(max-width: 768px) 192px, (max-width: 1024px) 224px, 256px"
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .carousel-track {
          animation: scroll 80s linear infinite;
          width: fit-content;
        }
        .carousel-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}
