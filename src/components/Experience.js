'use client';

import { Reveal } from "@/components/ScrollReveal";

export default function Experience() {
  const experiences = [
    { 
      year: "Jun 2025 — Dec 2025", 
      role: "Jr. Software Developer", 
      company: "ItBox SS", 
      desc: "Contributing to full-stack development modules, focused on building scalable features and optimizing frontend performance." 
    },
  ];

  return (
    <section id="experience" className="space-y-16 py-12 mt-20 mb-48">
      <Reveal width="100%">
        <div className="flex flex-col items-center justify-center text-center mb-20 w-full">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight" style={{ fontFamily: 'var(--font-outfit)' }}>Experience</h2>
        </div>
      </Reveal>

      <div className="grid gap-20">
        {experiences.map((exp, i) => (
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
  );
}
