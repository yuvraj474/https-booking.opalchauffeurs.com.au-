import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { MapPin, Calendar, Clock, Users, Briefcase, ShieldCheck, Timer, Car, Info, ChevronRight, Gauge } from 'lucide-react'

const Form1 = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const b = location.state || {}

  const fmt = (d) => {
    if (!d) return '—'
    return new Date(d).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
  }
  const fmtT = (t) => {
    if (!t) return '—'
    const [h, m] = t.split(':')
    const hh = parseInt(h)
    return `${hh % 12 || 12}:${m} ${hh >= 12 ? 'PM' : 'AM'}`
  }

  const vehicles = [
    {
      id: 1, name: 'Sprinter Van', pax: 12, bags: 5,
      desc: 'Mercedes-Benz Sprinter / LDV Van or similar vehicles.',
      price: 'A$1,145.86',
      img: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=500&q=80',
    },
    {
      id: 2, name: 'Next Available', pax: 4, bags: 2,
      desc: 'Any Sedan, SUV, or People Mover. (Baby seats not available for this category—only for SUV, Minivan, and Sprinter.)',
      price: 'A$671.38',
      img: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=500&q=80',
    },
    {
      id: 3, name: 'SUV', pax: 3, bags: 2,
      desc: 'Mercedes Benz E Class, BMW 5 Series, Audi Q7 or similar.',
      price: 'A$738.10',
      img: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=500&q=80',
    },
    {
      id: 4, name: 'Luxury SUV', pax: 4, bags: 3,
      desc: 'Audi Q7, Mercedes Benz GLE, BMW X5, Merc GL or similar.',
      price: 'A$840.69',
      img: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=500&q=80',
    },
    {
      id: 5, name: 'Mini Van', pax: 6, bags: 4,
      desc: 'Mercedes-Benz V-Class, Valente, Toyota Alphard & Vellfire or similar vehicles.',
      price: 'A$881.55',
      img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80',
    },
    {
      id: 6, name: 'First Class Sedan', pax: 3, bags: 2,
      desc: 'Mercedes Benz S-Class LWB, BMW 7 series, Audi A8 or similar.',
      price: 'A$963.71',
      img: 'https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=500&q=80',
    },
  ]

  const inclusions = [
    { icon: <Timer size={14} />, title: 'Waiting Time Policy', desc: 'Free 60 minutes waiting time after flight landing for airport pickups.' },
    { icon: <Info size={14} />, title: 'Travel Details', desc: 'Provide accurate travel details for smooth pickup.' },
    { icon: <Users size={14} />, title: 'Capacity Guidelines', desc: 'Follow guest and luggage limits for safety.' },
    { icon: <Car size={14} />, title: 'Vehicle Information', desc: 'The vehicle images are just for reference.' },
    { icon: <Briefcase size={14} />, title: 'Inclusive Pricing', desc: 'All prices include GST, gratuities, meet and greet.' },
  ]

  return (
    <div className="min-h-screen bg-[#f8f9fa] pt-20 pb-12 font-sans">
      
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center gap-2 overflow-x-auto no-scrollbar">
          {['Home', 'Vehicles', 'Details', 'Summary'].map((label, i, arr) => (
            <React.Fragment key={i}>
              <span
                onClick={i === 0 ? () => navigate('/') : undefined}
                className={`text-[12px] md:text-sm whitespace-nowrap ${i === 1 ? 'text-black font-bold' : 'text-gray-400 font-medium hover:text-black cursor-pointer'}`}
              >
                {label}
              </span>
              {i < arr.length - 1 && <ChevronRight size={14} className="text-gray-300 shrink-0" />}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 mt-6 md:mt-10">

        {/* ── Top Summary Card ── */}
        <div className="bg-white rounded-3xl border border-gray-100 p-6 md:p-8 mb-8 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            {[
              { icon: <MapPin size={14} className="text-black" />, text: b.from || 'Location A' },
              { icon: <MapPin size={14} className="text-black" />, text: b.to || 'Location B' },
              { icon: <Calendar size={14} className="text-black" />, text: fmt(b.date) },
              { icon: <Clock size={14} className="text-black" />, text: fmtT(b.time) },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 overflow-hidden">
                <div className="shrink-0">{item.icon}</div>
                <span className="text-[12px] font-bold text-gray-900 truncate">{item.text}</span>
              </div>
            ))}
          </div>
          
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-2">
            {[
              { icon: <Users size={14} />, text: `${b.passengers || 1} Passengers` },
              { icon: <Gauge size={14} />, text: 'Approx. 268 km' },
              { icon: <Clock size={14} />, text: 'Approx. 5 hr 6 min' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-gray-400 text-[11px] font-black uppercase tracking-widest">
                {item.icon} <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Two-column ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* LEFT: Vehicle Cards (8 cols) */}
          <div className="lg:col-span-8 space-y-4">
            <h2 className="text-xl font-black text-gray-900 tracking-tight mb-4">Select Your Fleet</h2>
            {vehicles.map((v) => (
              <div key={v.id} className="group bg-white rounded-[24px] border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col md:flex-row">
                {/* Car Image */}
                <div className="w-full md:w-56 h-40 md:h-auto bg-gray-50 overflow-hidden flex items-center justify-center border-b md:border-b-0 md:border-r border-gray-50">
                  <img src={v.img} alt={v.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>

                {/* Content */}
                <div className="flex-1 p-5 md:p-8 flex flex-col justify-center space-y-3">
                  <div>
                    <h3 className="text-lg md:text-2xl font-black text-gray-900 tracking-tight uppercase">{v.name}</h3>
                    <p className="text-[11px] md:text-[13px] font-medium text-gray-400 leading-relaxed mt-1 italic">{v.desc}</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="flex items-center gap-2 bg-gray-50 px-2.5 py-1 rounded-full text-[9px] font-black uppercase text-gray-600">
                      <Users size={10} className="text-black" /> {v.pax} Pax
                    </span>
                    <span className="flex items-center gap-2 bg-gray-50 px-2.5 py-1 rounded-full text-[9px] font-black uppercase text-gray-600">
                      <Briefcase size={10} className="text-black" /> {v.bags} Luggage
                    </span>
                  </div>
                </div>

                {/* Price/Button */}
                <div className="w-full md:w-56 p-5 md:p-8 bg-gray-50/50 md:bg-white flex flex-row md:flex-col items-center md:items-end justify-between border-t md:border-t-0 md:border-l border-gray-50">
                  <div className="text-right">
                    <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-0.5">Total</p>
                    <p className="text-lg font-black text-gray-900 tracking-tighter">{v.price}</p>
                  </div>
                  <button
                    onClick={() => navigate('/form2', { state: { ...b, vehicle: v } })}
                    className="bg-black text-white px-6 py-2.5 rounded-xl font-black text-[9px] uppercase tracking-[0.2em] shadow-xl shadow-black/10 hover:bg-gray-800 active:scale-95 transition-all whitespace-nowrap"
                  >
                    Select Ride
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT: Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            {/* Cancellation Card */}
            <div className="bg-emerald-50 border border-emerald-100 rounded-[32px] p-8 flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center text-white shrink-0 shadow-lg shadow-emerald-200">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 className="font-black text-emerald-900 text-sm uppercase tracking-tight mb-2">Free Cancellation</h4>
                <p className="text-emerald-700/80 text-xs font-medium leading-relaxed">
                  Cancel up to 24 hours before your ride for a <strong>100% refund</strong>. Professional & Reliable.
                </p>
              </div>
            </div>

            {/* Journey Inclusions */}
            <div className="bg-white rounded-[32px] border border-gray-100 overflow-hidden shadow-sm">
              <div className="p-6 md:p-8 border-b border-gray-50 text-center">
                <h4 className="text-lg font-black text-gray-900 uppercase tracking-tight">Your Inclusions</h4>
              </div>
              <div className="p-4 space-y-2">
                {inclusions.map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors">
                    <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[12px] font-black text-gray-900 uppercase tracking-tight">{item.title}</p>
                      <p className="text-[11px] text-gray-400 font-medium leading-relaxed mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Form1
