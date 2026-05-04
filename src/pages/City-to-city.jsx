import React from "react";
import HomeSlider from "../components/HomeSlider";

const CityToCity = () => {
    return (
        <>
            <section className="pt-20">
                <HomeSlider />
            </section>
            <div className="max-w-7xl mx-auto py-20 px-6">
                <h2 className="text-4xl font-bold mb-6 text-gray-900">City To City Transfers</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                    Enjoy seamless long-distance travel between cities with Drivado's professional chauffeur service. 
                    Skip the stress of train schedules or airport security and travel on your own terms.
                </p>
            </div>
        </>
    );
};

export default CityToCity;
