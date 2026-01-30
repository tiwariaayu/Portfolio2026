'use client';

import CommandPalette from "@/components/CommandPalette";
import Footer from "@/components/Footer";
import { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import SectionDivider from "@/components/SectionDivider";

// Components
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import OpenSource from "@/components/OpenSource";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";

export default function Home() {
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
        <Hero />

        <SectionDivider label="PRT_AUTO_XP" style={{ marginTop: '6px' }} />

        <Experience />

        <SectionDivider label="SYS_STK_V2" style={{ marginTop: '6px' }} />

        <Skills />

        <SectionDivider label="OS_CNTR_BT" style={{ marginTop: '6px' }} />

        <OpenSource />

        <SectionDivider label="ARC_WKS_FTR" style={{ marginTop: '6px' }} />

        <Projects />

        <SectionDivider label="ACH_LGC_V1" />

        <Achievements />

        <div className="h-10 w-full" />
        <Footer />

        {/* Spacer for Floating Dock */}
        <div className="h-24 md:h-32 w-full" />
      </div>
    </main>
  );
}
