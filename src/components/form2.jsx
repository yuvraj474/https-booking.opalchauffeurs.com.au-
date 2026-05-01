import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { MapPin, ChevronRight, ShieldCheck, ChevronDown, User, Mail, Phone, Plane, MessageSquare, Check } from 'lucide-react'

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

  const ff = "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"

  const inputStyle = {
    width: '100%', border: '1px solid #e5e7eb', borderRadius: '8px',
    padding: '11px 14px', fontSize: '13.5px', color: '#111',
    outline: 'none', background: '#fff', boxSizing: 'border-box',
    fontFamily: ff, transition: 'border-color 0.2s'
  }

  const labelStyle = { fontSize: '11px', fontWeight: '600', color: '#9ca3af', marginBottom: '5px', display: 'block', textTransform: 'uppercase', letterSpacing: '0.5px' }

  return (
    <div style={{ minHeight: '100vh', background: '#f2f3f5', paddingTop: '64px', fontFamily: ff }}>

      {/* Breadcrumb */}
      <div style={{ background: '#fff', borderBottom: '1px solid #e5e7eb' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '10px 20px', display: 'flex', alignItems: 'center', gap: '4px' }}>
          {[
            { label: 'Home', click: () => navigate('/') },
            { label: 'Vehicles', click: () => navigate(-1) },
            { label: 'Details', active: true },
            { label: 'Summary' },
            { label: 'Overview' },
          ].map((b, i, arr) => (
            <React.Fragment key={i}>
              <span
                onClick={b.click}
                style={{ fontSize: '13px', color: b.active ? '1f2937' : '#6b7280', fontWeight: b.active ? '600' : '400', cursor: b.click ? 'pointer' : 'default' }}
              >{b.label}</span>
              {i < arr.length - 1 && <ChevronRight size={12} style={{ color: '#d1d5db' }} />}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', alignItems: 'start' }}>

          {/* ── LEFT: Journey Details ── */}
          <div style={{ background: '#fff', borderRadius: '12px', border: '1px solid #e5e7eb', overflow: 'hidden', boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}>
            <div style={{ padding: '18px 20px', borderBottom: '1px solid #f0f0f0' }}>
              <h2 style={{ fontSize: '15px', fontWeight: '700', color: '#111', margin: 0 }}>Journey Details</h2>
            </div>

            {/* Car Image */}
            <div style={{ background: '#f5f6f8', height: '190px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
              {vehicle.img ? (
                <img src={vehicle.img} alt={vehicle.name}
                  style={{ width: '100%', height: '190px', objectFit: 'cover' }}
                  onError={e => { e.target.style.display = 'none'; e.target.parentNode.innerHTML = '<div style="font-size:64px">🚗</div>' }}
                />
              ) : (
                <div style={{ fontSize: '64px' }}>🚗</div>
              )}
            </div>

            <div style={{ padding: '18px 20px' }}>
              {/* Car Name + Transfer Type */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#111', margin: 0 }}>
                  {vehicle.name || 'Vehicle'}
                </h3>
                <span style={{ background: 'black', color: '#fff', fontSize: '11px', fontWeight: '600', padding: '3px 10px', borderRadius: '99px' }}>
                  {state.type || 'Oneway'}
                </span>
              </div>
              <p style={{ fontSize: '13px', color: '#6b7280', margin: '0 0 18px 0', lineHeight: '1.4' }}>
                {vehicle.desc || ''}
              </p>

              {/* Route */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {/* Pickup */}
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '3px' }}>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#000', flexShrink: 0 }} />
                    <div style={{ width: '2px', height: '30px', background: '#e5e7eb', margin: '2px 0' }} />
                  </div>
                  <div style={{ paddingBottom: '12px' }}>
                    <div style={{ fontSize: '10.5px', color: '#9ca3af', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '2px' }}>Pickup Location</div>
                    <div style={{ fontSize: '14px', fontWeight: '600', color: '#111' }}>{state.from || 'Pickup Location'}</div>
                  </div>
                </div>
                {/* Dropoff */}
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <div style={{ paddingTop: '3px' }}>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#d1d5db', flexShrink: 0 }} />
                  </div>
                  <div>
                    <div style={{ fontSize: '10.5px', color: '#9ca3af', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '2px' }}>Drop off Location</div>
                    <div style={{ fontSize: '14px', fontWeight: '600', color: '#111' }}>{state.to || 'Drop Location'}</div>
                  </div>
                </div>
              </div>

              {/* Free Cancellation */}
              <div style={{ background: '#f0fdf4', border: '1.5px solid #86efac', borderRadius: '10px', padding: '13px 15px', display: 'flex', gap: '11px', alignItems: 'flex-start', margin: '18px 0' }}>
                <div style={{ background: '#22c55e', borderRadius: '50%', width: '32px', height: '32px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <ShieldCheck size={16} color="#fff" />
                </div>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: '700', color: '#15803d', marginBottom: '3px' }}>Free Cancellation 24-Hour Policy</div>
                  <div style={{ fontSize: '11.5px', color: '#166534', lineHeight: '1.5' }}>
                    Flexible booking! Cancel up to 24 hours before the ride starts to receive a <strong>100% refund</strong>
                  </div>
                </div>
              </div>

              {/* Total Price */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: '700', color: 'black', marginBottom: '2px' }}>Total Price</div>
                  <div style={{ fontSize: '11px', color: '#9ca3af' }}>Includes GST, Gratuities & Meet services</div>
                </div>
                <div style={{ fontSize: '22px', fontWeight: '800', color: '#111' }}>
                  {vehicle.price || 'A$0.00'}
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Passenger Details Form ── */}
          <div style={{ background: '#fff', borderRadius: '12px', border: '1px solid #e5e7eb', overflow: 'hidden', boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}>
            <div style={{ padding: '18px 20px', borderBottom: '1px solid #f0f0f0' }}>
              <h2 style={{ fontSize: '15px', fontWeight: '700', color: '#111', margin: 0 }}>Passenger Details</h2>
            </div>

            <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '14px' }}>

              {/* Salutation */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '11px 14px', background: '#fff' }}>
                  <User size={15} style={{ color: '#9ca3af', flexShrink: 0 }} />
                  <span style={{ fontSize: '11px', color: '#9ca3af', fontWeight: '500', marginRight: '4px' }}>Salutation <span style={{ color: '#ff3d5a' }}>*</span></span>
                  <div style={{ flex: 1, position: 'relative' }}>
                    <select
                      value={form.salutation}
                      onChange={e => handleChange('salutation', e.target.value)}
                      style={{ width: '100%', border: 'none', outline: 'none', fontSize: '13.5px', color: '#111', background: 'transparent', appearance: 'none', cursor: 'pointer', fontFamily: ff }}
                    >
                      <option>Mr.</option>
                      <option>Mrs.</option>
                      <option>Ms.</option>
                      <option>Dr.</option>
                    </select>
                  </div>
                  <ChevronDown size={14} style={{ color: '#9ca3af' }} />
                </div>
              </div>

              {/* First + Last Name */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '11px 14px' }}>
                  <User size={15} style={{ color: '#9ca3af' }} />
                  <input
                    placeholder="Enter First name"
                    value={form.firstName}
                    onChange={e => handleChange('firstName', e.target.value)}
                    style={{ border: 'none', outline: 'none', fontSize: '13.5px', color: '#111', background: 'transparent', width: '100%', fontFamily: ff }}
                  />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '11px 14px' }}>
                  <User size={15} style={{ color: '#9ca3af' }} />
                  <input
                    placeholder="Enter Last name"
                    value={form.lastName}
                    onChange={e => handleChange('lastName', e.target.value)}
                    style={{ border: 'none', outline: 'none', fontSize: '13.5px', color: '#111', background: 'transparent', width: '100%', fontFamily: ff }}
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', border: `1px solid ${emailError ? '#ef4444' : '#e5e7eb'}`, borderRadius: '8px', padding: '11px 14px' }}>
                  <Mail size={15} style={{ color: '#9ca3af' }} />
                  <input
                    type="email"
                    placeholder="Enter Email Address (@gmail.com)"
                    value={form.email}
                    onChange={e => handleChange('email', e.target.value)}
                    style={{ border: 'none', outline: 'none', fontSize: '13.5px', color: '#111', background: 'transparent', width: '100%', fontFamily: ff }}
                  />
                </div>
                {emailError && <div style={{ color: '#ef4444', fontSize: '11.5px', marginTop: '4px', fontWeight: '500', paddingLeft: '4px' }}>{emailError}</div>}
              </div>

              {/* Phone */}
              <div style={{ display: 'flex', gap: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '11px 14px', minWidth: '90px', cursor: 'pointer' }}>
                  <span style={{ fontSize: '13.5px', color: '#111', fontWeight: '500' }}>{form.countryCode}</span>
                  <ChevronDown size={13} style={{ color: '#9ca3af' }} />
                </div>
                <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '11px 14px' }}>
                  <Phone size={15} style={{ color: '#9ca3af' }} />
                  <input
                    type="tel"
                    placeholder="Enter Contact Number"
                    value={form.phone}
                    onChange={e => handleChange('phone', e.target.value)}
                    style={{ border: 'none', outline: 'none', fontSize: '13.5px', color: '#111', background: 'transparent', width: '100%', fontFamily: ff }}
                  />
                </div>
              </div>

              {/* Flight Number */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '11px 14px' }}>
                <Plane size={15} style={{ color: '#9ca3af' }} />
                <input
                  placeholder="Enter flight number (Optional)"
                  value={form.flight}
                  onChange={e => handleChange('flight', e.target.value)}
                  style={{ border: 'none', outline: 'none', fontSize: '13.5px', color: '#111', background: 'transparent', width: '100%', fontFamily: ff }}
                />
              </div>

              {/* Special Request */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '11px 14px' }}>
                <MessageSquare size={15} style={{ color: '#9ca3af', marginTop: '2px' }} />
                <textarea
                  placeholder="Enter Special Request (Optional)"
                  value={form.special}
                  onChange={e => handleChange('special', e.target.value)}
                  rows={3}
                  style={{ border: 'none', outline: 'none', fontSize: '13.5px', color: '#111', background: 'transparent', width: '100%', resize: 'none', fontFamily: ff, lineHeight: '1.5' }}
                />
              </div>

              {/* Terms Checkbox */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', paddingTop: '4px' }}>
                <div
                  onClick={() => setAgreed(!agreed)}
                  style={{
                    width: '18px', height: '18px', borderRadius: '4px', flexShrink: 0, marginTop: '1px',
                    border: agreed ? '2px solid #000' : '2px solid #d1d5db',
                    background: agreed ? '#000' : '#fff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all 0.2s'
                  }}
                >
                  {agreed && <Check size={11} color="#fff" strokeWidth={3} />}
                </div>

                <span style={{ color: '#374151', cursor: 'pointer', fontWeight: '600' }}>I agree to Term &condition Booking Conditions Privacy Policy</span>,{' '}



              </div>

              {/* Previous + Continue Buttons */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <button
                  onClick={() => navigate(-1)}
                  style={{ padding: '14px', borderRadius: '8px', border: 'none', background: '#1f2937', color: '#fff', fontSize: '14px', fontWeight: '700', cursor: 'pointer', fontFamily: ff, transition: 'background 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.background = '#111827'}
                  onMouseLeave={e => e.currentTarget.style.background = '#1f2937'}
                >
                  Previous
                </button>
                <button
                  onClick={() => isValid && navigate('/form3', { state: { ...state, passenger: form } })}
                  style={{ padding: '14px', borderRadius: '8px', border: 'none', background: isValid ? '#1a0b3b' : '#c4b5d4', color: '#fff', fontSize: '14px', fontWeight: '700', cursor: isValid ? 'pointer' : 'not-allowed', fontFamily: ff, transition: 'background 0.2s' }}
                  onMouseEnter={e => { if (isValid) e.currentTarget.style.background = '#0f0622' }}
                  onMouseLeave={e => { if (isValid) e.currentTarget.style.background = isValid ? '#1a0b3b' : '#c4b5d4' }}
                >
                  Continue
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Form2
