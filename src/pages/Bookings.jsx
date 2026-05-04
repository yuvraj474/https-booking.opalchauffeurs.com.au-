import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, CheckCircle, ArrowRight } from 'lucide-react';

const Bookings = () => {
   const navigate = useNavigate();
   const [activeTab, setActiveTab] = useState('upcoming');

   // Dummy booking history data (initially empty)
   const [bookingHistory] = useState([]);

   // Dummy upcoming bookings (initially empty to match screenshot)
   const [upcomingBookings] = useState([]);

   const currentBookings = activeTab === 'upcoming' ? upcomingBookings : bookingHistory;

   return (
      <div className="relative w-full min-h-screen overflow-x-hidden bg-gray-900 flex flex-col items-center justify-start px-4 pt-28 pb-12">
         {/* Background Slider */}
         <div className="fixed inset-0 z-0">
            <div
               className="absolute inset-0 bg-cover bg-center transition-transform duration-[8000ms] ease-linear"
               style={{
                  backgroundImage: "url('/Home-bg.jpg.webp')",
                  transform: 'scale(1.1)'
               }}
            />
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
         </div>

         <div className="relative z-20 w-full max-w-4xl bg-white rounded-3xl p-1 shadow-2xl animate-fade-in-up">
            <div className="bg-[#f8f9fa] rounded-[22px] p-8 md:p-10 min-h-[60vh] flex flex-col">
               
               <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
                  <div className="flex items-center gap-4 mb-4 md:mb-0">
                     <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center text-white shadow-lg">
                        <Clock size={28} />
                     </div>
                     <div>
                        <h2 className="text-3xl font-bold text-gray-900">My Bookings</h2>
                        <p className="text-sm text-gray-500 font-medium mt-1">Manage your trips</p>
                     </div>
                  </div>
                  <button 
                     onClick={() => navigate('/')}
                     className="bg-black text-white px-6 py-3 rounded-xl font-bold transition-all hover:bg-gray-800 active:scale-[0.98] flex items-center justify-center gap-2 shadow-lg"
                  >
                     Book New Ride <ArrowRight size={18} />
                  </button>
               </div>

               {/* Tabs Section */}
               <div className="flex gap-8 mb-8 border-b border-gray-200">
                  <button 
                     onClick={() => setActiveTab('upcoming')}
                     className={`pb-4 text-xl font-bold transition-all relative ${activeTab === 'upcoming' ? 'text-black' : 'text-gray-400 hover:text-gray-600'}`}
                  >
                     Upcoming
                     {activeTab === 'upcoming' && <div className="absolute bottom-0 left-0 w-full h-1 bg-black rounded-full" />}
                  </button>
                  <button 
                     onClick={() => setActiveTab('history')}
                     className={`pb-4 text-xl font-bold transition-all relative ${activeTab === 'history' ? 'text-black' : 'text-gray-400 hover:text-gray-600'}`}
                  >
                     History
                     {activeTab === 'history' && <div className="absolute bottom-0 left-0 w-full h-1 bg-black rounded-full" />}
                  </button>
               </div>

               <div className="flex-1">
                  {currentBookings.length > 0 ? (
                     <div className="grid gap-4">
                        {currentBookings.map((booking, idx) => (
                           <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer">
                              <div className="flex items-start sm:items-center gap-5">
                                 <div className="w-12 h-12 bg-[#eff1f3] rounded-full flex items-center justify-center text-gray-400 group-hover:text-black transition-colors shrink-0">
                                    <Clock size={20} />
                                 </div>
                                 <div>
                                    <h4 className="text-lg font-bold text-gray-900 group-hover:text-black transition-colors">{booking.vehicle}</h4>
                                    <div className="flex items-center gap-3 mt-1 text-sm">
                                       <span className="font-bold text-gray-400 tracking-wider">#{booking.id}</span>
                                       <span className="text-gray-300">•</span>
                                       <span className="text-gray-500 font-medium">{booking.date}</span>
                                    </div>
                                 </div>
                              </div>
                              <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-2 sm:gap-1 mt-2 sm:mt-0 pt-4 sm:pt-0 border-t sm:border-t-0 border-gray-50 w-full sm:w-auto">
                                 <span className="text-xl font-bold text-gray-900">{booking.amount}</span>
                                 <span className="bg-green-100 text-green-700 text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-sm">
                                    <CheckCircle size={12} /> {booking.status}
                                 </span>
                              </div>
                           </div>
                        ))}
                     </div>
                  ) : (
                     <div className="flex flex-col items-center justify-center text-center h-full py-20">
                        <h3 className="text-2xl font-bold text-[#2d3748]">
                           {activeTab === 'upcoming' ? 'No Booking' : 'No Data'}
                        </h3>
                     </div>
                  )}
               </div>
            </div>
         </div>

         <style dangerouslySetInnerHTML={{
            __html: `
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.5s ease-out forwards; }
      `}} />
      </div>
   );
};

export default Bookings;
