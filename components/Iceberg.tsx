"use client";

import { motion } from "framer-motion";
import { MessageSquare, ScanLine, Eye, Atom, Network, ChevronDown } from "lucide-react";

const levels = [
  {
    depth: "Layer 01: Surface",
    title: "Conversational AI Assistants",
    description: "Instant customer support & internal Q&A. The visible interface of your business.",
    icon: MessageSquare,
    color: "text-emerald-400",
    border: "group-hover:border-emerald-500/50",
    glow: "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]",
    bgIcon: "bg-emerald-500/10",
  },
  {
    depth: "Layer 02: Structure",
    title: "Intelligent Doc Processing",
    description: "Turning chaos into data. Automated parsing of contracts, invoices, and legal PDFs.",
    icon: ScanLine,
    color: "text-cyan-400",
    border: "group-hover:border-cyan-500/50",
    glow: "group-hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]",
    bgIcon: "bg-cyan-500/10",
  },
  {
    depth: "Layer 03: Vision",
    title: "Computer Vision & Analytics",
    description: "Automated quality control and security monitoring using visual data streams.",
    icon: Eye,
    color: "text-blue-400",
    border: "group-hover:border-blue-500/50",
    glow: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]",
    bgIcon: "bg-blue-500/10",
  },
  {
    depth: "Layer 04: Deep Tech",
    title: "R&D & Molecular Sim",
    description: "Accelerating scientific discovery in pharma and materials science.",
    icon: Atom,
    color: "text-violet-400",
    border: "group-hover:border-violet-500/50",
    glow: "group-hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]",
    bgIcon: "bg-violet-500/10",
  },
  {
    depth: "Layer 05: The Core",
    title: "Digital Twins & Prediction",
    description: "Full simulation of industrial assets. Predict failures before they occur.",
    icon: Network,
    color: "text-orange-500",
    border: "border-orange-500/50", // Завжди активний бордер
    glow: "shadow-[0_0_30px_rgba(249,115,22,0.15)]", // Завжди активне світіння
    bgIcon: "bg-orange-500/10",
    isRare: true,
  },
];

export default function Iceberg() {
  return (
    <section id="solutions" className="relative py-32 overflow-hidden bg-[#020408]">
      {/* Лазерна лінія по центру */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-emerald-500/50 to-orange-500/50 z-0 transform -translate-x-1/2 opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Заголовок блоку */}
        <div className="text-center max-w-3xl mx-auto mb-24">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="inline-flex items-center gap-2 text-xs font-mono text-emerald-500 mb-4 tracking-widest uppercase"
            >
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"/>
                System Scan Active
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Depth Analysis
            </h2>
            <p className="text-gray-400 text-lg">
                Most companies stop at chatbots. We go deeper into the operational core.
            </p>
        </div>

        {/* Картки рівнів */}
        <div className="space-y-8 relative">
          {levels.map((level, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="hidden md:block flex-1" />

                {/* Точка на лінії (Scanner Node) */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 -ml-[5px] md:-ml-1.5 rounded-full bg-[#020408] border border-gray-500 z-10 shadow-[0_0_10px_rgba(255,255,255,0.2)] transform -translate-x-1/2 md:translate-x-0" />

                <div className="flex-1 w-full pl-8 md:pl-0 flex justify-center md:block">
                  <div 
                    className={`
                        group relative p-6 rounded-3xl border border-white/5 bg-[#0b1121]/40 backdrop-blur-md 
                        transition-all duration-500 w-full max-w-lg cursor-default
                        ${level.border} ${level.glow} hover:-translate-y-1
                    `}
                  >
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-lg ${level.bgIcon}`}>
                                <level.icon className={`w-5 h-5 ${level.color}`} />
                            </div>
                            <span className={`text-xs font-mono uppercase tracking-wider ${level.color}`}>
                                {level.depth}
                            </span>
                        </div>
                        {/* Декоративний елемент "меню" як на скріншотах */}
                        <div className="flex gap-1">
                            <div className="w-1 h-1 rounded-full bg-white/20" />
                            <div className="w-1 h-1 rounded-full bg-white/20" />
                            <div className="w-1 h-1 rounded-full bg-white/20" />
                        </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-white/90 transition-colors">{level.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {level.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}