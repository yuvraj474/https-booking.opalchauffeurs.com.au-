import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { ChevronRight, Phone, Mail, Plane, MessageSquare, Tag } from 'lucide-react'

const Form3 = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const state = location.state || {}
  const vehicle = state.vehicle || {}
  const passenger = state.passenger || {}

  const [coupon, setCoupon] = useState('')
  const [couponApplied, setCouponApplied] = useState(false)

  const ff = "'Poppins', sans-serif"

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

  const divider = { borderBottom: '1px solid #f0f0f0', margin: '14px 0' }
  const rowStyle = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '4px 0' }

  return (
    <div style={{ minHeight: '100vh', background: '#f2f3f5', paddingTop: '64px', fontFamily: ff }}>

      {/* Breadcrumb */}
      <div style={{ background: '#fff', borderBottom: '1px solid #e5e7eb' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '10px 20px', display: 'flex', alignItems: 'center', gap: '4px' }}>
          {[
            { label: 'Home', click: () => navigate('/') },
            { label: 'Vehicles', click: () => navigate('/form1', { state }) },
            { label: 'Details', click: () => navigate(-1) },
            { label: 'Summary', active: true },
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
            <div style={{ padding: '16px 20px', borderBottom: '1px solid #f0f0f0' }}>
              <h2 style={{ fontSize: '15px', fontWeight: '700', color: '#111', margin: 0 }}>Journey Details</h2>
            </div>

            {/* Car Image */}
            <div style={{ background: '#f5f6f8', height: '180px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
              {vehicle.img
                ? <img src={vehicle.img} alt={vehicle.name} style={{ width: '100%', height: '180px', objectFit: 'cover' }} onError={e => { e.target.style.display = 'none'; e.target.parentNode.innerHTML = '<div style="font-size:60px">🚗</div>' }} />
                : <div style={{ fontSize: '60px' }}>🚗</div>}
            </div>

            <div style={{ padding: '18px 20px' }}>
              {/* Name + Badge */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#111', margin: 0 }}>{vehicle.name || 'Vehicle'}</h3>
                <span style={{ background: 'black', color: '#fff', fontSize: '11px', fontWeight: '600', padding: '3px 10px', borderRadius: '99px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                   {state.type || 'Oneway'}
                </span>
              </div>
              <p style={{ fontSize: '13px', color: '#6b7280', margin: '0 0 16px 0' }}>{vehicle.desc || ''}</p>

              {/* Route */}
              <div style={{ marginBottom: '16px' }}>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '3px' }}>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff3d5a' }} />
                    <div style={{ width: '2px', height: '28px', background: '#e5e7eb', margin: '2px 0' }} />
                  </div>
                  <div style={{ paddingBottom: '10px' }}>
                    <div style={{ fontSize: '10px', color: '#9ca3af', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Pickup Location</div>
                    <div style={{ fontSize: '14px', fontWeight: '600', color: '#111' }}>{state.from || '—'}</div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <div style={{ paddingTop: '3px' }}>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#d1d5db' }} />
                  </div>
                  <div>
                    <div style={{ fontSize: '10px', color: '#9ca3af', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Drop off Location</div>
                    <div style={{ fontSize: '14px', fontWeight: '600', color: '#111' }}>{state.to || '—'}</div>
                  </div>
                </div>
              </div>

              {/* Stats Row: Date | Time | Distance | Duration | Pax */}
              <div style={{ display: 'flex', border: '1px solid #e5e7eb', borderRadius: '8px', overflow: 'hidden', marginBottom: '18px' }}>
                {[
                  { label: 'Date', value: fmt(state.date), icon: '📅' },
                  { label: 'Time', value: fmtT(state.time), icon: '🕐' },
                  { label: 'Distance', value: '268.83 km', icon: '📏' },
                  { label: 'Duration', value: '5 hr 6 min', icon: '⏱' },
                  { label: 'Pax', value: state.passengers || 1, icon: '👤' },
                ].map((item, i, arr) => (
                  <div key={i} style={{
                    flex: 1, padding: '10px 8px', textAlign: 'center',
                    borderRight: i < arr.length - 1 ? '1px solid #e5e7eb' : 'none',
                    background: '#fff'
                  }}>
                    <div style={{ fontSize: '10px', color: '#9ca3af', marginBottom: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '3px' }}>
                      <span style={{ fontSize: '10px' }}>{item.icon}</span> {item.label}
                    </div>
                    <div style={{ fontSize: '12px', fontWeight: '600', color: '#111' }}>{item.value}</div>
                  </div>
                ))}
              </div>

              {/* Free Cancellation Card */}
              <div style={{ background: '#f0fdf4', border: '1.5px solid #86efac', borderRadius: '10px', padding: '13px 15px', display: 'flex', gap: '11px', alignItems: 'flex-start' }}>
                <div style={{ background: '#22c55e', borderRadius: '50%', width: '32px', height: '32px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ color: '#fff', fontSize: '14px' }}>✓</span>
                </div>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: '700', color: '#15803d', marginBottom: '3px' }}>Free Cancellation 24-Hour Policy</div>
                  <div style={{ fontSize: '11.5px', color: '#166534', lineHeight: '1.5' }}>
                    Flexible booking! Cancel up to 24 hours before the ride starts to receive a <strong>100% refund</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Review Booking Details ── */}
          <div style={{ background: '#fff', borderRadius: '12px', border: '1px solid #e5e7eb', overflow: 'hidden', boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}>
            <div style={{ padding: '16px 20px', borderBottom: '1px solid #f0f0f0' }}>
              <h2 style={{ fontSize: '15px', fontWeight: '700', color: '#111', margin: 0 }}>Review Booking Details</h2>
            </div>

            <div style={{ padding: '20px' }}>

              {/* Passenger Information */}
              <div style={{ marginBottom: '16px' }}>
                <div style={{ fontSize: '12px', fontWeight: '600', color: '#6b7280', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Passenger Information</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: '#1f2937', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '14px', fontWeight: '700', flexShrink: 0 }}>
                    {initials}
                  </div>
                  <div style={{ fontSize: '15px', fontWeight: '700', color: '#111' }}>{fullName}</div>
                </div>
                <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: '#374151' }}>
                    <Phone size={13} style={{ color: '#9ca3af' }} />
                    ({passenger.countryCode || '+61'}) {passenger.phone || '—'}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: '#374151' }}>
                    <Mail size={13} style={{ color: '#9ca3af' }} />
                    {passenger.email || '—'}
                  </div>
                </div>
              </div>

              <div style={divider} />

              {/* Flight Information */}
              <div style={{ marginBottom: '16px' }}>
                <div style={{ fontSize: '12px', fontWeight: '600', color: '#6b7280', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Flight Information</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 14px', background: '#f9fafb', borderRadius: '8px' }}>
                  <Plane size={14} style={{ color: '#9ca3af' }} />
                  <span style={{ fontSize: '13.5px', color: passenger.flight ? '#111' : '#9ca3af' }}>
                    {passenger.flight || 'Not provided'}
                  </span>
                </div>
              </div>

              <div style={divider} />

              {/* Special Request */}
              <div style={{ marginBottom: '16px' }}>
                <div style={{ fontSize: '12px', fontWeight: '600', color: '#6b7280', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Special Request</div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', padding: '10px 14px', background: '#f9fafb', borderRadius: '8px' }}>
                  <MessageSquare size={14} style={{ color: '#9ca3af', marginTop: '2px' }} />
                  <span style={{ fontSize: '13.5px', color: passenger.special ? '#111' : '#9ca3af', lineHeight: '1.5' }}>
                    {passenger.special || 'No special requests'}
                  </span>
                </div>
              </div>

              <div style={divider} />

              {/* Coupon Code */}
              <div style={{ marginBottom: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <Tag size={15} style={{ color: '1f2937' }} />
                  <span style={{ fontSize: '13px', fontWeight: '700', color: '#111' }}>Coupon Code</span>
                </div>
                <p style={{ fontSize: '12px', color: '#6b7280', margin: '0 0 10px 0' }}>
                  Have a coupon code? Enter it below to get instant discount on your booking!
                </p>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <input
                    placeholder="Enter your coupon code"
                    value={coupon}
                    onChange={e => setCoupon(e.target.value)}
                    style={{ flex: 1, border: '1px solid #e5e7eb', borderRadius: '8px', padding: '10px 14px', fontSize: '13.5px', outline: 'none', fontFamily: ff, color: '#111' }}
                  />
                  <button
                    onClick={() => coupon && setCouponApplied(true)}
                    style={{ background: couponApplied ? '1f2937' : 'black', color: '#fff', border: 'none', borderRadius: '8px', padding: '10px 20px', fontSize: '13px', fontWeight: '600', cursor: 'pointer', fontFamily: ff, whiteSpace: 'nowrap' }}
                  >
                    {couponApplied ? 'Applied ✓' : 'Apply'}
                  </button>
                </div>
              </div>

              <div style={divider} />

              {/* Price Breakdown */}
              <div style={{ marginBottom: '16px' }}>
                <div style={{ ...rowStyle, marginBottom: '8px' }}>
                  <span style={{ fontSize: '13.5px', color: '#374151' }}>Trip fare</span>
                  <span style={{ fontSize: '13.5px', fontWeight: '600', color: '1f2937' }}>INR {tripFare}</span>
                </div>
                <div style={{ ...rowStyle, marginBottom: '4px' }}>
                  <div>
                    <div style={{ fontSize: '13.5px', color: '#374151' }}>Convenience fee</div>
                    <div style={{ fontSize: '11px', color: '#9ca3af' }}>(non-refundable)</div>
                  </div>
                  <span style={{ fontSize: '13.5px', fontWeight: '600', color: '1f2937' }}>INR {convFee}</span>
                </div>
                <div style={rowStyle}>
                  <span style={{ fontSize: '13.5px', color: '#374151' }}>GST</span>
                  <span style={{ fontSize: '13.5px', fontWeight: '600', color: '#1f2937' }}>INR {gst}</span>
                </div>
              </div>

              <div style={divider} />

              {/* Total Price */}
              <div style={{ ...rowStyle, marginBottom: '20px' }}>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: '700', color: '1f2937' }}>Total Price</div>
                  <div style={{ fontSize: '11px', color: '#9ca3af' }}>Includes GST, Gratuities, Meet & Greet services</div>
                </div>
                <div style={{ fontSize: '22px', fontWeight: '800', color: '1f2937' }}>INR {total}</div>
              </div>

              {/* Buttowidth: 100%; background: rgba(0, 0, 0, 1); color: rgb(255, 255, 255); border: medium; border-radius: 8px; padding: 11px 0px; font-size: 14px; font-weight: 600; cursor: pointer; transition: background 0.2s;ns */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <button
                  onClick={() => navigate(-1)}
                  style={{ padding: '13px', background: '#1f2937', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '14px', fontWeight: '700', cursor: 'pointer', fontFamily: ff, transition: 'background 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.background = '#111827'}
                  onMouseLeave={e => e.currentTarget.style.background = '#1f2937'}
                >
                  Previous
                </button>
                <button
                  onClick={() => alert('🎉 Booking Confirmed! Thank you for choosing Drivado.')}
                  style={{ padding: '13px', background: '#1f2937', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '14px', fontWeight: '700', cursor: 'pointer', fontFamily: ff, transition: 'background 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.background = '#000'}
                  onMouseLeave={e => e.currentTarget.style.background = '#000'}
                >
                  Confirm &amp; Pay
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Form3
