'use client';

import { motion } from "framer-motion";
import { Reveal } from "@/components/ScrollReveal";
import { Database, Shield, Globe } from "lucide-react";
import {
  SiJavascript, SiTypescript, SiNodedotjs, SiExpress, SiReact, SiNextdotjs, SiPhp, SiDrupal, SiMongodb, SiSupabase, SiFigma
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

export default function Skills() {
  return (
    <section id="skills" className="space-y-16 py-12 mt-20 mb-48">
      <Reveal width="100%">
        <div className="flex flex-col items-center justify-center text-center mb-20 w-full">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight" style={{ fontFamily: 'var(--font-outfit)' }}>Skills</h2>
        </div>
      </Reveal>

      <Reveal width="100%">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 max-w-6xl mx-auto mt-12 px-4">
          {/* Backend */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <motion.div
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_rgba(216,207,188,0.6)]"
              />
              <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-accent font-medium">Backend</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {[
                { name: "Java", icon: FaJava, color: "text-orange-500" },
                { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
                { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
                { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
                { name: "Express", icon: SiExpress, color: "text-foreground" },
              ].map((skill) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ y: -2, scale: 1.02 }}
                  className="relative group"
                >
                  <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl hover:bg-accent/5 transition-all duration-300 cursor-default">
                    <skill.icon className={`text-xl ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                    <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                  <div className="absolute -inset-0.5 rounded-xl bg-accent/0 group-hover:bg-accent/10 blur-sm transition-all duration-300 -z-10"></div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Frontend */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <motion.div
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_rgba(216,207,188,0.6)]"
              />
              <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-accent font-medium">Frontend</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {[
                { name: "React", icon: SiReact, color: "text-cyan-400" },
                { name: "Next.js", icon: SiNextdotjs, color: "text-foreground" },
                { name: "APIs", icon: Globe, color: "text-blue-400" },
                { name: "Figma", icon: SiFigma, color: "text-pink-500" },
                { name: "React Native", icon: SiReact, color: "text-cyan-500" },
              ].map((skill) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ y: -2, scale: 1.02 }}
                  className="relative group"
                >
                  <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl hover:bg-accent/5 transition-all duration-300 cursor-default">
                    <skill.icon className={`text-xl ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                    <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                  <div className="absolute -inset-0.5 rounded-xl bg-accent/0 group-hover:bg-accent/10 blur-sm transition-all duration-300 -z-10"></div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CMS */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <motion.div
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_rgba(216,207,188,0.6)]"
              />
              <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-accent font-medium">CMS</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {[
                { name: "PHP", icon: SiPhp, color: "text-purple-400" },
                { name: "Drupal", icon: SiDrupal, color: "text-blue-600" },
                { name: "OAuth", icon: Shield, color: "text-rose-400" },
              ].map((skill) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ y: -2, scale: 1.02 }}
                  className="relative group"
                >
                  <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl hover:bg-accent/5 transition-all duration-300 cursor-default">
                    <skill.icon className={`text-xl ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                    <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                  <div className="absolute -inset-0.5 rounded-xl bg-accent/0 group-hover:bg-accent/10 blur-sm transition-all duration-300 -z-10"></div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Databases */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <motion.div
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_rgba(216,207,188,0.6)]"
              />
              <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-accent font-medium">Databases</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {[
                { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
                { name: "SQL", icon: Database, color: "text-emerald-400" },
                { name: "Supabase", icon: SiSupabase, color: "text-emerald-500" },
              ].map((skill) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ y: -2, scale: 1.02 }}
                  className="relative group"
                >
                  <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl hover:bg-accent/5 transition-all duration-300 cursor-default">
                    <skill.icon className={`text-xl ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                    <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                  <div className="absolute -inset-0.5 rounded-xl bg-accent/0 group-hover:bg-accent/10 blur-sm transition-all duration-300 -z-10"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
