'use client';

import { useState } from "react";
import VerticalLines from "@/components/VerticalLines";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import GmailIcon from "@/components/ui/gmail-icon";
import TwitterXIcon from "@/components/ui/twitter-x-icon";
import CrawlChatIcon from "@/components/ui/crawlchat-icon";
import Marquee from "@/components/ui/marquee";
import { Reveal } from "@/components/ScrollReveal";
import { GitMerge, Globe, Eye, Github, ChevronDown, ArrowLeft } from "lucide-react";
import Link from "next/link";

// Import images
import thor from "../../assets/images/Thor.jpg";
import banner from "../../assets/images/banner.jpeg";

const osContributions = [
    {
      year: "2024",
      repo: "Remotion",
      title: "New CLI Skills Command",
      tags: ["Performance", "CLI"],
      points: [
        "Implemented `npx remotion skills` command",
        "Enables managing skills via CLI",
        "Improved DX for contributors"
      ],
      status: "Merged",
      link: "https://github.com/tiwariaayu/remotion/tree/%236364"
    },
    {
      year: "2024",
      repo: "Remotion",
      title: "Support for Mediabunny and Zod",
      tags: ["Templates", "Zod", "DX"],
      points: [
        "Added support for Mediabunny/Zod templates",
        "Enhanced `npx remotion add` command",
        "Expanded template ecosystem"
      ],
      status: "Merged",
      link: "https://github.com/remotion-dev/remotion/pull/6365"
    },
    {
      year: "2025",
      repo: "CrawlChat",
      title: "Move KB Update Cron to Source Sync",
      tags: ["Cron", "Sync", "Refactor"],
      points: [
        "Moved knowledge base update cron to source sync",
        "Optimized synchronization process for better reliability",
        "Improved system architectural consistency"
      ],
      status: "Merged",
      link: "https://github.com/crawlchat/crawlchat/pull/416"
    }
];

