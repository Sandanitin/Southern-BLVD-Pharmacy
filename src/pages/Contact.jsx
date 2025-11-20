import React from "react";
import HeroSlider from "../components/HeroSlider";

export default function Contact() {
  return (
    <div className="bg-gradient-to-b from-white to-[#F8FAFB] text-gray-800">

      {/* Hero Section */}
 
      
      <section className="bg-white py-8 animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-[#0FA47F]">Contact Us</h1>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20 animate-fade-in-up">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1 bg-[#0FA47F]/10 text-[#0FA47F] rounded-full text-sm font-semibold mb-4">
            GET IN TOUCH
          </div>
          <h2 className="text-3xl font-bold text-[#0FA47F] mb-6">Get in Touch</h2>
          <p className="text-gray-600 text-lg">
            Reach out to us for inquiries, prescription assistance, health advice, or general questions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="w-full max-w-md mx-auto bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 h-full">
              <h3 className="text-2xl font-bold text-[#0FA47F] mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start p-4 bg-[#F8FAFB] rounded-lg">
                  <div className="text-[#1A73E8] mr-4 mt-1">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Address</h4>
                    <p className="text-gray-600">
                      990 Southern BLVD, BRONX, NY 10459-3402<br />
                      COUNTY – BRONX
                    </p>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-[#F8FAFB] rounded-lg">
                  <div className="text-[#1A73E8] mr-4 mt-1">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Phone</h4>
                    <p className="text-gray-600">718-282-2000</p>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-[#F8FAFB] rounded-lg">
                  <div className="text-[#1A73E8] mr-4 mt-1">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Fax</h4>
                    <p className="text-gray-600">718-282-0222</p>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-[#F8FAFB] rounded-lg">
                  <div className="text-[#1A73E8] mr-4 mt-1">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                    <p className="text-gray-600">SOUTHERNBLVDPHARMACY@GMAIL.COM</p>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-[#F8FAFB] rounded-lg">
                  <div className="text-[#1A73E8] mr-4 mt-1">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Hours of Operation</h4>
                    <p className="text-gray-600">
                      MON-FRI: 9:00AM TO 7PM<br />
                      SAT: 10AM TO 4PM<br />
                      SUN: CLOSED
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in-up w-full" style={{ animationDelay: '0.2s' }}>
            <div className="w-full max-w-md mx-auto p-4 sm:p-6 md:p-8 bg-gradient-to-br from-[#0FA47F]/5 to-[#1A73E8]/5 rounded-2xl shadow-lg h-full">
              <h3 className="text-xl sm:text-2xl font-bold text-[#0FA47F] mb-6 text-center sm:text-left">Send Us a Message</h3>

              <form className="space-y-5 sm:space-y-6">
                <div>
                  <label className="block font-semibold text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0FA47F] focus:border-transparent transition-all duration-300"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0FA47F] focus:border-transparent transition-all duration-300"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0FA47F] focus:border-transparent transition-all duration-300"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-gray-700 mb-2">Message</label>
                  <textarea
                    rows="5"
                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0FA47F] focus:border-transparent transition-all duration-300"
                    placeholder="Write your message..."
                  ></textarea>
                </div>

                <button className="w-full max-w-xs mx-auto block py-3 sm:py-4 bg-[#0FA47F] text-white font-semibold rounded-lg hover:bg-[#0C8E6C] transition transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full bg-gradient-to-r from-[#1A73E8] to-[#0FA47F] pt-16 pb-10 md:py-20 animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1 bg-white/20 text-white rounded-full text-sm font-semibold mb-4">
              FIND US
            </div>
            <h2 className="text-3xl font-bold text-white mb-6">Find Us on the Map</h2>
            <p className="text-white/90 text-lg">
              Visit our pharmacy location in the heart of the Bronx
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white relative">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3017.442153314458!2d-73.8950987!3d40.8245569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f5e2810fe389%3A0x89c2f5e2810fe389!2s990%20Southern%20Blvd%2C%20Bronx%2C%20NY%2010459!5e0!3m2!1sen!2sus!4v1678823456789"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="absolute bottom-4 left-0 right-0 flex justify-center">
              <a 
                href="https://maps.app.goo.gl/gio2fraN7t4PXpjVA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-[#0FA47F] text-white font-semibold rounded-lg shadow-lg hover:bg-[#0C8E6C] transition transform hover:-translate-y-1 text-lg"
              >
                View Larger Map
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pt-10 pb-20 md:py-20 text-center bg-white animate-fade-in-up">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-[#0FA47F] mb-6">
            We're here to support your healthcare journey.
          </h3>
          <p className="text-gray-600 mb-10 text-lg">
            Have an urgent question? Call us directly and our pharmacists will be happy to assist you.
          </p>

          <a
            href="tel:7182822000"
            className="inline-block px-8 py-4 bg-[#0FA47F] text-white rounded-lg shadow-lg hover:bg-[#0C8E6C] transition transform hover:-translate-y-1 font-semibold"
          >
            Call Now: (718) 282-2000
          </a>
        </div>
      </section>

    </div>
  );
}
