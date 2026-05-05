import React from 'react';
import { MapPin, Phone, Mail, Send, Globe } from "lucide-react";
import { FaFacebook as Facebook, FaInstagram as Instagram, FaLinkedin as Linkedin, FaYoutube as Youtube } from "react-icons/fa";
const ContactSection = () => {
  return (
    <section className="bg-white py-16 md:py-32 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-32 space-y-6">
          <span className="bg-black text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest inline-block">Support</span>
          <h1 className="text-3xl md:text-6xl font-black text-gray-900 tracking-tighter leading-tight">
            We're Here to Help.
          </h1>
          <p className="text-gray-500 font-medium text-base md:text-lg italic">
            "Your journey is our priority. Reach out to our dedicated concierge team anytime, anywhere."
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* LEFT SIDE: Contact Info */}
          <div className="space-y-12">
            <div className="space-y-8">
              <h2 className="text-2xl md:text-4xl font-black text-gray-900 tracking-tighter uppercase leading-none">Contact Information</h2>
              <p className="text-gray-400 font-medium text-sm md:text-base leading-relaxed">
                Connect with our global offices. Our support team is available 24/7 to ensure your travel experience is seamless.
              </p>
            </div>

            <div className="space-y-8">
              {/* Address */}
              <div className="flex gap-6 group">
                <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-3xl bg-gray-50 border border-gray-100 text-black group-hover:bg-black group-hover:text-white transition-all duration-300">
                  <MapPin size={24} />
                </div>
                <div className="space-y-1">
                  <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Global Headquarters</h3>
                  <p className="text-[14px] md:text-[16px] font-bold text-gray-900 leading-relaxed">
                    Unit 603, Srijan Tech Park, DN 52, <br className="hidden md:block" />
                    Sector V, Salt Lake, Kolkata-700091, India
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-6 group">
                <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-3xl bg-gray-50 border border-gray-100 text-black group-hover:bg-black group-hover:text-white transition-all duration-300">
                  <Phone size={24} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Phone Support</h3>
                  <div className="space-y-1">
                    <p className="text-[14px] md:text-[16px] font-bold text-gray-900 flex items-center gap-2">
                      <span className="text-gray-400 text-xs">(IN)</span> +91 80375 65049
                    </p>
                    <p className="text-[14px] md:text-[16px] font-bold text-gray-900 flex items-center gap-2">
                      <span className="text-gray-400 text-xs">(UK)</span> +44 1224 015428
                    </p>
                    <p className="text-[14px] md:text-[16px] font-bold text-gray-900 flex items-center gap-2">
                      <span className="text-gray-400 text-xs">(US)</span> +1 337 283 7177
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-6 group">
                <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-3xl bg-gray-50 border border-gray-100 text-black group-hover:bg-black group-hover:text-white transition-all duration-300">
                  <Mail size={24} />
                </div>
                <div className="space-y-1">
                  <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Email Correspondence</h3>
                  <a href="mailto:support@drivado.com" className="text-[14px] md:text-[16px] font-bold text-gray-900 hover:underline">
                    support@drivado.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="pt-8 border-t border-gray-100">
              <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-6">Connect Globally</h3>
              <div className="flex gap-4">
                {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
                  <button key={i} className="w-12 h-12 rounded-2xl border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-black hover:text-white hover:border-black transition-all">
                    <Icon size={20} />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Contact Form */}
          <div className="bg-[#f8f9fa] rounded-[40px] md:rounded-[60px] p-8 md:p-12 lg:p-16 border border-gray-100 shadow-xl">
            <div className="mb-10">
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tighter uppercase leading-none mb-4">Send a Message</h2>
              <p className="text-gray-400 font-medium text-sm italic">Share your inquiries or feedback with us.</p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-2">Your Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full bg-white border border-gray-100 rounded-2xl px-6 py-4 text-sm font-bold focus:outline-none focus:border-black transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="name@email.com"
                    className="w-full bg-white border border-gray-100 rounded-2xl px-6 py-4 text-sm font-bold focus:outline-none focus:border-black transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-2">Subject</label>
                <input
                  type="text"
                  placeholder="How can we help?"
                  className="w-full bg-white border border-gray-100 rounded-2xl px-6 py-4 text-sm font-bold focus:outline-none focus:border-black transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-2">Message</label>
                <textarea
                  placeholder="Describe your inquiry..."
                  rows="5"
                  className="w-full bg-white border border-gray-100 rounded-2xl px-6 py-4 text-sm font-bold focus:outline-none focus:border-black transition-all resize-none"
                />
              </div>

              <div className="flex items-start gap-4 py-2">
                <div className="relative flex items-center">
                   <input type="checkbox" className="w-5 h-5 rounded-lg border-2 border-gray-200 focus:ring-0 accent-black cursor-pointer" />
                </div>
                <p className="text-[12px] font-medium text-gray-500 leading-relaxed">
                  I agree to the <span className="text-black font-black underline cursor-pointer">Privacy Policy</span> and consent to my data being processed.
                </p>
              </div>

              <button className="w-full bg-black text-white py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-2xl shadow-black/10 hover:bg-gray-800 active:scale-95 transition-all flex items-center justify-center gap-3">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-20 md:mt-32 p-8 md:p-16 bg-gray-50 rounded-[40px] md:rounded-[60px] border border-gray-100 flex flex-col lg:flex-row justify-between items-center gap-10">
          <div className="space-y-4 max-w-xl text-center lg:text-left">
            <h2 className="text-2xl md:text-4xl font-black text-gray-900 tracking-tighter uppercase leading-none">
              Stay in the Loop.
            </h2>
            <p className="text-gray-400 font-medium text-sm md:text-base italic">
              Subscribe to our newsletter for exclusive offers and travel insights.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row w-full lg:w-auto gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-white border border-gray-100 rounded-2xl px-6 py-4 text-sm font-bold focus:outline-none focus:border-black transition-all w-full sm:w-80"
            />
            <button className="bg-black text-white px-10 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-gray-800 transition-all shadow-xl shadow-black/5">
              Subscribe
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;