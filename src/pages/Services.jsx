import React from 'react'
import { Link } from 'react-router-dom'
import { Plane, Map, Clock } from 'lucide-react'

const Services = () => {
  const serviceList = [
    {
      title: "Airport Transfers",
      path: "/airport-transfers",
      icon: <Plane size={32} />,
      desc: "Reliable airport pickup and drop-off services."
    },
    {
      title: "City To City",
      path: "/city-to-city",
      icon: <Map size={32} />,
      desc: "Comfortable long-distance travel between cities."
    },
    {
      title: "Hourly Rentals",
      path: "/hourly-rentals",
      icon: <Clock size={32} />,
      desc: "Flexible chauffeur services by the hour."
    }
  ]

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto font-sans">
      <h1 className="text-4xl font-bold mb-12 text-center text-gray-900 tracking-tight">Our Premium Services</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {serviceList.map((service, index) => (
          <Link 
            key={index} 
            to={service.path}
            className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
          >
            <div className="text-black mb-6 group-hover:scale-110 transition-transform duration-300">
              {service.icon}
            </div>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h2>
            <p className="text-gray-500 leading-relaxed mb-6">{service.desc}</p>
            <span className="text-black font-bold underline">Learn more</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Services
