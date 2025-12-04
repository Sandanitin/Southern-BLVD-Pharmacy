import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8FAFB] to-white flex items-center justify-center px-4">
      <div className="max-w-2xl text-center">
        <div className="mb-8 animate-fade-in-up">
          <h1 className="text-9xl font-bold text-[#0FA47F] mb-4">404</h1>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Page Not Found</h2>
          <p className="text-xl text-gray-600 mb-8">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <Link
            to="/"
            className="inline-block bg-[#0FA47F] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#0C8E6C] transition transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
          >
            Return to Home
          </Link>
        </div>

        <div className="mt-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Popular Pages</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/about"
              className="text-[#1A73E8] hover:text-[#0FA47F] font-medium transition-colors"
            >
              About Us
            </Link>
            <Link
              to="/services"
              className="text-[#1A73E8] hover:text-[#0FA47F] font-medium transition-colors"
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="text-[#1A73E8] hover:text-[#0FA47F] font-medium transition-colors"
            >
              Contact
            </Link>
            <Link
              to="/resources"
              className="text-[#1A73E8] hover:text-[#0FA47F] font-medium transition-colors"
            >
              Resources
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}