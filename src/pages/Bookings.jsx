import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
   Clock, CheckCircle, ArrowRight, MapPin, Calendar,
   ChevronRight, X, User, Phone, Mail, CreditCard,
   ShieldCheck, Plane, Briefcase, ArrowLeft
} from 'lucide-react';

const Bookings = () => {
   const navigate = useNavigate();
   const [activeTab, setActiveTab] = useState('upcoming');
   const [selectedBooking, setSelectedBooking] = useState(null);

   const upcomingBookings = [
      {
         id: 'DRV-8842',
         vehicle: 'Business Sedan',
         date: '2026-05-15',
         time: '10:30 AM',
         from: 'Melbourne Airport (MEL)',
         to: 'Grand Hyatt Melbourne',
         amount: 'A$125.00',
         status: 'Confirmed',
         type: 'Airport Transfer',
         pax: 3,
         bags: 2,
         img: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=500&q=80'
      }
   ];

   const bookingHistory = [
      {
         id: 'DRV-7721',
         vehicle: 'Sprinter Van',
         date: '2026-04-10',
         time: '09:00 AM',
         from: 'Brisbane Airport',
         to: 'Gold Coast Centre',
         amount: 'A$340.00',
         status: 'Completed',
         type: 'Hourly Rental',
         pax: 12,
         bags: 8,
         img: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=500&q=80'
      }
   ];

   const currentBookings = activeTab === 'upcoming' ? upcomingBookings : bookingHistory;

   const fmtDate = (dateStr) => {
      return new Date(dateStr).toLocaleDateString('en-AU', {
         day: 'numeric',
         month: 'short',
         year: 'numeric'
      });
   };

   return (
      <div className="relative min-h-screen bg-gray-900 pt-24 pb-12 font-sans px-4 md:px-6 overflow-hidden">
         {/* Background Image */}
         <div className="absolute inset-0 z-0">
            <div
               className="absolute inset-0 bg-cover bg-center transition-transform duration-[8000ms] ease-linear"
               style={{
                  backgroundImage: "url('/Home-bg.jpg.webp')",
                  transform: 'scale(1.1)'
               }}
            />
            <div className="absolute inset-0 bg-black/60" />
         </div>

         <div className="relative z-20 max-w-6xl mx-auto animate-fade-in-right">
            
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
               <div className="space-y-2">
                  <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest inline-block">Dashboard</span>
                  <h1 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase">My Bookings.</h1>
               </div>
               <button 
                  onClick={() => navigate('/')}
                  className="flex items-center gap-3 bg-white text-black px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl hover:bg-gray-100 transition-all active:scale-95"
               >
                  Request A Ride <ArrowRight size={18} />
               </button>
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-[32px] md:rounded-[40px] p-1 shadow-2xl mb-8">
               <div className="bg-[#f8f9fa] rounded-[28px] md:rounded-[36px] overflow-hidden">
                  <div className="flex border-b border-gray-200">
                     {['upcoming', 'history'].map((tab) => (
                        <button
                           key={tab}
                           onClick={() => setActiveTab(tab)}
                           className={`flex-1 py-6 md:py-8 text-xs md:text-sm font-black uppercase tracking-widest transition-all relative ${activeTab === tab ? 'text-black bg-white' : 'text-gray-400 hover:text-gray-600'}`}
                        >
                           {tab}
                           {activeTab === tab && <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-black rounded-full" />}
                        </button>
                     ))}
                  </div>

               {/* Booking List */}
               <div className="p-4 md:p-8">
                  {currentBookings.length > 0 ? (
                     <div className="space-y-6">
                        {currentBookings.map((booking) => (
                           <div
                              key={booking.id}
                              onClick={() => setSelectedBooking(booking)}
                              className="group bg-white rounded-3xl border border-gray-100 p-6 md:p-8 hover:shadow-2xl transition-all duration-500 cursor-pointer"
                           >
                              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                                 {/* Vehicle Info */}
                                 <div className="lg:col-span-4 flex items-center gap-6">
                                    <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-50 rounded-2xl overflow-hidden shrink-0">
                                       <img src={booking.img} alt={booking.vehicle} className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                       <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest block mb-1">#{booking.id}</span>
                                       <h3 className="text-lg md:text-xl font-black text-gray-900 tracking-tight uppercase leading-tight">{booking.vehicle}</h3>
                                       <p className="text-[10px] font-black text-emerald-600 uppercase tracking-tight mt-1">{booking.type}</p>
                                    </div>
                                 </div>

                                 {/* Route Info */}
                                 <div className="lg:col-span-4 space-y-4">
                                    <div className="flex items-center gap-4">
                                       <div className="w-2 h-2 rounded-full bg-black shrink-0" />
                                       <p className="text-xs md:text-sm font-bold text-gray-900 truncate">{booking.from}</p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                       <MapPin size={12} className="text-gray-400 shrink-0" />
                                       <p className="text-xs md:text-sm font-bold text-gray-900 truncate">{booking.to}</p>
                                    </div>
                                 </div>

                                 {/* Schedule & Price */}
                                 <div className="lg:col-span-4 flex items-center justify-between lg:justify-end gap-8 pt-6 lg:pt-0 border-t lg:border-t-0 border-gray-50">
                                    <div className="text-left lg:text-right">
                                       <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{fmtDate(booking.date)}</p>
                                       <p className="text-lg font-black text-gray-900 tracking-tighter">{booking.amount}</p>
                                    </div>
                                    <div className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2 ${booking.status === 'Confirmed' ? 'bg-blue-50 text-blue-600' : 'bg-emerald-50 text-emerald-600'}`}>
                                       <CheckCircle size={14} /> {booking.status}
                                    </div>
                                 </div>
                              </div>
                           </div>
                        ))}
                     </div>
                  ) : (
                     <div className="py-20 text-center space-y-6">
                        <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto text-gray-200">
                           <Clock size={40} />
                        </div>
                        <div className="space-y-2">
                           <h3 className="text-xl font-black text-gray-900 uppercase">No Bookings Found</h3>
                           <p className="text-gray-400 font-medium text-sm italic">You don't have any journeys in this category yet.</p>
                        </div>
                     </div>
                  )}
               </div>
            </div>
         </div>
         {/* End of content wrapper */}
      </div>

      {/* Modal */}
         {selectedBooking && (
            <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
               <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedBooking(null)} />
               <div className="relative bg-white w-full max-w-2xl rounded-[32px] md:rounded-[40px] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
                  <div className="p-6 md:p-10">
                     <div className="flex justify-between items-start mb-8">
                        <div>
                           <span className="bg-black text-white text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest mb-2 inline-block">Details</span>
                           <h2 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tighter uppercase leading-none">Booking Summary</h2>
                        </div>
                        <button onClick={() => setSelectedBooking(null)} className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 hover:bg-black hover:text-white transition-all">
                           <X size={20} />
                        </button>
                     </div>

                     <div className="space-y-8">
                        <div className="flex items-center gap-6 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                           <img src={selectedBooking.img} className="w-20 h-20 rounded-xl object-cover shadow-sm" alt="Vehicle" />
                           <div>
                              <h3 className="text-lg font-black text-gray-900 uppercase tracking-tight">{selectedBooking.vehicle}</h3>
                              <div className="flex gap-4 mt-1">
                                 <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-1"><User size={12}/> {selectedBooking.pax} PAX</span>
                                 <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-1"><Briefcase size={12}/> {selectedBooking.bags} BAGS</span>
                              </div>
                           </div>
                        </div>

                        <div className="space-y-4 px-2">
                           <div className="flex gap-4">
                              <div className="flex flex-col items-center pt-1">
                                 <div className="w-2.5 h-2.5 rounded-full bg-black" />
                                 <div className="w-px h-10 bg-gray-200 my-1" />
                              </div>
                              <div>
                                 <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Pickup</p>
                                 <p className="text-sm font-bold text-gray-900">{selectedBooking.from}</p>
                              </div>
                           </div>
                           <div className="flex gap-4">
                              <MapPin size={14} className="text-black shrink-0" />
                              <div>
                                 <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Drop-off</p>
                                 <p className="text-sm font-bold text-gray-900">{selectedBooking.to}</p>
                              </div>
                           </div>
                        </div>

                        <div className="bg-black text-white p-8 rounded-[32px] space-y-6">
                           <div className="flex justify-between items-end">
                              <div>
                                 <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Total Paid</p>
                                 <p className="text-4xl font-black tracking-tighter">{selectedBooking.amount}</p>
                              </div>
                              <div className="text-right">
                                 <p className="text-[10px] font-black text-emerald-400 uppercase tracking-widest flex items-center justify-end gap-1"><ShieldCheck size={14}/> Guaranteed</p>
                                 <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1">Status: {selectedBooking.status}</p>
                              </div>
                           </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                           <button className="flex items-center justify-center gap-2 py-4 rounded-2xl bg-gray-50 text-gray-900 font-black text-[10px] uppercase tracking-widest hover:bg-gray-100 transition-all">
                              <Phone size={14} /> Call Driver
                           </button>
                           <button className="flex items-center justify-center gap-2 py-4 rounded-2xl bg-gray-50 text-gray-900 font-black text-[10px] uppercase tracking-widest hover:bg-gray-100 transition-all">
                              <Mail size={14} /> Support
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         )}
      </div>
   );
};

export default Bookings;
