import React from 'react';
import { ShieldCheck, UserCheck, Headphones, MousePointer2, Briefcase } from 'lucide-react';

const benefitsData = [
  {
    title: "Premium Vehicles",
    desc: "Meticulously maintained fleets serviced to the highest standards, ensuring you arrive in style and safety.",
    icon: <ShieldCheck size={24} />,
    img: "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&q=80&w=600",
  },
  {
    title: "Professional Chauffeurs",
    desc: "Qualified, certified, and vetted professionals ready to navigate any conditions with grace and skill.",
    icon: <UserCheck size={24} />,
    img: "https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&q=80&w=600",
  },
  {
    title: "24/7 Live Support",
    desc: "A dedicated concierge team available around the clock to assist with any requests or adjustments.",
    icon: <Headphones size={24} />,
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=600",
  },
  {
    title: "Effortless Booking",
    desc: "A seamless online experience with instant confirmations and military-grade payment security.",
    icon: <MousePointer2 size={24} />,
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600",
  },
  {
    title: "Tailored Solutions",
    desc: "From corporate events to city-to-city transfers, we design mobility solutions that fit your life.",
    icon: <Briefcase size={24} />,
    img: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=600",
  },
];

const BenefitsSection = () => {
  return (
    <section className="bg-white py-16 md:py-24 px-6 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-24 space-y-3">
          <span className="bg-black text-white text-[9px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest inline-block mb-1">Excellence</span>
          <h1 className="text-2xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tighter leading-tight">
            The Drivado Edge.
          </h1>
          <p className="text-gray-500 font-medium text-sm md:text-lg">
            Experience the gold standard in premium ground transportation.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          {benefitsData.map((item, index) => (
            <div key={index} className="group space-y-6 md:space-y-8">
              {/* Image Container */}
              <div className="relative aspect-[16/10] sm:aspect-[4/3] rounded-[30px] md:rounded-[40px] overflow-hidden shadow-sm group-hover:shadow-2xl transition-all duration-500 border border-gray-100">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-500" />
                <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 bg-white/90 backdrop-blur-md p-3 md:p-4 rounded-xl md:rounded-2xl shadow-sm transform group-hover:translate-y-[-5px] transition-transform duration-500">
                  {item.icon}
                </div>
              </div>

              {/* Text Content */}
              <div className="space-y-2 px-1">
                <h2 className="text-lg md:text-2xl font-black text-gray-900 tracking-tight uppercase">
                  {item.title}
                </h2>
                <p className="text-[12px] md:text-[14px] font-medium text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BenefitsSection;