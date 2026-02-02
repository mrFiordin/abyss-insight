"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, Server, Lock, Cpu, Globe } from "lucide-react";

const features = [
  {
    title: "Sovereign Security",
    description: "Your data never leaves your perimeter. We deploy local LLMs and private instances.",
    icon: ShieldCheck,
    stat: "GDPR Compliant",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "group-hover:border-emerald-500/30"
  },
  {
    title: "Zero Hallucination",
    description: "RAG architecture grounds every AI response in your actual documents. No guessing.",
    icon: Zap,
    stat: "99.9% Accuracy",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "group-hover:border-cyan-500/30"
  },
  {
    title: "Hyperscale Ready",
    description: "Built on Kuberenetes. Auto-scaling from 100 to 1M requests without latency spikes.",
    icon: Server,
    stat: "< 50ms Latency",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "group-hover:border-purple-500/30"
  }
];

export default function Trust() {
  return (
    <section id="trust" className="py-32 bg-[#020408] relative">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-6 text-white">Engineering Trust</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
                We bridge the gap between AI research and mission-critical production software.
            </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative p-8 rounded-3xl bg-[#0b1121]/40 border border-white/5 backdrop-blur-sm hover:bg-[#0b1121]/60 transition-all duration-300 ${feature.border}`}
            >
                {/* Іконка */}
                <div className={`w-14 h-14 rounded-2xl ${feature.bg} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                    <feature.icon className={`w-7 h-7 ${feature.color}`} />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-8 min-h-[80px]">
                    {feature.description}
                </p>

                {/* Статус бар внизу картки */}
                <div className="pt-6 border-t border-white/5 flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${feature.color.replace("text", "bg")} animate-pulse`} />
                    <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">
                        {feature.stat}
                    </span>
                </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}