import { Users, Briefcase, ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";

const fleetData = [
  {
    title: "Standard Sedan",
    desc: "Corolla, Toyota Prius, Camry, Ford Taurus or similar",
    img: "https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278_1280.jpg",
    pax: "3 Pax",
    luggage: "2 Luggage",
  },
  {
    title: "Premium Sedan",
    desc: "Mercedes E Class, BMW 5 Series, Audi A6",
    img: "https://hips.hearstapps.com/hmg-prod/images/2022-mercedes-benz-s500-4matic-102-1642184016.jpg?crop=0.636xw:0.538xh;0.244xw,0.315xh&resize=700:*",
    pax: "3 Pax",
    luggage: "2 Luggage",
  },
  {
    title: "Economy Van",
    desc: "Opel Vivaro, Volkswagen Caravelle",
    img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=600",
    pax: "5 Pax",
    luggage: "5 Luggage",
  },
  {
    title: "Premium Van",
    desc: "Mercedes V Class, Toyota Alphard",
    img: "https://images.unsplash.com/photo-1626847037657-fd3622613ce3?auto=format&fit=crop&q=80&w=600",
    pax: "5 Pax",
    luggage: "5 Luggage",
  },
  {
    title: "Premium SUV",
    desc: "GMC, Cadillac Escalade",
    img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=600",
    pax: "5 Pax",
    luggage: "5 Luggage",
  },
  {
    title: "Luxury Sedan",
    desc: "BMW 7 Series, Audi A8",
    img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=600",
    pax: "3 Pax",
    luggage: "2 Luggage",
  },
];

export default function FleetSection() {
  const scrollRef = useRef();

  const scroll = (dir) => {
    const width = scrollRef.current.offsetWidth;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -width / 1.5 : width / 1.5,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-white py-10 md:py-20 px-6 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-5 mb-8 md:mb-16">
        <div className="space-y-3 text-center md:text-left">
          <span className="bg-black text-white text-[9px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest inline-block">Our Fleet</span>
          <h2 className="text-2xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tighter">Choose Your Comfort.</h2>
          <p className="text-gray-500 font-medium max-w-xl mx-auto md:mx-0 text-sm md:text-base">
            A diverse range of premium vehicles, meticulously maintained to provide the ultimate chauffeur experience.
          </p>
        </div>

        {/* Navigation Arrows - Hidden on very small screens if needed, or styled nicely */}
        <div className="flex justify-center md:justify-end gap-3">
          <button
            onClick={() => scroll("left")}
            className="w-12 h-12 md:w-14 md:h-14 bg-gray-50 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all shadow-sm border border-gray-100"
          >
            <ArrowLeft size={20} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-12 h-12 md:w-14 md:h-14 bg-gray-50 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all shadow-sm border border-gray-100"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      {/* Cards Container */}
      <div className="max-w-[1440px] mx-auto">
        <div
          ref={scrollRef}
          className="flex gap-6 md:gap-8 overflow-x-auto scroll-smooth no-scrollbar pb-10 px-2 snap-x snap-mandatory"
        >
          {fleetData.map((item, i) => (
            <div
              key={i}
              className="min-w-[280px] sm:min-w-[320px] md:min-w-[400px] snap-start group cursor-pointer"
            >
              <div className="relative aspect-[16/10] bg-gray-50 rounded-[30px] md:rounded-[40px] overflow-hidden mb-6 border border-gray-100 shadow-sm transition-all group-hover:shadow-2xl group-hover:border-transparent">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 md:top-6 md:left-6 flex gap-2">
                  <div className="bg-white/90 backdrop-blur-md px-2.5 py-1 md:px-3 md:py-1.5 rounded-lg md:rounded-xl flex items-center gap-1.5 shadow-sm">
                    <Users size={14} className="text-gray-400" />
                    <span className="text-[11px] md:text-[12px] font-black">{item.pax}</span>
                  </div>
                  <div className="bg-white/90 backdrop-blur-md px-2.5 py-1 md:px-3 md:py-1.5 rounded-lg md:rounded-xl flex items-center gap-1.5 shadow-sm">
                    <Briefcase size={14} className="text-gray-400" />
                    <span className="text-[11px] md:text-[12px] font-black">{item.luggage}</span>
                  </div>
                </div>
              </div>

              <div className="px-2 space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg md:text-2xl font-black text-gray-900 tracking-tight uppercase">{item.title}</h3>
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-gray-100 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                    <ArrowRight size={16} className="-rotate-45 group-hover:rotate-0 transition-transform" />
                  </div>
                </div>
                <p className="text-[10px] md:text-[13px] font-medium text-gray-400 leading-relaxed uppercase tracking-wide italic">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}