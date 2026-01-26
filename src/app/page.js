'use client';

import Footer from "@/components/Footer";
import CommandPalette from "@/components/CommandPalette";
import TechStack from "@/components/TechStack";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import Image from "next/image";
import SectionDivider from "@/components/SectionDivider";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { ExternalLink, X, ChevronLeft, ChevronRight, Image as ImageIcon, Database, Shield, Globe, Github, GitPullRequest, GitMerge, Eye, Clapperboard } from "lucide-react";
import CameraIcon from "@/components/ui/camera-icon";
import {
  SiJavascript, SiTypescript, SiNodedotjs, SiExpress, SiReact, SiNextdotjs, SiPhp, SiDrupal, SiMongodb, SiSupabase, SiHtml5, SiCss3, SiFigma
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

// Static Image Imports
import imgFace from "../assets/images/facecutouut.jpg";
import imgGrastech from "../assets/images/Grastech_Ayushman.jpg";
import imgExpo from "../assets/images/expo2025.jpg";
import imgKrishakBanner from "../assets/images/krishak_banner.jpg";
import imgKrishak2 from "../assets/images/krishak2.jpg";
import imgNationalSeminar from "../assets/images/national_seminar.jpg";
import imgSeminar from "../assets/images/seminar.jpg";
import imgSeminar2 from "../assets/images/semnar2.jpg";
import inkslate from "../assets/Projectimages/inkslate.png";
import emsdemo from "../assets/Projectimages/emsdemo.png";
import ybor from "../assets/Projectimages/ybor.png";
import remotionLogo from "../assets/images/remotion-logo.png";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);
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

  const spotlightMask = useMotionTemplate`radial-gradient(circle 80px at ${smoothX}px ${smoothY}px, black 30%, transparent 100%)`;

  return (
    <main className="min-h-screen bg-background text-foreground relative flex justify-center selection:bg-accent/30 selection:text-accent-foreground">
      <CommandPalette />

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
        <section id="intro" className="pt-20 space-y-8 mb-32">
          <StaggerContainer delayChildren={0.2} staggerBy={0.1}>
            <StaggerItem>
              <span className="text-accent font-mono text-xs font-bold uppercase tracking-[0.4em] pl-6 py-2">Introduction</span>
            </StaggerItem>
            <StaggerItem>
              <div className="flex flex-row items-center justify-between gap-4 md:gap-20 mt-8">
                <h1 className="text-3xl md:text-8xl font-semibold tracking-tighter leading-none md:whitespace-nowrap">
                  Hey, I'm Ayushman
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

        <SectionDivider label="PRT_AUTO_XP" style={{ marginTop: '6px' }} />

        {/* Experience Section */}
        <section id="experience" className="space-y-16 py-12 mt-20 mb-48">
          <Reveal width="100%">
            <div className="flex flex-col items-center justify-center text-center mb-20 w-full">
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight" style={{ fontFamily: 'var(--font-outfit)' }}>Experience</h2>
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
                    <span className="font-mono text-sm text-accent/80 whitespace-nowrap px-0">{exp.year}</span>
                  </div>
                  <p className="text-xs text-accent font-medium uppercase tracking-[0.2em] font-mono">{exp.company}</p>
                  <p className="text-foreground/80 leading-relaxed text-base max-w-xl font-light italic">{exp.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <SectionDivider label="SYS_STK_V2" style={{ marginTop: '6px' }} />

        {/* Skills Section */}
        <section id="skills" className="space-y-16 py-12 mt-20 mb-48">
          <Reveal width="100%">
            <div className="flex flex-col items-center justify-center text-center mb-20 w-full">
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight" style={{ fontFamily: 'var(--font-outfit)' }}>Skills</h2>
            </div>
          </Reveal>

          <Reveal width="100%">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 max-w-6xl mx-auto mt-12 px-4">
              {/* Backend */}
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <motion.div
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_rgba(216,207,188,0.6)]"
                  />
                  <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-accent font-medium">Backend</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {[
                    { name: "Java", icon: FaJava, color: "text-orange-500" },
                    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
                    { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
                    { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
                    { name: "Express", icon: SiExpress, color: "text-foreground" },
                  ].map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ y: -2, scale: 1.02 }}
                      className="relative group"
                    >
                      <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl hover:bg-accent/5 transition-all duration-300 cursor-default">
                        <skill.icon className={`text-xl ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                        <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                          {skill.name}
                        </span>
                      </div>
                      <div className="absolute -inset-0.5 rounded-xl bg-accent/0 group-hover:bg-accent/10 blur-sm transition-all duration-300 -z-10"></div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Frontend */}
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <motion.div
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_rgba(216,207,188,0.6)]"
                  />
                  <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-accent font-medium">Frontend</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {[
                    { name: "React", icon: SiReact, color: "text-cyan-400" },
                    { name: "Next.js", icon: SiNextdotjs, color: "text-foreground" },
                    { name: "APIs", icon: Globe, color: "text-blue-400" },
                    { name: "Figma", icon: SiFigma, color: "text-pink-500" },
                    { name: "React Native", icon: SiReact, color: "text-cyan-500" },
                  ].map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ y: -2, scale: 1.02 }}
                      className="relative group"
                    >
                      <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl hover:bg-accent/5 transition-all duration-300 cursor-default">
                        <skill.icon className={`text-xl ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                        <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                          {skill.name}
                        </span>
                      </div>
                      <div className="absolute -inset-0.5 rounded-xl bg-accent/0 group-hover:bg-accent/10 blur-sm transition-all duration-300 -z-10"></div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CMS */}
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <motion.div
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_rgba(216,207,188,0.6)]"
                  />
                  <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-accent font-medium">CMS</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {[
                    { name: "PHP", icon: SiPhp, color: "text-purple-400" },
                    { name: "Drupal", icon: SiDrupal, color: "text-blue-600" },
                    { name: "OAuth", icon: Shield, color: "text-rose-400" },
                  ].map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ y: -2, scale: 1.02 }}
                      className="relative group"
                    >
                      <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl hover:bg-accent/5 transition-all duration-300 cursor-default">
                        <skill.icon className={`text-xl ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                        <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                          {skill.name}
                        </span>
                      </div>
                      <div className="absolute -inset-0.5 rounded-xl bg-accent/0 group-hover:bg-accent/10 blur-sm transition-all duration-300 -z-10"></div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Databases */}
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <motion.div
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                    className="w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_rgba(216,207,188,0.6)]"
                  />
                  <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-accent font-medium">Databases</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {[
                    { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
                    { name: "SQL", icon: Database, color: "text-emerald-400" },
                    { name: "Supabase", icon: SiSupabase, color: "text-emerald-500" },
                  ].map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ y: -2, scale: 1.02 }}
                      className="relative group"
                    >
                      <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl hover:bg-accent/5 transition-all duration-300 cursor-default">
                        <skill.icon className={`text-xl ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                        <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                          {skill.name}
                        </span>
                      </div>
                      <div className="absolute -inset-0.5 rounded-xl bg-accent/0 group-hover:bg-accent/10 blur-sm transition-all duration-300 -z-10"></div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </section>


        <SectionDivider label="OS_CNTR_BT" style={{ marginTop: '6px' }} />

        {/* OS Contribution Section */}
        <section id="os-contribution" className="space-y-16 py-12 mt-20 mb-48">
          <div className="flex flex-col items-center justify-center text-center mb-20 w-full">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight" style={{ fontFamily: 'var(--font-outfit)' }}>OS Contributions</h2>
          </div>

          <div className="max-w-5xl mx-auto px-4">
            {[
              {
                year: "",
                repo: "Remotion",
                title: "New CLI Skills Command",
                points: [
                  "Implemented `npx remotion skills` command",
                  "Enables managing skills via CLI",
                  "Improved DX for contributors"
                ],
                status: "Merged",
                link: "https://github.com/tiwariaayu/remotion/tree/%236364"
              },
              {
                year: "",
                repo: "Remotion",
                title: "Support for Mediabunny and Zod",
                points: [
                  "Added support for Mediabunny/Zod templates",
                  "Enhanced `npx remotion add` command",
                  "Expanded template ecosystem"
                ],
                status: "Merged",
                link: "https://github.com/remotion-dev/remotion/pull/6365"
              }
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="relative pl-8 md:pl-0">
                  {/* Timeline Line (Desktop) */}
                  <div className="hidden md:block absolute left-[120px] top-0 bottom-0 w-px bg-border/30">
                    <div className="absolute top-6 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-background border-2 border-accent z-10 shadow-[0_0_0_4px_rgba(0,0,0,1)]" />
                  </div>

                  <div className="md:flex gap-6 group">
                    {/* Date Column */}
                    <div className="md:w-[120px] shrink-0 pt-4 md:text-right">
                      <span className="font-mono text-xl font-medium text-accent">{item.year}</span>
                    </div>

                    {/* Content Column */}
                    <div className="pb-24 relative">
                      {/* Mobile Timeline Node */}
                      <div className="md:hidden absolute -left-[39px] top-5 w-3 h-3 rounded-full bg-background border-2 border-accent z-10" />
                      <div className="md:hidden absolute -left-[34px] top-5 bottom-[-64px] w-px bg-border/20" />

                      <div className=" open-source group-hover:-translate-y-1 group-hover:shadow-lg transition-all duration-300 p-6 -ml-4 rounded-xl hover:bg-white/[0.02] border border-transparent hover:border-white/5">
                        <div className="flex flex-col md:flex-row gap-6">
                          {/* Left Column: Content */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-3 mb-4">
                              <div className="relative w-6 h-6 rounded-md overflow-hidden shrink-0">
                                <Image
                                  src={remotionLogo}
                                  alt="Remotion"
                                  fill
                                  className="object-cover object-left"
                                  sizes="24px"
                                />
                              </div>
                              <span className="text-foreground/80 font-medium">{item.repo}</span>
                            </div>

                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block mb-4 text-xl font-semibold tracking-tight hover:text-accent transition-colors"
                            >
                              {item.title}
                            </a>

                            <ul className="space-y-3 pl-1">
                              {item.points.map((point, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-base text-foreground/80 font-light leading-relaxed">
                                  <span className="text-accent/60 shrink-0 select-none">-</span>
                                  <span dangerouslySetInnerHTML={{ __html: point.replace(/`([^`]+)`/g, '<code class="bg-accent/10 px-1.5 py-0.5 rounded-md text-accent font-mono text-sm">$1</code>') }} />
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Right Column: Actions */}
                          <div className="flex flex-col gap-4 md:border-l md:border-white/5 md:pl-6 md:min-w-[140px] justify-center">
                            <a href={item.link} target="_blank" rel="noopener noreferrer" className="fancy-button">
                              <span className="circle" aria-hidden="true"><GitMerge className="icon" /></span>
                              <span className="button-text">{item.status}</span>
                            </a>

                            <a href="https://www.remotion.dev/" target="_blank" rel="noopener noreferrer" className="fancy-button">
                              <span className="circle" aria-hidden="true"><Globe className="icon" /></span>
                              <span className="button-text">Website</span>
                            </a>

                            <a href={item.link} target="_blank" rel="noopener noreferrer" className="fancy-button">
                              <span className="circle" aria-hidden="true"><Eye className="icon" /></span>
                              <span className="button-text">View PR</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <SectionDivider label="ARC_WKS_FTR" style={{ marginTop: '6px' }} />

        {/* Projects Section */}
        <section id="work" className="space-y-16 py-12 mt-20 mb-48 pb-32">
          <Reveal width="100%">
            <div className="flex flex-col items-center justify-center text-center mb-32 w-full">
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight" style={{ fontFamily: 'var(--font-outfit)' }}>Web Apps</h2>
            </div>
          </Reveal>

          <div className="grid gap-0">
            {[
              {
                id: "01",
                title: "Inkslate",
                subtitle: "Resume & Portfolio Platform",
                stacks: ["Next.js", "Supabase"],
                desc: "The premium platform for crafting professional resumes and portfolios that stand out. Built for designers, developers, and professionals.",
                github: "Private",
                live: "https://inkslate.online",
                image: inkslate
              },
              {
                id: "02",
                title: "EMS Demo",
                subtitle: "Employee Management Dashboard",
                stacks: ["Next.js", "Supabase"],
                desc: "A streamlined employee management system for tracking attendance, roles, and performance. simplified workforce administration.",
                github: "Private",
                live: "https://emsdemobyayu.netlify.app/",
                image: emsdemo,
                imageFit: "fill"
              },
              {
                id: "03",
                title: "Ybor",
                subtitle: "Marketing-Agency",
                stacks: ["Next.js"],
                desc: "A comprehensive digital marketing agency platform featuring dynamic service showcases, lead generation tools, and a modern, high-converting design aesthetic.",
                github: "Private",
                live: "https://ybor.netlify.app/",
                image: ybor
              }
            ].slice(0, 3).map((project, i, arr) => (
              <div key={i}>
                <Reveal delay={i * 0.1}>
                  <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center pb-16" style={{ margin: "10px" }}>
                    {/* Left Side: Project Details */}
                    <div className="space-y-6">
                      <div className="flex flex-col gap-6">
                        <div className="space-y-4">
                          <div className="flex items-center gap-4">
                            <span className="text-[9px] font-mono uppercase tracking-[0.2em] opacity-30">{project.subtitle}</span>
                          </div>
                          <h3 className="text-3xl md:text-4xl font-medium tracking-tight group-hover:text-accent transition-colors duration-500">
                            <span className="opacity-50 font-mono text-2xl mr-2">{project.id}.</span>{project.title}
                          </h3>
                        </div>

                        <div className="flex gap-4 shrink-0">
                          {project.github === "Private" ? (
                            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-foreground/30 cursor-not-allowed" title="Private Repository">
                              <span className="hidden md:inline">Private</span>
                              <Shield className="w-4 h-4" />
                            </div>
                          ) : (
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-foreground/50 hover:text-accent transition-colors duration-300">
                              <span className="hidden md:inline">Github</span>
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                          <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-foreground/50 hover:text-accent transition-colors duration-300">
                            <span className="hidden md:inline">Live</span>
                            <Globe className="w-4 h-4" />
                          </a>
                        </div>
                      </div>

                      <p className="text-foreground/70 leading-relaxed text-base font-light">
                        {project.desc}
                      </p>

                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.stacks.map(stack => (
                          <span key={stack} className="stack-tag">
                            {stack}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right Side: Website Preview */}
                    {project.live && project.live !== "#" && (
                      <div
                        onClick={() => setSelectedProject(project)}
                        className="rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm w-full shadow-2xl cursor-pointer hover:border-accent/40 transition-colors duration-300 aspect-video relative group"
                      >
                        <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                          <Image
                            src={project.image}
                            alt={`${project.title} Preview`}
                            fill
                            className={`object-${project.imageFit || 'cover'} ${!project.imageFit || project.imageFit === 'cover' ? 'object-top' : ''}`}
                            placeholder="blur"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </Reveal>
                {i < arr.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="border-t border-dashed border-white/20 w-full mb-24"
                    style={{ transformOrigin: "left" }}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="relative w-full flex justify-center mt-12 pb-8">
            <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none" />
            <a
              href="/projects"
              className="project-button"
            >
              Show All Projects
            </a>
          </div>
        </section>

        <SectionDivider label="ACH_LGC_V1" />

        {/* Achievements Section */}
        <section id="achievements" className="space-y-16 py-12 mt-20 mb-48">
          <Reveal width="100%">
            <div className="flex flex-col items-center justify-center text-center mb-20 w-full">
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight" style={{ fontFamily: 'var(--font-outfit)' }}>Achievements</h2>
            </div>
          </Reveal>

          <div className="grid gap-0 mt-8">
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
                images: [imgExpo, imgKrishakBanner, imgKrishak2],
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
            ].map((ach, i, arr) => (
              <div key={i}>
                <Reveal delay={i * 0.1}>
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
                    className="achievement group relative pl-8 border-l border-border/20 hover:border-accent/40 transition-colors duration-500 pb-12"
                  >
                    <div className="absolute left-0 top-0 w-2 h-px bg-accent/40 -translate-x-full" />
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                      <div className="flex items-center gap-3">
                        <motion.div
                          animate={{ opacity: [1, 0.3, 1] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                          className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)] shrink-0"
                        />
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
                            className={`btn-gallery ${(ach.showCollage && expandedAchievementIdx === i) ? 'active' : ''}`}
                            title={ach.images.length > 1 ? "View Gallery" : "View Certificate"}
                          >
                            <CameraIcon size={20} />
                          </button>
                        )}
                      </div>
                      <span className="font-mono text-sm text-accent/80 whitespace-nowrap px-0">
                        {ach.date}
                      </span>
                    </div>
                    <p className="text-xs text-accent/60 font-medium uppercase tracking-[0.2em] mb-3 font-mono">{ach.org}</p>
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
                {i < arr.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="h-px bg-gradient-to-r from-transparent via-border/30 to-transparent mb-12 ml-8"
                    style={{ transformOrigin: "left" }}
                  />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Project Details Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/60 backdrop-blur-md"
                onClick={() => setSelectedProject(null)}
              />

              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative w-full max-w-[420px] bg-black/40 backdrop-blur-2xl rounded-[32px] border border-white/10 p-[10px] shadow-2xl flex flex-col gap-4"
                onClick={(e) => e.stopPropagation()}
                style={{ padding: '10px' }}
              >
                {/* Close Button - Absolute Positioned nicely */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute -top-12 right-0 md:-right-12 z-50 p-2 rounded-full bg-white/10 text-white/70 hover:bg-white hover:text-black transition-all backdrop-blur-sm"
                >
                  <X size={20} />
                </button>

                {/* Header Row: Live Btn & Stack */}
                <div className="flex justify-between items-center w-full" style={{ padding: '10px' }}>
                  {selectedProject.live && (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-live btn-live"
                    >
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      View Live
                    </a>
                  )}

                  <div className="flex items-center gap-2 px-5 py-3 rounded-full bg-white text-black border border-white/10 shadow-lg">
                    <span className="card-live text-xs font-bold font-mono tracking-tighter uppercase">
                      {selectedProject.stacks.slice(0, 2).map(s => s).join(" + ")}
                    </span>
                  </div>
                </div>

                {/* Title & Desc */}
                <div className="space-y-3 mt-2">
                  <h2 className="text-3xl font-medium text-white tracking-tight leading-none" style={{ fontFamily: 'var(--font-outfit)' }}>
                    {selectedProject.title}
                  </h2>
                  <p className="text-white/60 text-sm leading-relaxed font-light">
                    {selectedProject.desc}
                  </p>
                </div>

                {/* Image Container */}
                <div className="relative w-full aspect-video rounded-[24px] overflow-hidden mt-2 border border-white/5 group">
                  <Image
                    src={selectedProject.image}
                    alt={`${selectedProject.title} Preview`}
                    fill
                    className={`object-${selectedProject.imageFit || 'cover'} ${!selectedProject.imageFit || selectedProject.imageFit === 'cover' ? 'object-top' : ''} transition-transform duration-700 group-hover:scale-105`}
                    placeholder="blur"
                  />
                  {/* Internal overlay for some depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

                  {/* Date/Year Badge on Image */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <div className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center gap-1.5">
                      <Globe size={12} className="text-white/70" />
                      <span className="text-[10px] font-medium text-white/90">2025</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

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

        <div className="h-10 w-full" />
        <Footer />

        {/* Spacer for Floating Dock */}
        <div className="h-24 md:h-32 w-full" />

      </div>
    </main >
  );
}
