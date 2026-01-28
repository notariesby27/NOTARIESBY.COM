'use client';

import { motion } from 'framer-motion';
import { useEffect, useReducer } from 'react';
import './NotariesBySignature.css';

const LOOP_DURATION = 4;
const EASE_SIGNATURE = [0, 0, 0.2, 1] as const;
const EASE_BADGE = [0.4, 0, 0.2, 1] as const;

// Three path segments for "Notaries by" in handwritten script style
const SIGNATURE_PATHS = [
  'M 20 45 L 20 25 Q 25 20, 35 25 L 55 45 L 55 25', // N
  'M 65 35 Q 65 28, 72 28 Q 79 28, 79 35 Q 79 42, 72 42 Q 65 42, 65 35 M 85 42 V 28 M 85 28 Q 90 25, 95 28 V 42 M 105 42 Q 105 28, 115 28 M 115 28 V 42 M 125 35 Q 125 28, 132 28 Q 139 28, 139 35 Q 139 42, 132 42 Q 125 42, 125 35 M 148 42 V 28 M 148 35 L 158 35 M 168 35 Q 168 28, 175 28 Q 182 28, 182 35 Q 182 42, 175 42 Q 170 42, 168 38', // otaries
  'M 200 35 V 22 M 200 28 Q 205 25, 210 28 Q 215 31, 215 35 Q 215 42, 210 42 Q 205 42, 200 38 M 225 42 V 28 Q 230 25, 235 28 Q 238 31, 238 38 L 238 48 Q 238 52, 234 52', // by
];

export default function NotariesBySignature() {
  const [key, rerun] = useReducer((x: number) => x + 1, 0);

  useEffect(() => {
    const interval = setInterval(rerun, LOOP_DURATION * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="notaries-signature-container"
      role="img"
      aria-label="NotariesBy signature with certified badge"
    >
      <svg
        className="signature-svg"
        viewBox="0 0 280 70"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {SIGNATURE_PATHS.map((pathData, index) => (
          <motion.path
            key={`signature-${key}-${index}`}
            d={pathData}
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.85 }}
            transition={{
              pathLength: {
                duration: 3.5,
                delay: index * 0.15,
                ease: EASE_SIGNATURE,
              },
              opacity: {
                duration: 0.4,
                delay: index * 0.15,
                ease: EASE_SIGNATURE,
              },
            }}
          />
        ))}
      </svg>

      <motion.div
        key={`badge-${key}`}
        className="certified-badge"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.9 }}
        transition={{
          delay: 3.2,
          duration: 0.6,
          ease: EASE_BADGE,
        }}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 60 60"
          xmlns="http://www.w3.org/2000/svg"
          className="badge-svg"
        >
          <circle
            cx="30"
            cy="30"
            r="26"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            opacity="0.8"
          />
          <motion.path
            key={`check-${key}`}
            d="M 18 30 L 26 38 L 42 22"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              delay: 3.5,
              duration: 0.4,
              ease: EASE_SIGNATURE,
            }}
          />
        </svg>
        <motion.span
          key={`text-${key}`}
          className="badge-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.75 }}
          transition={{
            delay: 3.8,
            duration: 0.3,
          }}
        >
          CERTIFIED
        </motion.span>
      </motion.div>

      <motion.div
        key={`shimmer-${key}`}
        className="shimmer"
        initial={{ x: '-100%', opacity: 0 }}
        animate={{ x: '100%', opacity: [0, 0.3, 0] }}
        transition={{
          delay: 3.8,
          duration: 0.8,
          ease: 'linear',
        }}
      />
    </div>
  );
}
