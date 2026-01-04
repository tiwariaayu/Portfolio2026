'use client';

import Footer from "@/components/Footer";
import CommandPalette from "@/components/CommandPalette";
import FloatingDock from "@/components/FloatingDock";
import TechStack from "@/components/TechStack";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

export default function Home() {
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
              <div className="mt-4 font-mono text-[7px] tracking-widest opacity-30 uppercase">Scan_Initiated...</div>
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
        <section id="intro" className="pt-12 space-y-8">
          <StaggerContainer delayChildren={0.2} staggerBy={0.1}>
            <StaggerItem>
              <span className="text-accent font-mono text-[10px] uppercase tracking-[0.4em] border-l-2 border-accent pl-4 py-1">Introduction</span>
            </StaggerItem>
            <StaggerItem>
              <h1 className="text-5xl md:text-8xl font-semibold tracking-tighter leading-none mt-8">
                Ayushman.
              </h1>
            </StaggerItem>
            <StaggerItem>
              <p className="text-2xl md:text-3xl text-foreground/80 leading-tight font-light max-w-2xl mt-8">
                A full stack developer dedicated to building <span className="text-accent">clean, readable, and high-performance</span> web experiences.
              </p>
            </StaggerItem>
            <StaggerItem>
              <div className="mt-16">
                <TechStack />
              </div>
            </StaggerItem>
          </StaggerContainer>
        </section>

        {/* Experience Section */}
        <section id="experience" className="space-y-16">
          <Reveal>
            <div className="flex items-center gap-6">
              <h2 className="text-sm font-mono uppercase tracking-[0.4em] text-accent/60">Experience</h2>
              <div className="h-px flex-1 bg-border/40" />
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
                  <p className="text-foreground/60 leading-relaxed text-base max-w-xl font-light italic">{exp.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="work" className="space-y-12">
          <Reveal>
            <div className="flex items-center gap-6 mb-8">
              <h2 className="text-sm font-mono uppercase tracking-[0.4em] text-accent/60">Selected Works</h2>
              <div className="h-px flex-1 bg-border/20" />
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

        <Footer />
      </div>
    </main>
  );
}
