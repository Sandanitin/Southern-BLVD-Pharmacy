import React from "react";
import HeroSlider from "../components/HeroSlider";

export default function About() {
  return (
    <div className="bg-gradient-to-b from-white to-[#F8FAFB] text-gray-800">
      
  
      
      <section className="bg-white py-8 animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-[#0FA47F]">About Southern BLVD Pharmacy</h1>
        </div>
      </section>

      {/* Top Section: Image + Text */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 grid md:grid-cols-2 gap-12 items-center animate-fade-in-up">
        
        {/* Image */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <img
            src="about.jpg"
            alt="Pharmacy team"
            className="rounded-2xl shadow-xl w-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="inline-block px-4 py-1 bg-[#0FA47F]/10 text-[#0FA47F] rounded-full text-sm font-semibold mb-4">
            OUR STORY
          </div>
          <h2 className="text-3xl font-bold text-[#0FA47F] mb-6">Your Trusted Healthcare Partner</h2>

          <p className="text-lg leading-relaxed mb-4">
            <span className="font-semibold">Southern BLVD Pharmacy</span> is your new neighborhood 
            pharmacy located at 990 Southern Blvd, Bronx, NY. We're committed to providing personalized 
            care that goes beyond prescriptions with compassion and expertise.
          </p>

          <p className="text-lg leading-relaxed mb-4">
            As a family-owned community pharmacy, we offer friendly service with staff who know your 
            name. We provide comprehensive services—from medication reviews to immunizations and 
            wellness advice.
          </p>

          <p className="text-lg leading-relaxed">
            Rite Aid customers are welcome back to the same location with better service. Visit us 
            today to experience the personalized care and trusted support that sets us apart.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-gradient-to-r from-[#0FA47F]/5 to-[#1A73E8]/5 py-20 animate-fade-in-up">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1 bg-[#0FA47F]/10 text-[#0FA47F] rounded-full text-sm font-semibold mb-4">
              WHY CHOOSE US
            </div>
            <h2 className="text-3xl font-bold text-[#0FA47F] mb-6">Why Choose Our Pharmacy?</h2>
            <p className="text-gray-600 text-lg">
              We're dedicated to providing exceptional healthcare services with a personal touch
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-xl font-semibold text-[#0FA47F] mb-4 flex items-center">
                <svg className="w-6 h-6 mr-3 text-[#1A73E8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Our Commitment
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#0FA47F] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Fast, friendly, and reliable service</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#0FA47F] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Free home delivery every day</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#0FA47F] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>We accept most insurances</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#0FA47F] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Expert medication counseling</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#0FA47F] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Immunizations available on-site</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#0FA47F] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Hassle-free prescription transfers</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-xl font-semibold text-[#0FA47F] mb-4 flex items-center">
                <svg className="w-6 h-6 mr-3 text-[#1A73E8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
                Community Focus
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#0FA47F] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Family-owned community pharmacy</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#0FA47F] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Friendly staff who know your name</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#0FA47F] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Personalized care plans</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#0FA47F] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Senior-friendly services</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#0FA47F] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Coordination with doctors and clinics</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#0FA47F] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Competitive prices and savings programs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white animate-fade-in-up">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1 bg-[#1A73E8]/10 text-[#1A73E8] rounded-full text-sm font-semibold mb-4">
              OUR SERVICES
            </div>
            <h2 className="text-3xl font-bold text-[#0FA47F] mb-6">Our Comprehensive Services</h2>
            <p className="text-gray-600 text-lg">
              We offer a wide range of pharmacy services to meet all your healthcare needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-white to-[#F8FAFB] p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-xl font-semibold text-[#0FA47F] mb-4 flex items-center">
                <svg className="w-6 h-6 mr-3 text-[#1A73E8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Convenience Services
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#0FA47F] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Fast prescription filling</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#0FA47F] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Walk-ins welcome</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#0FA47F] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Multilingual staff</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#0FA47F] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Automatic refill reminders</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#0FA47F] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Special orders accepted</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-white to-[#F8FAFB] p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-xl font-semibold text-[#0FA47F] mb-4 flex items-center">
                <svg className="w-6 h-6 mr-3 text-[#1A73E8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
                Health Services
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#0FA47F] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Immunizations: Flu, COVID-19, RSV, Shingles, Pneumonia</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#0FA47F] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Blood pressure checks</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#0FA47F] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Diabetes counseling</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#0FA47F] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Free medication consultations</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#0FA47F] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>OTC recommendations</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-white to-[#F8FAFB] p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-xl font-semibold text-[#0FA47F] mb-4 flex items-center">
                <svg className="w-6 h-6 mr-3 text-[#1A73E8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Insurance & Savings
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#0FA47F] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Medicaid, Medicare Part D</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#0FA47F] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Most private insurances</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#0FA47F] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Lowest possible copays</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#0FA47F] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Discount programs</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#0FA47F] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Competitive cash pricing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#1A73E8] to-[#0FA47F] text-white py-20 text-center animate-fade-in-up">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-6">
            Discover a better pharmacy experience today.
          </h3>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-10">
            Contact us to learn more about our comprehensive and personalized services.
          </p>

          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-[#1A73E8] font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition transform hover:-translate-y-1 hover:shadow-xl"
          >
            Contact Us
          </a>
        </div>
      </section>

    </div>
  );
}