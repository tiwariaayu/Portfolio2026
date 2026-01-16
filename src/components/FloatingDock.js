'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Briefcase, Github, Linkedin, Sun, Moon, Trophy } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';
import TwitterXIcon from './ui/twitter-x-icon';
import { cn } from '@/lib/utils';

const links = [
    { id: 'intro', name: 'Home', icon: Home, type: 'scroll' },
    { id: 'work', name: 'Projects', icon: Briefcase, type: 'internal', url: '/projects' },
    { id: 'divider-1', type: 'divider' },
    { id: 'github', name: 'GitHub', icon: Github, type: 'external', url: 'https://github.com/tiwariaayu' },
    { id: 'linkedin', name: 'LinkedIn', icon: Linkedin, type: 'external', url: 'https://www.linkedin.com/in/ayushman-037379264/' },
    { id: 'twitter', name: 'X', icon: TwitterXIcon, type: 'external', url: 'https://x.com/tiw_ari_ayu' },
    { id: 'divider-2', type: 'divider' },
    { id: 'theme', name: 'Theme', icon: Sun, type: 'action' },
];

export default function FloatingDock() {
    const router = useRouter();
    const pathname = usePathname();
    const [activeSection, setActiveSection] = useState('intro');
    const [hoveredId, setHoveredId] = useState(null);
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        // 1. Try to get theme from localStorage
        const savedTheme = localStorage.getItem('theme');

        // 2. If no saved theme, check system preference or default to dark
        const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

        // 3. Determine effective theme
        // If saved exists, use it. Else if system is light, use light. Else dark.
        let effectiveTheme = 'dark';
        if (savedTheme) {
            effectiveTheme = savedTheme;
        } else if (systemPrefersLight) {
            effectiveTheme = 'light';
        }

        setTheme(effectiveTheme);

        // 4. Apply to DOM
        if (effectiveTheme === 'light') {
            document.documentElement.classList.add('light');
        } else {
            document.documentElement.classList.remove('light');
        }

        // Scroll Spy Logic
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
    }, [pathname]);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);

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
            } else if (link.id === 'intro' && window.location.pathname !== '/') {
                // Return home if not on home page
                router.push('/');
            }
        } else if (link.type === 'internal') {
            router.push(link.url);
        } else if (link.type === 'external') {
            window.open(link.url, '_blank');
        } else if (link.type === 'action' && link.id === 'theme') {
            toggleTheme();
        }
    };

    return (
        <div className="fixed bottom-4 md:bottom-6 inset-x-0 z-50 flex justify-center pointer-events-none px-4">
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="w-max p-1.5 md:p-2 rounded-full border z-50 pointer-events-auto relative mx-auto flex items-center px-1 md:px-1.5 bg-background/80 backdrop-blur-xl [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:border-white/10 dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
            >
                {links.map((link) => {
                    if (link.type === 'divider') {
                        return <div key={link.id} className="shrink-0 bg-foreground/10 w-[1px] h-4 md:h-6 mx-1 md:mx-2" />;
                    }

                    const isActive = (link.url && pathname === link.url) ||
                        (pathname === '/' && activeSection === link.id);

                    let Icon = link.icon;

                    if (link.id === 'theme') {
                        Icon = theme === 'dark' ? Sun : Moon;
                    }

                    return (
                        <div key={link.id} className="relative flex w-10 md:w-12 aspect-square items-center justify-center rounded-full">
                            <button
                                onMouseEnter={() => setHoveredId(link.id)}
                                onMouseLeave={() => setHoveredId(null)}
                                onClick={() => handleClick(link)}
                                className={cn(
                                    "flex items-center justify-center rounded-full transition-all duration-300 relative group size-8 md:size-10",
                                    isActive
                                        ? "bg-foreground text-background shadow-lg"
                                        : "text-foreground/40 hover:text-foreground hover:bg-white/5"
                                )}
                            >
                                <motion.div
                                    whileHover={{ scale: 1.2, rotate: 5 }}
                                    whileTap={{ scale: 0.9 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                    className="flex items-center justify-center"
                                >
                                    <Icon className="w-4 h-4 md:w-[18px] md:h-[18px]" strokeWidth={isActive ? 2.5 : 2} />
                                </motion.div>


                                {/* Tooltip */}
                                <AnimatePresence>
                                    {hoveredId === link.id && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: -50, scale: 1 }}
                                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                            className="absolute left-1/2 -translate-x-1/2 px-6 py-3 rounded-xl bg-foreground text-background text-[10px] font-mono tracking-[0.2em] uppercase pointer-events-none whitespace-nowrap shadow-2xl border border-white/10"
                                        >
                                            {link.name}
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
