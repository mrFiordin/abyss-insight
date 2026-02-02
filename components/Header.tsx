"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface HeaderProps {
  onOpen: () => void;
}

export default function Header({ onOpen }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Solutions", href: "#solutions" },
    { name: "Case Studies", href: "#projects" },
    { name: "Why Us", href: "#trust" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <header
        // ВИПРАВЛЕННЯ: pointer-events-none дозволяє клікати КРІЗЬ хедер
        className={`fixed top-4 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-0 pointer-events-none`}
      >
        <div
          // ВИПРАВЛЕННЯ: pointer-events-auto повертає клікабельність тільки меню
          className={`mx-auto max-w-5xl rounded-2xl border transition-all duration-300 pointer-events-auto ${
            isScrolled
              ? "bg-[#0b1121]/80 backdrop-blur-xl border-white/10 py-3 px-6 shadow-2xl"
              : "bg-transparent border-transparent py-5 px-6"
          }`}
        >
          <div className="flex items-center justify-between">
            <button 
              onClick={scrollToTop} 
              className="text-xl font-bold tracking-tight text-white hover:opacity-80 transition-opacity"
            >
              Abyss<span className="text-emerald-400">Insight</span>
            </button>

            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={onOpen}
                className="bg-white text-black hover:bg-emerald-400 hover:text-black px-5 py-2 rounded-full text-sm font-bold transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]"
              >
                Get Started
              </button>
            </nav>

            <button
              className="md:hidden text-white pointer-events-auto"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu />
            </button>
          </div>
        </div>
      </header>

      {/* Мобільне меню */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 z-[60] bg-[#020408] flex flex-col items-center justify-center space-y-8 p-6"
          >
            <button
              className="absolute top-6 right-6 text-gray-400"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>
            
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-2xl font-bold text-white hover:text-emerald-400"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpen();
              }}
              className="bg-emerald-500 text-black px-8 py-3 rounded-full text-lg font-bold"
            >
              Get Started
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}