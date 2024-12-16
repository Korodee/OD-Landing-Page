import React from "react";
import Navbar from "./Navbar";
import heroVideo from "../assets/mp4/hero-background.MP4";

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
                        className="text-white text-5xl md:text-6xl lg:text-7xl font-bold leading-tight opacity-0 animate-fade-scale"
                        style={{
                            textShadow: "0px 0px 8px rgba(255, 255, 255, 0.5)",
                        }}
                    >
                        Trade The Unseen
                    </h1>

                    {/* Subtitle */}
                    <p className="text-blue-400 text-lg md:text-2xl font-medium mt-4 opacity-0 animate-fade-up delay-200">
                        Empower Advanced Options <br /> Computational Insights.
                    </p>

                    <button className="bg-blue-500 text-white text-lg md:text-xl font-semibold px-8 py-4 rounded-full mt-8 shadow-lg transform scale-95 opacity-0 transition-all duration-300 ease-in-out hover:bg-blue-600 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300 animate-fade-up delay-[500ms]">
                        Start Now
                    </button>
                </div>
            </div>

            {/* Inline Custom CSS */}
            <style>
                {`
                    @keyframes fadeScale {
                        0% {
                            opacity: 0;
                            transform: scale(0.9);
                        }
                        100% {
                            opacity: 1;
                            transform: scale(1);
                        }
                    }

                    @keyframes fadeUp {
                        0% {
                            opacity: 0;
                            transform: translateY(40px);
                        }
                        100% {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }

                    .animate-fade-scale {
                        animation: fadeScale 1.5s ease-out forwards;
                    }

                    .animate-fade-up {
                        animation: fadeUp 1.2s ease-out forwards;
                    }

                    .delay-200 {
                        animation-delay: 0.2s;
                    }

                    .delay-500 {
                        animation-delay: 0.5s;
                    }
                `}
            </style>
        </div>
    );
};

export default HeroSection;
