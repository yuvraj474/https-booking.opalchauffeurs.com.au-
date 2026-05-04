import React from 'react';
import { Globe, Phone, Mail, MapPin, ChevronDown } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0f0f0f] text-[#8e8e8e] pt-16 pb-12 px-6 lg:px-20 font-sans tracking-tight">
      <div className="max-w-[1440px] mx-auto">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
          <img
            src="/logo.png"
            alt="Drivado"
            className="h-9 invert brightness-200"
          />
          <button className="flex items-center gap-2 bg-[#1a1a1a] text-white px-4 py-2 rounded-xl border border-white/5 hover:bg-white/10 transition-all">
            <Globe size={18} className="text-gray-400" />
            <span className="text-sm font-semibold">EN</span>
            <ChevronDown size={16} className="text-gray-400" />
          </button>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-12 gap-x-8 mb-20">

          {/* Company */}
          <div className="space-y-6">
            <h3 className="text-white text-[17px] font-bold">Company</h3>
            <ul className="space-y-4 text-[15px] font-medium">
              <li><a href="#" className="hover:text-white transition-colors">About us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our journey</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Leadership team</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press & events</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="space-y-6">
            <h3 className="text-white text-[17px] font-bold">Our Services</h3>
            <ul className="space-y-4 text-[15px] font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Airport Transfers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">City to city rides</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Hourly transportation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Event transportation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Corporate travel</a></li>
            </ul>
          </div>

          {/* Trust & Legal */}
          <div className="space-y-6">
            <h3 className="text-white text-[17px] font-bold">Trust & Legal</h3>
            <ul className="space-y-4 text-[15px] font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Terms & conditions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cancellation policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Booking conditions</a></li>
            </ul>
          </div>

          {/* Proud Member & App */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h3 className="text-white text-[17px] font-bold">Proud Member</h3>
              <div className="flex gap-4 items-center">
                <div className="bg-white/5 p-2 rounded-lg border border-white/5">
                  <img src="https://www.drivado.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fnla.8b886d3b.png&w=128&q=75" alt="NLA" className="h-7" />
                </div>
                <div className="bg-white/5 p-2 rounded-lg border border-white/5">
                  <img src="https://www.drivado.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fgbta.2b4b3b1e.png&w=128&q=75" alt="GBTA" className="h-7" />
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-white text-[17px] font-bold">Download Our App</h3>
              <div className="space-y-3">
                <a href="#" className="flex items-center gap-3 bg-[#1a1a1a] p-3 rounded-xl border border-white/5 hover:bg-white/10 transition-all">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Apple_logo_black.svg" alt="App Store" className="h-6 invert" />
                  <div className="text-left">
                    <p className="text-[10px] uppercase font-bold text-gray-500 leading-none">Download on the</p>
                    <p className="text-sm font-bold text-white">App Store</p>
                  </div>
                </a>
                <a href="#" className="flex items-center gap-3 bg-[#1a1a1a] p-3 rounded-xl border border-white/5 hover:bg-white/10 transition-all">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-[38px]" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Us */}
          <div className="space-y-6 lg:pl-4">
            <h3 className="text-white text-[17px] font-bold">Contact Us</h3>
            <ul className="space-y-4 text-[15px] font-medium">
              <li className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
                <Phone size={16} className="text-gray-500" />
                <span>(IN) +91 80375 65049</span>
              </li>
              <li className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
                <Phone size={16} className="text-gray-500" />
                <span>(UK) +44 1224 015428</span>
              </li>
              <li className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
                <Phone size={16} className="text-gray-500" />
                <span>(US) +1 337 283 7177</span>
              </li>
              <li className="flex items-center gap-3 pt-4 hover:text-white transition-colors">
                <Mail size={16} className="text-gray-500" />
                <a href="mailto:support@drivado.com">support@drivado.com</a>
              </li>
              <li className="flex items-start gap-3 pt-4">
                <MapPin size={18} className="text-gray-500 mt-1 shrink-0" />
                <span className="leading-relaxed">
                  Unit 603, Srijan Tech Park, DN 52, Sector V, Salt Lake, Kolkata-700091, India
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[13px] font-medium">© 2018–2026, Drivado Transfers Pvt Ltd. All rights reserved.</p>
          <div className="flex gap-5">
            {[FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube].map((Icon, i) => (
              <a key={i} href="#" className="w-[42px] h-[42px] rounded-full bg-transparent border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all hover:scale-110">
                <Icon size={19} className="text-white" />
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;