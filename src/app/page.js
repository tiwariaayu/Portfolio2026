'use client';

import Footer from "@/components/Footer";
import CommandPalette from "@/components/CommandPalette";
import FloatingDock from "@/components/FloatingDock";
import TechStack from "@/components/TechStack";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import Image from "next/image";
import SectionDivider from "@/components/SectionDivider";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { ExternalLink, X, ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";

// Static Image Imports
import imgFace from "../assets/images/facecutouut.jpg";
import imgGrastech from "../assets/images/Grastech_Ayushman.jpg";
import imgExpo from "../assets/images/expo2025.jpg";
import imgKrishakBanner from "../assets/images/krishak_banner.jpg";
import imgKrishak2 from "../assets/images/krishak2.jpg";
import imgKrishak3 from "../assets/images/krishak3.jpg";
import imgNationalSeminar from "../assets/images/national_seminar.jpg";
import imgSeminar from "../assets/images/seminar.jpg";
import imgSeminar2 from "../assets/images/semnar2.jpg";

export default function Home() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const [isHovered, setIsHovered] = useState(false);

  const springConfig = { damping: 20, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);
  const smoothScale = useSpring(isHovered ? 1 : 1.1, springConfig);

  const [selectedGallery, setSelectedGallery] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [expandedAchievementIdx, setExpandedAchievementIdx] = useState(null);
  const [isClickTriggered, setIsClickTriggered] = useState(false);
  const achievementRefs = useRef([]);

  useEffect(() => {
    if (expandedAchievementIdx !== null && isClickTriggered) {
      // Small delay to allow AnimatePresence height transition to start
      const timer = setTimeout(() => {
        achievementRefs.current[expandedAchievementIdx]?.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
        setIsClickTriggered(false); // Reset after scroll
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [expandedAchievementIdx, isClickTriggered]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const spotlightMask = useMotionTemplate`radial-gradient(circle 50px at ${smoothX}px ${smoothY}px, black 30%, transparent 100%)`;

  return (
    <main className="min-h-screen bg-background text-foreground relative flex justify-center selection:bg-accent/30 selection:text-accent-foreground">
      <CommandPalette />
      <FloatingDock />

      {/* Decorative Left Margin */}
      <div className="hidden lg:flex fixed left-0 top-0 h-full w-[15vw] flex-col justify-between py-12 px-8 border-r border-border/30 opacity-40 select-none pointer-events-none">
        <StaggerContainer delayChildren={0.5}>
          <StaggerItem>
            <div className="flex flex-col gap-1 items-start">
              <div className="w-8 h-px bg-accent/40" />
              <div className="w-4 h-px bg-accent/20" />
              <div className="mt-4 font-mono text-[7px] tracking-widest opacity-50 uppercase">Scan_Initiated...</div>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="mt-12 space-y-4">
              <div className="w-px h-24 bg-accent/30 mx-auto lg:mx-0" />
              <p className="font-mono text-[9px] uppercase tracking-[0.5em] [writing-mode:vertical-lr] rotate-180">Digital Artifact v.26</p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="mt-8 font-mono text-[8px] space-y-1 opacity-60">
              <p className="text-accent/60">ID://AY-2026-XQ</p>
              <p>TYPE: PORTFOLIO_CORE</p>
            </div>
          </StaggerItem>
        </StaggerContainer>

        <div className="relative h-24 w-24 border-l border-b border-accent/10">
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-accent/40" />
          <div className="absolute bottom-4 left-4 font-mono text-[8px] opacity-30">
            <p>LOC: 28.6139° N</p>
            <p>77.2090° E</p>
          </div>
        </div>
      </div>

      {/* Decorative Right Margin */}
      <div className="hidden lg:flex fixed right-0 top-0 h-full w-[15vw] flex-col justify-between py-12 px-8 border-l border-border/30 opacity-40 select-none pointer-events-none text-right">
        <StaggerContainer delayChildren={0.8}>
          <StaggerItem>
            <div className="grid grid-cols-2 gap-2 justify-end">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-1 h-1 bg-accent/30 rotate-45 ml-auto" />
              ))}
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="mt-12 flex flex-col items-center gap-12">
              <p className="font-mono text-[9px] uppercase tracking-[0.5em] [writing-mode:vertical-lr]">System Interaction</p>
              <div className="space-y-4">
                {[1, 2, 3].map(n => (
                  <div key={n} className="w-px h-8 bg-gradient-to-b from-accent/40 to-transparent mx-auto" />
                ))}
              </div>
              <div className="w-12 h-px bg-accent/20" />
            </div>
          </StaggerItem>
        </StaggerContainer>

        <div className="flex flex-col items-end gap-4">
          <div className="font-mono text-[7px] leading-tight space-y-1">
            <p>HASH: 0xFD29A...B8C</p>
            <p className="text-accent/50">SEC: ENCRYPTED_STABLE</p>
            <p>TS: {new Date().getFullYear()}.{new Date().getMonth() + 1}.{new Date().getDate()}</p>
          </div>
          <div className="w-12 h-12 border border-accent/10 rounded-full flex items-center justify-center">
            <div className="w-1 h-1 rounded-full bg-accent animate-pulse shadow-[0_0_10px_rgba(216,207,188,0.5)]" />
          </div>
        </div>
      </div>

      {/* Center Portfolio Content */}
      <div className="w-full max-w-3xl px-6 md:px-0 py-32 space-y-32 z-10">

        {/* Intro Section */}
        <section id="intro" className="pt-20 space-y-8">
          <StaggerContainer delayChildren={0.2} staggerBy={0.1}>
            <StaggerItem>
              <span className="text-accent font-mono text-xs font-bold uppercase tracking-[0.4em] border-l-2 border-accent pl-6 py-2">Introduction</span>
            </StaggerItem>
            <StaggerItem>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-12 md:gap-20 mt-8">
                <h1 className="text-5xl md:text-8xl font-semibold tracking-tighter leading-none whitespace-nowrap">
                  I'm Ayushman
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
                        sizes="(max-width: 768px) 100px, 150px"
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
                        sizes="(max-width: 768px) 100px, 150px"
                        priority
                        draggable={false}
                      />
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </StaggerItem>
            <StaggerItem>
              <p className="text-xl md:text-2xl text-foreground/80 leading-tight font-light max-w-2xl mt-8">
                A <span className="inline-block px-2 py-0.5 rounded-md bg-accent/5 border border-accent/20 text-[0.85em] text-accent font-medium shadow-[0_0_10px_rgba(216,207,188,0.02),inset_0_0_8px_rgba(216,207,188,0.1)] transition-all hover:bg-green-500/10 hover:border-green-500/30 hover:text-green-400 hover:shadow-[0_0_15px_rgba(34,197,94,0.2),inset_0_0_10px_rgba(34,197,94,0.15)] cursor-default mx-1 uppercase tracking-wider">Full Stack Developer</span> dedicated to building <span className="text-accent">Clean, Readable, and High-Performance</span> web experiences.
              </p>
            </StaggerItem>
          </StaggerContainer>
        </section>

        <SectionDivider label="PRT_AUTO_XP" />

        {/* Experience Section */}
        <section id="experience" className="space-y-16 py-12">
          <Reveal>
            <div className="flex flex-col items-center text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight">Experience</h2>
            </div>
          </Reveal>

          <div className="grid gap-20">
            {[
              { year: "Jun 2025 — Dec 2025", role: "Jr. Software Developer", company: "ItBox SS", desc: "Contributing to full-stack development modules, focused on building scalable features and optimizing frontend performance." },
            ].map((exp, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="group space-y-4">
                  <div className="flex justify-between items-baseline gap-4">
                    <h3 className="text-3xl font-medium tracking-tight group-hover:text-accent transition-colors duration-500">{exp.role}</h3>
                    <span className="font-mono text-[10px] opacity-40 whitespace-nowrap bg-white/5 px-2 py-1 rounded">{exp.year}</span>
                  </div>
                  <p className="text-xs text-accent font-medium uppercase tracking-[0.2em]">{exp.company}</p>
                  <p className="text-foreground/80 leading-relaxed text-base max-w-xl font-light italic">{exp.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <SectionDivider label="SYS_STK_V2" />

        {/* Skills Section */}
        <section id="skills" className="space-y-16 py-12">
          <Reveal>
            <div className="flex flex-col items-center text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight">Tech Stack</h2>
            </div>
          </Reveal>

          <StaggerContainer delayChildren={0.4} staggerBy={0.05} className="flex flex-wrap justify-center gap-4 mt-8">
            {[
              "Java", "JavaScript", "PHP", "React", "Drupal",
              "Next.js", "MongoDB", "SQL", "Supabase"
            ].map((skill) => (
              <StaggerItem key={skill}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-6 py-3 rounded-2xl bg-border/20 border border-border/50 hover:border-accent/40 hover:bg-accent/5 transition-all group cursor-default"
                >
                  <span className="text-lg md:text-xl font-medium text-foreground group-hover:text-accent transition-colors">
                    {skill}
                  </span>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        <SectionDivider label="ARC_WKS_FTR" />

        {/* Projects Section */}
        <section id="work" className="space-y-16 py-12">
          <Reveal>
            <div className="flex flex-col items-center text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight">Featured Work</h2>
            </div>
          </Reveal>

          <div className="grid gap-0 border-t border-border/10">
            {[
              { id: "01", title: "Nebula Cloud Engine", type: "Core Architecture", tags: ["Next.js", "WebGL", "Rust"], desc: "A high-performance distributed rendering engine for real-time 3D visualizations." },
              { id: "02", title: "Minimal Design Framework", type: "Design System", tags: ["CSS", "A11y", "Tailwind"], desc: "An open-source library prioritizing reading speed and accessibility for information-dense sites." }
            ].map((project, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="group border-b border-border/10 py-12 cursor-pointer transition-all hover:bg-white/[0.02]">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 px-4">
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <span className="font-mono text-[10px] text-accent opacity-50 tracking-widest">{project.id}</span>
                        <span className="text-[9px] font-mono uppercase tracking-[0.2em] opacity-30">{project.type}</span>
                      </div>
                      <h3 className="text-4xl md:text-5xl font-medium tracking-tight group-hover:text-accent transition-all duration-500 group-hover:translate-x-2">
                        {project.title}
                      </h3>
                    </div>

                    <div className="md:text-right space-y-4">
                      <div className="flex flex-wrap md:justify-end gap-2">
                        {project.tags.map(tag => (
                          <span key={tag} className="text-[9px] font-mono py-1 px-2 rounded-full border border-white/10 opacity-40">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <p className="text-foreground/40 text-[13px] leading-relaxed max-w-xs md:ml-auto">
                        {project.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="space-y-16 py-12">
          <Reveal>
            <div className="flex flex-col items-center text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight">Achievements</h2>
            </div>
          </Reveal>

          <div className="grid gap-12 mt-8">
            {[
              {
                title: "MERN stack + React Native completion",
                org: "Grastech Noida",
                date: "March 2025 — May 2025",
                desc: "Comprehensive certification covering advanced MongoDB, Express.js, React, Node.js and cross-platform mobile development with React Native.",
                images: [imgGrastech],
                showCollage: true
              },
              {
                title: "Software Expo 2025",
                org: "Krishak Project",
                date: "June 2025",
                desc: "Handled the complete website creation and architecture for 'Krishak', a smart agriculture platform. Showcased at the 2025 Software Expo.",
                images: [imgExpo, imgKrishakBanner, imgKrishak2, imgKrishak3],
                showCollage: true
              },
              {
                title: "National Seminar",
                org: "Academic Presentation",
                date: "July 2025",
                desc: "Presented research and technical implementation details at the 2025 National Seminar on Smart Technology.",
                images: [imgNationalSeminar, imgSeminar, imgSeminar2],
                showCollage: true
              }
            ].map((ach, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div
                  ref={el => achievementRefs.current[i] = el}
                  onMouseEnter={() => {
                    if (ach.showCollage) {
                      setExpandedAchievementIdx(i);
                      setIsClickTriggered(false);
                    }
                  }}
                  onMouseLeave={() => {
                    if (ach.showCollage) {
                      setExpandedAchievementIdx(null);
                    }
                  }}
                  className="group relative pl-8 border-l border-border/20 hover:border-accent/40 transition-colors duration-500"
                >
                  <div className="absolute left-0 top-0 w-2 h-px bg-accent/40 -translate-x-full" />
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                    <div className="flex items-center gap-3">
                      <h3 className="text-2xl font-medium tracking-tight group-hover:text-accent transition-colors duration-500">
                        {ach.title}
                      </h3>
                      {ach.images && (
                        <button
                          onClick={() => {
                            if (ach.showCollage) {
                              setExpandedAchievementIdx(expandedAchievementIdx === i ? null : i);
                              setIsClickTriggered(true);
                            } else {
                              setSelectedGallery(ach.images);
                              setCurrentImageIndex(0);
                            }
                          }}
                          className={`p-1.5 rounded-full transition-all duration-300 ${(ach.showCollage && expandedAchievementIdx === i)
                            ? "bg-accent text-background"
                            : "bg-accent/10 text-accent hover:bg-accent hover:text-background"
                            }`}
                          title={ach.images.length > 1 ? "View Gallery" : "View Certificate"}
                        >
                          <ImageIcon size={14} />
                        </button>
                      )}
                    </div>
                    <span className="font-mono text-[10px] opacity-40 whitespace-nowrap bg-white/5 px-2 py-1 rounded">
                      {ach.date}
                    </span>
                  </div>
                  <p className="text-xs text-accent/60 font-medium uppercase tracking-[0.2em] mb-3">{ach.org}</p>
                  <p className="text-foreground/60 leading-relaxed text-sm max-w-2xl font-light italic mb-2">
                    {ach.desc}
                  </p>

                  {/* Expanded Content (Conditional) */}
                  <AnimatePresence>
                    {ach.showCollage && ach.images && expandedAchievementIdx === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{ height: "auto", opacity: 1, marginTop: 24 }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        className="relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.01] backdrop-blur-sm"
                      >
                        {ach.images.length > 1 ? (
                          <div className="relative group/marquee py-8 overflow-hidden">
                            <motion.div
                              animate={{
                                x: [0, -((ach.images.length * 280) - 800), 0]
                              }}
                              transition={{
                                duration: ach.images.length * 8,
                                repeat: Infinity,
                                ease: "linear"
                              }}
                              className="flex w-fit px-12"
                            >
                              {ach.images.map((img, idx) => (
                                <motion.div
                                  key={idx}
                                  animate={{
                                    y: [0, idx % 2 === 0 ? -10 : 10, 0]
                                  }}
                                  transition={{
                                    duration: 4 + (idx % 2),
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                  }}
                                  className="relative w-64 h-40 mx-4 shrink-0 cursor-pointer overflow-hidden rounded-xl border border-white/10 group/img shadow-xl"
                                  onClick={() => {
                                    setSelectedGallery(ach.images);
                                    setCurrentImageIndex(idx);
                                  }}
                                >
                                  <Image
                                    src={img}
                                    alt="Achievement item"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover/img:scale-110"
                                    placeholder="blur"
                                    sizes="256px"
                                  />
                                  <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                                    <ImageIcon className="text-background" size={24} />
                                  </div>
                                </motion.div>
                              ))}
                            </motion.div>
                            {/* Gradient Overlays */}
                            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background via-background/60 to-transparent z-10 pointer-events-none" />
                            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background via-background/60 to-transparent z-10 pointer-events-none" />
                          </div>
                        ) : (
                          <div className="p-4 flex justify-center">
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="relative cursor-pointer overflow-hidden rounded-xl border border-white/10 group/img w-full max-w-sm aspect-[4/3] md:aspect-video"
                              onClick={() => {
                                setSelectedGallery(ach.images);
                                setCurrentImageIndex(0);
                              }}
                            >
                              <Image
                                src={ach.images[0]}
                                alt="Achievement item"
                                fill
                                className="object-cover transition-transform duration-500 group-hover/img:scale-105"
                                placeholder="blur"
                                sizes="(max-width: 768px) 100vw, 384px"
                              />
                              <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                                <ImageIcon className="text-background" size={24} />
                              </div>
                            </motion.div>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Gallery Modal */}
        <AnimatePresence>
          {selectedGallery && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-background/95 backdrop-blur-md"
                onClick={() => setSelectedGallery(null)}
              />

              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="relative w-full max-w-5xl aspect-video bg-border/10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl flex items-center justify-center group"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedGallery(null)}
                  className="absolute top-6 right-6 z-20 p-3 rounded-full bg-background/50 backdrop-blur-md text-foreground hover:bg-accent hover:text-background transition-all"
                >
                  <X size={24} />
                </button>

                {/* Navigation Arrows */}
                {selectedGallery.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex((prev) => (prev - 1 + selectedGallery.length) % selectedGallery.length);
                      }}
                      className="absolute left-6 z-20 p-3 rounded-full bg-background/50 backdrop-blur-md text-foreground hover:bg-accent hover:text-background transition-all opacity-0 group-hover:opacity-100"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex((prev) => (prev + 1) % selectedGallery.length);
                      }}
                      className="absolute right-6 z-20 p-3 rounded-full bg-background/50 backdrop-blur-md text-foreground hover:bg-accent hover:text-background transition-all opacity-0 group-hover:opacity-100"
                    >
                      <ChevronRight size={24} />
                    </button>

                    {/* Counter */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 px-4 py-2 rounded-full bg-background/50 backdrop-blur-md border border-white/10 text-[10px] font-mono tracking-widest uppercase">
                      {currentImageIndex + 1} / {selectedGallery.length}
                    </div>
                  </>
                )}

                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={selectedGallery[currentImageIndex]}
                      alt={`Gallery image ${currentImageIndex + 1}`}
                      fill
                      className="object-contain p-4 md:p-12"
                      placeholder="blur"
                      sizes="(max-width: 1280px) 100vw, 1280px"
                    />
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        <Footer />

        {/* Motivational Section */}
        <section className="py-32 px-4 relative">
          <div className="max-w-4xl mx-auto">
            <Reveal margin="0px" transition={{ duration: 0.8, ease: "easeOut" }}>
              <div className="relative group p-12 rounded-[2rem] border border-white/5 bg-white/[0.01] backdrop-blur-sm overflow-hidden text-center">
                <div className="absolute inset-0 bg-accent/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                <div className="absolute -inset-1 bg-gradient-to-r from-accent/0 via-accent/5 to-accent/0 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                <h2 className="text-xl md:text-3xl font-medium tracking-tight text-foreground/80 leading-relaxed max-w-2xl mx-auto">
                  LOSERS BECOME <span className="text-accent italic">WINNERS</span> <br />
                  BY TRYING <span className="underline decoration-accent/20 underline-offset-8">AGAIN.</span>
                </h2>
              </div>
            </Reveal>
          </div>
        </section>
      </div>
    </main >
  );
}
