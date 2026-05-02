import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Phone, LogOut, CheckCircle, Edit2, MapPin, ArrowRight, Camera, XCircle } from 'lucide-react';

const Profile = () => {
   const navigate = useNavigate();
   const [isEditing, setIsEditing] = useState(false);

   // Load data from localStorage or use defaults
   const [profileData, setProfileData] = useState(() => {
      const savedData = localStorage.getItem('userProfile');
      return savedData ? JSON.parse(savedData) : {
         firstName: "John",
         lastName: "Doe",
         email: "johndoe@example.com",
         phone: "9876543210",
         address: "123 Premium Chauffeur Lane, New York, NY",
      };
   });

   // Handle Input Changes
   const handleChange = (field, value) => {
      setProfileData(prev => ({
         ...prev,
         [field]: value
      }));
   };

   const handleLogout = () => {
      localStorage.removeItem('isLoggedIn');
      window.dispatchEvent(new Event('authChange'));
      navigate('/');
   };

   const handleUpdate = (e) => {
      e.preventDefault();
      localStorage.setItem('userProfile', JSON.stringify(profileData));
      setIsEditing(false);
      alert("Profile Updated Successfully!");
   };

   return (
      <div className="relative w-full min-h-screen overflow-hidden bg-gray-900 flex items-center justify-center px-4 pt-24 pb-12">
         {/* Background Slider equivalent to Home page */}
         <div className="absolute inset-0 z-0">
            <div
               className="absolute inset-0 bg-cover bg-center transition-transform duration-[8000ms] ease-linear"
               style={{
                  backgroundImage: "url('/Home-bg.jpg.webp')",
                  transform: 'scale(1.1)'
               }}
            />
            <div className="absolute inset-0 bg-black/50" />
         </div>

         {/* Profile Card - Matching the Booking Form Theme */}
         <div className="relative z-20 w-full lg:w-[480px] bg-white rounded-3xl p-1 shadow-2xl animate-fade-in-right">
            <div className="bg-[#f8f9fa] rounded-[22px] p-8 space-y-6">

               <div className="text-center pb-2">
                  <div className="relative inline-block mb-4">
                     <div className="w-24 h-24 bg-[#eff1f3] rounded-full flex items-center justify-center text-gray-400 border-4 border-white shadow-md overflow-hidden">
                        <User size={48} />
                     </div>
                     {isEditing && (
                        <button className="absolute bottom-0 right-0 bg-black text-white p-2 rounded-full shadow-lg border-2 border-white hover:scale-110 transition-transform">
                           <Camera size={14} />
                        </button>
                     )}
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 leading-tight">
                     {isEditing ? "Edit Profile" : "Your Profile"}
                  </h2>
                  <p className="text-[13px] text-gray-500 font-medium mt-1">
                     {isEditing ? "Update your personal details below" : "View your premium account details"}
                  </p>
               </div>

               <form onSubmit={handleUpdate} className="space-y-4">

                  {/* Name Fields Row */}
                  <div className="grid grid-cols-2 gap-4">
                     <div className={`flex flex-col p-4 rounded-xl border transition-all duration-300 ${isEditing ? 'border-black bg-white ring-2 ring-black/5 shadow-lg' : 'border-transparent bg-[#eff1f3]'}`}>
                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">First Name</label>
                        <input
                           type="text"
                           value={profileData.firstName}
                           onChange={(e) => handleChange('firstName', e.target.value)}
                           readOnly={!isEditing}
                           className={`w-full bg-transparent text-[15px] font-bold outline-none ${isEditing ? 'text-black' : 'text-gray-700 cursor-default'}`}
                           placeholder="First Name"
                           required
                        />
                     </div>
                     <div className={`flex flex-col p-4 rounded-xl border transition-all duration-300 ${isEditing ? 'border-black bg-white ring-2 ring-black/5 shadow-lg' : 'border-transparent bg-[#eff1f3]'}`}>
                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Last Name</label>
                        <input
                           type="text"
                           value={profileData.lastName}
                           onChange={(e) => handleChange('lastName', e.target.value)}
                           readOnly={!isEditing}
                           className={`w-full bg-transparent text-[15px] font-bold outline-none ${isEditing ? 'text-black' : 'text-gray-700 cursor-default'}`}
                           placeholder="Last Name"
                           required
                        />
                     </div>
                  </div>

                  {/* Email Field */}
                  <div className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 ${isEditing ? 'border-black bg-white ring-2 ring-black/5 shadow-lg' : 'border-transparent bg-[#eff1f3]'}`}>
                     <Mail size={20} className={isEditing ? "text-black" : "text-gray-400"} />
                     <div className="flex-1">
                        <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Email Address</label>
                        <input
                           type="email"
                           value={profileData.email}
                           onChange={(e) => handleChange('email', e.target.value)}
                           readOnly={!isEditing}
                           className={`w-full bg-transparent text-[15px] font-bold outline-none ${isEditing ? 'text-black' : 'text-gray-700 cursor-default'}`}
                           placeholder="your@email.com"
                           required
                        />
                     </div>
                  </div>

                  {/* Phone Field */}
                  <div className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 ${isEditing ? 'border-black bg-white ring-2 ring-black/5 shadow-lg' : 'border-transparent bg-[#eff1f3]'}`}>
                     <Phone size={20} className={isEditing ? "text-black" : "text-gray-400"} />
                     <div className="flex-1">
                        <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Phone Number</label>
                        <input
                           type="text"
                           value={profileData.phone}
                           onChange={(e) => handleChange('phone', e.target.value.replace(/[^0-9]/g, ""))}
                           readOnly={!isEditing}
                           className={`w-full bg-transparent text-[15px] font-bold outline-none ${isEditing ? 'text-black' : 'text-gray-700 cursor-default'}`}
                           placeholder="10-digit number"
                           maxLength="10"
                           required
                        />
                     </div>
                  </div>

                  {/* Address Field */}
                  <div className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 ${isEditing ? 'border-black bg-white ring-2 ring-black/5 shadow-lg' : 'border-transparent bg-[#eff1f3]'}`}>
                     <MapPin size={20} className={isEditing ? "text-black" : "text-gray-400"} />
                     <div className="flex-1">
                        <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Address</label>
                        <input
                           type="text"
                           value={profileData.address}
                           onChange={(e) => handleChange('address', e.target.value)}
                           readOnly={!isEditing}
                           className={`w-full bg-transparent text-[15px] font-bold outline-none ${isEditing ? 'text-black' : 'text-gray-700 cursor-default'}`}
                           placeholder="Full Address"
                           required
                        />
                     </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-6 space-y-3">
                     {!isEditing ? (
                        <button
                           type="button"
                           onClick={() => setIsEditing(true)}
                           className="w-full bg-black text-white py-4 rounded-2xl font-bold transition-all shadow-xl hover:bg-gray-800 active:scale-[0.98] flex items-center justify-center gap-3 text-lg"
                        >
                           <Edit2 size={20} /> Edit Profile
                        </button>
                     ) : (
                        <div className="flex gap-3">
                           <button
                              type="button"
                              onClick={() => setIsEditing(false)}
                              className="flex-1 bg-white border-2 border-gray-200 text-gray-600 py-4 rounded-2xl font-bold transition-all hover:bg-gray-50 active:scale-[0.98] flex items-center justify-center gap-2"
                           >
                              <XCircle size={20} /> Cancel
                           </button>
                           <button
                              type="submit"
                              className="flex-[2] bg-black text-white py-4 rounded-2xl font-bold transition-all shadow-xl hover:bg-gray-800 active:scale-[0.98] flex items-center justify-center gap-2 text-lg"
                           >
                              Update Profile <CheckCircle size={20} />
                           </button>
                        </div>
                     )}

                     <button
                        type="button"
                        onClick={handleLogout}
                        className={`w-full flex items-center justify-center gap-2 py-3 font-bold transition-all rounded-xl ${isEditing ? 'text-gray-400 opacity-50 cursor-not-allowed' : 'text-red-500 hover:bg-red-50'}`}
                        disabled={isEditing}
                     >
                        <LogOut size={18} /> Logout Account
                     </button>
                  </div>
               </form>
            </div>
         </div>

         <style dangerouslySetInnerHTML={{
            __html: `
        @keyframes fade-in-right {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in-right { animation: fade-in-right 0.6s ease-out forwards; }
      `}} />
      </div>
   );
};

export default Profile;
