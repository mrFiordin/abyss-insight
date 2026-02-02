"use client";

import { Send, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-32 bg-[#020408] relative overflow-hidden">
        {/* Декоративний фон */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto bg-[#0b1121]/50 border border-white/5 rounded-3xl overflow-hidden flex flex-col md:flex-row backdrop-blur-sm">
            
            {/* Ліва частина */}
            <div className="p-10 md:p-20 md:w-1/2 flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/5">
                <div>
                    <h3 className="text-4xl font-bold text-white mb-6">Ready to go deep?</h3>
                    <p className="text-gray-400 mb-12 text-lg leading-relaxed">
                        The surface level is crowded. The real value is below. Let's discuss your custom AI infrastructure.
                    </p>
                </div>
                
                <div className="space-y-6">
                    <div className="flex items-center gap-4 text-gray-300">
                        <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                            <Mail className="w-5 h-5 text-emerald-400" />
                        </div>
                        <span>hello@abyss-insight.com</span>
                    </div>
                </div>
            </div>

            {/* Права частина (Просто заклик до дії, або можна дублювати логіку форми) */}
            <div className="p-10 md:p-20 md:w-1/2 flex flex-col justify-center bg-[#050914]">
                 <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="space-y-2">
                        <label className="text-xs font-mono text-gray-500 uppercase">Work Email</label>
                        <input type="email" className="w-full bg-[#0b1121] border border-white/10 rounded-xl px-4 py-4 text-white focus:border-emerald-500 outline-none transition-colors" placeholder="name@company.com" />
                    </div>
                    <button className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-emerald-400 hover:scale-[1.02] transition-all flex items-center justify-center gap-2">
                        Book Strategy Call
                        <Send className="w-4 h-4" />
                    </button>
                    <p className="text-xs text-center text-gray-600">
                        Response time: &lt; 2 hours. NDA available.
                    </p>
                </form>
            </div>
        </div>
      </div>
    </section>
  );
}