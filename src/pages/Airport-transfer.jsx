import React from "react";
import HomeSlider from "../components/HomeSlider";

const AirportTransfer = () => {
    return (
        <>
            <section className="pt-20">
                <HomeSlider />
            </section>
            <div className="max-w-7xl mx-auto py-20 px-6">
                <h2 className="text-4xl font-bold mb-6 text-gray-900">Airport Transfers</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                    Start or end your journey with Drivado's premium airport transfer service. 
                    We provide real-time flight monitoring and a meet-and-greet service to ensure your arrival is stress-free.
                </p>
            </div>
        </>
    );
};

export default AirportTransfer;
