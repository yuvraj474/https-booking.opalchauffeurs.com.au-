import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { User, LogOut, ChevronDown, Menu, X, Globe, PhoneCall } from "lucide-react";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const dropdownRef = useRef(null);
  const servicesRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleAuthChange = () => {
      setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
    };
    window.addEventListener('authChange', handleAuthChange);
    return () => window.removeEventListener('authChange', handleAuthChange);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    setIsDropdownOpen(false);
    window.dispatchEvent(new Event('authChange'));
    navigate('/');
  };

  return (
    <nav className="bg-white/90 backdrop-blur-md border-b border-gray-100 fixed w-full z-[100] font-sans">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 z-50">
          <img src="/logo.png" alt="Drivado" className="h-6 md:h-8" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 text-gray-500 font-bold text-[11px] uppercase tracking-widest">
          <Link to="/" className="hover:text-black transition">Home</Link>

          {/* Services Dropdown */}
          <div className="relative" ref={servicesRef} onMouseLeave={() => setIsServicesOpen(false)}>
            <div className="flex items-center gap-1.5">
              <Link
                to="/services"
                onMouseEnter={() => setIsServicesOpen(true)}
                onClick={() => { setIsServicesOpen(false); window.scrollTo(0, 0); }}
                className={`hover:text-black transition ${isServicesOpen ? 'text-black' : ''}`}
              >
                Services
              </Link>
              <button
                onMouseEnter={() => setIsServicesOpen(true)}
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="focus:outline-none"
              >
                <ChevronDown size={14} className={`transition-transform duration-200 hover:text-black ${isServicesOpen ? 'rotate-180 text-black' : ''}`} />
              </button>
            </div>

            {isServicesOpen && (
              <div
                className="absolute left-0 mt-2 w-64 bg-white rounded-3xl shadow-2xl border border-gray-50 py-4 overflow-hidden flex flex-col z-[110] animate-fade-in-down"
              >
                <div className="px-6 py-2 mb-2 border-b border-gray-50">
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Our Offerings</span>
                </div>
                <Link to="/airport-transfers" onClick={() => setTimeout(() => { setIsServicesOpen(false); window.scrollTo(0, 0); }, 0)} className="px-6 py-3 text-[13px] font-black text-gray-900 hover:bg-gray-50 transition">Airport Transfers</Link>
                <Link to="/city-to-city" onClick={() => setTimeout(() => { setIsServicesOpen(false); window.scrollTo(0, 0); }, 0)} className="px-6 py-3 text-[13px] font-black text-gray-900 hover:bg-gray-50 transition">City To City</Link>
                <Link to="/hourly-rentals" onClick={() => setTimeout(() => { setIsServicesOpen(false); window.scrollTo(0, 0); }, 0)} className="px-6 py-3 text-[13px] font-black text-gray-900 hover:bg-gray-50 transition">Hourly Rentals</Link>
              </div>
            )}
          </div>

          <Link to="/fleets" className="hover:text-black transition">Fleets</Link>
          <Link to="/about" className="hover:text-black transition">About us</Link>
          <Link to="/contact" className="hover:text-black transition">Contact us</Link>
        </div>

        {/* Right Section (Desktop) */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-2 text-gray-400 border-r border-gray-100 pr-6 mr-2">
            <Globe size={16} />
            <span className="text-[10px] font-black uppercase tracking-widest"></span>
          </div>

          {isLoggedIn ? (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`flex items-center justify-center w-10 h-10 rounded-full transition ${isDropdownOpen ? 'bg-black text-white' : 'bg-gray-50 text-gray-900 hover:bg-gray-100'}`}
              >
                <User size={18} />
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-3 w-56 bg-white rounded-3xl shadow-2xl border border-gray-50 py-4 overflow-hidden flex flex-col z-[110] animate-fade-in-down">
                  <div className="px-6 py-2 mb-2 border-b border-gray-50">
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Account</span>
                  </div>
                  <Link to="/profile" onClick={() => setTimeout(() => { setIsDropdownOpen(false); window.scrollTo(0, 0); }, 0)} className="px-6 py-3 text-[13px] font-black text-gray-900 hover:bg-gray-50 transition">My Profile</Link>
                  <Link to="/bookings" onClick={() => setTimeout(() => { setIsDropdownOpen(false); window.scrollTo(0, 0); }, 0)} className="px-6 py-3 text-[13px] font-black text-gray-900 hover:bg-gray-50 transition">My Bookings</Link>
                  <div className="h-px bg-gray-50 my-2" />
                  <button
                    onClick={handleLogout}
                    className="px-6 py-3 text-[13px] font-black text-red-500 hover:bg-red-50 transition text-left flex items-center gap-2"
                  >
                    <LogOut size={16} /> Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login">
              <button className="bg-black text-white px-8 py-3 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-gray-800 transition shadow-xl shadow-black/10 active:scale-95">
                Login
              </button>
            </Link>
          )}
        </div>

        {/* Mobile Actions */}
        <div className="flex lg:hidden items-center gap-4">
          {isLoggedIn && (
            <Link to="/profile" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-900">
              <User size={18} />
            </Link>
          )}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-gray-900 z-[110] transition-colors"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Top Dropdown */}
      <div className={`fixed inset-x-0 top-[60px] md:top-[72px] z-[90] transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'} lg:hidden`}>
        {/* Dimmed Background */}
        <div className="absolute inset-0 h-[calc(100vh-60px)] bg-black/40 backdrop-blur-sm transition-opacity" onClick={() => setIsMobileMenuOpen(false)}></div>

        {/* White Dropdown Panel */}
        <div className={`relative bg-white shadow-2xl transition-transform duration-500 ease-in-out transform ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-12'} overflow-hidden max-h-[85vh] flex flex-col`}>
          <div className="overflow-y-auto py-8 px-8 no-scrollbar">
            <div className="flex flex-col gap-7 text-[16px] font-medium text-gray-700">
              <Link to="/" onClick={() => { setIsMobileMenuOpen(false); window.scrollTo(0, 0); }} className="hover:text-black">Home</Link>

              <div className="flex flex-col gap-6">
                <div className="flex justify-between items-center">
                  <Link to="/services" onClick={() => { setIsMobileMenuOpen(false); window.scrollTo(0, 0); }} className="hover:text-black">Services</Link>
                  <button onClick={() => setIsServicesOpen(!isServicesOpen)} className="p-2 -mr-2 focus:outline-none text-gray-400 hover:text-black">
                    <ChevronDown size={16} className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                </div>
                {isServicesOpen && (
                  <div className="pl-4 flex flex-col gap-5 text-gray-500 text-[15px]">
                    <Link to="/airport-transfers" onClick={() => setTimeout(() => { setIsMobileMenuOpen(false); setIsServicesOpen(false); window.scrollTo(0, 0); }, 0)} className="hover:text-black">Airport Transfers</Link>
                    <Link to="/city-to-city" onClick={() => setTimeout(() => { setIsMobileMenuOpen(false); setIsServicesOpen(false); window.scrollTo(0, 0); }, 0)} className="hover:text-black">City To City</Link>
                    <Link to="/hourly-rentals" onClick={() => setTimeout(() => { setIsMobileMenuOpen(false); setIsServicesOpen(false); window.scrollTo(0, 0); }, 0)} className="hover:text-black">Hourly Rentals</Link>
                  </div>
                )}
              </div>

              <div className="flex justify-between items-center cursor-pointer hover:text-black" onClick={() => { navigate('/fleets'); setIsMobileMenuOpen(false); window.scrollTo(0, 0); }}>
                <span>Fleets</span>
                <ChevronDown size={16} className="text-gray-400" />
              </div>

              <Link to="/about" onClick={() => { setIsMobileMenuOpen(false); window.scrollTo(0, 0); }} className="hover:text-black">About us</Link>
              <Link to="/contact" onClick={() => { setIsMobileMenuOpen(false); window.scrollTo(0, 0); }} className="hover:text-black">Contact us</Link>

              <div className="my-2 border-t border-gray-100"></div>

              {/* Login Button Last */}
              {!isLoggedIn ? (
                <Link to="/login" onClick={() => { setIsMobileMenuOpen(false); window.scrollTo(0, 0); }}>
                  <button className="w-full bg-black text-white py-4 rounded-xl font-black text-[11px] uppercase tracking-[0.2em] shadow-lg active:scale-95 transition-all">
                    Login Account
                  </button>
                </Link>
              ) : (
                <div className="flex flex-col gap-6">
                  <Link to="/profile" onClick={() => { setIsMobileMenuOpen(false); window.scrollTo(0, 0); }} className="hover:text-black">My Profile</Link>
                  <Link to="/bookings" onClick={() => { setIsMobileMenuOpen(false); window.scrollTo(0, 0); }} className="hover:text-black">My Bookings</Link>
                  <button onClick={handleLogout} className="text-left text-red-500 font-bold flex items-center gap-2">
                    <LogOut size={16} /> Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes fade-in-down {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in-down { animation: fade-in-down 0.2s ease-out forwards; }
          .no-scrollbar::-webkit-scrollbar { display: none; }
        `
      }} />
    </nav>
  );
};

export default Navbar;
