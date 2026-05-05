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
      description: 'Experience seamless airport transfers, city-to-city rides, and premium chauffeur services across the globe.'
    },
    {
      image: '/home-bg-2.jpg.webp',
      title: 'Global Mobility Solutions.',
      subtitle: 'Premium Chauffeurs. Modern Fleet.',
      description: 'For Every Journey, Everywhere. We turn every ride into a premium experience with local expertise and global scale.'
    }
  ];

  const stats = [
    { value: '24/7', label: 'Support' },
    { value: '425+', label: 'Cities' },
    { value: '65+', label: 'Countries' },
    { value: '100%', label: 'Guaranteed' },
    { value: '10+', label: 'Years' },
  ];

  useEffect(() => {
    // Set current time as default
    const now = new Date();
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    setPickupTime(`${h}:${m}`);

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

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
    <div className="relative w-full font-sans bg-[#f8f9fa] lg:bg-gray-900 lg:h-screen lg:overflow-hidden flex flex-col lg:block">
      
      {/* Background & Text Section (Top on mobile, full screen on desktop) */}
      <div className="relative w-full pt-28 pb-16 px-6 lg:p-0 lg:absolute lg:inset-0 lg:h-full flex items-center bg-gray-900">
        
        {/* Background Images */}
        <div className="absolute inset-0 overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            >
              <img
                src={slide.image}
                alt={slide.title || "Slider image"}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-[10000ms] ease-linear"
                style={{
                  transform: index === currentSlide ? 'scale(1.15)' : 'scale(1)'
                }}
              />
              <div className="absolute inset-0 bg-black/60 md:bg-black/40" />
            </div>
          ))}
        </div>

        {/* Text Content */}
        <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between lg:h-full lg:px-6">
          <div className="flex-1 text-white space-y-6 md:space-y-10 animate-fade-in-left w-full">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full border border-white/20">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-white">Trusted Worldwide</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-2xl md:text-5xl lg:text-7xl font-black leading-[1.2] tracking-tighter uppercase">
                {slides[currentSlide].title}<br />
                <span className="text-white/80 font-medium normal-case tracking-tight text-xl md:text-5xl lg:text-6xl block mt-2">{slides[currentSlide].subtitle}</span>
              </h1>
              <p className="text-sm md:text-xl text-gray-300 max-w-xl leading-relaxed font-medium italic">
                {slides[currentSlide].description}
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 md:grid-cols-5 gap-4 md:gap-8 pt-4">
              {stats.map((stat, i) => (
                <div key={i} className="space-y-1">
                  <div className="text-xl md:text-3xl font-black tracking-tighter">{stat.value}</div>
                  <div className="text-[8px] md:text-[10px] text-gray-400 uppercase font-black tracking-[0.15em]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Desktop Spacer for Form */}
          <div className="hidden lg:block lg:w-[480px]"></div>
        </div>

        {/* Slide Indicators for mobile */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20 lg:hidden">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-500 rounded-full ${index === currentSlide ? 'bg-white w-10 h-2' : 'bg-white/30 w-2 h-2 hover:bg-white/50'}`}
            />
          ))}
        </div>
      </div>

      {/* Form Container */}
      <div className="relative z-30 w-full max-w-7xl mx-auto px-4 py-4 lg:px-6 lg:py-0 lg:h-screen lg:absolute lg:inset-0 lg:flex lg:items-center lg:justify-end lg:pointer-events-none">
        
        {/* Spacer for desktop left alignment */}
        <div className="hidden lg:block flex-1"></div>

        {/* Right Column: Booking Form Card */}
        <div className="w-full lg:w-[480px] bg-white rounded-[40px] p-1 shadow-2xl lg:animate-fade-in-right relative pointer-events-auto mx-auto lg:mx-0 mt-1 lg:mt-0">
          <form onSubmit={handleContinue} className="bg-[#f8f9fa] rounded-[36px] p-5 md:p-8 space-y-4">

            <div className="mb-1">
              <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest block mb-0.5">Book Your Journey</span>
              <h2 className="text-xl font-black text-gray-900 uppercase tracking-tight">Reserve A Ride</h2>
            </div>

            {/* From Field */}
            <div className="group flex items-center gap-4 bg-white p-4 rounded-2xl border border-gray-100 focus-within:border-black transition-all shadow-sm">
              <div className="text-gray-400 group-focus-within:text-black transition-colors"><Plane size={22} className="rotate-45" /></div>
              <div className="flex-1">
                <label className="block text-[10px] font-black text-gray-400 leading-none mb-1.5 uppercase tracking-widest">Pickup Location</label>
                <input
                  type="text"
                  placeholder="Where from?"
                  value={fromLocation}
                  onChange={(e) => setFromLocation(e.target.value)}
                  className="w-full bg-transparent text-[14px] font-bold outline-none placeholder:text-gray-300 text-black"
                  required
                />
              </div>
              <div className="text-gray-300 cursor-pointer hover:text-black transition-colors"><Target size={20} /></div>
            </div>

            {/* To Field */}
            <div className="group flex items-center gap-4 bg-white p-4 rounded-2xl border border-gray-100 focus-within:border-black transition-all shadow-sm">
              <div className="text-gray-400 group-focus-within:text-black transition-colors"><Plane size={22} className="rotate-135" /></div>
              <div className="flex-1">
                <label className="block text-[10px] font-black text-gray-400 leading-none mb-1.5 uppercase tracking-widest">Drop Location</label>
                <input
                  type="text"
                  placeholder="Where to?"
                  value={toLocation}
                  onChange={(e) => setToLocation(e.target.value)}
                  className="w-full bg-transparent text-[14px] font-bold outline-none placeholder:text-gray-300 text-black"
                  required
                />
              </div>
              <div className="text-gray-300 cursor-pointer hover:text-black transition-colors"><Target size={20} /></div>
            </div>

            {/* Date and Time Row */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-2xl border border-gray-100 focus-within:border-black transition-all shadow-sm">
                <label className="block text-[10px] font-black text-gray-400 mb-1.5 uppercase tracking-widest flex items-center gap-1">
                  <Calendar size={14} /> Date
                </label>
                <input
                  type="date"
                  value={pickupDate}
                  onChange={(e) => setPickupDate(e.target.value)}
                  className="w-full bg-transparent text-[14px] font-bold outline-none cursor-pointer text-black"
                  required
                />
              </div>

              <div className="bg-white p-4 rounded-2xl border border-gray-100 focus-within:border-black transition-all shadow-sm">
                <label className="block text-[10px] font-black text-gray-400 mb-1.5 uppercase tracking-widest flex items-center gap-1">
                  <Clock size={14} /> Time
                </label>
                <input
                  type="time"
                  value={pickupTime}
                  onChange={(e) => setPickupTime(e.target.value)}
                  className="w-full bg-transparent text-[14px] font-bold outline-none cursor-pointer text-black"
                  required
                />
              </div>
            </div>

            {/* Transfer Type Select */}
            <div className="bg-white p-4 rounded-2xl border border-gray-100 focus-within:border-black transition-all shadow-sm relative">
              <label className="block text-[10px] font-black text-gray-400 mb-1.5 uppercase tracking-widest">Transfer Type</label>
              <div className="relative">
                <select
                  value={transferType}
                  onChange={(e) => setTransferType(e.target.value)}
                  className="w-full bg-transparent text-[14px] font-bold outline-none cursor-pointer appearance-none pr-8 text-black"
                >
                  <option value="One Way">One Way Transfer</option>
                  <option value="Hourly">Hourly Booking</option>
                  <option value="Return">Return Trip</option>
                </select>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                  <ChevronDown size={18} />
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-black text-white py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-2xl shadow-black/20 hover:bg-gray-800 transition-all active:scale-95 flex items-center justify-center gap-3"
              >
                Continue To Vehicles <ArrowRight size={20} />
              </button>
              <p className="text-[11px] text-gray-400 mt-4 text-center font-medium italic">Complimentary 15 minutes waiting time included.</p>
            </div>
          </form>
        </div>
      </div>

      {/* Slide Indicators for desktop */}
      <div className="hidden lg:flex absolute bottom-10 left-1/2 -translate-x-1/2 gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-500 rounded-full ${index === currentSlide ? 'bg-white w-10 h-2' : 'bg-white/30 w-2 h-2 hover:bg-white/50'}`}
          />
        ))}
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes fade-in-left {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fade-in-right {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in-left { animation: fade-in-left 0.8s ease-out forwards; }
        .animate-fade-in-right { animation: fade-in-right 0.8s ease-out forwards; }
      `}} />
    </div>

  );
};

export default HomeSlider;
