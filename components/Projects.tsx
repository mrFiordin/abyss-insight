"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Car, FileText, Target, MessageSquare, Check, AlertTriangle, Search } from "lucide-react";

// --- ВІЗУАЛІЗАЦІЇ (MOCKUPS) ---

// 1. Logistics ID Card
const MockupLogistics = () => (
  <div className="w-64 bg-[#0b1121] border border-white/10 rounded-xl p-4 shadow-2xl relative overflow-hidden">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-12 h-12 bg-gray-700 rounded-full animate-pulse" />
      <div className="space-y-2 w-full">
        <div className="h-2 w-20 bg-gray-700 rounded" />
        <div className="h-2 w-12 bg-gray-700 rounded" />
      </div>
    </div>
    <div className="space-y-2 mb-4">
      <div className="flex justify-between text-xs text-gray-400"><span>License</span><span className="text-white font-mono">VALID</span></div>
      <div className="flex justify-between text-xs text-gray-400"><span>Background</span><span className="text-emerald-400 font-mono">CLEARED</span></div>
    </div>
    <div className="w-full py-2 bg-emerald-500/20 border border-emerald-500/50 rounded text-emerald-400 text-xs font-bold text-center flex items-center justify-center gap-2">
      <Check className="w-3 h-3" /> APPROVED
    </div>
  </div>
);

// 2. Legal Document
const MockupLegal = () => (
  <div className="w-64 h-80 bg-white/5 border border-white/10 rounded-sm p-6 relative">
    <div className="w-1/3 h-2 bg-gray-600 mb-6" /> 
    <div className="space-y-3">
      <div className="w-full h-1 bg-gray-700" />
      <div className="w-5/6 h-1 bg-gray-700" />
      <div className="w-full h-1 bg-red-500/50 shadow-[0_0_10px_rgba(239,68,68,0.3)]" /> {/* Ризик */}
      <div className="w-4/6 h-1 bg-gray-700" />
    </div>
    <div className="absolute right-[-20px] top-20 bg-[#0b1121] border border-red-500/50 p-3 rounded-lg shadow-xl">
        <div className="flex items-center gap-2 text-red-400 text-xs font-bold">
            <AlertTriangle className="w-3 h-3" /> Risk Found
        </div>
    </div>
  </div>
);

// 3. Sales Radar
const MockupSales = () => (
  <div className="relative w-64 h-64 border border-white/10 rounded-full flex items-center justify-center bg-[#0b1121]">
    <div className="absolute inset-0 rounded-full border border-orange-500/20 animate-ping" />
    <div className="w-1 h-1 bg-white rounded-full" />
    {/* Target */}
    <div className="absolute top-10 right-10 w-3 h-3 bg-orange-500 rounded-full shadow-[0_0_10px_orange]" />
    <div className="absolute bottom-12 left-12 w-2 h-2 bg-gray-600 rounded-full" />
    
    {/* Scanner Line */}
    <div className="absolute w-1/2 h-[1px] bg-gradient-to-r from-transparent to-orange-500 left-1/2 origin-left animate-[spin_4s_linear_infinite]" />
    
    <div className="absolute bottom-[-40px] bg-[#0b1121] border border-orange-500/30 px-3 py-1 rounded-full text-xs text-orange-400 flex gap-2">
        <Target className="w-3 h-3" /> Lead Detected
    </div>
  </div>
);

// 4. Support Chat
const MockupSupport = () => (
  <div className="w-64 bg-[#0b1121] border border-white/10 rounded-xl p-4 flex flex-col gap-3">
    <div className="self-start bg-white/10 p-3 rounded-tr-xl rounded-br-xl rounded-bl-xl text-xs text-gray-300 max-w-[80%]">
      How do I reset my API key?
    </div>
    <div className="self-end bg-purple-500/20 border border-purple-500/30 p-3 rounded-tl-xl rounded-bl-xl rounded-br-xl text-xs text-purple-200 max-w-[90%]">
      I can help. Go to Settings &gt; Keys. Would you like a direct link?
    </div>
    <div className="self-start bg-white/10 p-3 rounded-tr-xl rounded-br-xl rounded-bl-xl text-xs text-gray-300 max-w-[80%]">
      Yes, please.
    </div>
    <div className="mt-2 text-[10px] text-center text-gray-500">AI took over conversation</div>
  </div>
);


