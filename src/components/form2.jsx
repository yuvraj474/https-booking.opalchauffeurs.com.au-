import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { MapPin, ChevronRight, ShieldCheck, ChevronDown, User, Mail, Phone, Plane, MessageSquare, Check, ArrowRight, ArrowLeft } from 'lucide-react'

const Form2 = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const state = location.state || {}
  const vehicle = state.vehicle || {}

  const [form, setForm] = useState({
    salutation: 'Mr.', firstName: '', lastName: '',
    email: '', countryCode: '+61', phone: '',
    flight: '', special: ''
  })
  const [agreed, setAgreed] = useState(false)
  const [emailError, setEmailError] = useState('')

  const handleChange = (field, val) => {
    if (field === 'phone') {
      val = val.replace(/\D/g, '') // Only numbers allowed
    }
    setForm(prev => ({ ...prev, [field]: val }))

    if (field === 'email') {
      if (val && !val.endsWith('@gmail.com')) {
        setEmailError('Only Gmail addresses (@gmail.com) are allowed')
      } else {
        setEmailError('')
      }
    }
  }

  const isValid = agreed && form.firstName && form.lastName && form.email.endsWith('@gmail.com') && form.phone

  return (
    <div className="min-h-screen bg-[#f8f9fa] pt-20 pb-12 font-sans">
      
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center gap-2 overflow-x-auto no-scrollbar">
          {[
            { label: 'Home', click: () => navigate('/') },
            { label: 'Vehicles', click: () => navigate(-1) },
            { label: 'Details', active: true },
            { label: 'Summary' },
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

          {/* ── LEFT: Journey Details (5 cols on large) ── */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm overflow-hidden sticky top-24">
              <div className="p-6 md:p-8 border-b border-gray-50 flex items-center justify-between">
                <h2 className="text-xl font-black text-gray-900 tracking-tight">Trip Summary</h2>
                <span className="bg-black text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">{state.type || 'Oneway'}</span>
              </div>

              {/* Car Image */}
              <div className="aspect-video bg-gray-50 flex items-center justify-center overflow-hidden">
                {vehicle.img ? (
                  <img src={vehicle.img} alt={vehicle.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="text-6xl opacity-20">🚗</div>
                )}
              </div>

              <div className="p-6 md:p-8 space-y-8">
                <div>
                  <h3 className="text-2xl font-black text-gray-900 tracking-tight mb-2 uppercase">{vehicle.name || 'Vehicle'}</h3>
                  <p className="text-[13px] font-medium text-gray-400 leading-relaxed italic">{vehicle.desc || ''}</p>
                </div>

                {/* Route Section */}
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center pt-1">
                      <div className="w-3 h-3 rounded-full bg-black border-4 border-gray-100" />
                      <div className="w-px h-10 bg-dashed border-l border-gray-200 my-1" />
                    </div>
                    <div>
                      <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-1">Pickup</span>
                      <p className="text-sm font-bold text-gray-900 leading-tight">{state.from || '—'}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center pt-1">
                      <MapPin size={14} className="text-black" />
                    </div>
                    <div>
                      <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-1">Drop off</span>
                      <p className="text-sm font-bold text-gray-900 leading-tight">{state.to || '—'}</p>
                    </div>
                  </div>
                </div>

                {/* Price Breakdown Preview */}
                <div className="pt-4 border-t border-gray-50 flex justify-between items-end">
                  <div>
                    <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest block mb-0.5">Total Payable</span>
                    <p className="text-2xl font-black text-gray-900 tracking-tighter">{vehicle.price || 'A$0.00'}</p>
                  </div>
                  <div className="text-right">
                     <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-tight flex items-center justify-end gap-1">
                       <ShieldCheck size={12}/> All Inclusive
                     </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Passenger Details Form (7 cols on large) ── */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded-[32px] border border-gray-100 shadow-xl overflow-hidden p-6 md:p-10">
              <div className="mb-6 md:mb-10">
                <span className="bg-black text-white text-[9px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest inline-block mb-3">Passenger Info</span>
                <h2 className="text-xl md:text-4xl font-black text-gray-900 tracking-tighter uppercase leading-none">Who's Travelling?</h2>
                <p className="text-gray-400 font-medium mt-3 text-xs md:text-base italic">Provide your details to receive booking confirmation and chauffeur info.</p>
              </div>

              <div className="space-y-6">
                {/* Salutation & Names */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                  <div className="md:col-span-3">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-2 px-2">Salutation</label>
                    <div className="relative">
                      <select
                        value={form.salutation}
                        onChange={e => handleChange('salutation', e.target.value)}
                        className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 text-sm font-bold appearance-none focus:outline-none focus:border-black transition-all"
                      >
                        <option>Mr.</option><option>Mrs.</option><option>Ms.</option><option>Dr.</option>
                      </select>
                      <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                  <div className="md:col-span-4">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-2 px-2">First Name</label>
                    <input
                      placeholder="John"
                      value={form.firstName}
                      onChange={e => handleChange('firstName', e.target.value)}
                      className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 text-sm font-bold focus:outline-none focus:border-black transition-all"
                    />
                  </div>
                  <div className="md:col-span-5">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-2 px-2">Last Name</label>
                    <input
                      placeholder="Doe"
                      value={form.lastName}
                      onChange={e => handleChange('lastName', e.target.value)}
                      className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 text-sm font-bold focus:outline-none focus:border-black transition-all"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-2 px-2">Email Address</label>
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="johndoe@gmail.com"
                      value={form.email}
                      onChange={e => handleChange('email', e.target.value)}
                      className={`w-full bg-gray-50 border rounded-2xl px-5 py-4 text-sm font-bold focus:outline-none transition-all ${emailError ? 'border-red-500 bg-red-50' : 'border-gray-100 focus:border-black'}`}
                    />
                    <Mail size={18} className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400" />
                  </div>
                  {emailError && <p className="text-red-500 text-[10px] font-bold mt-2 px-2 uppercase">{emailError}</p>}
                </div>

                {/* Phone Number */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                   <div className="md:col-span-1">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-2 px-2">Code</label>
                    <div className="relative">
                      <select
                        value={form.countryCode}
                        onChange={e => handleChange('countryCode', e.target.value)}
                        className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 text-sm font-bold appearance-none focus:outline-none focus:border-black transition-all"
                      >
                        <option>+61</option><option>+91</option><option>+1</option><option>+44</option>
                      </select>
                      <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    </div>
                   </div>
                   <div className="md:col-span-3">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-2 px-2">Contact Number</label>
                    <div className="relative">
                      <input
                        type="tel"
                        placeholder="412 345 678"
                        value={form.phone}
                        onChange={e => handleChange('phone', e.target.value)}
                        className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 text-sm font-bold focus:outline-none focus:border-black transition-all"
                      />
                      <Phone size={18} className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400" />
                    </div>
                   </div>
                </div>

                {/* Flight Number */}
                <div>
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-2 px-2">Flight Number (Optional)</label>
                  <div className="relative">
                    <input
                      placeholder="EK-512"
                      value={form.flight}
                      onChange={e => handleChange('flight', e.target.value)}
                      className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 text-sm font-bold focus:outline-none focus:border-black transition-all"
                    />
                    <Plane size={18} className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400" />
                  </div>
                </div>

                {/* Special Request */}
                <div>
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-2 px-2">Special Requests (Optional)</label>
                  <div className="relative">
                    <textarea
                      placeholder="Any specific instructions for your chauffeur..."
                      value={form.special}
                      onChange={e => handleChange('special', e.target.value)}
                      rows={4}
                      className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 text-sm font-bold focus:outline-none focus:border-black transition-all resize-none"
                    />
                    <MessageSquare size={18} className="absolute right-5 top-6 text-gray-400" />
                  </div>
                </div>

                {/* Terms Agreement */}
                <div className="pt-4">
                   <label className="flex items-start gap-4 cursor-pointer group">
                      <div className={`shrink-0 w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${agreed ? 'bg-black border-black shadow-lg shadow-black/10' : 'border-gray-200 bg-white group-hover:border-gray-300'}`}>
                         <input type="checkbox" className="hidden" checked={agreed} onChange={() => setAgreed(!agreed)} />
                         {agreed && <Check size={16} className="text-white" />}
                      </div>
                      <span className="text-[12px] md:text-sm font-medium text-gray-500 leading-relaxed">
                        I agree to the <span className="text-black font-black underline cursor-pointer">Terms & Conditions</span>, <span className="text-black font-black underline cursor-pointer">Booking Policy</span> and <span className="text-black font-black underline cursor-pointer">Privacy Policy</span>.
                      </span>
                   </label>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-4 pt-8">
                  <button
                    onClick={() => navigate(-1)}
                    className="flex items-center justify-center gap-2 py-4 rounded-2xl border-2 border-gray-100 font-black text-[10px] uppercase tracking-[0.2em] hover:bg-gray-50 transition-all"
                  >
                    <ArrowLeft size={16} /> Back
                  </button>
                  <button
                    disabled={!isValid}
                    onClick={() => isValid && navigate('/form3', { state: { ...state, passenger: form } })}
                    className={`flex items-center justify-center gap-2 py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] shadow-xl transition-all active:scale-95 ${isValid ? 'bg-black text-white shadow-black/10 hover:bg-gray-800' : 'bg-gray-100 text-gray-400 cursor-not-allowed shadow-none'}`}
                  >
                    Continue <ArrowRight size={16} />
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

export default Form2
