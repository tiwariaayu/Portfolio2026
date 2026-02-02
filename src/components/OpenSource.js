'use client';

import { Reveal } from "@/components/ScrollReveal";
import Image from "next/image";
import Link from "next/link";
import { GitMerge, Globe, Eye, ArrowRight } from "lucide-react";
import remotionLogo from "../assets/images/remotion-logo.png";

export default function OpenSource() {
  const osContributions = [
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
  ];

  return (
    <section id="os-contribution" className="space-y-16 py-12 mt-20 mb-48">
      <div className="flex flex-col items-center justify-center text-center mb-20 w-full">
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight" style={{ fontFamily: 'var(--font-outfit)' }}>OS Contributions</h2>
      </div>

      <div className="max-w-5xl mx-auto px-4">
        {osContributions.map((item, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <div className="relative pl-8 md:pl-0">
              {/* Timeline Line (Desktop) */}
              <div className="hidden md:block absolute left-[120px] top-0 bottom-0 w-px bg-border/30">
                <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-background border-2 border-accent z-10 shadow-[0_0_0_4px_rgba(0,0,0,1)]" />
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

        <div className="flex justify-center mt-16">
          <Link href="/open-source" className="project-button">
            View Full Archive
          </Link>
        </div>
      </div>
    </section>
  );
}
