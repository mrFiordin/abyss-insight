"use client"; // Додали, бо тепер тут живе логіка відкриття

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Iceberg from "@/components/Iceberg";
import CallToAction from "@/components/CallToAction";
import Trust from "@/components/Trust";
import Projects from "@/components/Projects";
import Stats from "@/components/Stats";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal"; // Імпорт модалки

export default function Home() {
  // Стан: чи відкрито вікно?
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Функції відкриття/закриття
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <main className="min-h-screen bg-[#0b1121]">
      {/* Передаємо функцію відкриття в кнопки */}
      <Header onOpen={openModal} />
      <Hero onOpen={openModal} />
      
      <Iceberg />
      
      <CallToAction onOpen={openModal} />
      
      <Trust />
      <Projects />
      <Stats />
      <Contact />
      <Footer />

      {/* Саме спливаюче вікно */}
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </main>
  );
}