import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#0FA47F] to-[#1A73E8] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo & Intro */}
        <div className="animate-fade-in-up">
          <div className="flex items-center mb-4">
            <img 
              src={logo}
              alt="Southern BLVD Pharmacy Logo" 
              className="h-12 w-auto mr-3 hidden md:block"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.querySelector('h2').classList.remove('hidden');
              }}
              onLoad={(e) => {
                e.target.style.display = 'block';
                e.target.parentElement.querySelector('h2').classList.add('hidden');
              }}
            />
            <h2 className="text-2xl font-bold text-white hidden">
              Southern<span className="text-white">BLVD</span> Pharmacy
            </h2>
          </div>
          <p className="text-sm text-white/90 leading-relaxed mb-6">
            Providing trusted healthcare solutions and high-quality pharmacy 
            services to support your well-being.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-white/80 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
              </svg>
            </a>
            <a href="#" className="text-white hover:text-white/80 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10 5.523 0 10-4.477 10-10 0-5.523-4.477-10-10-10zm-2 15v-4H7v-4h3V8.5c0-1.933 1.567-3.5 3.5-3.5H16v4h-2.5c-.276 0-.5.224-.5.5V11h3l-.5 4h-2.5v4h-4z"/>
              </svg>
            </a>
            <a href="#" className="text-white hover:text-white/80 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-white/90">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
            <li><Link to="/resources" className="hover:text-white transition-colors">Resources</Link></li>
          </ul>
        </div>

        {/* More Links */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-white/90">
            <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
            {/* <li><Link to="/blogs" className="hover:text-white transition-colors">Blogs</Link></li> Removed Blogs link */}
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-3 text-white/90 text-sm">
            <li className="flex items-start">
              <svg className="w-5 h-5 mr-2 mt-0.5 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              <span>990 Southern BLVD, BRONX, NY 10459-3402</span>
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              <span>718-282-2000</span>
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              <span>SOUTHERNBLVDPHARMACY@GMAIL.COM</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/20 mt-12 pt-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-center text-white/70 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Southern BLVD Pharmacy. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-white/70 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/70 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-white/70 hover:text-white text-sm transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}