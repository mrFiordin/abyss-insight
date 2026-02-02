"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, BarChart3, PieChart, Activity } from "lucide-react";
import { useEffect, useState } from "react";

interface HeroProps {
  onOpen: () => void;
}

// --- КОМПОНЕНТИ ДЛЯ АНІМАЦІЇ (Без змін) ---

const TableRow = ({ delay }: { delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.8, x: -50 }}
    transition={{ delay }}
    className="flex items-center gap-4 p-3 rounded-lg bg-white/5 border border-white/10"
  >
    <div className="w-8 h-8 rounded-md bg-white/10 animate-pulse" />
    <div className="flex-1 space-y-2">
      <div className="h-2 w-3/4 bg-white/10 rounded" />
      <div className="h-2 w-1/2 bg-white/5 rounded" />
    </div>
    <div className="h-2 w-12 bg-emerald-500/20 rounded" />
  </motion.div>
);

const WidgetChart = () => (
  <div className="col-span-2 p-4 rounded-2xl bg-[#0b1121]/80 border border-white/10 backdrop-blur-xl overflow-hidden relative">
     <div className="flex justify-between items-center mb-4">
        <div className="text-xs text-gray-400 uppercase tracking-wider font-mono">Revenue Trend</div>
        <BarChart3 className="w-4 h-4 text-emerald-400" />
     </div>
     <div className="h-24 flex items-end gap-1">
        {[40, 60, 30, 80, 65, 90, 70].map((h, i) => (
            <motion.div 
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ delay: 0.5 + i * 0.1, type: "spring" }}
                className="flex-1 bg-gradient-to-t from-emerald-500/10 to-emerald-400/80 rounded-t-sm relative group"
            >
                <div className="absolute inset-0 bg-emerald-400 opacity-0 group-hover:opacity-20 transition-opacity" />
            </motion.div>
        ))}
     </div>
     <div className="absolute bottom-0 left-0 w-full h-[1px] bg-emerald-500/30" />
  </div>
);

const WidgetStat = ({ icon: Icon, title, value, color }: any) => (
  <div className="p-4 rounded-2xl bg-[#0b1121]/80 border border-white/10 backdrop-blur-xl flex items-center gap-3">
     <div className={`p-2 rounded-xl ${color.bg}`}>
        <Icon className={`w-5 h-5 ${color.text}`} />
     </div>
     <div>
        <div className="text-[10px] text-gray-400 uppercase tracking-wider font-mono">{title}</div>
        <div className="text-xl font-bold text-white">{value}</div>
     </div>
  </div>
);


export default function Hero({ onOpen }: HeroProps) {
  const [phase, setPhase] = useState<"table" | "processing" | "dashboard">("table");

  useEffect(() => {
    const cycle = () => {
      setPhase("table");
      setTimeout(() => setPhase("processing"), 4000);
      setTimeout(() => setPhase("dashboard"), 5500);
    };
    cycle();
    const interval = setInterval(cycle, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-[#020408]">
      
      {/* ФОН */}
      <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* ЛІВА ЧАСТИНА: ГЛОБАЛЬНИЙ ТЕКСТ (Виправлено) */}
        <div className="text-center lg:text-left pt-10 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-sm mb-8 backdrop-blur-md"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="font-mono tracking-wide">ENTERPRISE AI INFRASTRUCTURE</span>
          </motion.div>

          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 text-white leading-[1.1]">
            Unlock the Deep <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-500">
              Potential of AI.
            </span>
          </h1>

          <p className="text-xl text-gray-400 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
            Don't stay on the surface with generic chatbots. We engineer the <strong>Deep Tech infrastructure</strong> that powers predictive Digital Twins, automated R&D, and industrial-scale decision making.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <button onClick={onOpen} className="px-8 py-4 bg-emerald-500 text-black font-bold rounded-xl hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all w-full sm:w-auto flex items-center justify-center gap-2">
              Start Transformation <ArrowRight className="w-5 h-5" />
            </button>
            <a href="#projects" className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all flex items-center justify-center gap-2 w-full sm:w-auto">
              <Play className="w-4 h-4 fill-current" /> See Case Studies
            </a>
          </div>
        </div>

        {/* ПРАВА ЧАСТИНА: АНІМАЦІЯ (Без змін - Таблиця в Дашборд) */}
        <div className="relative h-[400px] lg:h-[500px] flex items-center justify-center w-full perspective-[1000px]">
            <div className="relative w-full max-w-[450px] aspect-[4/3] bg-[#020408] rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
                <AnimatePresence mode="wait">
                    {/* TABLE PHASE */}
                    {phase === "table" && (
                        <motion.div
                            key="table-view"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0 p-6 flex flex-col gap-3"
                        >
                            <div className="flex justify-between items-center mb-2 opacity-50">
                                <div className="h-2 w-20 bg-white/20 rounded" />
                                <div className="h-2 w-10 bg-white/20 rounded" />
                            </div>
                            <TableRow delay={0.1} />
                            <TableRow delay={0.2} />
                            <TableRow delay={0.3} />
                            <TableRow delay={0.4} />
                            <motion.div 
                                initial={{ top: "-10%" }}
                                animate={{ top: "110%" }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_20px_rgba(16,185,129,0.5)] z-20"
                            />
                        </motion.div>
                    )}

                    {/* DASHBOARD PHASE */}
                    {phase === "dashboard" && (
                        <motion.div
                            key="dashboard-view"
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ type: "spring", damping: 15 }}
                            className="absolute inset-0 p-6 grid grid-cols-2 gap-4 content-start"
                        >
                            <WidgetChart />
                            <WidgetStat icon={Activity} title="Processed" value="1.2M Rows" color={{bg:"bg-emerald-500/20", text:"text-emerald-400"}} />
                            <WidgetStat icon={PieChart} title="Accuracy" value="99.8%" color={{bg:"bg-cyan-500/20", text:"text-cyan-400"}} />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* PROCESSING PHASE */}
                <AnimatePresence>
                    {phase === "processing" && (
                         <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 2 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0 flex items-center justify-center z-30 bg-[#020408]/80 backdrop-blur-sm"
                         >
                            <div className="relative w-24 h-24">
                                <div className="absolute inset-0 rounded-full border-2 border-emerald-500/50 border-t-transparent animate-spin" />
                                <div className="absolute inset-4 rounded-full border-2 border-cyan-500/50 border-b-transparent animate-[spin_0.5s_linear_infinite_reverse]" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                     <div className="w-10 h-10 bg-white rounded-full animate-ping opacity-20" />
                                </div>
                            </div>
                         </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </div>
      </div>
    </section>
  );
}