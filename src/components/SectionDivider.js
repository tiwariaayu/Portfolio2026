'use client';

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const DividerLine = ({ direction = "right" }) => (
  <div className="relative flex-1">
    <div className={cn(
      "h-[1px] w-full bg-gradient-to-r from-transparent via-border/50 to-accent/30",
      direction === "left" && "bg-gradient-to-l"
    )} />
    <motion.div
      initial={{ scaleX: 0, originX: direction === "right" ? 0 : 1 }}
      whileInView={{ scaleX: 1 }}
      transition={{ duration: 1.5, ease: "circOut" }}
      className={cn(
        "absolute top-0 h-[1px] w-full bg-gradient-to-r from-transparent via-accent/40 to-accent",
        direction === "left" && "left-0 bg-gradient-to-l",
        direction === "right" && "right-0"
      )}
    />
  </div>
);

const Diamond = ({ delay }) => (
  <motion.div
    initial={{ opacity: 0, rotate: 45, scale: 0 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.5 }}
    className="w-1.5 h-1.5 border border-accent/40 rotate-45"
  />
);

const FloatingArtifact = ({ children, className, delay = 0, duration = 4, yValues = [0, -10, 0] }) => (
  <motion.div
    animate={{
      y: yValues,
      opacity: [0.2, 0.4, 0.2]
    }}
    transition={{
      duration,
      repeat: Infinity,
      ease: "easeInOut",
      delay
    }}
    className={cn(
      "absolute top-1/2 -translate-y-1/2 font-mono text-[6px] opacity-20 text-accent hidden md:block select-none pointer-events-none",
      className
    )}
  >
    {children}
  </motion.div>
);

export default function SectionDivider({ label = "SEC_PARTITION", className }) {
  return (
    <div className={cn("relative w-full py-16 md:py-24 flex items-center justify-center overflow-hidden", className)}>
      {/* Background Glow */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent blur-3xl opacity-30 pointer-events-none" 
        aria-hidden="true"
      />

      <div className="relative w-full flex items-center gap-8 px-4 max-w-5xl mx-auto">
        <DividerLine direction="right" />

        {/* Center Badge */}
        <div className="flex items-center gap-4 shrink-0">
          <div className="flex gap-1">
            <Diamond delay={0.2} />
            <Diamond delay={0.4} />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 0.7, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <span className="font-mono text-[8px] tracking-[0.4em] uppercase text-accent whitespace-nowrap">
              {label}
            </span>
          </motion.div>

          <div className="flex gap-1">
            <Diamond delay={0.2} />
            <Diamond delay={0.4} />
          </div>
        </div>

        <DividerLine direction="left" />
      </div>

      {/* Decorative artifacts */}
      <FloatingArtifact className="left-1/4" duration={4}>
        L_STRM_INIT::0x44
      </FloatingArtifact>
      
      <FloatingArtifact className="right-1/4" delay={1} duration={5} yValues={[0, 10, 0]}>
        R_STRM_SYNC::0x99
      </FloatingArtifact>
    </div>
  );
}
