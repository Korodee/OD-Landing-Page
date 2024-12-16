import React from "react";
import Navbar from "./Navbar";
import heroVideo from "../assets/mp4/hero-background.MP4"; // Adjust path as needed

const HeroSection = () => {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Video Background */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src={heroVideo}
                autoPlay
                muted
                loop
            ></video>

            {/* Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-[#0B1D39] opacity-50"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
                {/* Navbar */}
                <Navbar />
                {/* Hero Content */}
                <div className="relative z-10">
                    <h1
                        className="text-white text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
                        style={{
                            textShadow: "0px 0px 8px rgba(255, 255, 255, 0.5)",
                        }}
                    >
                        Trade The Unseen
                    </h1>

                    {/* Subtitle */}
                    <p className="text-blue-400 text-lg md:text-2xl font-medium mt-4">
                        Empower Advanced Options <br /> Computational Insights.
                    </p>

                    <button className="bg-blue-500 text-white text-lg md:text-xl font-semibold px-8 py-4 rounded-full mt-8 shadow-lg transform transition-all duration-300 ease-in-out hover:bg-blue-600 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300">
                        Start Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
