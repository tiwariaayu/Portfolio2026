'use client';

import { useState } from "react";
import Image from "next/image";
import { 
  motion, 
  useMotionValue, 
  useSpring, 
  useMotionTemplate, 
  AnimatePresence 
} from "framer-motion";
import confetti from "canvas-confetti";
import { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { ClickMeArrow } from "@/components/ui/ClickMeArrow";
import { cn } from "@/lib/utils";

// Assets
import imgFace from "../assets/images/facecutouut.jpg";
import imgFace2 from "../assets/images/facecutout2.jpeg";

// Logic & Primitives
const fireConfetti = (rect) => {
  const x = (rect.left + rect.width / 2) / window.innerWidth;
  const y = (rect.top + rect.height / 2) / window.innerHeight;

  confetti({
    origin: { x, y },
    particleCount: 100,
    spread: 70,
    colors: ['#e9204f', '#ffffff', '#000000'],
    zIndex: 9999,
  });
};

const ProfileImage = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const [showAlt, setShowAlt] = useState(false);

  const springConfig = { damping: 20, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);
  const smoothScale = useSpring(isHovered ? 1 : 1.1, springConfig);

  const handleMouseMove = ({ currentTarget, clientX, clientY }) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  const spotlightMask = useMotionTemplate`radial-gradient(circle 80px at ${smoothX}px ${smoothY}px, black 30%, transparent 100%)`;

  return (
    <div className="relative group isolate">
      {/* Dynamic Glow */}
      <div 
        className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-accent/0 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" 
        aria-hidden="true"
      />

      <motion.div
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragElastic={0.6}
        whileDrag={{ scale: 1.05, cursor: "grabbing" }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative w-24 h-24 md:w-32 md:h-32 cursor-grab active:cursor-grabbing z-20 touch-none select-none"
      >
        <div className="absolute inset-0 rounded-2xl overflow-hidden border border-accent/20 shadow-xl group-hover:border-accent/40 transition-colors duration-500 bg-background">
          {/* Base Grayscale Image */}
          <motion.div className="absolute inset-0" style={{ scale: smoothScale }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={showAlt ? 'alt' : 'main'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <Image
                  src={showAlt ? imgFace2 : imgFace}
                  alt="Ayushman Profile"
                  fill
                  className="object-cover grayscale"
                  placeholder="blur"
                  sizes="(max-width: 768px) 100vw, 300px"
                  priority
                  draggable={false}
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Spotlight Color Reveal */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              scale: smoothScale,
              WebkitMaskImage: isHovered ? spotlightMask : "none", // simplified fallback
              maskImage: isHovered ? spotlightMask : "radial-gradient(circle 0px at 0, transparent 0, transparent 0)", // robust fallback
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={showAlt ? 'alt-color' : 'main-color'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <Image
                  src={showAlt ? imgFace2 : imgFace}
                  alt=""
                  fill
                  className="object-cover"
                  placeholder="blur"
                  priority
                  draggable={false}
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Toggle Button */}
        <div className="absolute top-3 left-3 z-30">
          <button
            onClick={(e) => { e.stopPropagation(); setShowAlt(!showAlt); }}
            onPointerDown={(e) => e.stopPropagation()}
            className="w-4 h-4 rounded-full bg-[#e9204f] hover:bg-[#ff4d73] text-white shadow-lg ring-2 ring-black/10 transition-transform hover:scale-110 flex items-center justify-center"
            aria-label="Switch photo style"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-white" />
          </button>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute -left-32 -top-6 pointer-events-none"
          >
            <ClickMeArrow className="drop-shadow-md" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

const Tagline = () => (
    <p 
      className="text-xl md:text-2xl text-foreground/80 leading-relaxed font-light max-w-2xl mt-8"
      style={{ fontFamily: "var(--font-hanken-grotesk)" }}
    >
      A{" "}
      <motion.span
        onClick={(e) => {
          e.stopPropagation();
          fireConfetti(e.currentTarget.getBoundingClientRect());
        }}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="relative inline-block px-2.5 py-1 rounded-md bg-accent/5 border border-accent/20 text-accent font-medium transition-colors hover:bg-accent/10 hover:border-accent/40 cursor-pointer group select-none"
        style={{ fontFamily: "var(--font-instrument-serif)" }}
      >
        <span className="absolute -inset-0.5 rounded-md bg-accent/0 group-hover:bg-accent/10 blur-sm transition-colors -z-10" aria-hidden="true" />
        Full Stack Developer
      </motion.span>{" "}
      dedicated to building{" "}
      <span className="text-accent font-medium">
        Clean, Readable, and High-Performance
      </span>{" "}
      web experiences.
    </p>
);

export default function Hero() {
  return (
    <section id="intro" className="pt-20 space-y-8 mb-32">
      <StaggerContainer delayChildren={0.2} staggerBy={0.1}>
        {/* Semantic Header */}
        <StaggerItem>
          <span className="text-accent font-mono text-xs font-bold uppercase tracking-[0.4em] pl-6 py-2 block">
            Introduction
          </span>
        </StaggerItem>

        <StaggerItem>
          <div className="flex flex-row items-center justify-between gap-4 md:gap-20 mt-8">
            <h1 className="text-3xl md:text-8xl font-semibold tracking-tighter leading-none md:whitespace-nowrap">
              Hey, I&apos;m Ayushman
            </h1>
            <ProfileImage />
          </div>
        </StaggerItem>

        <StaggerItem>
          <Tagline />
        </StaggerItem>
      </StaggerContainer>
    </section>
  );
}
