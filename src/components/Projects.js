'use client';

import { useState } from "react";
import Image from "next/image";
import { Globe, ExternalLink, Play } from "lucide-react";
import { motion } from "framer-motion";

import { Reveal } from "@/components/ScrollReveal";
import { Lightbox } from "@/components/ui/Lightbox";
import { cn } from "@/lib/utils";

// Assets
import inkslate from "../assets/Projectimages/inkslate.png";
import emsdemo from "../assets/Projectimages/emsdemo.png";
import ybor from "../assets/Projectimages/ybor.png";

// Data - Could be moved to consts/data.js
const PROJECTS = [
  {
    id: "01",
    title: "Inkslate",
    subtitle: "Resume & Portfolio Platform",
    stacks: ["Next.js", "Supabase"],
    desc: "The premium platform for crafting professional resumes and portfolios that stand out. Built for designers, developers, and professionals.",
    github: "Private",
    live: "https://inkslate.online",
    image: inkslate,
  },
  {
    id: "02",
    title: "EMS Demo",
    subtitle: "Staff Management",
    stacks: ["Next.js", "Supabase"],
    desc: "A streamlined employee management system for tracking attendance, roles, and performance. Simplified workforce administration.",
    github: "Private",
    live: "https://emsdemobyayu.netlify.app/",
    image: emsdemo,
    imageFit: "fill"
  },
  {
    id: "03",
    title: "Ybor",
    subtitle: "Digital Agency",
    stacks: ["Next.js"],
    desc: "A comprehensive digital marketing agency platform featuring dynamic service showcases, lead generation tools, and a high-converting design aesthetic.",
    github: "Private",
    live: "https://ybor.netlify.app/",
    image: ybor
  }
];

const ProjectTags = ({ stack }) => (
  <div className="flex flex-wrap gap-2 pt-2">
    {stack.map((tech) => (
      <span 
        key={tech} 
        className="px-2.5 py-1 text-[10px] font-mono uppercase tracking-wide bg-accent/5 text-accent/80 rounded-md border border-accent/10"
      >
        {tech}
      </span>
    ))}
  </div>
);

const ProjectLinks = ({ github, live }) => (
  <div className="flex gap-6 text-xs font-mono uppercase tracking-wider text-foreground/50">
    {github !== "Private" ? (
      <a href={github} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors flex items-center gap-2 group">
        Github <ExternalLink size={12} className="group-hover:-translate-y-0.5 transition-transform" />
      </a>
    ) : (
      <span className="opacity-50 cursor-not-allowed flex items-center gap-2">
        Private <span className="w-1.5 h-1.5 rounded-full bg-red-500/50" />
      </span>
    )}
    
    {live && (
      <a href={live} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors flex items-center gap-2 group">
        Live Demo <Globe size={12} className="group-hover:spin-slow" />
      </a>
    )}
  </div>
);

const ProjectCard = ({ project, onSelect, index }) => {
  return (
    <div className="group relative grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center py-16 md:py-24 border-b border-border/10 last:border-0 hover:bg-white/[0.02] transition-colors rounded-3xl px-4 md:px-8 -mx-4 md:-mx-8">
      {/* Content Side */}
      <div className="order-2 lg:order-1 space-y-8">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
             <span className="text-accent/40 font-mono text-sm">0{index + 1}</span>
             <span className="h-px w-8 bg-accent/20" />
             <span className="text-xs font-mono uppercase tracking-[0.2em] text-foreground/40">{project.subtitle}</span>
          </div>
          
          <h3 className="text-3xl md:text-5xl font-medium tracking-tight text-foreground group-hover:text-accent transition-colors duration-300">
            {project.title}
          </h3>
          
          <p className="text-foreground/60 leading-relaxed font-light text-base md:text-lg max-w-md">
            {project.desc}
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <ProjectTags stack={project.stacks} />
          <ProjectLinks github={project.github} live={project.live} />
        </div>
      </div>

      {/* Visual Side */}
      <div 
        className="order-1 lg:order-2 relative aspect-video w-full rounded-2xl overflow-hidden bg-white/5 border border-white/10 shadow-2xl cursor-zoom-in transition-all duration-500 hover:shadow-accent/10 hover:border-accent/30 group-hover:-translate-y-2"
        onClick={() => onSelect(project)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && onSelect(project)}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className={cn(
            "will-change-transform transition-transform duration-700 hover:scale-105",
            project.imageFit === 'fill' ? 'object-contain p-8' : 'object-cover object-top'
          )}
          sizes="(max-width: 768px) 100vw, 50vw"
          placeholder="blur"
        />
        
        {/* Overlay Action */}
        <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
          <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white font-medium text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform">
            <Play size={14} className="fill-current" />
            Quick View
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Modal Content ---

const ProjectDetails = ({ project }) => (
  <div className="flex flex-col h-full">
    {/* Image Header */}
    <div className="relative w-full aspect-video bg-black/20 group overflow-hidden">
      <Image
        src={project.image}
        alt={project.title}
        fill
        className={cn(
           "transition-transform duration-1000",
           project.imageFit === 'fill' ? 'object-contain p-12' : 'object-cover object-top'
        )} 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90" />
      
      <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
        <div className="space-y-1">
          <h2 className="text-3xl font-medium tracking-tight text-white">{project.title}</h2>
          <p className="text-white/60 text-sm font-light">{project.subtitle}</p>
        </div>
      </div>
    </div>

    {/* Body */}
    <div className="p-6 md:p-8 space-y-8 bg-background flex-1">
        <p className="text-foreground/70 text-sm leading-relaxed">
          {project.desc}
        </p>

        <div className="space-y-4">
          <h4 className="text-xs font-mono uppercase tracking-widest text-foreground/40">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {project.stacks.map(t => (
               <span key={t} className="px-3 py-1.5 bg-accent/5 text-accent text-xs rounded-md border border-accent/10">
                 {t}
               </span>
            ))}
          </div>
        </div>

        {project.live && (
          <a 
            href={project.live} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-4 bg-foreground text-background font-medium rounded-xl hover:bg-accent hover:text-white transition-colors mt-auto"
          >
            Visit Live Site <ExternalLink size={16} />
          </a>
        )}
    </div>
  </div>
);

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="work" className="py-24 container mx-auto px-4 lg:px-0">
      <Reveal width="100%">
        <div className="flex flex-col items-center mb-16 space-y-4">
          <span className="text-accent font-mono text-xs font-bold uppercase tracking-[0.4em]">Selected Works</span>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight" style={{ fontFamily: 'var(--font-outfit)' }}>
            Digital Products
          </h2>
        </div>
      </Reveal>

      <div className="flex flex-col gap-0 md:gap-12">
        {PROJECTS.map((project, i) => (
          <Reveal key={project.id} delay={i * 0.1}>
            <ProjectCard 
              project={project} 
              index={i} 
              onSelect={setSelected} 
            />
          </Reveal>
        ))}
      </div>

      <div className="flex justify-center mt-24">
        <a href="/projects" className="group flex items-center gap-2 text-sm font-medium text-foreground/60 hover:text-accent transition-colors border-b border-transparent hover:border-accent pb-0.5">
          View all archives <span className="group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </div>

      <Lightbox 
        isOpen={!!selected} 
        onClose={() => setSelected(null)}
        className="max-w-[500px] p-0 border-white/10" // override default padding
      >
        {selected && <ProjectDetails project={selected} />}
      </Lightbox>
    </section>
  );
}
