'use client';
import { motion } from 'framer-motion';
import React from 'react';

export default function Marquee({ children, className, duration = 20, reverse = false }) {
  return (
    <div className={`overflow-hidden flex gap-8 w-full select-none ${className}`}>
      <motion.div
        className="flex gap-8 min-w-full shrink-0 items-center justify-around"
        animate={{ x: reverse ? ["-100%", "0%"] : ["0%", "-100%"] }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        {children}
      </motion.div>
      <motion.div
        className="flex gap-8 min-w-full shrink-0 items-center justify-around"
        animate={{ x: reverse ? ["-100%", "0%"] : ["0%", "-100%"] }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        {children}
      </motion.div>
    </div>
  );
}
