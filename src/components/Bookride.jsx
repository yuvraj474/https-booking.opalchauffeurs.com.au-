const stepsData = [
  {
    id: "01",
    title: "Select your Service Type: Airport Transfer",
    desc: "Once you’ve selected your service, you will be prompted to enter key travel details, including:",
    img: "https://www.drivado.com/_next/image/?url=https%3A%2F%2Fstrapistore.sfo3.cdn.digitaloceanspaces.com%2F34f6eab81820a696835b2a5c4c33d224.png&w=1920&q=75",
    points: ["Airport transfers", "Hourly Disposals", "City-to-City Rides"],
  },
  {
    id: "02",
    title: "Enter Pickup & Drop Details",
    desc: "Provide your pickup location, drop-off point, and travel schedule.",
    img: "https://www.drivado.com/_next/image/?url=https%3A%2F%2Fstrapistore.sfo3.cdn.digitaloceanspaces.com%2F962288f0d6e4258e70603f6c9b3facf6.png&w=1920&q=75",
    points: ["Pickup address", "Drop location", "Date & Time"],
  },
  {
    id: "03",
    title: "Choose Your Vehicle",
    desc: "Select from our wide range of premium vehicles.",
    img: "https://www.drivado.com/_next/image/?url=https%3A%2F%2Fstrapistore.sfo3.cdn.digitaloceanspaces.com%2F0d45f8a36a293dccd9d4179a78a40c9b.png&w=1920&q=75",
    points: ["Luxury cars", "SUVs", "Sedans"],
  },
  {
    id: "04",
    title: "Confirm Booking",
    desc: "Review your trip details before confirming.",
    img: "https://images.unsplash.com/photo-1493238792000-8113da705763",
    points: ["Trip summary", "Fare details", "Confirmation"],
  },
  {
    id: "05",
    title: "Make Payment",
    desc: "Secure and easy payment options available.",
    img: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b",
    points: ["Card payment", "Online transfer", "Wallet"],
  },
  {
    id: "06",
    title: "Driver Assigned",
    desc: "Get details of your chauffeur instantly.",
    img: "https://images.unsplash.com/photo-1517142089942-ba376ce32a2e",
    points: ["Driver name", "Contact info", "Vehicle details"],
  },
  {
    id: "07",
    title: "Enjoy Your Ride",
    desc: "Sit back and enjoy a comfortable journey.",
    img: "https://images.unsplash.com/photo-1502877338535-766e1452684a",
    points: ["On-time service", "Comfort", "Safety"],
  },
];

const StepsSection = () => {
  return (
    <section className="bg-gray-100 py-20 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* 🔥 Top Heading Section */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
            How to book your ride with Drivado
          </h1>

          <p className="mt-6 text-gray-600 text-lg">
            In today’s fast paced world, having access to reliable chauffeur
            service can save you valuable time. With just a few steps, Book a
            ride with Drivado and you are all set for a comfortable,
            stress-free and safe ride.
          </p>
        </div>

        {/* 🔥 Steps Cards */}
        <div className="relative space-y-12">
          {stepsData.map((step, index) => (
            <div
              key={index}
              className="sticky top-32 bg-gray-200 rounded-3xl p-8 md:p-12 grid md:grid-cols-3 gap-8 items-center shadow-xl border border-white/20 transition-all duration-500"
              style={{ 
                zIndex: index + 1,
                marginTop: index === 0 ? '0' : '40px'
              }}
            >
              {/* Image */}
              <div className="bg-white rounded-2xl p-4 shadow-sm h-full flex items-center justify-center">
                <img
                  src={step.img}
                  alt={step.title}
                  className="w-full h-auto max-h-[260px] object-contain rounded-xl"
                />
              </div>

              {/* Center Line */}
              <div className="hidden md:flex flex-col items-center">
                <div className="w-[2px] h-32 bg-black opacity-20"></div>
                <span className="text-4xl font-bold my-4 text-black">
                  {step.id}
                </span>
                <div className="w-[2px] h-32 bg-black opacity-20"></div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                  {step.title}
                </h2>

                <p className="text-gray-600 text-lg leading-relaxed">
                  {step.desc}
                </p>

                <div className="mt-6 bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/40 shadow-inner">
                  <ul className="space-y-3">
                    {step.points.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 font-medium text-gray-700">
                        <span className="w-2.5 h-2.5 bg-red-500 rounded-full shadow-sm"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StepsSection;