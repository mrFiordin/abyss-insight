import type { Metadata } from "next";
import { Manrope } from "next/font/google"; 
import "./globals.css";

// Завантажуємо стильний шрифт Manrope
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata: Metadata = {
  title: "Abyss Insight | AI Implementation",
  description: "Unlock the depth of your business data with intelligent AI solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* ЧОРНИЙ фон (Void) і світлий текст */}
      <body className={`${manrope.className} bg-[#020408] text-slate-200 antialiased selection:bg-emerald-500/30 selection:text-emerald-200`}>
        {/* Фоновий шум для текстури (як на референсах з планетами) */}
        <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none z-50 mix-blend-overlay"></div>
        
        {/* Глобальний градієнт-світіння зверху */}
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
        
        {children}
      </body>
    </html>
  );
}