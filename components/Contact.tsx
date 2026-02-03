"use client";

import { Send, Mail, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = (data: FormData) => {
    const newErrors: { [key: string]: string } = {};
    const email = data.get("user_email") as string;

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) newErrors.email = "Please enter a valid email";
    
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
      // ЗАМІНИ НА СВОЇ КЛЮЧІ (Ті самі, що і в ContactModal)
      await emailjs.sendForm(
        "service_a5dk7wi",
        "template_fie65hy",
        formRef.current,
        "SKICMx5RiUwYl4WZC"
      );
      setStatus("success");
      formRef.current.reset();
      
      // Повертаємо кнопку в звичайний стан через 5 секунд
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section className="py-32 bg-[#020408] relative overflow-hidden">
        {/* Декоративний фон */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto bg-[#0b1121]/50 border border-white/5 rounded-3xl overflow-hidden flex flex-col md:flex-row backdrop-blur-sm shadow-2xl">
            
            {/* Ліва частина */}
            <div className="p-10 md:p-20 md:w-1/2 flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/5">
                <div>
                    <h3 className="text-4xl font-bold text-white mb-6">Ready to go deep?</h3>
                    <p className="text-gray-400 mb-12 text-lg leading-relaxed">
                        The surface level is crowded. The real value is below. Let's discuss your custom AI infrastructure.
                    </p>
                </div>
                
                <div className="space-y-6">
                    <div className="flex items-center gap-4 text-gray-300 group cursor-pointer">
                        <div className="p-3 rounded-xl bg-white/5 border border-white/5 group-hover:bg-emerald-500/10 group-hover:text-emerald-400 transition-colors">
                            <Mail className="w-5 h-5" />
                        </div>
                        <span className="font-mono">hello@abyss-insight.com</span>
                    </div>
                </div>
            </div>

            {/* Права частина (Форма) */}
            <div className="p-10 md:p-20 md:w-1/2 flex flex-col justify-center bg-[#050914]">
                 {status === "success" ? (
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-10"
                    >
                        <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                            <CheckCircle className="w-8 h-8 text-emerald-500" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Request Received</h3>
                        <p className="text-gray-400">We will analyze your data and respond shortly.</p>
                    </motion.div>
                 ) : (
                    <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-xs font-mono text-gray-500 uppercase tracking-widest">Work Email</label>
                            <input 
                                name="user_email" 
                                type="email" 
                                className={`w-full bg-[#0b1121] border ${errors.email ? "border-red-500" : "border-white/10"} rounded-xl px-4 py-4 text-white focus:border-emerald-500 outline-none transition-colors placeholder:text-gray-700`} 
                                placeholder="name@company.com" 
                            />
                            {errors.email && <p className="text-red-400 text-xs flex items-center gap-1"><AlertCircle className="w-3 h-3"/> {errors.email}</p>}
                            
                            {/* Приховане поле для імені (опціонально, щоб шаблон не ламався) */}
                            <input type="hidden" name="user_name" value="Website Visitor" />
                            <input type="hidden" name="message" value="Request from bottom Contact Form" />
                        </div>

                        <button 
                            disabled={status === "loading"}
                            className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-emerald-400 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {status === "loading" ? (
                                <>Processing <Loader2 className="w-4 h-4 animate-spin" /></>
                            ) : (
                                <>
                                    Book Strategy Call
                                    <Send className="w-4 h-4" />
                                </>
                            )}
                        </button>
                        
                        {status === "error" && (
                            <p className="text-red-400 text-xs text-center">Connection error. Please try again.</p>
                        )}

                        <p className="text-xs text-center text-gray-600">
                            Response time: &lt; 2 hours. NDA available upon request.
                        </p>
                    </form>
                 )}
            </div>
        </div>
      </div>
    </section>
  );
}