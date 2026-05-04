import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { User, LogOut, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef(null);
  const servicesRef = useRef(null);
  const navigate = useNavigate();

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

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    setIsDropdownOpen(false);
    window.dispatchEvent(new Event('authChange'));
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 font-sans">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between relative">

        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="logo" className="h-8" />
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-8 text-gray-700 font-medium items-center">
          <Link to="/" className="hover:text-black transition">Home</Link>
          
          {/* Services Dropdown */}
          <div className="relative" ref={servicesRef}>
            <button 
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className={`hover:text-black transition flex items-center gap-1 ${isServicesOpen ? 'text-black font-bold' : ''}`}
            >
              Services
              <ChevronDown size={14} className={`transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
            </button>

            {isServicesOpen && (
              <div className="absolute left-0 mt-3 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 overflow-hidden flex flex-col z-50 animate-fade-in-down">
                <Link 
                  to="/airport-transfers" 
                  onClick={() => setIsServicesOpen(false)} 
                  className="px-5 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:text-black transition border-b border-gray-50"
                >
                  Airport Transfers
                </Link>
                <Link 
                  to="/city-to-city" 
                  onClick={() => setIsServicesOpen(false)} 
                  className="px-5 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:text-black transition border-b border-gray-50"
                >
                  City To City
                </Link>
                <Link 
                  to="/hourly-rentals" 
                  onClick={() => setIsServicesOpen(false)} 
                  className="px-5 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:text-black transition"
                >
                  Hourly Rentals
                </Link>
              </div>
            )}
          </div>

          <Link to="/fleets" className="hover:text-black transition">Fleets</Link>
          <Link to="/about" className="hover:text-black transition">About us</Link>
          <Link to="/contact" className="hover:text-black transition">Contact us</Link>
        </div>

        {/* Right Button */}
        <div>
          {isLoggedIn ? (
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`flex items-center justify-center p-2.5 rounded-full transition text-black ${isDropdownOpen ? 'bg-gray-200' : 'bg-gray-100 hover:bg-gray-200'}`}
              >
                <User size={20} />
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-3 w-48 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 overflow-hidden flex flex-col z-50 animate-fade-in-down">
                  <div className="px-4 py-3 border-b border-gray-50">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Account</p>
                  </div>
                  <Link 
                    to="/profile" 
                    onClick={() => setIsDropdownOpen(false)} 
                    className="px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-black transition"
                  >
                    View Profile
                  </Link>
                  <Link 
                    to="/" 
                    onClick={() => setIsDropdownOpen(false)} 
                    className="px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-black transition"
                  >
                    Request a Ride
                  </Link>
                  <Link 
                    to="/bookings" 
                    onClick={() => setIsDropdownOpen(false)} 
                    className="px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-black transition"
                  >
                    My Bookings
                  </Link>
                  <button 
                    onClick={handleLogout}
                    className="px-4 py-3 text-sm font-bold text-red-600 hover:bg-red-50 transition text-left flex items-center gap-2"
                  >
                    <LogOut size={16} />
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login">
              <button className="bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800 transition">
                Login
              </button>
            </Link>
          )}
        </div>

      </div>
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes fade-in-down {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in-down { animation: fade-in-down 0.2s ease-out forwards; }
        `
      }} />
    </nav>
  );
};

export default Navbar;
