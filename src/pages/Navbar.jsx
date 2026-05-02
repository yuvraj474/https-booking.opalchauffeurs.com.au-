import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { User } from "lucide-react";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');

  useEffect(() => {
    const handleAuthChange = () => {
      setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
    };
    window.addEventListener('authChange', handleAuthChange);
    return () => window.removeEventListener('authChange', handleAuthChange);
  }, []);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between relative">

        <div className="flex items-center gap-2">
          <img src="logo.png" alt="logo" className="h-8" />
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-8 text-gray-700 font-medium">
          <Link to="/" className="hover:text-black transition">Home</Link>
          <Link to="/services" className="hover:text-black transition">Services</Link>
          <Link to="/fleets" className="hover:text-black transition">Fleets</Link>
          <Link to="/about" className="hover:text-black transition">About us</Link>
          <Link to="/contact" className="hover:text-black transition">Contact us</Link>
        </div>

        {/* Right Button */}
        <div>
          {isLoggedIn ? (
            <Link to="/profile">
              <button className="flex items-center justify-center bg-gray-100 p-2.5 rounded-full hover:bg-gray-200 transition text-black">
                <User size={20} />
              </button>
            </Link>
          ) : (
            <Link to="/login">
              <button className="bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800 transition">
                Login
              </button>
            </Link>
          )}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
