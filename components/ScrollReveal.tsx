"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
  duration?: number;
  once?: boolean;
  amount?: number;
}

const offsets: Record<Direction, { x?: number; y?: number }> = {
  up:    { y: 28 },
  down:  { y: -28 },
  left:  { x: 36 },
  right: { x: -36 },
  none:  {},
};

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.6,
  once = true,
  amount = 0.25,
}: ScrollRevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offsets[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration, delay, ease: "easeOut" }}
      viewport={{ once, amount }}
    >
      {children}
    </motion.div>
  );
}
