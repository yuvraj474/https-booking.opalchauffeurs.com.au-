import React, { useState } from 'react';
import { Globe2, ArrowRight } from 'lucide-react';

const coverageData = [
  {
    region: "Europe",
    img: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=800",
    fullDesc: "With a robust network extending to all over Europe, whether you want chauffeur cab service from London to Manchester to watch your favorite sport or enjoy the serene lanes of Paris or shop your heart in the fashion capital of the world of Milan, here at Drivado we have the perfect cab service for your needs."
  },
  {
    region: "North America",
    img: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&q=80&w=800",
    fullDesc: "Your next trip to the United States would be elevated to another level! From Los Angeles to San Diego, Miami to Orlando, our global reach means you get chauffeur service in every city. Combined with local expertise, our chauffeurs know the city inside and out."
  },
  {
    region: "Middle East & Africa",
    img: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&q=80&w=800",
    fullDesc: "With our branch in Saudi, book reliable chauffeur service in all major Middle Eastern hubs. Whether traveling for business or leisure, your next trip to Dubai, Abu Dhabi, Riyadh, Morocco, Cape Town and any other city with Drivado is guaranteed to be unforgettable."
  },
  {
    region: "Asia Pacific",
    img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800",
    fullDesc: "When it comes to navigating the bustling streets of Asian Cities, nothing compares to the convenience and elegance offered by Drivado. Whether it's Tokyo Airport Transfers, Bangkok city rides, or Singapore executive services, our inclusive fleet stands out as a top choice."
  }
];

const CoverageCard = ({ item }) => {
  return (
    <div className="group relative aspect-[3/4] md:aspect-[4/5] lg:aspect-[3/4] rounded-[32px] md:rounded-[48px] overflow-hidden border border-gray-100 shadow-sm transition-all duration-700 hover:shadow-2xl md:hover:-translate-y-2">
      <img
        src={item.img}
        alt={item.region}
        className="w-full h-full object-cover transition-transform duration-1000 md:group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 md:via-black/20 to-transparent opacity-100 md:opacity-80 md:group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
        <div className="space-y-3 md:space-y-4 translate-y-0 md:translate-y-8 md:group-hover:translate-y-0 transition-transform duration-500">
          <h3 className="text-xl md:text-3xl font-black text-white tracking-tighter uppercase">{item.region}</h3>
          <p className="text-white/80 md:text-white/70 text-[11px] md:text-[13px] font-medium leading-relaxed italic opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-700 md:delay-100 line-clamp-4 md:line-clamp-none">
            {item.fullDesc}
          </p>
          <div className="pt-2">
            <button className="flex items-center gap-2 text-white font-black text-[10px] uppercase tracking-[0.2em]">
              Explore Region <ArrowRight size={14} className="transition-transform md:group-hover:translate-x-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const GlobalCoverage = () => {
  return (
    <section className="bg-white py-16 md:py-32 px-6 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20 md:mb-32">
          <div className="space-y-4 max-w-2xl">
            <span className="bg-black text-white text-[9px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest inline-block">Global Network</span>
            <h1 className="text-2xl md:text-6xl font-black text-gray-900 tracking-tighter leading-tight">
              Local Expertise. <br /> Global Scale.
            </h1>
          </div>
          <div className="max-w-sm space-y-6">
            <p className="text-gray-500 font-medium md:text-right italic">
              "We understand the complexities of international travel and are committed to being your one-stop mobility destination."
            </p>
            <div className="flex md:justify-end">
              <div className="bg-gray-50 border border-gray-100 px-6 py-3 rounded-2xl flex items-center gap-3">
                <Globe2 size={20} className="text-black" />
                <span className="text-[11px] font-black uppercase tracking-widest text-gray-900">425+ Cities Worldwide</span>
              </div>
            </div>
          </div>
        </div>

        {/* Coverage Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {coverageData.map((item, index) => (
            <CoverageCard key={index} item={item} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 md:mt-32 p-8 md:p-16 bg-black rounded-[40px] md:rounded-[60px] text-center space-y-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent opacity-50" />
          <div className="relative z-10 space-y-6">
            <h2 className="text-2xl md:text-5xl font-black text-white tracking-tighter">Ready for your next journey?</h2>
            <p className="text-gray-400 font-medium max-w-2xl mx-auto text-xs md:text-lg italic">
              Our extensive fleet partner network ensures you enjoy the same level of comfort, safety and reliability wherever your travel takes you.
            </p>
            <div className="pt-4">
              <button className="bg-white text-black px-10 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-2xl">
                Book Global Ride
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default GlobalCoverage;