import React from 'react';
import { Globe2, MapPin, Trophy } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="bg-white py-16 md:py-24 px-6 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Visual Content */}
          <div className="relative group order-2 lg:order-1">
            <div className="relative aspect-square md:aspect-video lg:aspect-square rounded-[40px] md:rounded-[60px] overflow-hidden shadow-2xl border border-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1449965072333-68e836d81927?auto=format&fit=crop&q=80&w=1200" 
                alt="Executive Chauffeur" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
            </div>
            
            {/* Floating Stats Badge */}
            <div className="absolute -bottom-6 -right-6 md:bottom-12 md:-right-12 bg-black text-white p-8 md:p-10 rounded-[40px] shadow-2xl animate-bounce-slow">
              <div className="flex items-center gap-4">
                <Globe2 size={40} className="text-white/80" />
                <div>
                  <p className="text-3xl md:text-4xl font-black tracking-tighter">65+</p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Countries</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <span className="bg-black text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest inline-block">The Vision</span>
              <h1 className="text-2xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tighter leading-[1.1]">
                Connecting People with Ease.
              </h1>
            </div>

            <div className="space-y-6 text-gray-500 font-medium text-base md:text-lg leading-relaxed">
              <p className="italic">
                "Drivado is a ground transportation platform designed to provide seamless,
                comfortable and reliable service across the world."
              </p>
              <p>
                Founded in 2016, Drivado has redefined chauffeur services with a global 
                footprint spanning 425+ cities. From our headquarters in India to hubs in 
                Saudi Arabia, the UK, USA, and Spain, we turn every journey into a premium experience.
              </p>
            </div>

            {/* Feature List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100 group hover:bg-white hover:shadow-xl transition-all duration-300">
                <MapPin className="text-black" size={24} />
                <span className="text-[12px] font-black uppercase tracking-widest text-gray-900">425+ Cities</span>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100 group hover:bg-white hover:shadow-xl transition-all duration-300">
                <Trophy className="text-black" size={24} />
                <span className="text-[12px] font-black uppercase tracking-widest text-gray-900">Unparalleled Service</span>
              </div>
            </div>

            <div className="pt-6">
              <button className="group flex items-center gap-3 text-gray-900 font-black text-xs uppercase tracking-[0.2em] hover:gap-5 transition-all">
                Learn our story 
                <div className="w-12 h-[2px] bg-black transition-all group-hover:w-16" />
              </button>
            </div>
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-bounce-slow { animation: bounce-slow 4s ease-in-out infinite; }
      `}} />
    </section>
  );
}