"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface CTAProps {
  onOpen: () => void;
}

export default function CallToAction({ onOpen }: CTAProps) {
  return (
    <section className="py-32 relative overflow-hidden flex items-center justify-center">
      
      {/* Фон - Безодня */}
      <div className="absolute inset-0 bg-[#020408]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-emerald-900/20 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
            Stop surfacing. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">Dive deep.</span>
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
                onClick={onOpen}
                className="px-10 py-5 bg-emerald-500 text-black font-bold text-lg rounded-full hover:bg-emerald-400 transition-all hover:scale-105 shadow-[0_0_40px_rgba(16,185,129,0.3)]"
            >
              Start Transformation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}