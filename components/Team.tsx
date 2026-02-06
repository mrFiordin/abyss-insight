"use client";

import Image from "next/image";
import { Linkedin, ArrowUpRight } from "lucide-react";

const team = [
  {
    name: "Den Kiiashko",
    role: "Strategic Director",
    image: "/team/den.jpg",
    bio: "20+ years driving digital products from concept to scale. Expert in operational efficiency, MVP launches, and strategic decision-making for international markets.",
    linkedin: "https://www.linkedin.com/in/denys-kiiashko/"
  },
  {
    name: "Vadym Kozak",
    role: "Engineering Director",
    image: "/team/vadym.jpg",
    bio: "12+ years architecture experience. Specializes in Highload Systems, Microservices (Golang), and Mobile Apps. Built scalable cores for EdTech and Transportation giants.",
    linkedin: "https://www.linkedin.com/in/vadym-kozak-937a9b52/"
  }
];

export default function Team() {
  return (
    <section className="py-24 bg-[#0b1121] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Built by Veterans</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We combine decades of strategic and architectural experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member) => (
            <div key={member.name} className="group relative bg-[#020408] border border-white/10 rounded-3xl p-6 hover:border-emerald-500/50 transition-all duration-300 flex flex-col sm:flex-row gap-6 items-center sm:items-start">
                
                {/* ФОТО: Змінено з rounded-full на rounded-2xl щоб не різати обличчя */}
                <div className="relative w-32 h-32 shrink-0 overflow-hidden rounded-2xl border border-white/10">
                    <Image 
                        src={member.image} 
                        alt={member.name} 
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                </div>
                
                <div className="text-center sm:text-left flex flex-col h-full justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                    <div className="text-emerald-400 text-sm font-mono uppercase tracking-wider mb-4">{member.role}</div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        {member.bio}
                    </p>
                  </div>
                  
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white hover:text-emerald-400 transition-colors font-bold text-sm mt-auto mx-auto sm:mx-0">
                    <Linkedin className="w-4 h-4" />
                    Connect on LinkedIn <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}