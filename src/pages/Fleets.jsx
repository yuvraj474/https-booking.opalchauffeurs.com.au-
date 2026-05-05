import React from 'react';
import OurFleet from '../components/OurFleet';
import { ShieldCheck, Info, Star } from 'lucide-react';

const Fleets = () => {
  return (
    <div className="pt-20">
      {/* Hero section for Fleets */}
      <div className="bg-[#f8f9fa] py-20 px-6 relative overflow-hidden">
         <div className="max-w-7xl mx-auto text-center space-y-6">
            <span className="bg-black text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest inline-block">The Collection</span>
            <h1 className="text-4xl md:text-7xl font-black text-gray-900 tracking-tighter uppercase leading-none">
               Discover Our <span className="text-gray-300">Fleet.</span>
            </h1>
            <p className="text-gray-500 font-medium text-lg max-w-2xl mx-auto italic">
               "Meticulously curated for those who demand excellence in every mile."
            </p>
         </div>
      </div>

      <OurFleet />

      {/* Fleet Standards */}
      <section className="bg-white py-20 px-6 font-sans">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="bg-emerald-500 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest inline-block">Safety First</span>
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tighter uppercase leading-none">The Drivado Standard.</h2>
            </div>
            <p className="text-gray-500 font-medium text-lg leading-relaxed">
              Every vehicle in our network undergoes rigorous multi-point inspections and regular maintenance. We ensure that your comfort is never compromised.
            </p>
            
            <div className="space-y-4">
              {[
                { title: "Young Fleet", desc: "Our vehicles are on average less than 3 years old.", icon: <Star size={20}/> },
                { title: "Daily Sanitization", desc: "Cleanliness and hygiene standards strictly enforced.", icon: <ShieldCheck size={20}/> },
                { title: "Advanced Tech", desc: "GPS tracking and flight monitoring in real-time.", icon: <Info size={20}/> }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start p-6 rounded-3xl bg-gray-50 border border-gray-100">
                  <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-gray-900 uppercase tracking-tight">{item.title}</h4>
                    <p className="text-xs text-gray-400 font-medium mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-square lg:aspect-[4/5] rounded-[40px] md:rounded-[60px] overflow-hidden shadow-2xl border border-gray-100">
             <img src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1000" alt="Fleet Detail" className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
             <div className="absolute bottom-10 left-10 text-white">
                <p className="text-4xl font-black tracking-tighter">100%</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-white/60">Quality Inspection</p>
             </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
           <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase leading-none">Ready to Experience Excellence?</h2>
           <p className="text-gray-400 font-medium text-lg italic">Reserve your preferred vehicle today and enjoy a seamless journey.</p>
           <div className="pt-4">
              <button className="bg-white text-black px-10 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-all">Book Now</button>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Fleets;