'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Briefcase, Github, Linkedin, Twitter, Sun, Moon, Trophy } from 'lucide-react';
import { cn } from '@/lib/utils';

const links = [
    { id: 'intro', name: 'Home', icon: Home, type: 'scroll' },
    { id: 'work', name: 'Projects', icon: Briefcase, type: 'scroll' },
    { id: 'achievements', name: 'Achievements', icon: Trophy, type: 'scroll' },
    { id: 'divider-1', type: 'divider' },
    { id: 'github', name: 'GitHub', icon: Github, type: 'external', url: 'https://github.com/tiwariaayu' },
    { id: 'linkedin', name: 'LinkedIn', icon: Linkedin, type: 'external', url: 'https://linkedin.com/in/tiwariaayu' },
    { id: 'twitter', name: 'X', icon: Twitter, type: 'external', url: 'https://twitter.com' },
    { id: 'divider-2', type: 'divider' },
    { id: 'theme', name: 'Theme', icon: Sun, type: 'action' },
];

export default function FloatingDock() {
    const [activeSection, setActiveSection] = useState('intro');
    const [hoveredId, setHoveredId] = useState(null);
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        // Sync theme with document class
        const isLight = document.documentElement.classList.contains('light');
        setTheme(isLight ? 'light' : 'dark');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 }
        );

        ['intro', 'work', 'experience', 'achievements'].forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        if (newTheme === 'light') {
            document.documentElement.classList.add('light');
        } else {
            document.documentElement.classList.remove('light');
        }
    };

    const handleClick = (link) => {
        if (link.type === 'scroll') {
            const element = document.getElementById(link.id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else if (link.type === 'external') {
            window.open(link.url, '_blank');
        } else if (link.type === 'action' && link.id === 'theme') {
            toggleTheme();
        }
    };

    return (
        <div className="fixed bottom-6 inset-x-0 z-50 flex justify-center pointer-events-none px-4">
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="w-max p-2 rounded-full border z-50 pointer-events-auto relative mx-auto flex items-center px-1.5 bg-background/80 backdrop-blur-xl [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:border-white/10 dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
            >
                {links.map((link) => {
                    if (link.type === 'divider') {
                        return <div key={link.id} className="shrink-0 bg-white/10 w-[1px] h-6 mx-2" />;
                    }

                    const isActive = activeSection === link.id;
                    let Icon = link.icon;

                    if (link.id === 'theme') {
                        Icon = theme === 'dark' ? Sun : Moon;
                    }

                    return (
                        <div key={link.id} className="relative flex aspect-square items-center justify-center rounded-full" style={{ width: '48px' }}>
                            <button
                                onMouseEnter={() => setHoveredId(link.id)}
                                onMouseLeave={() => setHoveredId(null)}
                                onClick={() => handleClick(link)}
                                className={cn(
                                    "flex items-center justify-center rounded-full transition-all duration-300 relative group size-10",
                                    isActive
                                        ? "bg-foreground text-background shadow-lg"
                                        : "text-foreground/40 hover:text-foreground hover:bg-white/5"
                                )}
                            >
                                <Icon size={18} strokeWidth={isActive ? 2.5 : 2} />

                                {/* Tooltip */}
                                <AnimatePresence>
                                    {hoveredId === link.id && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: -55, scale: 1 }}
                                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                            className="absolute left-1/2 -translate-x-1/2 px-4 py-2 rounded-xl bg-foreground text-background text-[10px] font-mono tracking-[0.2em] uppercase pointer-events-none whitespace-nowrap shadow-2xl border border-white/10"
                                        >
                                            {link.name}
                                            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-foreground rotate-45" />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </button>
                        </div>
                    );
                })}
            </motion.div>
        </div>
    );
}
