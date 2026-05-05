import React from 'react';
import { Plane, Navigation, Clock, ArrowUpRight } from 'lucide-react';

const services = [
  {
    title: "Airport Transfer",
    desc: "Seamless, high-priority transfers in major hubs worldwide. From Frankfurt to Dubai, arrive refreshed and on schedule.",
    img: "https://www.drivado.com/_next/image/?url=https%3A%2F%2Fstrapistore.sfo3.cdn.digitaloceanspaces.com%2F89650f0899d12ec8a6fab7f286427c27.png&w=828&q=75",
    icon: <Plane size={20} />,
  },
  {
    title: "City-to-City",
    desc: "Bypass the queues and delays. Our long-distance transfers offer ultimate comfort for travelers seeking a personal ride.",
    img: "https://www.drivado.com/_next/image/?url=https%3A%2F%2Fstrapistore.sfo3.cdn.digitaloceanspaces.com%2Fe632e9c6667e9d724d082a7a951e0bd7.jpg&w=828&q=75",
    icon: <Navigation size={20} />,
  },
  {
    title: "Hourly Rentals",
    desc: "Experience absolute freedom with our hourly chauffeur service, perfectly adapted to your dynamic schedule and needs.",
    img: "https://www.drivado.com/_next/image/?url=https%3A%2F%2Fstrapistore.sfo3.cdn.digitaloceanspaces.com%2Fe09f5f53ead9c90c9d9b9c8ed8af0092.jpg&w=828&q=75",
    icon: <Clock size={20} />,
  },
];

const Offerin = () => {
  return (
    <section className="bg-gray-50 py-16 md:py-24 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
          <div className="space-y-4 max-w-2xl">
            <span className="bg-black text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest inline-block">Services</span>
            <h1 className="text-2xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tighter leading-tight">
              Premium Solutions for Every Journey.
            </h1>
          </div>
          <p className="text-gray-500 font-medium max-w-sm md:text-right">
            World-class ground transportation services across the globe, tailored to your lifestyle.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {services.map((item, i) => (
            <div
              key={i}
              className="group bg-white rounded-[32px] md:rounded-[40px] p-4 md:p-6 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col"
            >
              {/* Image Section */}
              <div className="relative aspect-[16/11] rounded-[24px] md:rounded-[32px] overflow-hidden mb-8">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-sm">
                  {item.icon}
                </div>
              </div>

              {/* Text Content */}
              <div className="px-2 pb-4 space-y-4 flex-1 flex flex-col">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg md:text-2xl font-black text-gray-900 tracking-tight uppercase">
                    {item.title}
                  </h2>
                  <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border-2 border-gray-100 rounded-full group-hover:bg-black group-hover:text-white transition-all duration-300">
                    <ArrowUpRight size={20} className="group-hover:rotate-0 transition-transform -rotate-45" />
                  </div>
                </div>
                
                <p className="text-[13px] md:text-[14px] font-medium text-gray-400 leading-relaxed italic flex-1">
                  {item.desc}
                </p>

                <div className="pt-4">
                  <button className="text-[11px] font-black uppercase tracking-widest text-gray-900 border-b-2 border-black/10 hover:border-black transition-all">
                    Explore Service
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Offerin;