const projects = [
  {
    id: 1,
    title: "Driver Verification",
    category: "Security Ops",
    description: "Automated validation pipeline for logistics. Reduces HR load by 90%.",
    icon: Car,
    stats: [ { label: "Speed", value: "< 30s" }, { label: "Accuracy", value: "99.9%" } ],
    accent: "text-emerald-400",
    bgAccent: "bg-emerald-500/20",
    gradient: "from-emerald-500/20 to-transparent",
    visual: MockupLogistics
  },
  {
    id: 2,
    title: "Contract Analyzer",
    description: "LegalTech core. Extracts risks from PDFs and auto-fills CRM data.",
    category: "Legal Automation",
    icon: FileText,
    stats: [ { label: "Data Struct", value: "100%" }, { label: "Time Saved", value: "15h/wk" } ],
    accent: "text-cyan-400",
    bgAccent: "bg-cyan-500/20",
    gradient: "from-cyan-500/20 to-transparent",
    visual: MockupLegal
  },
  {
    id: 3,
    title: "Lead Hunter AI",
    description: "Scrapes web for startup funding events and signals sales teams.",
    category: "Sales Intelligence",
    icon: Target,
    stats: [ { label: "Leads/Day", value: "500+" }, { label: "Conv. Rate", value: "+40%" } ],
    accent: "text-orange-400",
    bgAccent: "bg-orange-500/20",
    gradient: "from-orange-500/20 to-transparent",
    visual: MockupSales
  },
  {
    id: 4,
    title: "Support Auto-Pilot",
    description: "Hybrid chatbot with sentiment analysis and human handoff.",
    category: "Customer Service",
    icon: MessageSquare,
    stats: [ { label: "Auto-Reply", value: "80%" }, { label: "CSAT", value: "4.8/5" } ],
    accent: "text-purple-400",
    bgAccent: "bg-purple-500/20",
    gradient: "from-purple-500/20 to-transparent",
    visual: MockupSupport
  },
];

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  // Вибираємо правильний візуальний компонент
  const CurrentVisual = projects[currentIndex].visual;

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % projects.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <section id="projects" className="py-32 bg-[#020408] relative">
      <div className="container mx-auto px-6">
        
        <div className="flex items-end justify-between mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Case Studies</h2>
            <p className="text-gray-400">Real infrastructure, deployed and running.</p>
          </div>
          
          <div className="flex gap-2">
            <button onClick={prevSlide} className="p-3 rounded-full border border-white/10 hover:bg-white/5 text-white transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button onClick={nextSlide} className="p-3 rounded-full bg-white text-black hover:bg-emerald-400 transition-colors">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="relative h-[500px] w-full">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 bg-[#0b1121] border border-white/10 rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-2xl"
                >
                    {/* INFO SIDE */}
                    <div className="p-10 md:p-16 md:w-1/2 flex flex-col justify-between relative z-10">
                        <div>
                            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${projects[currentIndex].bgAccent} ${projects[currentIndex].accent} text-xs font-mono mb-6 uppercase tracking-wider`}>
                                <div className={`w-1.5 h-1.5 rounded-full bg-current`} />
                                {projects[currentIndex].category}
                            </div>
                            
                            <h3 className="text-4xl font-bold text-white mb-6 leading-tight">
                                {projects[currentIndex].title}
                            </h3>
                            <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                {projects[currentIndex].description}
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {projects[currentIndex].stats.map((stat, i) => (
                                <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/5">
                                    <div className="text-sm text-gray-500 mb-1">{stat.label}</div>
                                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* VISUAL SIDE */}
                    <div className="relative md:w-1/2 bg-[#050914] overflow-hidden flex items-center justify-center border-l border-white/5">
                        <div className={`absolute inset-0 bg-gradient-to-br ${projects[currentIndex].gradient} opacity-20`} />
                        
                        {/* Рендеримо унікальний візуал */}
                        <CurrentVisual />
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
      </div>
    </section>
  );
}