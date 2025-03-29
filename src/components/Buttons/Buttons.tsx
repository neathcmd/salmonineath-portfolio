import { useContext, useEffect } from "react";
import { ThemeContext } from "../../App/Ui/ThemeContext";
import AOS from "aos";
import "aos/dist/aos.css";

const Buttons = () => {
  const { theme } = useContext(ThemeContext);
  const isDarkMode = theme === "dark";

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div data-aos="fade-right" data-aos-delay="400" className="mt-6 flex gap-4">
      {/* Download CV Button */}
      <div className="relative group" data-aos="zoom-in-up">
        {/* External glow wrapper */}
        <div
          className={`absolute -inset-0.5 rounded-lg ${
            isDarkMode
              ? "bg-gradient-to-r from-emerald-400 to-green-400"
              : "bg-gradient-to-r from-emerald-500 to-green-500"
          } opacity-0 group-hover:opacity-75 blur-sm transition-opacity duration-300`}
        />
        <a
          href="#"
          className={`relative flex items-center justify-center gap-2 py-4 px-6 ${
            isDarkMode
              ? "bg-emerald-400 text-gray-900"
              : "bg-emerald-500 text-gray-900"
          } font-medium rounded-lg transition-all duration-300 hover:border ${
            isDarkMode ? "hover:border-emerald-400" : "hover:border-emerald-500"
          } z-10`}
        >
          Download CV
          <svg
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>

      {/* Contact Me Button */}
      <div
        className="relative group"
        data-aos="zoom-in-up"
        data-aos-delay="200"
      >
        {/* External glow wrapper */}
        <div
          className={`absolute -inset-0.5 rounded-lg ${
            isDarkMode
              ? "bg-gradient-to-r from-emerald-400 to-green-400"
              : "bg-gradient-to-r from-emerald-500 to-green-500"
          } opacity-0 group-hover:opacity-75 blur-sm transition-opacity duration-300`}
        />
        <a
          href="#"
          className={`relative flex items-center justify-center gap-2 py-4 px-6 border ${
            isDarkMode
              ? "border-emerald-400 text-emerald-400"
              : "border-emerald-500 text-emerald-500"
          } font-medium rounded-lg transition-all duration-300 ${
            isDarkMode
              ? "hover:bg-emerald-400 hover:text-gray-900"
              : "hover:bg-emerald-500 hover:text-gray-900"
          } z-10`}
        >
          Contact me
          <svg
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Buttons;
