import React from 'react';
import Aboutdri from '../components/Aboutdri';
import Benifits from '../components/Benifits';
import Globalcoverage from '../components/Globalcoverage';

const AboutUs = () => {
  return (
    <div className="pt-20">
      {/* Hero section for About Us */}
      <div className="bg-gray-900 py-20 px-6 relative overflow-hidden">
         <div className="absolute inset-0 opacity-20">
            <img src="https://images.unsplash.com/photo-1449965072333-68e836d81927?auto=format&fit=crop&q=80&w=2000" alt="About" className="w-full h-full object-cover" />
         </div>
         <div className="relative z-10 max-w-7xl mx-auto text-center space-y-6">
            <span className="bg-white/10 backdrop-blur-md text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest inline-block border border-white/20">Our Story</span>
            <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase leading-none">
               About <span className="text-white/60">Drivado.</span>
            </h1>
            <p className="text-gray-400 font-medium text-lg max-w-2xl mx-auto italic">
               "Redefining the standards of luxury ground mobility since 2016."
            </p>
         </div>
      </div>

      <Aboutdri />
      <Benifits />
      <Globalcoverage />

      {/* Corporate Values */}
      <section className="bg-gray-50 py-20 px-6 font-sans">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tighter uppercase">Our Core Values</h2>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
             { title: "Integrity", desc: "Honesty and transparency in every transaction and interaction." },
             { title: "Safety", desc: "Your security is our highest priority, with vetted drivers and modern vehicles." },
             { title: "Innovation", desc: "Continuously evolving our technology to provide a seamless travel experience." }
           ].map((v, i) => (
             <div key={i} className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-black text-white rounded-2xl flex items-center justify-center font-black text-xl mb-6">{i+1}</div>
                <h3 className="text-xl font-black text-gray-900 tracking-tight uppercase mb-4">{v.title}</h3>
                <p className="text-gray-400 font-medium text-sm leading-relaxed italic">{v.desc}</p>
             </div>
           ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
