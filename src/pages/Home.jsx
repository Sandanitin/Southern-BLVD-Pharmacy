import React from "react";
import { Link } from "react-router-dom";
import HeroSlider from "../components/HeroSlider";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-[#F8FAFB] to-white">

      {/* ================= HERO SECTION ================= */}
      <HeroSlider />
      
      <section className="bg-[#F8FAFB] py-8 animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-6 text-center">
        </div>
      </section>

      {/* ================= ABOUT PREVIEW ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center animate-fade-in-up">
        <div className="order-2 md:order-1">
          <div className="inline-block px-4 py-1 bg-[#0FA47F]/10 text-[#0FA47F] rounded-full text-sm font-semibold mb-4 animate-fade-in">
            ABOUT US
          </div>
          <h2 className="text-3xl font-bold text-[#0FA47F] mb-4 animate-fade-in-up">Your Trusted Healthcare Partner</h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            SOUTHERN BLVD PHARMACY is your new neighborhood pharmacy, offering 
            competitive discounts, free deliveries, and hassle-free prescription 
            transfers. We're here to provide better service to Rite Aid customers 
            and the entire community.
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <a
              href="/about"
              className="bg-[#1A73E8] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1766CE] transition transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              Learn More
            </a>
            <a
              href="/contact"
              className="border-2 border-[#1A73E8] text-[#1A73E8] px-6 py-3 rounded-lg font-semibold hover:bg-[#1A73E8] hover:text-white transition"
            >
              Contact Us
            </a>
          </div>
        </div>

        <div className="order-1 md:order-2 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="relative">
            <img
              src="about.jpg"
              alt="About Pharmacy"
              className="rounded-2xl shadow-xl object-cover w-full h-full"
            />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#0FA47F] rounded-2xl shadow-lg flex items-center justify-center animate-float">
              <span className="text-white text-3xl font-bold">15+</span>
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#1A73E8] rounded-2xl shadow-lg flex items-center justify-center opacity-90 animate-float" style={{ animationDelay: '1s' }}>
              <span className="text-white text-lg font-semibold text-center px-2">Years of Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="bg-white py-20 animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
            <div className="inline-block px-4 py-1 bg-[#0FA47F]/10 text-[#0FA47F] rounded-full text-sm font-semibold mb-4">
              OUR SERVICES
            </div>
            <h2 className="text-3xl font-bold text-[#0FA47F] mb-4">
              Pharmacy Services
            </h2>
            <p className="text-gray-600 text-lg">
              Comprehensive healthcare services designed to keep you healthy and informed.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-10">
            <ServiceBox
              title="Prescription Services"
              icon="💊"
              desc="Complete prescription management including refills, transfers, and medication synchronization."
            />

            <ServiceBox
              title="Immunizations"
              icon="💉"
              desc="Flu, COVID-19, RSV, Shingles, Pneumonia and more. Walk-in vaccinations available."
            />

            <ServiceBox
              title="Health Screenings"
              icon="📋"
              desc="Blood pressure, diabetes, and cholesterol checks. Walk-ins welcome."
            />

            <ServiceBox
              title="Free Home Delivery"
              icon="🚚"
              desc="Free daily deliveries to your doorstep. Fast, reliable, and contactless."
            />

            <ServiceBox
              title="Medication Therapy Management"
              icon="📝"
              desc="Personalized reviews to help you understand your medicines and improve outcomes."
            />

            <ServiceBox
              title="Consultation Services"
              icon="👨‍⚕️"
              desc="Free medication consultations and OTC recommendations by licensed pharmacists."
            />
          </div>

          <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <a
              href="/services"
              className="bg-[#0FA47F] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#0C8E6C] transition transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              View All Services
            </a>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="bg-gradient-to-br from-white to-[#F8FAFB] py-20 animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
            <div className="inline-block px-4 py-1 bg-[#0FA47F]/10 text-[#0FA47F] rounded-full text-sm font-semibold mb-4">
              WHY CHOOSE US
            </div>
            <h2 className="text-3xl font-bold text-[#0FA47F] mb-4">
              Why Choose Our Pharmacy?
            </h2>
            <p className="text-gray-600 text-lg">
              We offer fast, friendly, and reliable service with a focus on your 
              health and convenience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-10">
            <ServiceBox
              title="Personalized Care You Can Trust"
              icon="🤝"
              desc="One-on-one guidance from our pharmacists — tailored medication advice, dosage checks, and follow-up support to help you stay healthy."
            />

            <ServiceBox
              title="Experienced & Friendly Pharmacists"
              icon="🩺"
              desc="Our team brings years of expertise in medication therapy and patient counseling, delivering care with compassion and professionalism."
            />

            <ServiceBox
              title="Fast & Hassle-Free Prescriptions"
              icon="⚡"
              desc="Quick refills, easy transfers, and efficient service — we save you time while prioritizing accuracy and safety."
            />
          </div>

          <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <a
              href="/services"
              className="bg-[#0FA47F] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#0C8E6C] transition transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              View All Services
            </a>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-gradient-to-r from-[#1A73E8] to-[#0FA47F] py-20 text-center text-white animate-fade-in-up">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up">
            We're Here to Support Your Wellness
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Contact our pharmacy team today for expert health assistance,
            medication support, and care you can trust.
          </p>

          <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <a
              href="/contact"
              className="bg-white text-[#1A73E8] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              Get in Touch
            </a>
            <a
              href="tel:718-282-2000"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition transform hover:-translate-y-1"
            >
              Call Now: (718) 282-2000
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

/* Reusable Service Preview Box */
function ServiceBox({ title, icon, desc }) {
  return (
    <div className="p-8 bg-white shadow-lg rounded-2xl hover:shadow-xl transition transform hover:-translate-y-2 border border-gray-100 hover:border-[#0FA47F]/30 group animate-fade-in-up">
      <div className="w-16 h-16 bg-[#0FA47F]/10 rounded-xl flex items-center justify-center text-3xl text-[#0FA47F] mb-6 group-hover:bg-[#0FA47F] group-hover:text-white transition-all duration-300">
        {icon}
      </div>

      <h3 className="text-xl font-bold text-[#0FA47F] mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{desc}</p>
      
      <div className="mt-6 flex items-center text-[#1A73E8] font-semibold group-hover:text-[#0FA47F] transition-colors">
        <Link to="/services" className="flex items-center">
          <span>Learn more</span>
          <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </Link>
      </div>
    </div>
  );
}