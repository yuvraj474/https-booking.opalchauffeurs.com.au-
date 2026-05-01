const benefitsData = [
  {
    title: "Premium Vehicles",
    desc: "At Drivado we ensure all of our vehicles are maintained to only the best quality. All of our vehicles are fully serviced to the highest standards and will make sure that you arrive at your destination safely and in style.",
    img: "https://images.unsplash.com/photo-1549924231-f129b911e442",
  },
  {
    title: "Professional Chauffeurs",
    desc: "We at Drivado, engage only qualified, certified and professional chauffeurs ready to handle all traffic and weather conditions.",
    img: "https://images.unsplash.com/photo-1550355291-bbee04a92027",
  },
  {
    title: "Our Team",
    desc: "At Drivado our customers always come first, whenever you need assistance our team offers 24/7 live support.",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
  },
  {
    title: "Our Process",
    desc: "Drivado offers a simple online booking system with instant confirmations and secured payments.",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  },
  {
    title: "Our Services",
    desc: "We at Drivado provide tailored solutions for every traveler.",
    img: "https://images.unsplash.com/photo-1502877338535-766e1452684a",
  },
];

const BenefitsSection = () => {
  return (
    <section className="bg-gray-100 py-20 px-6 lg:px-20">

      {/* Heading */}
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-900">
          Drivado Benefits at a Glance
        </h1>
        <p className="mt-6 text-gray-600 text-lg leading-relaxed">
          Experience the convenience of Drivado: your trusted partner for seamless chauffeur services.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="mt-16 max-w-6xl mx-auto grid md:grid-cols-2 gap-x-16 gap-y-12">

        {benefitsData.map((item, index) => (
          <div key={index} className="flex items-start gap-6">

            {/* Image */}
            <img
              src={item.img}
              alt={item.title}
              className="w-[220px] h-[150px] object-cover rounded-2xl"
            />

            {/* Text */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                {item.title}
              </h2>

              <p className="mt-3 text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
};

export default BenefitsSection;