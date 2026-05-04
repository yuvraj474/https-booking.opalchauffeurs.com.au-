import React from "react";
import HomeSlider from "../components/HomeSlider";

const HourlyRentals = () => {
    return (
        <>
            <section className="pt-20">
                <HomeSlider />
            </section>
            <div className="max-w-7xl mx-auto py-20 px-6">
                <h2 className="text-4xl font-bold mb-6 text-gray-900">Hourly Rentals</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                    Need a chauffeur for several hours? Our hourly rental service offers total flexibility. 
                    Perfect for business meetings, events, or exploring the city at your own pace.
                </p>
            </div>
        </>
    );
};

export default HourlyRentals;
