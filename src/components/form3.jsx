import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { ChevronRight, Phone, Mail, Plane, MessageSquare, Tag, Calendar, Clock, MapPin, Navigation, Users, CheckCircle2 } from 'lucide-react'

const Form3 = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const state = location.state || {}
  const vehicle = state.vehicle || {}
  const passenger = state.passenger || {}

  const [coupon, setCoupon] = useState('')
  const [couponApplied, setCouponApplied] = useState(false)

  // Price breakdown calculation
  const rawPrice = vehicle.price ? parseFloat(vehicle.price.replace(/[^0-9.]/g, '')) : 19372.54
  const tripFare = (rawPrice * 0.9148).toFixed(2)
  const convFee = (rawPrice * 0.0366).toFixed(2)
  const gst = (rawPrice * 0.0476).toFixed(2)
  const total = rawPrice.toFixed(2)

  // Passenger initials
  const initials = ((passenger.firstName?.[0] || '') + (passenger.lastName?.[0] || '')).toUpperCase() || 'GU'
  const fullName = `${passenger.salutation || 'Mr.'} ${passenger.firstName || ''} ${passenger.lastName || ''}`.trim()

  const fmt = (d) => {
    if (!d) return '—'
    return new Date(d).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
  }
  const fmtT = (t) => {
    if (!t) return '—'
    const [h, m] = t.split(':')
    return `${String(h).padStart(2, '0')}:${m}`
  }

  return (
    <div className="min-h-screen bg-[#f8f9fa] pt-20 pb-12 font-sans">
      
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center gap-2 overflow-x-auto no-scrollbar">
          {[
            { label: 'Home', click: () => navigate('/') },
            { label: 'Vehicles', click: () => navigate('/form1', { state }) },
            { label: 'Details', click: () => navigate(-1) },
            { label: 'Summary', active: true },
          ].map((b, i, arr) => (
            <React.Fragment key={i}>
              <span
                onClick={b.click}
                className={`text-[12px] md:text-sm whitespace-nowrap ${b.active ? 'text-black font-bold' : 'text-gray-400 font-medium hover:text-black cursor-pointer'}`}
              >
                {b.label}
              </span>
              {i < arr.length - 1 && <ChevronRight size={14} className="text-gray-300 shrink-0" />}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* ── LEFT: Journey Details (8 cols on large) ── */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm overflow-hidden">
              <div className="p-6 md:p-8 border-b border-gray-50 flex items-center justify-between">
                <h2 className="text-lg md:text-2xl font-black text-gray-900 tracking-tight">Journey Summary</h2>
                <span className="bg-black text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">{state.type || 'Oneway'}</span>
              </div>

              {/* Car Image and Header */}
              <div className="relative group">
                <div className="aspect-video bg-gray-50 flex items-center justify-center overflow-hidden">
                  {vehicle.img
                    ? <img src={vehicle.img} alt={vehicle.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    : <div className="text-6xl opacity-20">🚗</div>}
                </div>
              </div>

              <div className="p-6 md:p-10 space-y-8">
                <div>
                  <h3 className="text-xl md:text-3xl font-black text-gray-900 tracking-tighter mb-1 uppercase">{vehicle.name || 'Vehicle'}</h3>
                  <p className="text-[11px] md:text-sm font-medium text-gray-400 italic leading-relaxed">{vehicle.desc || ''}</p>
                </div>

                {/* Route Section */}
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center pt-1">
                      <div className="w-3 h-3 rounded-full bg-black border-4 border-gray-100" />
                      <div className="w-px flex-1 bg-dashed border-l border-gray-200 my-1" />
                    </div>
                    <div>
                      <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-1">Pickup</span>
                      <p className="text-sm md:text-base font-bold text-gray-900 leading-tight">{state.from || '—'}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center pt-1">
                      <MapPin size={14} className="text-black" />
                    </div>
                    <div>
                      <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-1">Drop off</span>
                      <p className="text-sm md:text-base font-bold text-gray-900 leading-tight">{state.to || '—'}</p>
                    </div>
                  </div>
                </div>

                {/* Grid Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                  {[
                    { label: 'Date', value: fmt(state.date), icon: <Calendar size={14} /> },
                    { label: 'Time', value: fmtT(state.time), icon: <Clock size={14} /> },
                    { label: 'Distance', value: '268 km', icon: <Navigation size={14} /> },
                    { label: 'Duration', value: '5h 6m', icon: <Clock size={14} /> },
                    { label: 'Passengers', value: state.passengers || 1, icon: <Users size={14} /> },
                  ].map((item, i) => (
                    <div key={i} className="bg-gray-50 rounded-2xl p-4 text-center border border-gray-100">
                      <div className="flex items-center justify-center text-gray-400 mb-2">{item.icon}</div>
                      <span className="text-[10px] font-black text-gray-400 uppercase tracking-tight block mb-1">{item.label}</span>
                      <p className="text-[12px] font-black text-gray-900">{item.value}</p>
                    </div>
                  ))}
                </div>

                {/* Policy Alert */}
                <div className="bg-emerald-50 border border-emerald-100 rounded-3xl p-6 flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white shrink-0">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <h4 className="font-black text-emerald-900 text-sm uppercase tracking-tight mb-1">Risk-Free Booking</h4>
                    <p className="text-emerald-700/80 text-xs font-medium leading-relaxed">
                      Enjoy a 100% refund for cancellations made at least 24 hours before your scheduled pickup time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Payment & Review (4 cols on large) ── */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-[32px] border border-gray-100 shadow-xl overflow-hidden sticky top-24">
              <div className="p-6 md:p-8 border-b border-gray-50">
                <h2 className="text-lg md:text-xl font-black text-gray-900 tracking-tight uppercase">Review & Pay</h2>
              </div>

              <div className="p-6 md:p-8 space-y-8">
                
                {/* Passenger Info */}
                <div>
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-4">Passenger</span>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center font-black text-lg">
                      {initials}
                    </div>
                    <div>
                      <p className="font-black text-gray-900">{fullName}</p>
                      <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1">
                        <span className="text-xs text-gray-400 flex items-center gap-1.5"><Phone size={12}/> {passenger.phone}</span>
                        <span className="text-xs text-gray-400 flex items-center gap-1.5"><Mail size={12}/> {passenger.email}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-px bg-gray-50" />

                {/* Coupon */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Tag size={16} className="text-gray-400" />
                    <span className="text-xs font-black text-gray-900 uppercase">Promo Code</span>
                  </div>
                  <div className="flex gap-2">
                    <input
                      placeholder="Enter code"
                      className="flex-1 bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black transition-all"
                      value={coupon}
                      onChange={e => setCoupon(e.target.value)}
                    />
                    <button 
                      onClick={() => coupon && setCouponApplied(true)}
                      className={`px-6 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all ${couponApplied ? 'bg-emerald-500 text-white' : 'bg-black text-white'}`}
                    >
                      {couponApplied ? 'Applied' : 'Apply'}
                    </button>
                  </div>
                </div>

                {/* Price Breakdown */}
                <div className="space-y-4 pt-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400 font-medium">Base Trip Fare</span>
                    <span className="font-bold text-gray-900">INR {tripFare}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400 font-medium">Convenience Fee</span>
                    <span className="font-bold text-gray-900">INR {convFee}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400 font-medium">GST (All Inclusive)</span>
                    <span className="font-bold text-gray-900">INR {gst}</span>
                  </div>
                  <div className="pt-6 border-t border-gray-100 flex justify-between items-end">
                    <div>
                      <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest block mb-0.5">Total Payable</span>
                      <p className="text-2xl font-black text-gray-900 tracking-tighter">INR {total}</p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <button
                    onClick={() => navigate(-1)}
                    className="py-4 rounded-2xl border-2 border-gray-100 font-black text-[10px] uppercase tracking-widest hover:bg-gray-50 transition-all"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => alert('🎉 Booking Confirmed!')}
                    className="py-4 rounded-2xl bg-black text-white font-black text-[10px] uppercase tracking-widest shadow-xl shadow-black/10 hover:bg-gray-800 transition-all active:scale-95"
                  >
                    Confirm & Pay
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Form3
