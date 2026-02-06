"use client";

import { motion } from "framer-motion";

const technologies = [
  "Golang", "Kubernetes", "Node.js", "Docker", "PostgreSQL", 
  "Redis", "Elasticsearch", "MQTT", "WebSockets", "gRPC", 
  "TypeScript", "Vue.js", "Swift", "Kotlin", "Prometheus", "Grafana"
];

export default function TechStack() {
  return (
    <section className="py-12 bg-[#020408] border-y border-white/5 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#020408] to-transparent z-10" />
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#020408] to-transparent z-10" />

      <div className="flex">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            duration: 50, // Сповільнили з 20 до 50
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-4 whitespace-nowrap"
        >
          {[...technologies, ...technologies, ...technologies].map((tech, index) => (
            <div
              key={index}
              className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-gray-400 font-mono text-sm hover:border-emerald-500/50 hover:text-white transition-colors cursor-default"
            >
              {tech}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}