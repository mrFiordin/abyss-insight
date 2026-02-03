"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle, Loader2, AlertCircle } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const validate = (data: FormData) => {
    const newErrors: { [key: string]: string } = {};
    const name = data.get("user_name") as string;
    const email = data.get("user_email") as string;
    const message = data.get("message") as string;

    if (!name || name.length < 2) newErrors.name = "Name is required (min 2 chars)";
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) newErrors.email = "Please enter a valid email";
    if (!message || message.length < 5) newErrors.message = "Please describe your request";

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const validationErrors = validate(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setStatus("loading");

    try {
      // ЗАМІНИ ЦІ ДАНІ НА СВОЇ З EMAILJS
      await emailjs.sendForm(
        "service_a5dk7wi",   // Наприклад: service_...
        "template_fie65hy",  // Наприклад: template_...
        formRef.current,
        "SKICMx5RiUwYl4WZC"    // Наприклад: 8An3...
      );
      setStatus("success");
      setTimeout(() => {
        onClose();
        setStatus("idle");
      }, 3000);
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
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
                        Tell us about your challenge.
                    </p>

                    {/* noValidate вимикає українські підказки браузера */}
                    <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-5">
                        <div>
                            <label className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2 block">Name</label>
                            <input name="user_name" type="text" className={`w-full bg-[#020408] border ${errors.name ? "border-red-500" : "border-white/10"} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors`} placeholder="John Doe" />
                            {errors.name && <p className="text-red-400 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3"/> {errors.name}</p>}
                        </div>
                        <div>
                            <label className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2 block">Email</label>
                            <input name="user_email" type="email" className={`w-full bg-[#020408] border ${errors.email ? "border-red-500" : "border-white/10"} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors`} placeholder="john@company.com" />
                            {errors.email && <p className="text-red-400 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3"/> {errors.email}</p>}
                        </div>
                        <div>
                            <label className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2 block">Request</label>
                            <textarea name="message" rows={3} className={`w-full bg-[#020408] border ${errors.message ? "border-red-500" : "border-white/10"} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors resize-none`} placeholder="How can we help?" />
                            {errors.message && <p className="text-red-400 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3"/> {errors.message}</p>}
                        </div>

                        {status === "error" && (
                            <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm text-center">
                                Something went wrong. Please try again later.
                            </div>
                        )}

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