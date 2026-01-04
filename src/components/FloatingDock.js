'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Briefcase, Github, Linkedin, Twitter, Sun, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';

const links = [
    { id: 'intro', name: 'Home', icon: Home, type: 'scroll' },
    { id: 'work', name: 'Projects', icon: Briefcase, type: 'scroll' },
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

        ['intro', 'work', 'experience'].forEach((id) => {
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
        <div className="fixed bottom-6 inset-x-0 z-50 flex justify-center pointer-events-none">
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="glass p-1.5 rounded-[1.8rem] border border-white/10 shadow-2xl flex items-center gap-3 pointer-events-auto bg-black/40 backdrop-blur-2xl"
            >
                {links.map((link) => {
                    if (link.type === 'divider') {
                        return <div key={link.id} className="w-px h-5 bg-white/5 mx-1" />;
                    }

                    const isActive = activeSection === link.id;
                    let Icon = link.icon;

                    if (link.id === 'theme') {
                        Icon = theme === 'dark' ? Sun : Moon;
                    }

                    return (
                        <div key={link.id} className="relative">
                            <button
                                onMouseEnter={() => setHoveredId(link.id)}
                                onMouseLeave={() => setHoveredId(null)}
                                onClick={() => handleClick(link)}
                                className={cn(
                                    "p-2.5 rounded-2xl transition-all duration-300 relative group",
                                    isActive ? "bg-white text-black shadow-lg scale-105" : "text-foreground/30 hover:text-foreground hover:bg-white/5"
                                )}
                            >
                                <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />

                                {/* Tooltip */}
                                <AnimatePresence>
                                    {hoveredId === link.id && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                            animate={{ opacity: 1, y: -45, scale: 1 }}
                                            exit={{ opacity: 0, y: 10, scale: 0.9 }}
                                            className="absolute left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg bg-white text-black text-[10px] font-mono tracking-widest uppercase pointer-events-none whitespace-nowrap shadow-xl"
                                        >
                                            {link.name}
                                            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45" />
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
