import { useState } from "react";
import logo from "../assets/svg/mainlogo.svg";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="absolute top-6 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[850px] flex justify-between items-center shadow-lg">
            {/* Desktop Navbar (Hidden below 768px) */}
            <div className="hidden md:flex justify-between items-center w-[850px] mx-auto px-8 py-4 bg-[#0B1D39] rounded-full">
                {/* Logo */}
                <div className="text-white text-xl font-semibold flex items-center">
                    <img src={logo} alt="Logo" className="w-[6rem]" />
                </div>

                {/* Desktop Navigation Links */}
                <div className="flex pl-9 space-x-6">
                    <a
                        href="#"
                        className="text-white text-lg font-medium hover:bg-white hover:text-[#0B1D39] py-2 px-4 rounded-[12px] transition duration-300 ease-in-out"
                    >
                        Feature
                    </a>
                    <a
                        href="https://optionsdepth.com/articles/"
                        className="text-white text-lg font-medium hover:bg-white hover:text-[#0B1D39] py-2 px-4 rounded-[12px] transition duration-300 ease-in-out"
                    >
                        Articles
                    </a>
                    <a
                        href="#"
                        className="text-white text-lg font-medium hover:bg-white hover:text-[#0B1D39] py-2 px-4 rounded-[12px] transition duration-300 ease-in-out"
                    >
                        Contact
                    </a>
                </div>

                {/* Desktop Buttons */}
                <div className="space-x-3">
                    <a
                        href="https://optionsdepth.com/app/login"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="text-white px-4 py-3 rounded-[15px] border border-white hover:bg-white hover:text-blue-500 hover:scale-105 transition-all duration-300 ease-in-out">
                            Login
                        </button>
                    </a>
                    <a
                        href="https://optionsdepth.com/app/sign-up"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="bg-blue-500 text-white px-4 py-3 rounded-[15px] hover:bg-blue-600 hover:scale-105 transition-all duration-300 ease-in-out">
                            Start Now
                        </button>
                    </a>
                </div>
            </div>

            {/* Mobile Navbar (Visible below 768px) */}
            <div className="block md:hidden w-full">
                {/* Logo & Burger Menu */}
                <div className="flex justify-between items-center bg-[#0B1D39] rounded-full  px-5">
                    <img src={logo} alt="Logo" className="w-16 h-16" />
                    {/* Burger Menu */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="text-white text-3xl"
                    >
                        {menuOpen ? "×" : "≡"}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`${
                        menuOpen ? "block" : "hidden"
                    } mt-4 flex flex-col space-y-4 bg-gradient-to-b from-[#0B1D39] via-[#1E2D4D] to-[#243B5D] p-6 rounded-lg shadow-lg`}
                >
                    <a
                        href="#"
                        className="text-white text-lg font-medium hover:bg-white hover:text-[#0B1D39] py-2 px-4 rounded-[12px] transition duration-300 ease-in-out"
                    >
                        Feature
                    </a>
                    <a
                        href="https://optionsdepth.com/articles/"
                        className="text-white text-lg font-medium hover:bg-white hover:text-[#0B1D39] py-2 px-4 rounded-[12px] transition duration-300 ease-in-out"
                    >
                        Articles
                    </a>
                    <a
                        href="#"
                        className="text-white text-lg font-medium hover:bg-white hover:text-[#0B1D39] py-2 px-4 rounded-[12px] transition duration-300 ease-in-out"
                    >
                        Contact
                    </a>

                    {/* Mobile Buttons */}
                    <div className="space-x-3">
                        <a
                            href="https://optionsdepth.com/app/login"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="text-white px-4 py-3 rounded-[15px] border border-white hover:bg-white hover:text-blue-500 hover:scale-105 transition-all duration-300 ease-in-out">
                                Login
                            </button>
                        </a>
                        <a
                            href="https://optionsdepth.com/app/sign-up"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="bg-blue-500 text-white px-4 py-3 rounded-[15px] hover:bg-blue-600 hover:scale-105 transition-all duration-300 ease-in-out">
                                Start Now
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
