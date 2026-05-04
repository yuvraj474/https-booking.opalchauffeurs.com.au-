import React, { useState } from 'react';
import { Plus, X, ArrowRight } from 'lucide-react';

const faqData = [
  {
    question: "What is Drivado?",
    answer: "Drivado is a global ground transportation company offering reliable, comfortable rides with impeccable service and flexible options to suit any budget globally. We offer a variety of transfers, which include airport transfers, city-to-city transfers, and hourly disposals."
  },
  {
    question: "In which cities and countries is Drivado available?",
    answer: "Drivado operates in 65+ countries and 425+ cities worldwide, including major hubs in Europe, Asia, the Middle East, and the Americas. You can find our services in cities like London, Paris, Dubai, Riyadh, New York, and many more."
  },
  {
    question: "What types of rides can I book with Drivado?",
    answer: "We offer a wide range of services including Airport Transfers, Hourly Disposals (Chauffeur-by-the-hour), and City-to-City long distance rides. You can choose from our diverse fleet ranging from Business Class to First Class luxury vehicles."
  },
  {
    question: "How do I book a ride with Drivado?",
    answer: "Booking is simple! You can book directly through our website by selecting your service type, entering pickup and drop-off details, choosing your vehicle, and completing the secure payment. You'll receive instant confirmation."
  },
  {
    question: "Are Drivado’s prices fixed?",
    answer: "Yes, Drivado offers transparent, all-inclusive fixed pricing. The price you see at the time of booking is the final price, covering all taxes, tolls, and gratuities, with no hidden charges."
  },
  {
    question: "What vehicles are available for booking?",
    answer: "Our fleet includes a variety of premium vehicles, including Business Class sedans, luxury First Class sedans, Business Vans/SUVs for groups, and even electric vehicle options in select cities."
  },
  {
    question: "Do I need to wait if my flight is delayed?",
    answer: "No, we monitor your flight in real-time. If your flight is delayed, your chauffeur will automatically adjust the pickup time to ensure they are there when you land, free of charge."
  },
  {
    question: "Does Drivado offer 24/7 customer support?",
    answer: "Yes, our dedicated support team is available 24/7 via phone, email, and live chat to assist you with any questions, changes, or special requests at any time."
  },
  {
    question: "Can I cancel or modify my booking?",
    answer: "Yes, bookings can be cancelled or modified easily. Most bookings offer free cancellation up to 24 hours before the scheduled pickup time. You can manage your trips through your profile."
  }
];

const Frequently = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const visibleFaqs = showAll ? faqData : faqData.slice(0, 5);

  return (
    <section className="bg-white py-14 px-6 lg:px-16">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight">
            Any Questions? Look Here
          </h2>
          {!showAll && (
            <p className="text-gray-500 text-lg md:text-xl font-medium">
              Find quick answers to the most common questions about our chauffeur services.
            </p>
          )}
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {visibleFaqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-[#f8f9fa] rounded-2xl overflow-hidden transition-all duration-300 border border-transparent hover:border-gray-200"
            >
              <button 
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left group"
              >
                <span className="text-lg md:text-xl font-semibold text-gray-900 group-hover:text-black transition-colors">
                  {faq.question}
                </span>
                <div className="shrink-0 ml-4">
                  {activeIndex === index ? (
                    <X size={24} className="text-gray-500" />
                  ) : (
                    <Plus size={24} className="text-gray-500" />
                  )}
                </div>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  activeIndex === index 
                  ? 'max-h-[500px] opacity-100 pb-8 px-6 md:px-8' 
                  : 'max-h-0 opacity-0 pointer-events-none'
                }`}
              >
                <p className="text-gray-500 text-lg leading-relaxed border-t border-gray-200 pt-6">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="mt-16 flex justify-center">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="bg-black text-white px-10 py-4 rounded-full font-bold text-lg flex items-center gap-3 hover:bg-gray-800 transition-all active:scale-95 shadow-lg"
          >
            {showAll ? 'View Less' : 'View More'} <ArrowRight size={20} className={`transition-transform ${showAll ? 'rotate-180' : ''}`} />
          </button>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes slide-down {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-slide-down { animation: slide-down 0.4s ease-out forwards; }
        `
      }} />
    </section>
  );
};

export default Frequently;