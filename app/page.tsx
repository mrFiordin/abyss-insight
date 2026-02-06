"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Stats from "@/components/Stats"; // Ти не включив це в список, я поки приховав
import Iceberg from "@/components/Iceberg";
import Projects from "@/components/Projects";
import Team from "@/components/Team";
import Trust from "@/components/Trust";
import CallToAction from "@/components/CallToAction";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="bg-[#020408] min-h-screen selection:bg-emerald-500/30">
      
      {/* 1. Хедер */}
      <Header onOpen={() => setIsModalOpen(true)} />
      
      {/* 2. Hero (Статичний дашборд) */}
      <Hero onOpen={() => setIsModalOpen(true)} />

      {/* 3. Айсберг (Depth Analysis) */}
      <div id="solutions">
         <Iceberg />
      </div>

      {/* 4. CallToAction (Stop Surfacing) */}
      {/* Тут більше не треба передавати onOpen, бо помилку ми виправили */}
      <CallToAction />

      {/* 5. Trust (Why Us) */}
      <Trust />

      {/* 6. Tech Stack */}
      <TechStack />

      {/* 7. Кейси (Case Studies) */}
      <Projects />
      
      {/* 8. Команда */}
      <Team />
      
      {/* 9. Відкрита форма */}
      <Contact />
      
      {/* 10. Футер */}
      <Footer />
      
      {/* Модальне вікно (спливає при кліку) */}
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
      
    </main>
  );
}