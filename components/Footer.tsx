"use client";

import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#010204] border-t border-white/5 py-12 text-sm relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Лого + Копірайт */}
          <div className="text-center md:text-left">
            <button onClick={scrollToTop} className="text-xl font-bold tracking-tight text-white mb-2 hover:opacity-80 transition-opacity">
              Abyss<span className="text-emerald-500">Insight</span>.
            </button>
            <p className="text-gray-600">
              © {new Date().getFullYear()} Abyss Insight. All rights reserved.
            </p>
          </div>

          {/* Навігація (Заглушки) */}
          // Знайди блок посилань і заміни на це:
<div className="flex gap-8 text-gray-500">
    <a href="/legal/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
    <a href="/legal/terms" className="hover:text-white transition-colors">Terms of Service</a>
    <a href="/legal/cookies" className="hover:text-white transition-colors">Cookies</a>
</div>

          {/* Соцмережі */}
          <div className="flex gap-4">
            <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-emerald-500/20 text-gray-400 hover:text-emerald-400 transition-colors">
                <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-emerald-500/20 text-gray-400 hover:text-emerald-400 transition-colors">
                <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-emerald-500/20 text-gray-400 hover:text-emerald-400 transition-colors">
                <Github className="w-5 h-5" />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}