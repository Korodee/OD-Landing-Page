import logo from "../assets/svg/mainlogo.svg";
const Navbar = () => {
    return (
        <nav className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-[#0B1D39] rounded-full w-[90%] md:w-[850px] flex justify-between items-center px-8 py-4 shadow-lg">
            {/* Logo */}
            <div className="text-white text-xl font-semibold flex items-center">
                <img src={logo} alt="Logo" />
            </div>

            <div className="flex pl-8 space-x-6">
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

            {/* Buttons */}
            <div className="space-x-3">
                {/* Login Button */}
                <a
                    href="https://optionsdepth.com/app/login"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className="text-white px-4 py-3 rounded-[15px] border border-white hover:bg-white hover:text-blue-500 hover:scale-105 transition-all duration-300 ease-in-out">
                        Login
                    </button>
                </a>
                {/* Start Now Button */}
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
        </nav>
    );
};

export default Navbar;
