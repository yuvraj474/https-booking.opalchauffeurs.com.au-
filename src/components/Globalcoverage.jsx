import React, { useState } from 'react';

const coverageData = [
    {
        region: "Europe",
        img: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b", // Europe mix
        shortDesc: "With a robust network extending to all over Europe, whether you want chauffeur cab service from London to Manchester to watch your...",
        fullDesc: "With a robust network extending to all over Europe, whether you want chauffeur cab service from London to Manchester to watch your favorite sport or enjoy the serene lanes of Paris or shop your heart in the fashion capital of the world of Milan, here at Drivado we have the perfect cab service for your needs."
    },
    {
        region: "USA",
        img: "https://www.drivado.com/_next/image/?url=https%3A%2F%2Fstrapistore.sfo3.cdn.digitaloceanspaces.com%2Fbf1820322d653951743b8dceb76dbf85.png&w=1920&q=75", // Statue of Liberty
        shortDesc: "With Drivado, Your next trip to the United States would be elevated to another level! From Los Angeles to San Diego, Miami to Orlando, our...",
        fullDesc: "With Drivado, Your next trip to the United States would be elevated to another level! From Los Angeles to San Diego, Miami to Orlando, our global reach means you get chauffeur cab service in every city. Combined with local expertise our chauffeurs know the city inside and out."
    },
    {
        region: "Middle East & Africa",
        img: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368", // Pyramids
        shortDesc: "With our branch in Saudi, book reliable chauffeur service in all major Middle Eastern hubs. Whether traveling for business or leisure, your next...",
        fullDesc: "With our branch in Saudi, book reliable chauffeur service in all major Middle Eastern hubs. Whether traveling for business or leisure, your next trip to Dubai, Abu Dhabi, Riyadh, Morocco, Cape Town and any other city with Drivado is guaranteed to be unforgettable."
    },
    {
        region: "Asia",
        img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4", // Bali/Asia
        shortDesc: "When it comes to navigating the bustling streets of Asian Cities, nothing compares to the convenience and elegance offered by Drivado...",
        fullDesc: "When it comes to navigating the bustling streets of Asian Cities, nothing compares to the  offered by Drivado. Whether it's Tokyo Airport Transfers, Bangkok city rides, or Drivado with their inclusive fleet stands out as a top choice t."
    }
];

const CoverageCard = ({ item }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className={`bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-md transition-all duration-500 flex flex-col border border-gray-100 ${isExpanded ? 'scale-[1.02] z-10' : 'scale-100'}`}>
            <div className="h-72 overflow-hidden">
                <img
                    src={item.img}
                    alt={item.region}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
            </div>
            <div className="p-10 flex-1 flex flex-col">
                <h3 className="text-[24px] font-semibold text-gray-900 mb-5">{item.region}</h3>
                <div className="bg-[#f8f9fa] rounded-[24px] p-8 flex-1">
                    <p className="text-gray-500 leading-relaxed text-[16px]">
                        {isExpanded ? item.fullDesc : item.shortDesc}
                    </p>
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="mt-5 text-gray-900 font-bold text-[14px] underline hover:text-black transition-colors"
                    >
                        {isExpanded ? 'View less' : 'View more'}
                    </button>
                </div>
            </div>
        </div>
    );
};

const GlobalCoverage = () => {
    const [isHeaderExpanded, setIsHeaderExpanded] = useState(false);

    return (
        <section className="bg-white py-20 px-6 lg:px-16">
            <div className="max-w-[1440px] mx-auto">

                {/* Section Header */}
                <div className="text-center mb-24 space-y-8">
                    <h2 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight">
                        Global Coverage with Local Expertise
                    </h2>
                    <div className="max-w-5xl mx-auto">
                        <p className="text-gray-500 text-xl md:text-2xl leading-relaxed font-normal">
                            Drivado envisions offering top-notch chauffeur services on a global scale. We understand the complexities of international travel and are committed to be your one stop destination for all your on ground transportation needs, no matter where in the word you plan to travel.
                            {isHeaderExpanded && (
                                <span className="animate-fade-in inline">
                                    {" "}With our extensive fleet partner network with over 3000+ direct fleet partners and comprehensive service offerings we ensure that you enjoy the same level of comfort, safety and reliability wherever your travel takes you.
                                </span>
                            )}
                        </p>
                        <button
                            onClick={() => setIsHeaderExpanded(!isHeaderExpanded)}
                            className="mt-6 text-gray-900 font-bold text-[16px] underline hover:text-black transition-colors block mx-auto"
                        >
                            {isHeaderExpanded ? 'See less' : 'See more'}
                        </button>
                    </div>
                </div>

                {/* Coverage Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 items-start">
                    {coverageData.map((item, index) => (
                        <CoverageCard key={index} item={item} />
                    ))}
                </div>

                {/* Bottom Paragraph Section */}
                <div className="mt-20 max-w-7xl mx-auto">
                    <p className="text-gray-500 text-lg md:text-2xl leading-relaxed font-normal">
                        Drivado envisions offering top-notch chauffeur services on a global scale. We understand the complexities of international travel and are committed to be your one stop destination for all your on ground transportation needs, no matter where in the word you plan to travel.
                        {isHeaderExpanded && (
                            <span className="animate-fade-in inline">
                                {" "}With our extensive fleet partner network with over 3000+ direct fleet partners and comprehensive service offerings we ensure that you enjoy the same level of comfort, safety and reliability wherever your travel takes you.
                            </span>
                        )}
                    </p>
                    <button
                        onClick={() => setIsHeaderExpanded(!isHeaderExpanded)}
                        className="mt-4 text-gray-900 font-semibold text-[16px] underline hover:text-black transition-colors"
                    >
                        {isHeaderExpanded ? 'See less' : 'See more'}
                    </button>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
          @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          .animate-fade-in { animation: fade-in 0.5s ease-out forwards; }
        `
            }} />
        </section>
    );
};

export default GlobalCoverage;