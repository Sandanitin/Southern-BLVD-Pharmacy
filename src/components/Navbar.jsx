import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Resources", href: "/resources" },
    { name: "Careers", href: "/careers" },
    // { name: "Blogs", href: "/blogs" }, // Removed Blogs link
    { name: "Contact Us", href: "/contact" },
  ];

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled ? "bg-white shadow-xl py-3" : "bg-white py-3"
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center animate-fade-in-down">
          <div className="flex items-center">
            <img 
              src={logo}
              alt="Southern BLVD Pharmacy Logo" 
              className="h-10 sm:h-11 md:h-12 w-auto mr-2"
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            link && ( // Only render if link exists (not null/undefined)
              <Link
                key={link.name}
                to={link.href}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                  location.pathname === link.href
                    ? "text-[#0FA47F] bg-[#0FA47F]/10"
                    : "text-gray-700 hover:text-[#0FA47F] hover:bg-gray-100"
                }`}
              >
                {link.name}
              </Link>
            )
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 z-50 relative p-2 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#0FA47F]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown from Right */}
      {/* Force re-render by adding a key based on menuOpen state */}
      <div 
        key={menuOpen ? 'open' : 'closed'}
        className={`md:hidden fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full bg-white">
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
            <h2 className="text-xl font-bold text-[#0FA47F]">Menu</h2>
            <button 
              className="text-gray-700 md:hidden z-50 p-2 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#0FA47F]"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <nav className="flex-1 overflow-y-auto px-6 py-4" role="navigation">
            <div className="space-y-2">
              {navLinks.map((link, index) => (
                link && ( // Only render if link exists (not null/undefined)
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 transform ${
                      location.pathname === link.href
                        ? "text-[#0FA47F] bg-[#0FA47F]/10"
                        : "text-gray-700 hover:text-[#0FA47F] hover:bg-gray-100"
                    }`}
                    onClick={() => setMenuOpen(false)}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {link.name}
                  </Link>
                )
              ))}
            </div>
          </nav>
          
          <div className="p-6 border-t border-gray-100 text-center text-sm text-gray-500">
            <p>© 2025 Southern BLVD Pharmacy. All rights reserved.</p>
          </div>
        </div>
      </div>
      
      {/* Backdrop */}
      {menuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-40 z-40 transition-opacity duration-300"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        ></div>
      )}
    </header>
  );
}
