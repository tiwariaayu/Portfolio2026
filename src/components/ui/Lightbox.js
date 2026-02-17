'use client';

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export const Lightbox = ({ isOpen, onClose, children, className }) => (
  <AnimatePresence>
    {isOpen && (
      <div 
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
        role="dialog"
        aria-modal="true"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-background/80 backdrop-blur-md"
          onClick={onClose}
          aria-hidden="true"
        />
        
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 10 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 10 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className={cn(
            "relative w-full max-w-[480px] bg-background/90 border border-border/50 rounded-3xl shadow-2xl overflow-hidden",
            className
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-background/50 text-foreground/50 hover:bg-accent hover:text-white transition-colors backdrop-blur-sm"
            aria-label="Close"
          >
            <X size={18} />
          </button>
          
          {children}
        </motion.div>
      </div>
    )}
  </AnimatePresence>
);
