'use client';

import { motion } from "framer-motion";

export default function SectionDivider({ label = "SEC_PARTITION" }) {
    return (
        <div className="relative w-full py-24 flex items-center justify-center overflow-hidden pointer-events-none select-none">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent blur-3xl opacity-30" />

            <div className="relative w-full flex items-center gap-8 px-4">
                {/* Left Line */}
                <div className="relative flex-1">
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-border/50 to-accent/30" />
                    <motion.div
                        initial={{ scaleX: 0, originX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 1.5, ease: "circOut" }}
                        className="absolute top-0 right-0 h-[1px] w-full bg-gradient-to-r from-transparent via-accent/40 to-accent"
                    />
                </div>

                {/* Center Element */}
                <div className="flex items-center gap-4">
                    <div className="flex gap-1">
                        {[1, 2].map((i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, rotate: 45, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 * i, duration: 0.5 }}
                                className="w-1.5 h-1.5 border border-accent/40 rotate-45"
                            />
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 0.4, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="flex flex-col items-center"
                    >
                        <span className="font-mono text-[8px] tracking-[0.4em] uppercase text-accent whitespace-nowrap">
                            {label}
                        </span>
                    </motion.div>

                    <div className="flex gap-1">
                        {[1, 2].map((i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, rotate: 45, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 * i, duration: 0.5 }}
                                className="w-1.5 h-1.5 border border-accent/40 rotate-45"
                            />
                        ))}
                    </div>
                </div>

                {/* Right Line */}
                <div className="relative flex-1">
                    <div className="h-[1px] w-full bg-gradient-to-l from-transparent via-border/50 to-accent/30" />
                    <motion.div
                        initial={{ scaleX: 0, originX: 1 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 1.5, ease: "circOut" }}
                        className="absolute top-0 left-0 h-[1px] w-full bg-gradient-to-l from-transparent via-accent/40 to-accent"
                    />
                </div>
            </div>

            {/* Floating Artifacts */}
            <motion.div
                animate={{
                    y: [0, -10, 0],
                    opacity: [0.2, 0.4, 0.2]
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute left-1/4 top-1/2 -translate-y-1/2 font-mono text-[6px] opacity-20 text-accent hidden md:block"
            >
                L_STRM_INIT::0x44
            </motion.div>
            <motion.div
                animate={{
                    y: [0, 10, 0],
                    opacity: [0.2, 0.4, 0.2]
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
                className="absolute right-1/4 top-1/2 -translate-y-1/2 font-mono text-[6px] opacity-20 text-accent hidden md:block"
            >
                R_STRM_SYNC::0x99
            </motion.div>
        </div>
    );
}