export default function OpenSourcePage() {
    return (
        <main className="min-h-screen bg-background text-foreground flex justify-center">

            {/* Left Blank Space (Responsive) */}
            <div className="hidden xl:block w-[15vw] relative">
                <VerticalLines />
            </div>

            {/* Main Content */}
            <div className="w-full max-w-5xl px-6 md:px-12 py-32">
                <Link 
                    href="/" 
                    className="inline-flex items-center gap-2 text-sm text-foreground/50 hover:text-foreground transition-colors mb-12 group"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    <span className="font-mono uppercase tracking-wider">Back to Home</span>
                </Link>

                <div className="flex flex-col items-center mb-20 space-y-4">
                    <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-mono text-accent text-xs uppercase tracking-[0.3em]"
                    >
                        Community Impact
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-medium tracking-tight text-center flex flex-col items-center pb-[16px]!"
                        style={{ fontFamily: 'var(--font-outfit)' }}
                    >
                        Open Source
                        <span className="text-lg md:text-xl text-[#e9204f] font-serif italic tracking-wider font-light translate-x-16 md:translate-x-24">
                            contributions
                        </span>
                    </motion.h1>
                </div>

                <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10 mb-4!">
                    {osContributions.map((item, i) => (
                        <AccordionItem key={i} item={item} index={i} />
                    ))}
                </div>

                <div className="mt-1! mb-5! w-full overflow-hidden">
                    <Marquee duration={30} className="py-4 border-y border-white/5 [.light_&]:border-black/5 bg-white/[0.02] [.light_&]:bg-black/[0.02]">
                        {[
                            ...Object.entries(osContributions.reduce((acc, curr) => {
                                acc[curr.repo] = (acc[curr.repo] || 0) + 1;
                                return acc;
                            }, {})).map(([repo, count]) => ({
                                repo,
                                count: repo === 'Remotion' ? 4 : count,
                                type: 'stat'
                            })),
                            { type: 'text', content: 'Updating more soon...' }
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-4 text-2xl md:text-4xl font-light tracking-tight px-8">
                                {item.type === 'stat' ? (
                                    <>
                                        <span className={item.repo === 'Remotion' ? "text-blue-400" : item.repo === "CrawlChat" ? "text-purple-400" : "text-foreground"}>
                                            {item.repo}
                                        </span>
                                        <span className="font-serif italic text-white/40 [.light_&]:text-black/40 text-lg md:text-xl">
                                            {item.count} {item.count === 1 ? 'Contribution' : 'Contributions'}
                                        </span>
                                    </>
                                ) : (
                                    <span className="font-serif italic text-white/40 [.light_&]:text-black/40 text-lg md:text-xl">
                                        {item.content}
                                    </span>
                                )}
                                <span className="text-accent/40 text-sm">•</span>
                            </div>
                        ))}
                    </Marquee>
                </div>

                <div className="w-full h-[400px] rounded-3xl overflow-hidden border border-white/10 relative group">
                    <Image
                        src={banner}
                        alt="Open Source Collaboration"
                        fill
                        className="object-cover transition-all duration-[7000ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110 group-hover:rotate-1 group-hover:blur-[2px]"
                    />
                    {/* Gradient overlay for readability on the right side */}
                    <div className="absolute inset-0 bg-gradient-to-l from-black/90 via-black/50 to-transparent" />

                    <div className="absolute inset-0 flex flex-col justify-center items-end px-10 md:px-24 text-right space-y-8 transition-transform duration-[7000ms] ease-[cubic-bezier(0.25,1,0.5,1)] origin-right group-hover:scale-110 group-hover:-translate-x-2">
                        <p className="text-2xl md:text-4xl font-light text-white leading-relaxed max-w-2xl drop-shadow-lg" style={{ fontFamily: 'var(--font-outfit)' }}>
                            Open to OSS collaboration and maintainership roles.
                        </p>
                        
                        <div className="flex items-center gap-6 flex-wrap justify-end">
                            <a href="mailto:tiwariayushman847@gmail.com" className="flex items-center gap-2 !text-white hover:!text-accent transition-colors group">
                                <GmailIcon className="w-5 h-5" />
                                <span className="text-sm uppercase tracking-wider font-bold">Email</span>
                            </a>
                            <span className="!text-white/20">•</span>
                            <a href="https://github.com/tiwariaayu" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 !text-white hover:!text-accent transition-colors group">
                                <Github className="w-5 h-5" />
                                <span className="text-sm uppercase tracking-wider font-bold">GitHub</span>
                            </a>
                            <span className="!text-white/20">•</span>
                            <a href="https://x.com/tiw_ari_ayu" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 !text-white hover:!text-accent transition-colors group">
                                <TwitterXIcon className="w-4 h-4" />
                                <span className="text-sm uppercase tracking-wider font-bold">Twitter</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Blank Space (Responsive) */}
            <div className="hidden xl:block w-[15vw] relative">
                <VerticalLines />
            </div>

        </main>
    );
}

