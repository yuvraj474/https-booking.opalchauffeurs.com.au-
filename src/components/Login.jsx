import React, { useState } from "react";
import { ArrowRight, Mail, Lock, Phone, Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [page, setPage] = useState("login");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // signup form state
  const [signupData, setSignupData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  });

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gray-900 flex items-center justify-center px-4 pt-24 pb-12">
      {/* Background Slider equivalent */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/Home-bg.jpg.webp')` }}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Card Content */}
      <div className="relative z-20 w-full max-w-[480px] bg-white rounded-3xl p-1 shadow-2xl animate-fade-in-up">
        
        {/* LOGIN PAGE */}
        {page === "login" && (
          <div className="bg-[#f8f9fa] rounded-[22px] p-8">
            <h2 className="text-3xl font-bold text-center mb-2 text-gray-900">
              Welcome Back
            </h2>
            <p className="text-center text-gray-500 mb-8 text-sm font-medium">
              Log in to continue your journey
            </p>

            <form onSubmit={(e) => {
                e.preventDefault();
                localStorage.setItem('isLoggedIn', 'true');
                window.dispatchEvent(new Event('authChange'));
                navigate("/");
              }}
              className="space-y-5"
            >
              {/* Email */}
              <div className="bg-[#eff1f3] p-4 rounded-xl border border-transparent focus-within:border-[#181213] focus-within:bg-white transition-all shadow-sm flex items-center gap-4">
                <Mail size={20} className="text-gray-500" />
                <div className="flex-1">
                  <label className="block text-[12px] font-bold text-gray-900 leading-none mb-1 uppercase tracking-tight">Email Address</label>
                  <input type="email" placeholder="Enter your email" required className="w-full bg-transparent text-[15px] font-semibold outline-none placeholder:text-gray-400 text-black" />
                </div>
              </div>

              {/* Password */}
              <div className="bg-[#eff1f3] p-4 rounded-xl border border-transparent focus-within:border-[#181213] focus-within:bg-white transition-all shadow-sm flex items-center gap-4">
                <Lock size={20} className="text-gray-500" />
                <div className="flex-1">
                  <label className="block text-[12px] font-bold text-gray-900 leading-none mb-1 uppercase tracking-tight">Password</label>
                  <input type={showPassword ? "text" : "password"} placeholder="Enter your password" required className="w-full bg-transparent text-[15px] font-semibold outline-none placeholder:text-gray-400 text-black" />
                </div>
                <div className="text-gray-400 cursor-pointer hover:text-gray-700 transition-colors" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </div>
              </div>

              <div className="text-right">
                <button type="button" onClick={() => setPage("forgot")} className="text-[13px] text-gray-600 font-bold hover:text-black transition-colors">
                  Forgot Password?
                </button>
              </div>

              <button type="submit" className="w-full bg-[#000000] hover:bg-black text-white py-4 rounded-xl font-bold transition-all shadow-lg text-lg active:scale-95 flex items-center justify-center gap-2 mt-4">
                Log In <ArrowRight size={20} />
              </button>
            </form>

            <p className="text-center mt-6 text-[14px] text-gray-600 font-medium">
              Don't have an account?{" "}
              <span onClick={() => setPage("signup")} className="text-black font-bold cursor-pointer hover:underline">
                Sign up
              </span>
            </p>
          </div>
        )}

        {/* FORGOT PAGE */}
        {page === "forgot" && (
          <div className="bg-[#f8f9fa] rounded-[22px] p-8">
            <h2 className="text-3xl font-bold text-center mb-2 text-gray-900">
              Reset Password
            </h2>
            <p className="text-center text-gray-500 mb-8 text-sm font-medium">
              Enter your email to receive reset instructions
            </p>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="bg-[#eff1f3] p-4 rounded-xl border border-transparent focus-within:border-[#181213] focus-within:bg-white transition-all shadow-sm flex items-center gap-4">
                <Mail size={20} className="text-gray-500" />
                <div className="flex-1">
                  <label className="block text-[12px] font-bold text-gray-900 leading-none mb-1 uppercase tracking-tight">Email Address</label>
                  <input type="email" placeholder="Enter your email" required className="w-full bg-transparent text-[15px] font-semibold outline-none placeholder:text-gray-400 text-black" />
                </div>
              </div>

              <button className="w-full bg-[#000000] hover:bg-black text-white py-4 rounded-xl font-bold transition-all shadow-lg text-lg active:scale-95 flex items-center justify-center gap-2 mt-4">
                Send Reset Link
              </button>
            </form>

            <p onClick={() => setPage("login")} className="text-black font-bold text-center mt-6 cursor-pointer hover:underline text-[14px]">
              Back to log in
            </p>
          </div>
        )}

        {/* SIGNUP PAGE */}
        {page === "signup" && (
          <div className="bg-[#f8f9fa] rounded-[22px] p-8 max-h-[85vh] overflow-y-auto custom-scrollbar">
            <h2 className="text-3xl font-bold text-center mb-2 text-gray-900">
              Create Account
            </h2>
            <p className="text-center text-gray-500 mb-8 text-sm font-medium">
              Join us for a premium experience
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const { firstName, lastName, email, phone, password } = signupData;
                if (!firstName || !lastName || !email || !phone || !password) {
                  alert("Please fill all fields");
                  return;
                }
                const emailCheck = /\S+@\S+\.\S+/;
                if (!emailCheck.test(email)) {
                  alert("Enter valid email");
                  return;
                }
                if (phone.length !== 10) {
                  alert("Enter valid 10 digit phone number");
                  return;
                }
                localStorage.setItem('isLoggedIn', 'true');
                window.dispatchEvent(new Event('authChange'));
                navigate("/");
              }}
              className="space-y-4"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#eff1f3] p-4 rounded-xl border border-transparent focus-within:border-[#181213] focus-within:bg-white transition-all shadow-sm">
                  <label className="block text-[12px] font-bold text-gray-900 leading-none mb-1 uppercase tracking-tight">First Name</label>
                  <input type="text" placeholder="First Name" value={signupData.firstName} onChange={(e) => setSignupData({ ...signupData, firstName: e.target.value })} required className="w-full bg-transparent text-[15px] font-semibold outline-none placeholder:text-gray-400 text-black" />
                </div>
                <div className="bg-[#eff1f3] p-4 rounded-xl border border-transparent focus-within:border-[#181213] focus-within:bg-white transition-all shadow-sm">
                  <label className="block text-[12px] font-bold text-gray-900 leading-none mb-1 uppercase tracking-tight">Last Name</label>
                  <input type="text" placeholder="Last Name" value={signupData.lastName} onChange={(e) => setSignupData({ ...signupData, lastName: e.target.value })} required className="w-full bg-transparent text-[15px] font-semibold outline-none placeholder:text-gray-400 text-black" />
                </div>
              </div>

              <div className="bg-[#eff1f3] p-4 rounded-xl border border-transparent focus-within:border-[#181213] focus-within:bg-white transition-all shadow-sm flex items-center gap-4">
                <Mail size={20} className="text-gray-500" />
                <div className="flex-1">
                  <label className="block text-[12px] font-bold text-gray-900 leading-none mb-1 uppercase tracking-tight">Email</label>
                  <input type="email" placeholder="Email address" value={signupData.email} onChange={(e) => setSignupData({ ...signupData, email: e.target.value })} required className="w-full bg-transparent text-[15px] font-semibold outline-none placeholder:text-gray-400 text-black" />
                </div>
              </div>

              <div className="bg-[#eff1f3] p-4 rounded-xl border border-transparent focus-within:border-[#181213] focus-within:bg-white transition-all shadow-sm flex items-center gap-4">
                <Phone size={20} className="text-gray-500" />
                <div className="flex-1">
                  <label className="block text-[12px] font-bold text-gray-900 leading-none mb-1 uppercase tracking-tight">Phone</label>
                  <input type="text" placeholder="Phone Number" value={signupData.phone} onChange={(e) => {
                    const onlyNumbers = e.target.value.replace(/[^0-9]/g, "");
                    setSignupData({ ...signupData, phone: onlyNumbers });
                  }} maxLength="10" required className="w-full bg-transparent text-[15px] font-semibold outline-none placeholder:text-gray-400 text-black" />
                </div>
              </div>

              <div className="bg-[#eff1f3] p-4 rounded-xl border border-transparent focus-within:border-[#181213] focus-within:bg-white transition-all shadow-sm flex items-center gap-4">
                <Lock size={20} className="text-gray-500" />
                <div className="flex-1">
                  <label className="block text-[12px] font-bold text-gray-900 leading-none mb-1 uppercase tracking-tight">Password</label>
                  <input type={showPassword ? "text" : "password"} placeholder="Password" value={signupData.password} onChange={(e) => setSignupData({ ...signupData, password: e.target.value })} required className="w-full bg-transparent text-[15px] font-semibold outline-none placeholder:text-gray-400 text-black" />
                </div>
                <div className="text-gray-400 cursor-pointer hover:text-gray-700 transition-colors" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </div>
              </div>

              <button className="w-full bg-[#000000] hover:bg-black text-white py-4 rounded-xl font-bold transition-all shadow-lg text-lg active:scale-95 flex items-center justify-center gap-2 mt-4">
                Create Account <ArrowRight size={20} />
              </button>
            </form>

            <p className="text-center mt-6 text-[14px] text-gray-600 font-medium">
              Already have an account?{" "}
              <span onClick={() => setPage("login")} className="text-black font-bold cursor-pointer hover:underline">
                Log in
              </span>
            </p>
          </div>
        )}

      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.6s ease-out forwards; }
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #d1d5db; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #9ca3af; }
      `}} />
    </div>
  );
};

export default Login;