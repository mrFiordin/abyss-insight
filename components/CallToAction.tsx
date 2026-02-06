"use client";

import { ArrowRight } from "lucide-react";

// Ми прибрали interface CallToActionProps, бо він тут не потрібен
export default function CallToAction() {
  const openCalendly = () => {
    window.open("https://calendly.com/denys-kiiashko/30min", "_blank");
  };

  return (
    <section className="py-32 bg-emerald-900/10 border-y border-emerald-500/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.1),transparent_70%)]" />
        
        <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
                Stop <span className="text-emerald-400 italic">Surfacing</span>. <br />
                Start <span className="text-white">Solving</span>.
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
                The competition is using standard tools. Gain the unfair advantage of deep custom infrastructure.
            </p>
            
            <button 
                onClick={openCalendly}
                className="px-10 py-5 bg-emerald-500 text-black font-bold text-lg rounded-xl hover:shadow-[0_0_40px_rgba(16,185,129,0.5)] hover:scale-105 transition-all"
            >
                Start Deep Transformation <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
        </div>
    </section>
  );
}