function AccordionItem({ item, index }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`group w-full border rounded-2xl overflow-hidden transition-all duration-500 ${
                isOpen 
                ? 'bg-neutral-900/80 [.light_&]:bg-white/80 border-accent/20 shadow-[0_0_30px_-10px_rgba(233,32,79,0.2)]' 
                : 'bg-neutral-900/40 [.light_&]:bg-white/40 border-white/5 [.light_&]:border-black/5 hover:border-white/10 [.light_&]:hover:border-black/10 hover:bg-neutral-900/60 [.light_&]:hover:bg-white/60'
            }`}
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full p-5 flex items-start justify-between text-left relative overflow-hidden focus:outline-none"
            >
                {/* Hover Gradient Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="flex items-start gap-5 relative z-10 w-full p-[10px]!">
                    {/* Repo Icon */}
                    <div className="w-12 h-12 rounded-xl bg-black/40 [.light_&]:bg-black/5 border border-white/10 [.light_&]:border-black/5 flex items-center justify-center shrink-0 shadow-inner group-hover:scale-105 transition-transform duration-500">
                         {item.repo === 'Remotion' ? (
                            <div className="relative w-7 h-7 rounded overflow-hidden">
                                <Image 
                                    src="https://avatars.githubusercontent.com/u/85344006?s=200&v=4" 
                                    alt="Remotion" 
                                    fill 
                                    className="object-cover" 
                                />
                            </div>
                         ) : item.repo === 'CrawlChat' ? (
                            <CrawlChatIcon className="w-7 h-7 text-foreground/80" />
                         ) : <Github className="w-6 h-6 text-foreground/80" />}
                    </div>

                    <div className="space-y-2 flex-grow">
                        <div className="flex items-center justify-between pr-4">
                            <h3 className="text-xl font-medium text-foreground group-hover:text-white [.light_&]:group-hover:text-black transition-colors flex items-center gap-3">
                                {item.repo}
                                <span className={`text-[10px] p-[1px]! uppercase tracking-wider font-bold px-2 py-0.5 rounded-full border ${
                                    item.status === 'Merged' 
                                    ? 'bg-emerald-500/10 text-emerald-400 [.light_&]:text-emerald-600 border-emerald-500/20' 
                                    : 'bg-accent/10 text-accent border-accent/20'
                                }`}>
                                    {item.status}
                                </span>
                            </h3>
                            
                            <motion.div
                                animate={{ rotate: isOpen ? 180 : 0 }}
                                transition={{ duration: 0.2 }}
                                className={`p-1 rounded-lg transition-colors ${isOpen ? 'bg-accent/10 text-accent' : 'text-foreground/40 group-hover:text-white [.light_&]:group-hover:text-black'}`}
                            >
                                <ChevronDown className="w-5 h-5" />
                            </motion.div>
                        </div>
                        
                        <div className="flex items-center flex-wrap gap-2 text-sm text-foreground/50 font-mono">
                           {item.tags.map((tag, i) => (
                               <span key={i} className="px-2.5 py-1 rounded-md text-xs text-[#e9204f]">
                                   {tag}
                               </span>
                           ))}
                        </div>
                    </div>
                </div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                        <div className="px-5! pb-5! pt-0! pl-[5.25rem]!">
                            <div className="space-y-5 pt-2! border-t border-white/5 [.light_&]:border-black/5 mx-2">
                                <ul className="space-y-3 pt-4">
                                    {item.points.map((point, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.05 }}
                                            className="flex items-start gap-3 text-sm text-foreground/70 font-light leading-relaxed group/point"
                                        >
                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#e9204f] group-hover/point:bg-[#e9204f] transition-colors shrink-0" />
                                            <span dangerouslySetInnerHTML={{ __html: point.replace(/`([^`]+)`/g, '<code class="bg-white/5 [.light_&]:bg-black/5 px-1.5 py-0.5 rounded text-accent font-mono text-xs border border-white/5 [.light_&]:border-black/5">$1</code>') }} />
                                        </motion.li>
                                    ))}
                                </ul>

                                <div className="flex gap-3 pt-2!">
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4! py-2! rounded-lg bg-accent/10 hover:bg-accent/20 text-accent border border-accent/20 transition-all text-xs font-mono tracking-wide uppercase group/btn"
                                    >
                                        <Eye className="w-3.5 h-3.5" />
                                        <span>View PR</span>
                                    </a>
                                    <a
                                        href="https://github.com/remotion-dev/remotion"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4! py-2! rounded-lg bg-white/5 hover:bg-white/10 [.light_&]:bg-black/5 [.light_&]:hover:bg-black/10 text-foreground/60 hover:text-white [.light_&]:hover:text-black border border-white/5 hover:border-white/10 [.light_&]:border-black/5 [.light_&]:hover:border-black/10 transition-all text-xs font-mono tracking-wide uppercase"
                                    >
                                        <Github className="w-3.5 h-3.5" />
                                        <span>Repo</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
