// LuxuryHeroSignature.tsx
// Elegant calligraphic hero animation for a luxury notary brand.
// Framework: React + Framer Motion + TypeScript
// Preset alignment: React Animation Architect v2.0

"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LuxuryHeroSignature() {
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(t);
  }, []);

  if (!mounted) return null;

  const strokeDuration = 3.0;
  const shimmerDuration = 2.0;

  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: strokeDuration,
        ease: [0.4, 0, 0.2, 1], // ease-in-out
      },
    },
  };

  const shimmerVariants = {
    idle: { opacity: 0.9 },
    shimmer: {
      opacity: [0.9, 1.0, 0.9],
      transition: {
        duration: shimmerDuration,
        ease: "linear",
        repeat: Infinity,
      },
    },
  };

  if (shouldReduceMotion) {
    return (
      <div className="relative flex h-[60vh] items-center justify-center bg-gradient-to-b from-[#f9f7f4] to-[#ede8e2]">
        <img
          src="/luxury-logo-static.svg"
          alt="Luxury Notary Monogram"
          className="w-64 opacity-90"
        />
      </div>
    );
  }

  return (
    <div className="relative flex h-[60vh] items-center justify-center bg-gradient-to-b from-[#f9f7f4] to-[#ede8e2] overflow-hidden">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 600 200"
        className="w-[500px]"
        initial="hidden"
        animate="visible"
      >
        <motion.path
          d="M50 150 Q150 50 300 120 T550 100"
          fill="transparent"
          stroke="#bfa67a"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={pathVariants}
        />
      </motion.svg>
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-[#bfa67a]/10 to-transparent pointer-events-none"
        variants={shimmerVariants}
        animate="shimmer"
      />
    </div>
  );
}
