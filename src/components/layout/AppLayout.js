'use client';

import CommandPalette from "@/components/CommandPalette";
import { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

// --- Primitives ---

const SystemLabel = ({ children, className }) => (
  <span className={cn("font-mono text-[9px] uppercase tracking-widest opacity-50 block", className)}>
    {children}
  </span>
);

const TechnicalLine = ({ className }) => (
  <div className={cn("bg-accent/30", className)} aria-hidden="true" />
);

const GridPattern = ({ count = 4 }) => (
  <div className="grid grid-cols-2 gap-2 justify-end" aria-hidden="true">
    {Array.from({ length: count }).map((_, i) => (
      <div key={i} className="w-1 h-1 bg-accent/30 rotate-45 ml-auto" />
    ))}
  </div>
);

// --- Interface Components ---

const SystemStatus = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return (
    <div className="flex flex-col items-end gap-4 select-none">
      <div className="font-mono text-[7px] leading-tight space-y-1 text-right">
        <p>HASH: 0xFD29A...B8C</p>
        <p className="text-accent/50">SEC: ENCRYPTED_STABLE</p>
        <p>TS: {year}.{month}.{day}</p>
      </div>
      <div className="w-12 h-12 border border-accent/10 rounded-full flex items-center justify-center">
        <div className="w-1 h-1 rounded-full bg-accent animate-pulse shadow-[0_0_10px_rgba(var(--accent-rgb),0.5)]" />
      </div>
    </div>
  );
};

const LocationStamp = () => (
  <div className="relative h-24 w-24 border-l border-b border-accent/10 select-none">
    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-accent/40" />
    <div className="absolute bottom-4 left-4 font-mono text-[8px] opacity-30">
      <p>LOC: 28.6139° N</p>
      <p>77.2090° E</p>
    </div>
  </div>
);

const VerticalIdentity = () => (
  <div className="mt-12 space-y-4 select-none">
    <TechnicalLine className="w-px h-24 mx-auto lg:mx-0" />
    <SystemLabel className="tracking-[0.5em] [writing-mode:vertical-lr] rotate-180">
      Digital Artifact v.26
    </SystemLabel>
  </div>
);

const SystemMetrics = () => (
  <div className="mt-8 font-mono text-[8px] space-y-1 opacity-60 select-none">
    <p className="text-accent/60">ID://AY-2026-XQ</p>
    <p>TYPE: PORTFOLIO_CORE</p>
  </div>
);

// --- Layout Panels ---

const SidebarPanel = ({ side, children, className }) => {
  const isLeft = side === 'left';
  
  return (
    <aside 
      className={cn(
        "hidden lg:flex fixed top-0 h-full w-[15vw] flex-col justify-between py-12 px-8 border-border/30 opacity-40 pointer-events-none z-0",
        isLeft ? "left-0 border-r items-start" : "right-0 border-l items-end text-right",
        className
      )}
      aria-hidden="true"
    >
      {children}
    </aside>
  );
};

// --- Main Layout ---

export default function AppLayout({ children }) {
  return (
    <div className="min-h-screen bg-background text-foreground relative flex justify-center selection:bg-accent/30 selection:text-accent-foreground">
      <CommandPalette />
      
      {/* Left Interface Layer */}
      <SidebarPanel side="left">
        <StaggerContainer delayChildren={0.5}>
          <StaggerItem>
            <div className="flex flex-col gap-1 items-start">
              <TechnicalLine className="w-8 h-px bg-accent/40" />
              <TechnicalLine className="w-4 h-px bg-accent/20" />
              <SystemLabel className="mt-4 text-[7px]">Scan_Initiated...</SystemLabel>
            </div>
          </StaggerItem>
          
          <StaggerItem>
            <VerticalIdentity />
          </StaggerItem>
          
          <StaggerItem>
            <SystemMetrics />
          </StaggerItem>
        </StaggerContainer>

        <LocationStamp />
      </SidebarPanel>

      {/* Right Interface Layer */}
      <SidebarPanel side="right">
        <StaggerContainer delayChildren={0.8}>
          <StaggerItem>
            <GridPattern />
          </StaggerItem>
          
          <StaggerItem>
            <div className="mt-12 flex flex-col items-center gap-12">
              <SystemLabel className="tracking-[0.5em] [writing-mode:vertical-lr]">
                System Interaction
              </SystemLabel>
              <div className="space-y-4">
                <div className="w-px h-8 bg-gradient-to-b from-accent/40 to-transparent mx-auto" />
                <div className="w-px h-8 bg-gradient-to-b from-accent/40 to-transparent mx-auto opacity-50" />
                <div className="w-px h-8 bg-gradient-to-b from-accent/40 to-transparent mx-auto opacity-25" />
              </div>
              <TechnicalLine className="w-12 h-px bg-accent/20" />
            </div>
          </StaggerItem>
        </StaggerContainer>

        <SystemStatus />
      </SidebarPanel>

      {/* Main Content Area */}
      <main className="w-full max-w-3xl px-6 md:px-0 py-32 space-y-32 z-10 relative">
        {children}
        
        {/* Bottom Spacer */}
        <div className="h-24 md:h-32 w-full" aria-hidden="true" />
      </main>
    </div>
  );
}
