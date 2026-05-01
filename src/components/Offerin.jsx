const services = [
  {
    title: "Airport Transfer",
    desc: "At Drivado, we are delighted to offer you airport transfer services in major cities across the globe. From Frankfurt Airport to Munich, Dubai Airport to Abu Dhabi...",
    img: "https://www.drivado.com/_next/image/?url=https%3A%2F%2Fstrapistore.sfo3.cdn.digitaloceanspaces.com%2F89650f0899d12ec8a6fab7f286427c27.png&w=828&q=75",
  },
  {
    title: "City-to-City Transfers",
    desc: "Are you worried about the hassle of domestic flights and train queues? Not anymore, Drivado's city-to-city personal ride transfer allows you comfort...",
    img: "https://www.drivado.com/_next/image/?url=https%3A%2F%2Fstrapistore.sfo3.cdn.digitaloceanspaces.com%2Fe632e9c6667e9d724d082a7a951e0bd7.jpg&w=828&q=75",
  },
  {
    title: "Hourly Rentals",
    desc: "In the mood to enjoy ultimate freedom and flexibility? Drivado offers hourly chauffeur service designed to adapt to your schedule and needs...",
    img: "https://www.drivado.com/_next/image/?url=https%3A%2F%2Fstrapistore.sfo3.cdn.digitaloceanspaces.com%2Fe09f5f53ead9c90c9d9b9c8ed8af0092.jpg&w=828&q=75",
  },
];

const Offerin = () => {
  return (
    <section className="bg-gray-100 py-20 px-6 lg:px-20">

      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
          What We Offer in Drivado
        </h1>

        <p className="mt-6 text-gray-600 text-lg leading-relaxed">
          At Drivado we offer on ground transportation services all across the globe.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition duration-300"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-52 object-cover rounded-xl"
            />

            <div className="flex justify-between items-center mt-5">
              <h2 className="text-xl font-semibold">{item.title}</h2>

              <button className="w-10 h-10 flex items-center justify-center border rounded-full hover:bg-black hover:text-white transition">
                →
              </button>
            </div>

            <p className="text-gray-600 mt-3 text-sm leading-relaxed">
              {item.desc}
            </p>

            <a
              href="#"
              className="inline-block mt-4 text-sm font-medium underline hover:text-black"
            >
              
            </a>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Offerin;