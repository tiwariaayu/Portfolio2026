'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function Reveal({ children, delay = 0, width = "fit-content", className }) {
    return (
        <div style={{ position: "relative", width, overflow: "hidden" }} className={className}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay, ease: [0.19, 1, 0.22, 1] }}
            >
                {children}
            </motion.div>
        </div>
    );
}

export function StaggerContainer({ children, delayChildren = 0, staggerBy = 0.1, className }) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={{
                visible: {
                    transition: {
                        delayChildren,
                        staggerChildren: staggerBy,
                    },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function StaggerItem({ children }) {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
        >
            {children}
        </motion.div>
    );
}
