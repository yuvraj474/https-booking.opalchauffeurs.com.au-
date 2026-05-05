import {
  Globe, Plane, Building2, Car, Star, Zap, Map, Shield,
  ShieldCheck, MessageCircle, MapPin, DollarSign
} from "lucide-react";

/* ---------------- TRUST SECTION ---------------- */

const partners = [
  { name: "TravelCompositor", sub: "The Holistic System", icon: <Globe size={24} />, bg: "#0284c7", cardBg: "#f0f9ff", border: "#bae6fd" },
  { name: "GTS", sub: "Global Travel Solutions", icon: <Plane size={24} />, bg: "#16a34a", cardBg: "#f0fdf4", border: "#bbf7d0" },
  { name: "HQ", sub: "Powering Corporate Mobility", icon: <Building2 size={24} />, bg: "#ca8a04", cardBg: "#fefce8", border: "#fde68a" },
  { name: "GroundSpan", sub: "Ground Transportation", icon: <Car size={24} />, bg: "#374151", cardBg: "#f9fafb", border: "#e5e7eb" },
  { name: "Fursan", sub: "فرسان Travel", icon: <Star size={24} />, bg: "#ea580c", cardBg: "#fff7ed", border: "#fed7aa" },
  { name: "Amadeus", sub: "Travel Technology", icon: <Zap size={24} />, bg: "#7c3aed", cardBg: "#fdf4ff", border: "#e9d5ff" },
  { name: "Sabre", sub: "Travel Solutions", icon: <Map size={24} />, bg: "#2563eb", cardBg: "#eff6ff", border: "#bfdbfe" },
  { name: "Travelport", sub: "The Technology Platform", icon: <Shield size={24} />, bg: "#e11d48", cardBg: "#fff1f2", border: "#fecdd3" },
];

const PartnerCard = ({ p }) => (
  <div 
    className="flex items-center gap-4 px-6 py-4 rounded-2xl shadow-sm border transition-all hover:shadow-md shrink-0"
    style={{ background: p.cardBg, borderColor: p.border }}
  >
    <div 
      className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-white shadow-inner"
      style={{ background: p.bg }}
    >
      {p.icon}
    </div>
    <div>
      <div className="text-[14px] md:text-[16px] font-black text-gray-900 tracking-tight">{p.name}</div>
      <div className="text-[10px] md:text-[12px] font-bold text-gray-400 uppercase tracking-widest">{p.sub}</div>
    </div>
  </div>
);

const Trust = () => {
  const doubled = [...partners, ...partners];

  return (
    <section className="bg-white py-10 md:py-20 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6 mb-8 md:mb-16">
         <span className="bg-black text-white text-[9px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest inline-block mb-3">Partnership</span>
         <h2 className="text-2xl md:text-5xl font-black text-gray-900 tracking-tighter">Our Trusted Partners.</h2>
      </div>

      <div className="flex gap-6 animate-marquee hover:pause-marquee cursor-default" style={{ width: "max-content" }}>
        {doubled.map((p, i) => (
          <PartnerCard key={i} p={p} />
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee { animation: marquee 40s linear infinite; }
        .hover\\:pause-marquee:hover { animation-play-state: paused; }
      `}</style>
    </section>
  );
};

/* ---------------- WHY SECTION ---------------- */

const features = [
  {
    title: "Quality Assurance",
    desc: "We guarantee safety, professionalism and absolute satisfaction for every mile.",
    icon: <ShieldCheck size={24} />,
  },
  {
    title: "24×7 Concierge",
    desc: "Our dedicated support team is available anytime with premium live assistance.",
    icon: <MessageCircle size={24} />,
  },
  {
    title: "Global Network",
    desc: "Extensive coverage serving 65+ countries and 425+ cities worldwide.",
    icon: <MapPin size={24} />,
  },
  {
    title: "Transparent Pricing",
    desc: "Honest, all-inclusive pricing with zero hidden costs or surprise fees.",
    icon: <DollarSign size={24} />,
  },
];

const WhySection = () => (
  <section className="bg-white py-12 md:py-24 px-6 font-sans">
    <div className="max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
        <h1 className="text-2xl md:text-5xl font-black text-gray-900 tracking-tighter mb-3">
          Why Travel Smarter with Drivado?
        </h1>
        <p className="text-gray-500 font-medium italic text-sm">Elevating the standards of premium ground mobility.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
        {features.map((item, i) => (
          <div key={i} className="group bg-[#f8f9fb] p-8 md:p-10 rounded-[32px] border border-transparent hover:border-gray-100 hover:bg-white hover:shadow-2xl transition-all duration-500">
            <div className="mb-6 text-black transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 inline-block">{item.icon}</div>
            <h3 className="text-xl font-black text-gray-900 tracking-tight mb-3 uppercase">{item.title}</h3>
            <p className="text-[13px] md:text-[14px] font-medium text-gray-400 leading-relaxed italic">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ---------------- STATS SECTION ---------------- */

const StatsSection = () => {
  return (
    <section className="relative py-20 md:py-32 px-6 bg-gray-50 overflow-hidden">
      {/* Background Map */}
      <div 
        className="absolute inset-0 opacity-10 grayscale pointer-events-none"
        style={{
          backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/World_map_-_low_resolution.svg/1200px-World_map_-_low_resolution.svg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 items-center text-center">
        {/* Item 1 */}
        <div className="space-y-1">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 tracking-tighter">425+</h1>
          <p className="text-[10px] md:text-[14px] font-bold text-gray-400 uppercase tracking-widest italic">Cities Coverage</p>
        </div>

        {/* Item 2 */}
        <div className="space-y-2 relative">
          <div className="hidden md:block absolute left-[-1px] top-1/2 -translate-y-1/2 w-px h-24 bg-gradient-to-b from-transparent via-red-500 to-transparent" />
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 tracking-tighter">2900+</h1>
          <p className="text-[12px] md:text-[14px] font-bold text-gray-400 uppercase tracking-widest italic">Fleet Partners</p>
          <div className="hidden md:block absolute right-[-1px] top-1/2 -translate-y-1/2 w-px h-24 bg-gradient-to-b from-transparent via-red-500 to-transparent" />
        </div>

        {/* Item 3 */}
        <div className="space-y-2">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 tracking-tighter">10+</h1>
          <p className="text-[12px] md:text-[14px] font-bold text-gray-400 uppercase tracking-widest italic">Years of Excellence</p>
        </div>
      </div>
    </section>
  );
};

/* ---------------- FINAL PAGE ---------------- */

export default function HomePage() {
  return (
    <div className="font-sans">
      <Trust />
      <WhySection />
      <StatsSection />
    </div>
  );
}