'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Globe, ArrowUpRight } from 'lucide-react';
import { SiWhatsapp, SiGmail } from "react-icons/si";
import { cn } from '@/lib/utils';

import styles from './Footer.module.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const [time, setTime] = React.useState('');

    React.useEffect(() => {
        setTime(new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true }));
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true }));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <footer id="contact" className="w-full max-w-7xl mx-auto pt-40 pb-32 px-6">
            <div className="flex flex-col items-center justify-center text-center space-y-12 mb-32">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center space-y-8"
                >
                    <p className="text-[#e9204f] text-lg md:text-xl font-semibold">
                        Have a project in mind?
                    </p>

                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <a
                            href="https://wa.me/918252577379"
                            target="_blank"
                            className={cn(
                                "group relative inline-flex items-center justify-center bg-white/5 backdrop-blur-md border-2 border-[#e9204f] text-foreground rounded-lg font-medium text-base transition-all duration-300 hover:bg-accent/10 hover:border-accent/50 hover:text-accent hover:scale-105 hover:shadow-[0_0_30px_rgba(216,207,188,0.2)] active:scale-95 gap-3",
                                styles.ctaButton
                            )}
                        >
                            <SiWhatsapp className="w-4 h-4 text-[#25D366] transition-transform duration-300 group-hover:scale-110" />
                            <span>Start a conversation</span>
                        </a>

                        <div className="flex items-center gap-4">
                            <a
                                href="mailto:tiwariayushman847@gmail.com"
                                className={cn(
                                    "flex items-center gap-2 rounded-lg bg-white/5 border-2 border-[#e9204f] text-foreground/70 hover:text-foreground hover:bg-white/10 hover:border-white/20 transition-all duration-300 group",
                                    styles.ctaButton
                                )}
                                aria-label="Email"
                            >
                                <SiGmail size={18} className="text-[#EA4335] transition-transform duration-300 group-hover:scale-110" />
                                <span className="font-medium">Email</span>
                            </a>
                            <a
                                href="https://github.com/tiwariaayu"
                                target="_blank"
                                className={cn(
                                    "rounded-lg bg-white/5 border-2 border-[#e9204f] text-foreground/70 hover:text-foreground hover:bg-white/10 hover:border-white/20 transition-all duration-300 group",
                                    styles.ctaButton
                                )}
                                aria-label="GitHub"
                            >
                                <Github size={18} className="text-foreground transition-transform duration-300 group-hover:scale-110" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/ayushman-037379264/"
                                target="_blank"
                                className={cn(
                                    "rounded-lg bg-white/5 border-2 border-[#e9204f] text-foreground/70 hover:text-foreground hover:bg-white/10 hover:border-white/20 transition-all duration-300 group",
                                    styles.ctaButton
                                )}
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={18} className="text-[#0A66C2] transition-transform duration-300 group-hover:scale-110" />
                            </a>
                        </div>
                    </div>

                    <p className="text-foreground/50 text-base md:text-lg max-w-lg mx-auto font-light leading-relaxed">
                        Let's turn your ideas into reality.
                    </p>

                    <h2 className="text-5xl md:text-8xl font-bold tracking-tight leading-[0.9] text-balance pt-8" style={{ fontFamily: 'var(--font-outfit)' }}>
                        Let's build the <br />
                        <span className="text-accent italic font-light ml-2" style={{ fontFamily: 'var(--font-instrument-serif)' }}>future</span> together.
                    </h2>
                </motion.div>
            </div>

            <div className={cn(
                "grid grid-cols-1 md:grid-cols-3 items-center gap-6 pt-12 border-t border-border/5",
                styles.footerBottomBar
            )}>
                <div className="hidden md:block" />

                <div className="flex flex-row items-center justify-center gap-2 md:gap-4 text-sm md:text-base font-medium font-mono text-foreground/50 whitespace-nowrap">
                    <span>Based in India</span>
                    <span className="text-accent/50">•</span>
                    <span className="text-[#e9204f] font-bold">Spun with code & coffee by Ayushman</span>
                    <span className="text-accent/50">•</span>
                    <span className="min-w-[100px] text-center">{time}</span>
                </div>

                <div className="flex justify-center md:justify-end w-full">
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="group text-foreground/20 hover:text-accent transition-colors font-mono text-[9px] uppercase tracking-widest flex items-center gap-2"
                    >
                        Back to top <motion.span animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 2 }}>↑</motion.span>
                    </button>
                </div>
            </div>
        </footer>
    );
}
