'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Globe, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer id="contact" className="w-full max-w-3xl mx-auto pt-32 pb-12 space-y-24 border-t border-border/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-6">
                    <h2 className="text-3xl md:text-5xl font-medium tracking-tighter">
                        Let's build the <span className="text-accent italic">future</span> together.
                    </h2>
                    <p className="text-foreground/50 text-sm leading-relaxed max-w-xs">
                        Based in India • IST Timezone (UTC+5:30)
                    </p>
                </div>

                <div className="flex flex-col justify-end gap-8">
                    <div className="flex gap-12">
                        <a
                            href="mailto:ayushmantiwari@example.com"
                            className="group flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-foreground/40 hover:text-accent transition-all hover:bg-accent/5 px-4 py-2 rounded-full border border-transparent hover:border-accent/10"
                        >
                            <Mail size={14} className="group-hover:scale-110 transition-transform" />
                            Email
                        </a>
                        <div className="space-y-4">
                            <a
                                href="https://github.com/tiwariaayu"
                                target="_blank"
                                className="group flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-foreground/30 hover:text-foreground transition-colors"
                            >
                                <Github size={12} />
                                Github <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 -translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-all" />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                className="group flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-foreground/30 hover:text-foreground transition-colors"
                            >
                                <Linkedin size={12} />
                                LinkedIn <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 -translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-all" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-border/5">
                <div className="flex items-center gap-4 text-foreground/20 font-mono text-[9px] uppercase tracking-[0.4em]">
                    <span>© {currentYear} Ayushman Tiwari</span>
                    <span className="h-4 w-px bg-border/20" />
                    <span>Built with Next.js 15</span>
                </div>

                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="group text-foreground/20 hover:text-accent transition-colors font-mono text-[9px] uppercase tracking-widest flex items-center gap-2"
                >
                    Back to top <motion.span animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 2 }}>↑</motion.span>
                </button>
            </div>
        </footer>
    );
}
