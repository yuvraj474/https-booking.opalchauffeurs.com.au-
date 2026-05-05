import React from 'react';
import { Globe, Phone, Mail, MapPin, ChevronDown, ArrowUpRight } from 'lucide-react';
import { FaFacebook as Facebook, FaInstagram as Instagram, FaLinkedin as Linkedin, FaYoutube as Youtube } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-[#050505] text-white pt-20 pb-10 px-6 md:px-10 lg:px-20 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section with Logo & Language */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 mb-20">
          <div className="space-y-4">
             <img src="/logo.png" alt="Drivado" className="h-6 md:h-10 invert brightness-200" />
             <p className="text-gray-500 font-medium text-xs max-w-xs italic leading-relaxed">
               Redefining premium ground mobility with local expertise and global scale.
             </p>
          </div>
          <div className="flex gap-4">
            <button className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-2xl hover:bg-white/10 transition-all group">
              <Globe size={18} className="text-gray-400 group-hover:text-white" />
              <span className="text-xs font-black uppercase tracking-widest">English (US)</span>
              <ChevronDown size={14} className="text-gray-500" />
            </button>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-20 border-t border-white/5 pt-20">
          
          {/* Company */}
          <div className="space-y-8">
            <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-500">Company</h3>
            <ul className="space-y-4">
              {['About Us', 'Our Fleet', 'Global Coverage', 'Contact', 'FAQs'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm font-bold text-gray-400 hover:text-white hover:pl-2 transition-all flex items-center gap-2 group">
                    {link} <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-8">
            <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-500">Services</h3>
            <ul className="space-y-4">
              {['Airport Transfers', 'City-to-City', 'Hourly Rentals', 'Corporate Travel', 'Event Mobility'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm font-bold text-gray-400 hover:text-white hover:pl-2 transition-all flex items-center gap-2 group">
                    {link} <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-6 lg:col-span-2">
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Global Offices</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-xs md:text-sm font-bold text-white">
                  <Phone size={14} className="text-gray-500" /> 
                  <span>(IN) +91 80375 65049</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-bold text-white">
                  <Phone size={16} className="text-gray-500" /> 
                  <span>(UK) +44 1224 015428</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-bold text-white">
                  <Phone size={16} className="text-gray-500" /> 
                  <span>(US) +1 337 283 7177</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm font-bold text-white">
                  <Mail size={16} className="text-gray-500" /> 
                  <a href="mailto:support@drivado.com" className="hover:underline">support@drivado.com</a>
                </div>
                <div className="flex items-start gap-3 text-[13px] font-medium text-gray-400 leading-relaxed italic">
                  <MapPin size={18} className="text-gray-500 shrink-0 mt-1" />
                  <span>Srijan Tech Park, Sector V, Salt Lake, Kolkata, India</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10">
             <p className="text-[10px] font-black text-gray-600 uppercase tracking-widest">© 2018—2026 Drivado Transfers</p>
             <div className="flex gap-6">
                {['Privacy', 'Terms', 'Refunds'].map((t) => (
                  <a key={t} href="#" className="text-[10px] font-black text-gray-400 uppercase tracking-widest hover:text-white transition-colors">{t}</a>
                ))}
             </div>
          </div>
          
          <div className="flex gap-4">
            {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
              <button key={i} className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black transition-all duration-300">
                <Icon size={18} />
              </button>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;