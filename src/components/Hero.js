'use client';

import { useState } from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import Image from "next/image";
import { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import imgFace from "../assets/images/facecutouut.jpg";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  const springConfig = { damping: 20, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);
  const smoothScale = useSpring(isHovered ? 1 : 1.1, springConfig);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const spotlightMask = useMotionTemplate`radial-gradient(circle 80px at ${smoothX}px ${smoothY}px, black 30%, transparent 100%)`;

  return (
    <section id="intro" className="pt-20 space-y-8 mb-32">
      <StaggerContainer delayChildren={0.2} staggerBy={0.1}>
        <StaggerItem>
          <span className="text-accent font-mono text-xs font-bold uppercase tracking-[0.4em] pl-6 py-2">Introduction</span>
        </StaggerItem>
        <StaggerItem>
          <div className="flex flex-row items-center justify-between gap-4 md:gap-20 mt-8">
            <h1 className="text-3xl md:text-8xl font-semibold tracking-tighter leading-none md:whitespace-nowrap">
              Hey, I&apos;m Ayushman
            </h1>

            <div className="relative group">


              {/* Decorative Glow Background */}
              <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-accent/0 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <motion.div
                drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                dragElastic={0.6}
                whileDrag={{ scale: 1.05, cursor: 'grabbing' }}
                className="relative w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden border border-accent/20 shadow-xl group-hover:border-accent/40 transition-colors duration-500 cursor-grab active:cursor-grabbing z-20 select-none touch-none"
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {/* Grayscale Base Image */}
                <motion.div
                  className="absolute inset-0"
                  style={{ scale: smoothScale }}
                >
                  <Image
                    src={imgFace}
                    alt="Ayushman"
                    fill
                    className="object-cover grayscale"
                    placeholder="blur"
                    sizes="(max-width: 768px) 100vw, 600px"
                    quality={100}
                    priority
                    draggable={false}
                  />
                </motion.div>

                {/* Color Image revealed by spotlight */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    scale: smoothScale,
                    maskImage: isHovered ? spotlightMask : 'radial-gradient(circle 0px at 0px 0px, transparent 0%, transparent 0%)',
                    WebkitMaskImage: isHovered ? spotlightMask : 'radial-gradient(circle 0px at 0px 0px, transparent 0%, transparent 0%)'
                  }}
                >
                  <Image
                    src={imgFace}
                    alt="Ayushman Color"
                    fill
                    className="object-cover"
                    placeholder="blur"
                    sizes="(max-width: 768px) 100vw, 600px"
                    quality={100}
                    priority
                    draggable={false}
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </StaggerItem>
        <StaggerItem>
          <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed font-light max-w-2xl mt-8" style={{ fontFamily: 'var(--font-hanken-grotesk)' }}>
            A <motion.span
              whileHover={{ scale: 1.05, y: -2 }}
              className="relative inline-block px-2.5 py-1 rounded-md bg-accent/5 border border-accent/20 text-accent font-medium transition-all duration-300 hover:bg-accent/10 hover:border-accent/40 cursor-default group"
              style={{ fontFamily: 'var(--font-instrument-serif)' }}
            >
              <span className="absolute -inset-0.5 rounded-md bg-accent/0 group-hover:bg-accent/10 blur-sm transition-all duration-300 -z-10"></span>
              Full Stack Developer
            </motion.span> dedicated to building <span className="text-accent font-medium">Clean, Readable, and High-Performance</span> web experiences.
          </p>
        </StaggerItem>
      </StaggerContainer>
    </section>
  );
}
