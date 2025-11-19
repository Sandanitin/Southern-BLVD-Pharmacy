import React from "react";
import { Link } from "react-router-dom";
import HeroSlider from "../components/HeroSlider";

export default function Services() {
  return (
    <div className="bg-gradient-to-b from-[#F8FAFB] to-white">

      {/* Hero Section */}
    
      <section className="bg-[#F8FAFB] py-8 animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-[#0FA47F]">Our Healthcare Services</h1>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20 animate-fade-in-up">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <div className="inline-block px-4 py-1 bg-[#0FA47F]/10 text-[#0FA47F] rounded-full text-sm font-semibold mb-4">
            OUR SERVICES
          </div>
          <h2 className="text-3xl font-bold text-[#0FA47F] mb-4">
            Comprehensive Healthcare Solutions
          </h2>
          <p className="text-gray-600 text-lg">
            We offer a wide range of pharmacy services designed to keep you healthy and informed.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard
            title="Prescription Transfers"
            image="prescription.jpg"
            desc="Hassle-free prescription transfers from your previous pharmacy. We handle the process smoothly for your convenience."
          />

          <ServiceCard
            title="Free Home Delivery"
            image="doordelivery.jpg"
            desc="Free home delivery every day. Get your medications delivered directly to your home for a safe, fast, and hassle-free experience."
          />

          <ServiceCard
            title="Immunizations"
            image="immunization.jpg"
            desc="Flu, COVID-19, RSV, Shingles, Pneumonia and more. Walk-in vaccinations available."
          />

          <ServiceCard
            title="Medication Therapy Management"
            image="medication-management.jpg"
            desc="Personalized reviews to help you understand your medicines and improve your treatment outcomes."
          />

          <ServiceCard
            title="Medication Synchronization"
            image="medication.jpg"
            desc="All your medications on the same monthly date for easier management and better adherence."
          />

          <ServiceCard
            title="Blood Pressure & Diabetes Care"
            image="bp.jpg"
            desc="Blood pressure checks, diabetes counseling & glucose monitoring. Walk-ins welcome."
          />
        </div>
      </section>

      {/* Additional Services */}
      <section className="max-w-7xl mx-auto px-6 py-20 bg-white rounded-2xl shadow-lg animate-fade-in-up">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <div className="inline-block px-4 py-1 bg-[#1A73E8]/10 text-[#1A73E8] rounded-full text-sm font-semibold mb-4">
            ADDITIONAL SERVICES
          </div>
          <h2 className="text-3xl font-bold text-[#0FA47F] mb-4">
            Convenience & Support Services
          </h2>
          <p className="text-gray-600 text-lg">
            Extra services to make your healthcare experience even better.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-2xl font-semibold text-[#1A73E8] mb-6 flex items-center">
              <svg className="w-6 h-6 mr-3 text-[#0FA47F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
              Convenience & Services
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start p-4 bg-[#F8FAFB] rounded-lg hover:bg-[#F8FAFB]/50 transition-colors">
                <svg className="w-6 h-6 text-[#0FA47F] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-700">Fast prescription filling — most ready in 10–15 minutes</span>
              </li>
              <li className="flex items-start p-4 bg-[#F8FAFB] rounded-lg hover:bg-[#F8FAFB]/50 transition-colors">
                <svg className="w-6 h-6 text-[#0FA47F] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-700">Walk-ins welcome</span>
              </li>
              <li className="flex items-start p-4 bg-[#F8FAFB] rounded-lg hover:bg-[#F8FAFB]/50 transition-colors">
                <svg className="w-6 h-6 text-[#0FA47F] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-700">Multilingual staff available</span>
              </li>
              <li className="flex items-start p-4 bg-[#F8FAFB] rounded-lg hover:bg-[#F8FAFB]/50 transition-colors">
                <svg className="w-6 h-6 text-[#0FA47F] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-700">Prior authorization assistance</span>
              </li>
              <li className="flex items-start p-4 bg-[#F8FAFB] rounded-lg hover:bg-[#F8FAFB]/50 transition-colors">
                <svg className="w-6 h-6 text-[#0FA47F] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-700">Automatic refill reminders</span>
              </li>
              <li className="flex items-start p-4 bg-[#F8FAFB] rounded-lg hover:bg-[#F8FAFB]/50 transition-colors">
                <svg className="w-6 h-6 text-[#0FA47F] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-700">Blister packaging / pill organizers</span>
              </li>
              <li className="flex items-start p-4 bg-[#F8FAFB] rounded-lg hover:bg-[#F8FAFB]/50 transition-colors">
                <svg className="w-6 h-6 text-[#0FA47F] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-700">Special orders accepted — hard-to-find medications</span>
              </li>
            </ul>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-semibold text-[#1A73E8] mb-6 flex items-center">
              <svg className="w-6 h-6 mr-3 text-[#0FA47F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              Insurance & Savings
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start p-4 bg-[#F8FAFB] rounded-lg hover:bg-[#F8FAFB]/50 transition-colors">
                <svg className="w-6 h-6 text-[#0FA47F] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-700">We accept Medicaid, Medicare Part D, and most private insurances</span>
              </li>
              <li className="flex items-start p-4 bg-[#F8FAFB] rounded-lg hover:bg-[#F8FAFB]/50 transition-colors">
                <svg className="w-6 h-6 text-[#0FA47F] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-700">Lowest possible copays</span>
              </li>
              <li className="flex items-start p-4 bg-[#F8FAFB] rounded-lg hover:bg-[#F8FAFB]/50 transition-colors">
                <svg className="w-6 h-6 text-[#0FA47F] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-700">Discount programs available</span>
              </li>
              <li className="flex items-start p-4 bg-[#F8FAFB] rounded-lg hover:bg-[#F8FAFB]/50 transition-colors">
                <svg className="w-6 h-6 text-[#0FA47F] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-700">Competitive cash pricing</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="max-w-7xl mx-auto px-6 py-20 animate-fade-in-up">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <div className="inline-block px-4 py-1 bg-[#1A73E8]/10 text-[#1A73E8] rounded-full text-sm font-semibold mb-4">
            SPECIALIZED SERVICES
          </div>
          <h2 className="text-3xl font-bold text-[#0FA47F] mb-4">
            Community & Personalized Care
          </h2>
          <p className="text-gray-600 text-lg">
            Tailored services to meet your specific healthcare needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-2xl font-semibold text-[#1A73E8] mb-6 flex items-center">
              <svg className="w-6 h-6 mr-3 text-[#0FA47F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
              Community & Personalized Care
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <svg className="w-6 h-6 text-[#0FA47F] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-700">Family-owned community pharmacy</span>
              </li>
              <li className="flex items-start p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <svg className="w-6 h-6 text-[#0FA47F] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-700">Friendly staff who know your name</span>
              </li>
              <li className="flex items-start p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <svg className="w-6 h-6 text-[#0FA47F] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-700">Personalized care plans</span>
              </li>
              <li className="flex items-start p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <svg className="w-6 h-6 text-[#0FA47F] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-700">Senior-friendly services</span>
              </li>
              <li className="flex items-start p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <svg className="w-6 h-6 text-[#0FA47F] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-700">Coordination with doctors and clinics</span>
              </li>
            </ul>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-semibold text-[#1A73E8] mb-6 flex items-center">
              <svg className="w-6 h-6 mr-3 text-[#0FA47F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
              </svg>
              Specialized Support
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <svg className="w-6 h-6 text-[#0FA47F] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-700">Workers' Compensation prescription support</span>
              </li>
              <li className="flex items-start p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <svg className="w-6 h-6 text-[#0FA47F] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-700">Compounding (if available)</span>
              </li>
              <li className="flex items-start p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <svg className="w-6 h-6 text-[#0FA47F] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-700">LTC / Nursing home support</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#1A73E8] to-[#0FA47F] text-white py-20 rounded-2xl animate-fade-in-up">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Your Health, Our Priority
          </h2>
          <p className="mt-4 text-white/90 leading-relaxed text-lg max-w-2xl mx-auto mb-10">
            Contact us today to learn more about our services or schedule a consultation.
            We are here to support your wellness journey with care and expertise.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="bg-white text-[#1A73E8] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              Contact Us
            </a>
            <a
              href="tel:718-282-2000"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition transform hover:-translate-y-1"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center animate-fade-in-up">
        <h3 className="text-3xl font-semibold text-[#0FA47F] mb-10">Get in Touch</h3>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
            <div className="text-[#1A73E8] mb-4 group-hover:text-[#0FA47F] transition-colors">
              <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
            </div>
            <h4 className="font-semibold text-gray-800 text-xl mb-2">Phone</h4>
            <p className="mt-1 text-gray-600">718-282-2000</p>
          </div>
          
          <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
            <div className="text-[#1A73E8] mb-4 group-hover:text-[#0FA47F] transition-colors">
              <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h4 className="font-semibold text-gray-800 text-xl mb-2">Email</h4>
            <p className="mt-1 text-gray-600">SOUTHERNBLVDPHARMACY@GMAIL.COM</p>
          </div>
          
          <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
            <div className="text-[#1A73E8] mb-4 group-hover:text-[#0FA47F] transition-colors">
              <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </div>
            <h4 className="font-semibold text-gray-800 text-xl mb-2">Location</h4>
            <p className="mt-1 text-gray-600">990 Southern BLVD, BRONX, NY 10459-3402</p>
          </div>
        </div>
      </section>
    </div>
  );
}

/* Reusable Service Card Component */
function ServiceCard({ title, image, desc }) {
  return (
    <Link to="/contact" className="block bg-white shadow-lg rounded-2xl hover:shadow-xl transition transform hover:-translate-y-2 overflow-hidden cursor-pointer border border-gray-100 group animate-fade-in-up">
      <div className="w-full h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-[#0FA47F] mb-3 group-hover:text-[#1A73E8] transition-colors">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{desc}</p>
        
        <div className="mt-4 text-[#1A73E8] font-semibold flex items-center group-hover:text-[#0FA47F] transition-colors">
          Contact us
          <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </div>
      </div>
    </Link>
  );
}