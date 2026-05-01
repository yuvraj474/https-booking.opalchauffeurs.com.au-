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
      <div className="max-w-7xl mx-auto space-y-12">

        {stepsData.map((step, index) => (
          <div
            key={index}
            className="bg-gray-200 rounded-3xl p-8 md:p-12 grid md:grid-cols-3 gap-8 items-center"
          >

            {/* Image */}
            <div className="bg-white rounded-2xl p-4 shadow-sm">
              <img
                src={step.img}
                alt={step.title}
                className="w-full h-[260px] object-cover rounded-xl"
              />
            </div>

            {/* Center Line */}
            <div className="hidden md:flex flex-col items-center">
              <div className="w-[2px] h-32 bg-black"></div>
              <span className="text-4xl font-semibold my-4">
                {step.id}
              </span>
              <div className="w-[2px] h-32 bg-black"></div>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
                {step.title}
              </h2>

              <p className="mt-4 text-gray-600">
                {step.desc}
              </p>

              <div className="mt-6 bg-gray-300 rounded-2xl p-6">
                <ul className="space-y-3">
                  {step.points.map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="w-2.5 h-2.5 bg-red-500 rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
};

export default StepsSection;