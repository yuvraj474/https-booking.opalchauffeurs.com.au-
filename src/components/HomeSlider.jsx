import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MapPin,
  Calendar,
  Clock,
  ArrowRight,
  ChevronDown,
  ShieldCheck,
  CreditCard,
  Plane,
  Target
} from 'lucide-react';

const HomeSlider = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [pickupDate, setPickupDate] = useState(new Date().toISOString().split('T')[0]);
  const [pickupTime, setPickupTime] = useState('');
  const [transferType, setTransferType] = useState('One Way');
  const [hours, setHours] = useState('3');
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');
  const [passengers, setPassengers] = useState(1);

  const slides = [
    {
      image: '/Home-bg.jpg.webp',
      title: 'Airport Transfers Worldwide.',
      subtitle: 'Transparent Pricing. On-Time, Every Time.',
      description: 'For Every Journey, Everywhere. Experience seamless airport transfers, city-to-city rides, and premium chauffeur services across the globe.'
    },
    {
      image: '/home-bg-2.jpg.webp',
      title: 'Airport Transfers Worldwide.',
      subtitle: 'Transparent Pricing. On-Time, Every Time.',
      description: 'For Every Journey, Everywhere. Experience seamless airport transfers, city-to-city rides, and premium chauffeur services across the globe.'
    }
  ];

  const stats = [
    { value: '24/7', label: 'Global Support' },
    { value: '425+', label: 'Cities Covered' },
    { value: '65+', label: 'Countries' },
    { value: '100%', label: 'Ride Guaranteed' },
    { value: '10+', label: 'Years of Service' },
  ];

  useEffect(() => {
    // Set current time as default
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    setPickupTime(`${hours}:${minutes}`);

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const handleContinue = (e) => {
    e.preventDefault();
    navigate('/form1', {
      state: {
        from: fromLocation,
        to: toLocation,
        date: pickupDate,
        time: pickupTime,
        type: transferType,
        hours: transferType === 'Hourly' ? hours : null,
        passengers: passengers
      }
    });
  };

  return (
    <div className="relative w-full min-h-screen lg:h-screen overflow-hidden bg-gray-900">
      {/* Background Slider */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[8000ms] ease-linear"
            style={{
              backgroundImage: `url(${slide.image})`,
              transform: index === currentSlide ? 'scale(1.1)' : 'scale(1)'
            }}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      ))}

      {/* Hero Content Overlay */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between pt-24 pb-12 lg:py-0 gap-12">

        {/* Left Column: Content */}
        <div className="flex-1 text-white space-y-8 animate-fade-in-left">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-sm border border-white/20">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-widest text-white">Trusted Worldwide</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {slides[currentSlide].title}<br />
              <span className="text-white/90 font-medium">{slides[currentSlide].subtitle}</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-xl leading-relaxed">
              {slides[currentSlide].description}
            </p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 md:grid-cols-5 gap-6 pt-4">
            {stats.map((stat, i) => (
              <div key={i} className="space-y-1">
                <div className="text-2xl md:text-3xl font-bold">{stat.value}</div>
                <div className="text-[10px] md:text-xs text-gray-400 uppercase font-medium tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Booking Form Card */}
        <div className="w-full lg:w-[480px] bg-white rounded-3xl p-1 shadow-2xl animate-fade-in-right z-30">
          <form onSubmit={handleContinue} className="bg-[#f8f9fa] rounded-[22px] p-6 space-y-4">

            {/* From Field */}
            <div className="flex items-center gap-4 bg-[#eff1f3] p-4 rounded-xl border border-transparent focus-within:border-[#181213] focus-within:bg-white transition-all shadow-sm">
              <div className="text-gray-500"><Plane size={22} className="rotate-45" /></div>
              <div className="flex-1">
                <label className="block text-[12px] font-bold text-gray-900 leading-none mb-1 uppercase tracking-tight">From</label>
                <input
                  type="text"
                  placeholder="Pickup location"
                  value={fromLocation}
                  onChange={(e) => setFromLocation(e.target.value)}
                  className="w-full bg-transparent text-[15px] font-semibold outline-none placeholder:text-gray-400 text-black"
                  required
                />
              </div>
              <div className="text-gray-400 cursor-pointer hover:text-[#2a2324] transition-colors"><Target size={20} /></div>
            </div>

            {/* To Field */}
            <div className="flex items-center gap-4 bg-[#eff1f3] p-4 rounded-xl border border-transparent focus-within:border-[#100e0f] focus-within:bg-white transition-all shadow-sm">
              <div className="text-gray-500"><Plane size={22} className="rotate-135" /></div>
              <div className="flex-1">
                <label className="block text-[12px] font-bold text-gray-900 leading-none mb-1 uppercase tracking-tight">To</label>
                <input
                  type="text"
                  placeholder="Drop location"
                  value={toLocation}
                  onChange={(e) => setToLocation(e.target.value)}
                  className="w-full bg-transparent text-[15px] font-semibold outline-none placeholder:text-gray-400 text-black"
                  required
                />
              </div>
              <div className="text-gray-400 cursor-pointer hover:text-[#000000] transition-colors"><Target size={20} /></div>
            </div>

            {/* Date and Time Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#eff1f3] p-4 rounded-xl border border-transparent focus-within:border-[#181112] focus-within:bg-white transition-all shadow-sm">
                <label className="block text-[12px] font-bold text-gray-900 mb-1 uppercase tracking-tight flex items-center gap-1">
                  <Calendar size={14} className="text-[#1c1819]" /> Pickup Date
                </label>
                <input
                  type="date"
                  value={pickupDate}
                  onChange={(e) => setPickupDate(e.target.value)}
                  className="w-full bg-transparent text-[15px] font-semibold outline-none cursor-pointer text-black"
                  required
                />
              </div>

              <div className="bg-[#eff1f3] p-4 rounded-xl border border-transparent focus-within:border-[#141011] focus-within:bg-white transition-all shadow-sm">
                <label className="block text-[12px] font-bold text-gray-900 mb-1 uppercase tracking-tight flex items-center gap-1">
                  <Clock size={14} className="text-[#160e10]" /> Pickup Time
                </label>
                <input
                  type="time"
                  value={pickupTime}
                  onChange={(e) => setPickupTime(e.target.value)}
                  className="w-full bg-transparent text-[15px] font-semibold outline-none cursor-pointer text-black"
                  required
                />
              </div>
            </div>

            {/* Transfer Type Select */}
            <div className="bg-[#eff1f3] p-4 rounded-xl border border-transparent focus-within:border-[#0d0c0c] focus-within:bg-white transition-all shadow-sm">
              <label className="block text-[12px] font-bold text-gray-900 mb-1 uppercase tracking-tight">Transfer Type</label>
              <div className="relative">
                <select
                  value={transferType}
                  onChange={(e) => setTransferType(e.target.value)}
                  className="w-full bg-transparent text-[15px] font-semibold outline-none cursor-pointer appearance-none pr-8 text-black"
                >
                  <option value="One Way">One Way Transfer</option>
                  <option value="Hourly">Hourly Booking</option>
                  <option value="Return">Return Trip</option>
                </select>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                  <ChevronDown size={18} className="text-gray-500" />
                </div>
              </div>
            </div>

            {/* Hours Select (Conditional) */}
            {transferType === 'Hourly' && (
              <div className="bg-[#eff1f3] p-4 rounded-xl border border-transparent focus-within:border-[#0d0c0c] focus-within:bg-white transition-all shadow-sm">
                <div className="relative">
                  <select
                    value={hours}
                    onChange={(e) => setHours(e.target.value)}
                    className="w-full bg-transparent text-[15px] font-semibold outline-none cursor-pointer appearance-none pr-8 text-black"
                  >
                    {Array.from({ length: 30 }, (_, i) => i + 1).map(h => (
                      <option key={h} value={h}>{h} Hour{h > 1 ? 's' : ''}</option>
                    ))}
                  </select>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                    <ChevronDown size={18} className="text-gray-500" />
                  </div>
                </div>
              </div>
            )}

            <div className="pt-2 text-center">
              <p className="text-[13px] text-gray-500 mb-5 font-medium italic">Chauffeur will wait 15 minutes free of charge.</p>
              <button
                type="submit"
                className="w-full bg-[#000000] hover:bg-black text-white py-4 rounded-xl font-bold transition-all shadow-lg text-lg active:scale-95 flex items-center justify-center gap-2"
              >
                Continue <ArrowRight size={20} />
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 pt-4 border-t border-gray-200">
              <div className="flex items-center gap-1 text-[9px] text-gray-500 font-bold uppercase tracking-tighter">
                <ShieldCheck size={12} className="text-green-500" /> Verified
              </div>
              <div className="flex items-center gap-1 text-[9px] text-gray-500 font-bold uppercase tracking-tighter">
                <Clock size={12} className="text-green-500" /> No Hidden
              </div>
              <div className="flex items-center gap-1 text-[9px] text-gray-500 font-bold uppercase tracking-tighter">
                <ShieldCheck size={12} className="text-green-500" /> On-Time
              </div>
              <div className="flex items-center gap-1 text-[9px] text-gray-500 font-bold uppercase tracking-tighter">
                <CreditCard size={12} className="text-green-500" /> Secure
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${index === currentSlide ? 'bg-[#151314] w-10' : 'bg-white/50 hover:bg-white'
              }`}
          />
        ))}
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes fade-in-left {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fade-in-right {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in-left { animation: fade-in-left 1s ease-out forwards; }
        .animate-fade-in-right { animation: fade-in-right 1s ease-out forwards; }
      `}} />
    </div>

  );
};

export default HomeSlider;



