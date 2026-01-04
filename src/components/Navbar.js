'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const navItems = [
    { name: 'INTRO', id: 'intro' },
    { name: 'WORK', id: 'work' },
    { name: 'EXPERIENCE', id: 'experience' },
    { name: 'CONTACT', id: 'contact' },
];

export default function Navbar() {
    const [activeSection, setActiveSection] = useState('intro');
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            const observers = navItems.map((item) => {
                const element = document.getElementById(item.id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return { id: item.id, top: rect.top, visible: rect.top >= -200 && rect.top <= 400 };
                }
                return { id: item.id, visible: false };
            });

            const current = observers.find((obs) => obs.visible);
            if (current) setActiveSection(current.id);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="fixed top-8 inset-x-0 z-50 flex justify-center px-6 pointer-events-none"
        >
            <div className="pointer-events-auto">
                <div className="glass px-8 py-3 rounded-full flex gap-10 items-center border border-accent/10 shadow-2xl backdrop-blur-xl bg-background/20">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollTo(item.id)}
                            className={cn(
                                "relative text-[9px] font-mono tracking-[0.3em] transition-all duration-500 hover:text-accent focus:outline-none flex flex-col items-center gap-1",
                                activeSection === item.id ? "text-accent" : "text-foreground/30"
                            )}
                        >
                            {item.name}
                            <AnimatePresence>
                                {activeSection === item.id && (
                                    <motion.div
                                        layoutId="active-dot"
                                        initial={{ scale: 0, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        exit={{ scale: 0, opacity: 0 }}
                                        className="w-1 h-1 rounded-full bg-accent absolute -bottom-2"
                                    />
                                )}
                            </AnimatePresence>
                        </button>
                    ))}
                </div>
            </div>
        </motion.nav>
    );
}
