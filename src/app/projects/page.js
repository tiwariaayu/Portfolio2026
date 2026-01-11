'use client';

import ProjectItem from "@/components/ProjectItem";
import VerticalLines from "@/components/VerticalLines";
import { motion } from "framer-motion";
import Image from "next/image";
import GmailIcon from "@/components/ui/gmail-icon";
import TwitterXIcon from "@/components/ui/twitter-x-icon";


// Import images (Copied from src/app/page.js)
// Assuming paths are relative to this file, we need to adjust ../assets to ../../assets
import inkslate from "../../assets/Projectimages/inkslate.png";
import emsdemo from "../../assets/Projectimages/emsdemo.png";

import ybor from "../../assets/Projectimages/ybor.png";
import thor from "../../assets/images/Thor.jpg";

// Additional projects can be added here
const projects = [
    {
        id: "01",
        title: "Inkslate",
        subtitle: "Resume & Portfolio Platform",
        stacks: ["Next.js", "Supabase"],
        desc: "The premium platform for crafting professional resumes and portfolios that stand out. Built for designers, developers, and professionals.",
        github: "Private",
        live: "https://inkslate.online",
        image: inkslate
    },
    {
        id: "02",
        title: "EMS Demo",
        subtitle: "Employee Management Dashboard",
        stacks: ["Next.js", "Supabase"],
        desc: "A streamlined employee management system for tracking attendance, roles, and performance. simplified workforce administration.",
        github: "Private",
        live: "https://emsdemobyayu.netlify.app/",
        image: emsdemo,
        imageFit: "fill"
    },
    {
        id: "03",
        title: "Ybor",
        subtitle: "Marketing-Agency",
        stacks: ["Next.js"],
        desc: "A comprehensive digital marketing agency platform featuring dynamic service showcases, lead generation tools, and a modern, high-converting design aesthetic.",
        github: "Private",
        live: "https://ybor.netlify.app/",
        image: ybor
    }
];

export default function ProjectsPage() {
    return (
        <main className="min-h-screen bg-background text-foreground flex justify-center">

            {/* Left Blank Space (Responsive) */}
            <div className="hidden xl:block w-[15vw] relative">
                <VerticalLines />
            </div>

            {/* Main Content */}
            <div className="w-full max-w-5xl px-6 md:px-12 py-32">
                <div className="flex flex-col items-center mb-24 space-y-4">
                    <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-mono text-accent text-xs uppercase tracking-[0.3em]"
                    >
                        Digital Archive
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-medium tracking-tight text-center flex flex-col items-center"
                        style={{ fontFamily: 'var(--font-outfit)' }}
                    >
                        Projects
                        <span className="text-lg md:text-xl text-[#e9204f] font-serif italic tracking-wider font-light translate-x-16 md:translate-x-24">
                            by ayushman
                        </span>
                    </motion.h1>
                    {/* <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="h-px w-24 bg-gradient-to-r from-transparent via-accent to-transparent mt-8"
                    /> */}
                </div>

                <div className="space-y-24">
                    {projects.map((project, index) => (
                        <ProjectItem key={project.id} project={project} index={index} />
                    ))}
                </div>

                <div className="mt-32 relative w-full h-[80vh] rounded-3xl overflow-hidden group">
                    <Image
                        src={thor}
                        alt="Hire Me"
                        fill
                        className="object-cover"
                        placeholder="blur"
                    />
                    <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center gap-6 p-6 text-center">
                        <h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight" style={{ fontFamily: 'var(--font-outfit)' }}>
                            Hire me as your Developer
                        </h2>
                        <div className="text-white/80 text-lg md:text-xl font-light flex items-center gap-2 justify-center flex-wrap">
                            <span>Just shoot me a dm via</span>
                            <a href="mailto:tiwariayushman847@gmail.com" className="flex items-center gap-1 text-white hover:text-accent border-b border-white/30 hover:border-accent transition-colors pb-0.5 group/link">
                                <GmailIcon className="w-5 h-5 group-hover/link:text-accent transition-colors" />
                                <span>Gmail</span>
                            </a>
                            <span>or reach out on</span>
                            <a href="https://x.com/tiw_ari_ayu" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-white hover:text-accent border-b border-white/30 hover:border-accent transition-colors pb-0.5 group/link">
                                <TwitterXIcon className="w-4 h-4 group-hover/link:text-accent transition-colors" />
                                <span>Twitter</span>
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
