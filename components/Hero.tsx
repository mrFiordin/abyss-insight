"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, BarChart3, PieChart, Activity, CheckCircle2 } from "lucide-react";

interface HeroProps {
  onOpen: () => void;
}

// --- КОМПОНЕНТИ ВІДЖЕТІВ ---

const WidgetChart = () => (
  <div className="w-full p-5 rounded-2xl bg-[#0b1121]/80 border border-white/10 backdrop-blur-xl overflow-hidden relative flex flex-col justify-between h-full min-h-[160px]">
     <div className="flex justify-between items-center mb-4">
        <div className="text-xs text-gray-400 uppercase tracking-wider font-mono">Revenue Trend</div>
        <BarChart3 className="w-4 h-4 text-emerald-400" />
     </div>
     <div className="h-28 flex items-end gap-2">
        {[40, 60, 45, 80, 65, 90, 75].map((h, i) => (
            <div 
                key={i}
                style={{ height: `${h}%` }}
                className="flex-1 bg-gradient-to-t from-emerald-500/10 to-emerald-400/80 rounded-t-sm relative group"
            >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-emerald-400/50 rounded-full" />
            </div>
        ))}
     </div>
  </div>
);

const WidgetStat = ({ icon: Icon, title, value, color }: any) => (
  <div className="p-5 rounded-2xl bg-[#0b1121]/80 border border-white/10 backdrop-blur-xl flex flex-col justify-between h-full aspect-square">
     <div className={`p-3 rounded-xl ${color.bg} w-fit mb-3`}>
        <Icon className={`w-6 h-6 ${color.text}`} />
     </div>
     <div>
        <div className="text-[10px] text-gray-400 uppercase tracking-wider font-mono mb-1">{title}</div>
        <div className="text-2xl font-bold text-white">{value}</div>
     </div>
  </div>
);

// --- ЄДИНИЙ ДАШБОРД (STATIC) ---
const DashboardPreview = () => (
    <div className="w-full max-w-[500px] mx-auto bg-[#020408] rounded-[2rem] border border-white/10 shadow-2xl overflow-hidden p-6 relative z-10 hover:scale-[1.02] transition-transform duration-500">
        {/* Header імітація */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
            <div className="flex gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/30" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/30" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/30" />
            </div>
            <div className="px-2 py-1 rounded-full bg-emerald-500/10 text-[9px] text-emerald-400 font-mono flex items-center gap-1 uppercase tracking-widest">
                <CheckCircle2 className="w-3 h-3" /> Live Data
            </div>
        </div>

        {/* Контент */}
        <div className="flex flex-col gap-4">
            <div><WidgetChart /></div>
            <div className="grid grid-cols-2 gap-4">
                <WidgetStat icon={Activity} title="Rows Processed" value="1.2M" color={{bg:"bg-emerald-500/20", text:"text-emerald-400"}} />
                <WidgetStat icon={PieChart} title="Accuracy Rate" value="99.9%" color={{bg:"bg-cyan-500/20", text:"text-cyan-400"}} />
            </div>
        </div>
        
        {/* Glow Effect */}
        <div className="absolute top-[-50%] left-[-50%] w-full h-full bg-emerald-500/10 rounded-full blur-[80px] pointer-events-none z-0" />
    </div>
);


export default function Hero({ onOpen }: HeroProps) {
  const openCalendly = () => {
    window.open("https://calendly.com/denys-kiiashko/30min", "_blank");
  };

  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-16 lg:pt-20 lg:pb-0 bg-[#020408]">
      
      {/* ФОН */}
      <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* ЛІВА ЧАСТИНА */}
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-sm mb-6 lg:mb-8 backdrop-blur-md"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="font-mono tracking-wide">ENTERPRISE AI INFRASTRUCTURE</span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6 text-white leading-[1.1]">
            Unlock the Deep <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-500">
              Potential of AI.
            </span>
          </h1>

          <p className="text-lg lg:text-xl text-gray-400 max-w-xl mx-auto lg:mx-0 mb-8 lg:mb-10 leading-relaxed">
            Don't stay on the surface with generic chatbots. We engineer the <strong>Highload Infrastructure</strong> (Go, K8s) and <strong>Deep AI Solutions</strong> that power industrial-scale decision making.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <button onClick={openCalendly} className="px-8 py-4 bg-emerald-500 text-black font-bold rounded-xl hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all w-full sm:w-auto flex items-center justify-center gap-2">
              Book Strategy Call <ArrowRight className="w-5 h-5" />
            </button>
            <button onClick={onOpen} className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all flex items-center justify-center gap-2 w-full sm:w-auto">
              Get Free Estimate
            </button>
          </div>
        </div>

        {/* ПРАВА ЧАСТИНА (ТЕПЕР СТАТИЧНА) */}
        <div className="w-full flex justify-center perspective-[1000px] mt-8 lg:mt-0">
             <DashboardPreview />
        </div>
      </div>
    </section>
  );
}