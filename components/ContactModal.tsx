"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  // Імітація відправки форми
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    // Чекаємо 1.5 секунди (ніби відправляємо)
    setTimeout(() => {
        setStatus("success");
        // Через 2 секунди закриваємо вікно і скидаємо форму
        setTimeout(() => {
            onClose();
            setStatus("idle");
        }, 2000);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg z-[70] p-4"
          >
            <div className="bg-[#0b1121] border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
              
              <button onClick={onClose} className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors">
                <X className="w-6 h-6" />
              </button>

              {status === "success" ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mb-6">
                        <CheckCircle className="w-8 h-8 text-emerald-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-gray-400">We'll be in touch within 24 hours.</p>
                </div>
              ) : (
                <>
                    <h2 className="text-2xl font-bold text-white mb-2">Initiate Contact</h2>
                    <p className="text-gray-400 mb-8 text-sm">
                        Tell us about your challenge. We usually respond in 2 hours.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2 block">Name</label>
                            <input required type="text" className="w-full bg-[#020408] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors placeholder:text-gray-700" placeholder="John Doe" />
                        </div>
                        <div>
                            <label className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2 block">Email</label>
                            <input required type="email" className="w-full bg-[#020408] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors placeholder:text-gray-700" placeholder="john@company.com" />
                        </div>
                        <div>
                            <label className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2 block">Request</label>
                            <textarea required rows={3} className="w-full bg-[#020408] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors resize-none placeholder:text-gray-700" placeholder="How can we help?" />
                        </div>

                        <button 
                            disabled={status === "loading"}
                            className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {status === "loading" ? (
                                <>Processing <Loader2 className="w-4 h-4 animate-spin" /></>
                            ) : (
                                <>Send Signal <Send className="w-4 h-4" /></>
                            )}
                        </button>
                    </form>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}