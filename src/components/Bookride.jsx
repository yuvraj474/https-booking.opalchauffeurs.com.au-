import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const stepsData = [
  {
    id: "01",
    title: "Select Service Type",
    desc: "Choose from Airport Transfers, Hourly Disposals, or City-to-City rides based on your mobility needs.",
    img: "https://www.drivado.com/_next/image/?url=https%3A%2F%2Fstrapistore.sfo3.cdn.digitaloceanspaces.com%2F34f6eab81820a696835b2a5c4c33d224.png&w=1920&q=75",
    points: ["Airport transfers", "Hourly Disposals", "City-to-City Rides"],
  },
  {
    id: "02",
    title: "Enter Trip Details",
    desc: "Provide your pickup location, drop-off point, and travel schedule with our intuitive interface.",
    img: "https://www.drivado.com/_next/image/?url=https%3A%2F%2Fstrapistore.sfo3.cdn.digitaloceanspaces.com%2F962288f0d6e4258e70603f6c9b3facf6.png&w=1920&q=75",
    points: ["Pickup address", "Drop location", "Date & Time"],
  },
  {
    id: "03",
    title: "Choose Your Vehicle",
    desc: "Select from our curated fleet of premium sedans, SUVs, and luxury vans for ultimate comfort.",
    img: "https://www.drivado.com/_next/image/?url=https%3A%2F%2Fstrapistore.sfo3.cdn.digitaloceanspaces.com%2F0d45f8a36a293dccd9d4179a78a40c9b.png&w=1920&q=75",
    points: ["Luxury cars", "SUVs", "Sedans"],
  },
  {
    id: "04",
    title: "Confirm & Pay",
    desc: "Review your trip summary and complete your booking with our secure, instant payment system.",
    img: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&q=80&w=800",
    points: ["Secure checkout", "Instant confirmation", "24/7 Support"],
  },
  {
    id: "05",
    title: "Meet Your Chauffeur",
    desc: "Receive chauffeur details in advance. Your professional driver will arrive early and greet you.",
    img: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=800",
    points: ["Real-time tracking", "Professional driver", "Meet & Greet"],
  },
  {
    id: "06",
    title: "Enjoy The Ride",
    desc: "Sit back and relax in your premium vehicle equipped with modern amenities for a comfortable journey.",
    img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800",
    points: ["Complimentary Wi-Fi", "Bottled water", "Climate control"],
  },
  {
    id: "07",
    title: "Arrive & Feedback",
    desc: "Arrive at your destination safely and on time. Share your experience to help us maintain our premium standards.",
    img: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80&w=800",
    points: ["Safe arrival", "Rate your trip", "Priority support"],
  },
];

const StepsSection = () => {
  return (
    <section className="bg-white py-16 md:py-32 px-4 md:px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-32 space-y-6">
          <span className="bg-black text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest inline-block">The Process</span>
          <h1 className="text-3xl md:text-6xl font-black text-gray-900 tracking-tighter leading-tight">
            How to Book Your Journey.
          </h1>
          <p className="text-gray-500 font-medium text-sm md:text-lg italic">
            "In today's fast-paced world, Drivado simplifies mobility in seven elegant steps."
          </p>
        </div>

        {/* Steps Stack */}
        <div className="flex flex-col gap-[15vh] md:gap-[30vh] pb-[20vh]">
          {stepsData.map((step, index) => (
            <div
              key={index}
              className="sticky top-20 md:top-32 bg-[#f8f9fa] rounded-[32px] md:rounded-[60px] p-5 md:p-16 lg:p-20 border border-gray-100 shadow-2xl flex flex-col lg:flex-row items-center gap-6 lg:gap-20 transition-all duration-500 will-change-transform"
              style={{ 
                zIndex: index + 1,
              }}
            >
              {/* Image Container */}
              <div className="w-full lg:w-1/2 order-2 lg:order-1">
                <div className="bg-white rounded-[24px] md:rounded-[32px] p-4 md:p-10 shadow-inner flex items-center justify-center border border-gray-50">
                  <img
                    src={step.img}
                    alt={step.title}
                    className="w-full h-auto max-h-[140px] md:max-h-[300px] object-contain transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>

              {/* Content Container */}
              <div className="w-full lg:w-1/2 space-y-4 md:space-y-8 order-1 lg:order-2">
                <div className="flex items-center gap-3 md:gap-4">
                  <span className="text-4xl md:text-6xl font-black text-black/10 tabular-nums">
                    {step.id}
                  </span>
                  <div className="h-px flex-1 bg-gray-200" />
                </div>
                
                <div className="space-y-2 md:space-y-4">
                  <h2 className="text-2xl md:text-4xl font-black text-gray-900 tracking-tight uppercase leading-none">
                    {step.title}
                  </h2>
                  <p className="text-gray-400 font-medium text-[13px] md:text-base leading-relaxed italic">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-2 md:pt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4">
                  {step.points.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white p-3 md:p-4 rounded-xl md:rounded-2xl border border-gray-50 shadow-sm">
                      <CheckCircle2 size={16} className="text-black shrink-0" />
                      <span className="text-[10px] md:text-[11px] font-black uppercase tracking-widest text-gray-900">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StepsSection;