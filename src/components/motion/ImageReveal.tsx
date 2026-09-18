"use client";

import { motion, useReducedMotion } from "framer-motion";
import React from "react";

interface ImageRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function ImageReveal({
  children,
  delay = 0.1,
  className = "",
}: ImageRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        shouldReduceMotion
          ? { opacity: 1 }
          : { opacity: 0, clipPath: "inset(4% 0% 4% 0%)" }
      }
      whileInView={{
        opacity: 1,
        clipPath: "inset(0% 0% 0% 0%)",
      }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.7,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
