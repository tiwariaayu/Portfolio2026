'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe, Database, Cpu, Layers, Zap } from 'lucide-react';

const tech = [
    { name: 'React', icon: Code2 },
    { name: 'Next.js', icon: Globe },
    { name: 'TypeScript', icon: Zap },
    { name: 'Tailwind', icon: Layers },
    { name: 'Node.js', icon: Cpu },
    { name: 'GraphQL', icon: Database },
];

export default function TechStack() {
    return (
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {tech.map((item, i) => (
                <motion.div
                    key={item.name}
                    whileHover={{ y: -5, backgroundColor: 'rgba(216, 207, 188, 0.05)' }}
                    className="border border-white/5 rounded-xl p-4 flex flex-col items-center gap-3 transition-colors group"
                >
                    <item.icon size={20} className="text-foreground/20 group-hover:text-accent transition-colors" />
                    <span className="text-[9px] font-mono uppercase tracking-widest opacity-20 group-hover:opacity-60 transition-opacity">
                        {item.name}
                    </span>
                </motion.div>
            ))}
        </div>
    );
}
