'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Command, Search, Hash, Briefcase, User, Send, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const actions = [
    { id: 'intro', name: 'Go to Introduction', icon: User, section: 'intro' },
    { id: 'work', name: 'View Selected Works', icon: Hash, section: 'work' },
    { id: 'experience', name: 'Professional Experience', icon: Briefcase, section: 'experience' },
    { id: 'contact', name: 'Get in Touch', icon: Send, section: 'contact' },
];

export default function CommandPalette() {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState('');

    useEffect(() => {
        const handleKeyDown = (e) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                setIsOpen((open) => !open);
            }
            if (e.key === 'Escape') setIsOpen(false);
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const executeAction = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false);
    };

    const filteredActions = actions.filter((action) =>
        action.name.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[100] cursor-crosshair"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="fixed top-1/4 left-1/2 -translate-x-1/2 w-full max-w-xl z-[101] p-4"
                    >
                        <div className="glass border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
                            <div className="flex items-center px-4 border-b border-white/5">
                                <Search className="text-foreground/40 mr-3" size={18} />
                                <input
                                    autoFocus
                                    placeholder="Type a command or search..."
                                    className="w-full bg-transparent py-4 text-sm focus:outline-none"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                />
                                <div className="flex gap-1">
                                    <span className="text-[10px] font-mono bg-white/5 px-1.5 py-0.5 rounded border border-white/10 opacity-40">ESC to close</span>
                                </div>
                            </div>

                            <div className="p-2 space-y-1">
                                {filteredActions.length > 0 ? (
                                    filteredActions.map((action) => (
                                        <button
                                            key={action.id}
                                            onClick={() => executeAction(action.section)}
                                            className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-accent/10 transition-colors text-left group"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                                                    <action.icon size={16} className="text-foreground/40 group-hover:text-accent transition-colors" />
                                                </div>
                                                <span className="text-sm font-medium">{action.name}</span>
                                            </div>
                                            <span className="text-[10px] font-mono opacity-0 group-hover:opacity-40 transition-opacity uppercase tracking-widest">Enter</span>
                                        </button>
                                    ))
                                ) : (
                                    <div className="p-8 text-center text-foreground/20 italic text-sm">
                                        No results found for "{query}"
                                    </div>
                                )}
                            </div>

                            <div className="px-4 py-2 bg-black/20 flex justify-between items-center">
                                <div className="flex items-center gap-2 opacity-30">
                                    <Command size={10} />
                                    <span className="text-[10px] font-mono uppercase tracking-widest">Ayu.OS / Command Palette</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
