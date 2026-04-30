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
    { icon: <Timer size={14} />, title: 'Waiting Time Policy', desc: 'Free 60 minutes waiting time after flight landing for airport pickups. 15 minutes waiting time for all other pickups.' },
    { icon: <Info size={14} />, title: 'Travel Details Required', desc: 'Provide accurate travel details for smooth pickup. Incorrect or missing details may lead to service issues.' },
    { icon: <Users size={14} />, title: 'Capacity Guidelines', desc: 'Follow guest and luggage limits for safety. Choose a larger class if unsure to avoid service denial.' },
    { icon: <Car size={14} />, title: 'Vehicle Information', desc: 'The vehicle images are just for reference. You may get a different vehicle of similar quality depending on destination.' },
    { icon: <Briefcase size={14} />, title: 'Inclusive Pricing', desc: 'All prices include GST, gratuities, meet and greet services.' },
    { icon: <Clock size={14} />, title: 'Start Time', desc: 'Time and Kms for rental service starts when the vehicles leaves the garage and is calculated till the car reaches back to garage.' },
  ]

  const s = { fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }

  return (
    <div style={{ ...s, minHeight: '100vh', background: '#f2f3f5', paddingTop: '64px' }}>

      {/* Breadcrumb */}
      <div style={{ background: '#fff', borderBottom: '1px solid #e5e7eb' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '10px 20px', display: 'flex', alignItems: 'center', gap: '4px' }}>
          {['Home', 'Vehicles', 'Details', 'Summary', 'Overview'].map((label, i, arr) => (
            <React.Fragment key={i}>
              <span
                onClick={i === 0 ? () => navigate('/') : undefined}
                style={{ fontSize: '13px', color: i === 1 ? '#ff3d5a' : '#6b7280', fontWeight: i === 1 ? '600' : '400', cursor: i === 0 ? 'pointer' : 'default' }}
              >{label}</span>
              {i < arr.length - 1 && <ChevronRight size={12} style={{ color: '#d1d5db' }} />}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '16px 20px' }}>

        {/* ── Top Summary Card ── */}
        <div style={{ background: '#fff', borderRadius: '12px', border: '1px solid #e5e7eb', padding: '16px 20px', marginBottom: '16px', boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}>
          {/* Row 1 */}
          <div style={{ display: 'flex', gap: '8px', marginBottom: '12px', flexWrap: 'wrap' }}>
            {[
              { icon: <MapPin size={14} style={{ color: '#9ca3af' }} />, text: b.from || 'Jaipur, Rajasthan, India', flex: true },
              { icon: <MapPin size={14} style={{ color: '#9ca3af' }} />, text: b.to || 'Delhi, India', flex: true },
              { icon: <Calendar size={14} style={{ color: '#9ca3af' }} />, text: fmt(b.date) },
              { icon: <Clock size={14} style={{ color: '#9ca3af' }} />, text: fmtT(b.time) },
            ].map((item, i) => (
              <div key={i} style={{
                flex: item.flex ? 1 : 'none', minWidth: item.flex ? '180px' : 'auto',
                display: 'flex', alignItems: 'center', gap: '7px',
                border: '1px solid #e5e7eb', borderRadius: '8px', padding: '8px 14px',
                background: '#fff', whiteSpace: 'nowrap'
              }}>
                {item.icon}
                <span style={{ fontSize: '13.5px', color: '#111', fontWeight: '400', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {item.text}
                </span>
              </div>
            ))}
          </div>
          {/* Row 2 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
            {[
              { icon: <Users size={13} style={{ color: '#9ca3af' }} />, text: 'INR' },
              { icon: <Users size={13} style={{ color: '#9ca3af' }} />, text: `${b.passengers || 1} pax` },
              { icon: <Gauge size={13} style={{ color: '#9ca3af' }} />, text: 'Approx. 268.83 km' },
              { icon: <Clock size={13} style={{ color: '#9ca3af' }} />, text: 'Approx. 5 hr 6 min' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                {item.icon}
                <span style={{ fontSize: '12.5px', color: '#374151' }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Two-column ── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 308px', gap: '16px', alignItems: 'start' }}>

          {/* LEFT: Vehicle Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {vehicles.map((v) => (
              <div key={v.id}
                style={{ background: '#fff', borderRadius: '10px', border: '1px solid #e5e7eb', display: 'flex', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.04)', transition: 'box-shadow 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.1)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.04)'}
              >
                {/* Car Image */}
                <div style={{ width: '170px', flexShrink: 0, background: '#f5f6f8', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src={v.img} alt={v.name}
                    style={{ width: '170px', height: '130px', objectFit: 'cover', display: 'block' }}
                    onError={e => { e.target.style.display = 'none'; e.target.parentNode.innerHTML = '<div style="font-size:50px;text-align:center;padding:24px;color:#ccc">🚗</div>' }}
                  />
                </div>

                {/* Middle */}
                <div style={{ flex: 1, padding: '16px 18px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '6px' }}>
                  <h3 style={{ fontSize: '17px', fontWeight: '700', color: '#111', margin: 0, letterSpacing: '0.1px' }}>{v.name}</h3>
                  <div style={{ display: 'flex', gap: '16px' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '13px', color: '#374151' }}>
                      <Users size={13} style={{ color: '#e57373' }} /> {v.pax} Pax
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '13px', color: '#374151' }}>
                      <Briefcase size={13} style={{ color: '#e57373' }} /> {v.bags} Luggage
                    </span>
                  </div>
                  <p style={{ fontSize: '12.5px', color: '#6b7280', margin: 0, lineHeight: '1.5' }}>{v.desc}</p>
                </div>

                {/* Right: Price + Button */}
                <div style={{ width: '195px', flexShrink: 0, borderLeft: '1px solid #f0f0f0', padding: '16px 18px', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'space-between' }}>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '17px', fontWeight: '700', color: '#111', lineHeight: 1.2 }}>{v.price}</div>
                    <div style={{ fontSize: '11px', color: '#9ca3af', marginTop: '4px', lineHeight: '1.6', textAlign: 'right' }}>
                      Includes GST,<br />Gratuities, Meet &<br />Greet services
                    </div>
                  </div>
                  <button
                    onClick={() => navigate('/form2', { state: { ...b, vehicle: v } })}
                    style={{ width: '100%', background: '#ff3d5a', color: '#fff', border: 'none', borderRadius: '8px', padding: '11px 0', fontSize: '14px', fontWeight: '600', cursor: 'pointer', transition: 'background 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.background = '#e02f4a'}
                    onMouseLeave={e => e.currentTarget.style.background = '#ff3d5a'}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT: Sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', position: 'sticky', top: '76px' }}>

            {/* Green Cancellation Card */}
            <div style={{ background: '#f0fdf4', border: '1.5px solid #86efac', borderRadius: '12px', padding: '16px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <div style={{ background: '#22c55e', borderRadius: '50%', width: '38px', height: '38px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ShieldCheck size={19} color="#fff" />
              </div>
              <div>
                <div style={{ fontSize: '13.5px', fontWeight: '700', color: '#15803d', marginBottom: '5px', lineHeight: '1.3' }}>
                  Free Cancellation 24-Hour Policy
                </div>
                <div style={{ fontSize: '12px', color: '#166534', lineHeight: '1.6' }}>
                  Flexible booking! Cancel up to 24 hours before the ride starts to receive a <strong>100% refund</strong>
                </div>
              </div>
            </div>

            {/* Journey Inclusions */}
            <div style={{ background: '#fff', borderRadius: '12px', border: '1px solid #e5e7eb', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
              <div style={{ padding: '14px 18px', borderBottom: '1px solid #f0f0f0', textAlign: 'center' }}>
                <h4 style={{ fontSize: '14px', fontWeight: '700', color: '#111', margin: 0 }}>Your Journey Inclusions</h4>
              </div>
              {inclusions.map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '11px', alignItems: 'flex-start', padding: '12px 16px', borderBottom: i < inclusions.length - 1 ? '1px solid #f7f7f7' : 'none' }}>
                  <div style={{ width: '28px', height: '28px', flexShrink: 0, borderRadius: '50%', background: '#fff5f5', border: '1px solid #fecdd3', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#e57373', marginTop: '1px' }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: '600', color: '#111', marginBottom: '2px' }}>{item.title}</div>
                    <div style={{ fontSize: '11.5px', color: '#6b7280', lineHeight: '1.55' }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Form1
