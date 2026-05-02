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
  <div style={{
    display: "flex",
    alignItems: "center",
    gap: "16px",
    background: p.cardBg,
    border: `1.5px solid ${p.border}`,
    borderRadius: "14px",
    padding: "18px 28px",
    minWidth: "230px",
    flexShrink: 0,
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
  }}>
    <div style={{
      width: "54px",
      height: "54px",
      borderRadius: "50%",
      background: p.bg,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff",
    }}>
      {p.icon}
    </div>

    <div>
      <div style={{ fontSize: "16px", fontWeight: "700" }}>{p.name}</div>
      <div style={{ fontSize: "12px", color: "#6b7280" }}>{p.sub}</div>
    </div>
  </div>
);

const Trust = () => {
  const doubled = [...partners, ...partners];

  return (
    <section style={{ background: "#f8f9fb", padding: "50px 0", overflow: "hidden" }}>
      <h2 style={{ textAlign: "center", marginBottom: "30px", fontSize: "22px", fontWeight: "700" }}>
        Our Trusted Partners
      </h2>

      <div style={{ display: "flex", gap: "20px", animation: "marquee 30s linear infinite", width: "max-content" }}>
        {doubled.map((p, i) => (
          <PartnerCard key={i} p={p} />
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

/* ---------------- WHY SECTION ---------------- */

const features = [
  {
    title: "Quality Assurance",
    desc: "We guarantee safety, professionalism and satisfaction.",
    icon: <ShieldCheck size={22} />,
  },
  {
    title: "24×7 Services",
    desc: "Available anytime with live support.",
    icon: <MessageCircle size={22} />,
  },
  {
    title: "Global Network",
    desc: "Serving 65+ countries worldwide.",
    icon: <MapPin size={22} />,
  },
  {
    title: "No Hidden Cost",
    desc: "Transparent pricing always.",
    icon: <DollarSign size={22} />,
  },
];

const WhySection = () => (
  <section style={{ background: "#f8f9fb", padding: "80px 20px" }}>
    <div style={{ maxWidth: "1200px", margin: "auto", textAlign: "center" }}>
      <h1 style={{ fontSize: "34px", fontWeight: "700", marginBottom: "10px" }}>
        Why Travel Smarter with chauffeurs
      </h1>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", marginTop: "40px" }}>
        {features.map((item, i) => (
          <div key={i} style={{
            background: "#fff",
            padding: "25px",
            borderRadius: "14px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
          }}>
            <div style={{ marginBottom: "10px", color: "#16a34a" }}>{item.icon}</div>
            <h3 style={{ fontWeight: "600" }}>{item.title}</h3>
            <p style={{ fontSize: "14px", color: "#6b7280" }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ---------------- STATS SECTION (EXACT IMAGE STYLE) ---------------- */

const StatsSection = () => {
  return (
    <section style={{
      position: "relative",
      padding: "100px 20px",
      textAlign: "center",
      backgroundColor: "#f5f5f5"
    }}>

      {/* Background Map */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/World_map_-_low_resolution.svg/1200px-World_map_-_low_resolution.svg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.15
      }}></div>

      {/* Content */}
      <div style={{
        position: "relative",
        maxWidth: "1100px",
        margin: "auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>

        {/* Item */}
        <div>
          <h1 style={{ fontSize: "56px", fontWeight: "700" }}>425+</h1>
          <p style={{ color: "#6b7280" }}>Cities Coverage</p>
        </div>

        {/* Divider */}
        <div style={{ width: "1px", height: "80px", background: "#ef4444" }}></div>

        <div>
          <h1 style={{ fontSize: "56px", fontWeight: "700" }}>2900+</h1>
          <p style={{ color: "#6b7280" }}>Fleet Partners</p>
        </div>

        <div style={{ width: "1px", height: "80px", background: "#ef4444" }}></div>

        <div>
          <h1 style={{ fontSize: "56px", fontWeight: "700" }}>9+</h1>
          <p style={{ color: "#6b7280" }}>Years of Journey</p>
        </div>

      </div>
    </section>
  );
};

/* ---------------- FINAL PAGE ---------------- */

export default function HomePage() {
  return (
    <>
      <Trust />
      <WhySection />
      <StatsSection />
    </>
  );
}