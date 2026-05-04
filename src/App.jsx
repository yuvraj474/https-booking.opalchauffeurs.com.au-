import { Routes, Route } from 'react-router-dom'
import Navbar from './pages/Navbar'
import Home from './pages/Home'
import Services from './pages/Services'
import Fleets from './pages/Fleets'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Form1 from './components/form1'
import Form2 from './components/form2'
import Form3 from './components/form3'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Bookings from './pages/Bookings'
import Footer from './pages/Footer'
import AirportTransfer from './pages/Airport-transfer'
import CityToCity from './pages/City-to-city'
import HourlyRentals from './pages/Hourly-rentals'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/fleets" element={<Fleets />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/form1" element={<Form1 />} />
        <Route path="/form2" element={<Form2 />} />
        <Route path="/form3" element={<Form3 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/airport-transfers" element={<AirportTransfer />} />
        <Route path="/city-to-city" element={<CityToCity />} />
        <Route path="/hourly-rentals" element={<HourlyRentals />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App