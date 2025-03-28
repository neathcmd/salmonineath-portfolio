import React, { useState, useContext } from "react";
import { ThemeContext } from "../../src/App/Ui/ThemeContext";

const LOGO = "Sal Monineath";
const NAV_ITEMS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Blogs", href: "#blogs" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const themeContext = useContext(ThemeContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  if (!themeContext) {
    throw new Error("Navbar must be used within a ThemeProvider");
  }

  const { theme, toggleTheme } = themeContext;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 z-50 w-full 
          ${
            theme === "dark"
              ? "bg-[0a192f] text-[00ff99]"
              : "bg-white text-gray-900"
          }
          shadow-md transition-colors duration-300
        `}
        aria-label="Main Navigation"
      >
        <div className="container mx-auto flex items-center justify-between p-4">
          {/* Logo */}
          <a
            href="/"
            className="text-2xl font-bold hover:opacity-80 transition-opacity text-[00ff99]"
            aria-label="Home"
          >
            {LOGO}
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-6">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={`
                      text-lg font-medium 
                      hover:text-blue-600 
                      transition-colors 
                      ${
                        theme === "dark"
                          ? "text-gray-200 hover:text-blue-300"
                          : "text-gray-800 hover:text-blue-700"
                      }
                    `}
                  >
                    {item.label}
                  </a>
                </li>
              ))}

              {/* Theme Toggle Switch */}
              <li>
                <div
                  className="relative inline-block w-12 h-6 cursor-pointer"
                  onClick={toggleTheme}
                  aria-label={`Switch to ${
                    theme === "dark" ? "light" : "dark"
                  } mode`}
                  role="switch"
                  aria-checked={theme === "dark"}
                >
                  <div
                    className={`
                      absolute inset-0 bg-gray-300 rounded-full 
                      transition-colors duration-300
                      ${theme === "dark" ? "bg-blue-600" : "bg-gray-400"}
                    `}
                  />
                  <div
                    className={`
                      absolute top-1/2 -translate-y-1/2 
                      w-5 h-5 bg-white rounded-full 
                      shadow-md transition-all duration-300
                      flex items-center justify-center text-sm
                      ${theme === "dark" ? "translate-x-6" : "translate-x-1"}
                    `}
                  >
                    {theme === "dark" ? "🌙" : "☀️"}
                  </div>
                </div>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Hamburger */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="hamburger-menu"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`
          fixed inset-0 z-40 bg-black/50 
          ${isMobileMenuOpen ? "block" : "hidden"}
        `}
        onClick={toggleMobileMenu}
      />

      {/* Mobile Menu Slide-in */}
      <nav
        className={`
          fixed top-0 right-0 z-50 h-full w-64 
          bg-white dark:bg-blue-900 
          shadow-lg 
          transform transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <span className="text-xl font-bold">{LOGO}</span>
          <button
            onClick={toggleMobileMenu}
            className="relative w-6 h-6 focus:outline-none group"
            aria-label="Close mobile menu"
          >
            <span
              className={`absolute top-1/2 left-1/2 w-6 h-0.5 ${
                theme === "dark" ? "bg-gray-200" : "bg-gray-800"
              } transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45" : "rotate-0 opacity-0"
              }`}
            ></span>
            <span
              className={`absolute top-1/2 left-1/2 w-6 h-0.5 ${
                theme === "dark" ? "bg-gray-200" : "bg-gray-800"
              } transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45" : "rotate-0 opacity-0"
              }`}
            ></span>
            <span
              className={`absolute top-1/2 left-1/2 w-6 h-0.5 ${
                theme === "dark" ? "bg-gray-200" : "bg-gray-800"
              } transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            >
              ×
            </span>
          </button>
        </div>
        <ul className="py-4">
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className={`
                  block px-4 py-3 
                  hover:bg-gray-100 dark:hover:bg-blue-800
                  ${
                    theme === "dark"
                      ? "text-gray-200 hover:text-white"
                      : "text-gray-800 hover:text-blue-600"
                  }
                `}
                onClick={toggleMobileMenu}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="px-4 py-3">
            <div
              className="relative inline-block w-full h-10 cursor-pointer"
              onClick={() => {
                toggleTheme();
                toggleMobileMenu();
              }}
              aria-label={`Switch to ${
                theme === "dark" ? "light" : "dark"
              } mode`}
              role="switch"
              aria-checked={theme === "dark"}
            >
              <div
                className={`
                  absolute inset-0 bg-gray-300 rounded-full 
                  transition-colors duration-300
                  ${theme === "dark" ? "bg-blue-600" : "bg-gray-400"}
                `}
              />
              <div
                className={`
                  absolute top-1/2 -translate-y-1/2 
                  w-6 h-6 bg-white rounded-full 
                  shadow-md transition-all duration-300
                  flex items-center justify-center text-sm
                  ${
                    theme === "dark"
                      ? "translate-x-[calc(100%-0.25rem)]"
                      : "translate-x-1"
                  }
                `}
              >
                {theme === "dark" ? "☀️" : "🌙"}
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
}
