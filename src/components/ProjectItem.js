import Image from "next/image";
import LinkIcon from "./ui/link-icon";
import { ExternalLink, Globe, Shield } from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectItem({ project, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            style={{
                marginBottom: "10px"
            }}
            className="flex flex-col md:flex-row gap-8 md:gap-12 items-stretch group py-8 px-6 md:p-10 border border-foreground/10 rounded-3xl hover:border-accent/30 transition-colors duration-500"
        >
            {/* Left: Image */}
            <div className="w-full md:w-1/2 relative aspect-video rounded-2xl overflow-hidden shadow-lg">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className={`object-${project.imageFit || 'cover'} hover:scale-105 transition-transform duration-700`}
                    placeholder="blur"
                />
            </div>

            {/* Right: Info */}
            <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6 relative">
                {/* Hover Effect Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[rgba(233,32,79,0.2)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl rounded-2xl" />

                <div className="relative z-10 space-y-6">
                    <div className="space-y-3">
                        <div className="flex items-center gap-3">
                            <span className="font-mono text-accent text-sm tracking-widest uppercase">{project.subtitle}</span>
                            <div className="h-px w-8 bg-accent/30" />
                        </div>

                        <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground group-hover:text-accent transition-colors duration-300" style={{ fontFamily: 'var(--font-outfit)' }}>
                            {project.title}
                        </h2>

                        <p className="text-muted-foreground leading-relaxed font-light text-lg">
                            {project.desc}
                        </p>
                    </div>

                    {/* <div className="flex flex-wrap gap-2">
                        {project.stacks.map((stack) => (
                            <span key={stack} className="px-3 py-1 rounded-full text-xs font-mono bg-foreground/5 border border-foreground/10 text-foreground/70">
                                {stack}
                            </span>
                        ))}
                    </div> */}

                    <div className="flex gap-6 pt-2">
                        {project.github === "Private" ? (
                            <div className="flex items-center gap-2 text-sm font-mono uppercase tracking-wider text-muted-foreground/50 cursor-not-allowed">
                                <Shield className="w-4 h-4" />
                                <span>Private Source</span>
                            </div>
                        ) : (
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-mono uppercase tracking-wider text-muted-foreground hover:text-accent transition-colors">
                                <ExternalLink className="w-4 h-4" />
                                <span>View Code</span>
                            </a>
                        )}

                        {project.live && project.live !== "#" && (
                            <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-live hover:bg-accent hover:text-white hover:border-accent">
                                <LinkIcon size={16} className="w-4 h-4" />
                                <span>Visit Site</span>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
