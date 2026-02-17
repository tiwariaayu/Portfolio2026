'use client';

import { useState } from "react";
import Image from "next/image";
import { Reveal } from "@/components/ScrollReveal";
import { Shield, ExternalLink, Globe, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import inkslate from "../assets/Projectimages/inkslate.png";
import emsdemo from "../assets/Projectimages/emsdemo.png";
import ybor from "../assets/Projectimages/ybor.png";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
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
  ];

  return (
    <section id="work" className="space-y-16 py-12 mt-20 mb-48 pb-32">
      <Reveal width="100%">
        <div className="flex flex-col items-center justify-center text-center mb-32 w-full">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight" style={{ fontFamily: 'var(--font-outfit)' }}>Web Apps</h2>
        </div>
      </Reveal>

      <div className="grid gap-0">
        {projects.slice(0, 3).map((project, i, arr) => (
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
    </section>
  );
}
