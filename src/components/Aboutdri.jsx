export default function AboutSection() {
  return (
    <section className="bg-gray-100 py-20 px-10 lg:px-20">
      
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight text-center">
        About Drivado – Connecting Cities, Airports & People with Ease
      </h1>

      {/* Content */}
      <div className="mt-8 space-y-6 text-gray-600 text-[17px] leading-8">
        
        <p>
          Drivado is a ground transportation platform designed to provide seamless,
          comfortable and reliable service across the world. Set to redefine chauffeur
          services, Drivado offers a wide fleet of vehicles for all your needs. Whether
          you are searching for budget friendly options or looking forward to splurge
          on luxury travel, our team is here to provide unparalleled service, ensuring
          you arrive at your destination safely and on time.
        </p>

        <p>
          Founded in 2016, with its Headquarters in India, Branch in Saudi Arabia and
          Sales offices in United Kingdom, United States of America, Argentina and Spain,
          Drivado’s global services extends to 65+ countries and 425+ cities, making sure
          we turn every journey of yours into an unforgettable experience. Drivado offers
          a range of convenient services, from airport transfers, hourly rentals,
          corporate events, or city to city transfers, we are committed to delivering
          exceptional services and exceeding your expectations.
        </p>

      </div>

      {/* View More */}
      <div className="mt-6">
        <button className="text-gray-800 font-medium border-b border-gray-400 hover:border-black transition">
          View more
        </button>
      </div>

    </section>
  );
}