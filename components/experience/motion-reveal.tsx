"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";

export function MotionReveal({ children, className }: { children: ReactNode; className?: string }) {
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const revealProps = mounted && !shouldReduceMotion ? {
    initial: { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 }
  } : { initial: false };

  return (
    <motion.div
      className={className}
      {...revealProps}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}
