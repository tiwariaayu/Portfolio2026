'use client';

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Reveal } from "@/components/ScrollReveal";
import CameraIcon from "@/components/ui/camera-icon";
import { motion, AnimatePresence } from "framer-motion";
import { Image as ImageIcon, ChevronLeft, ChevronRight, X } from "lucide-react";

import imgGrastech from "../assets/images/Grastech_Ayushman.jpg";
import imgExpo from "../assets/images/expo2025.jpg";
import imgKrishakBanner from "../assets/images/krishak_banner.jpg";
import imgKrishak2 from "../assets/images/krishak2.jpg";
import imgNationalSeminar from "../assets/images/national_seminar.jpg";
import imgSeminar from "../assets/images/seminar.jpg";
import imgSeminar2 from "../assets/images/semnar2.jpg";

export default function Achievements() {
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

  const achievements = [
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
  ];

  return (
    <section id="achievements" className="space-y-16 py-12 mt-20 mb-48">
      <Reveal width="100%">
        <div className="flex flex-col items-center justify-center text-center mb-20 w-full">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight" style={{ fontFamily: 'var(--font-outfit)' }}>Achievements</h2>
        </div>
      </Reveal>

      <div className="grid gap-0 mt-8">
        {achievements.map((ach, i, arr) => (
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
    </section>
  );
}
