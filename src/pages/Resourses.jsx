import React from "react";
import HeroSlider from "../components/HeroSlider";

export default function Resources() {
  return (
    <div className="bg-gradient-to-b from-white to-[#F8FAFB] text-gray-800">

      {/* Hero Section */}

      
      <section className="bg-white py-8 animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-[#0FA47F]">Health Resources</h1>
        </div>
      </section>

      {/* Educational Categories */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20 animate-fade-in-up">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1 bg-[#0FA47F]/10 text-[#0FA47F] rounded-full text-sm font-semibold mb-4">
            EDUCATIONAL CATEGORIES
          </div>
          <h2 className="text-3xl font-bold text-[#0FA47F] mb-6">Educational Categories</h2>
          <p className="text-gray-600 text-lg">
            Explore our comprehensive health education resources
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Medication Safety",
              desc: "Learn how to store, take, and manage your medications safely.",
              icon: "💊"
            },
            {
              title: "Chronic Disease Management",
              desc: "Guides for diabetes, hypertension, asthma, and more.",
              icon: "🩺"
            },
            {
              title: "Immunizations",
              desc: "Stay updated with essential vaccines for children and adults.",
              icon: "💉"
            },
            {
              title: "Healthy Living",
              desc: "Nutrition, exercise, stress management, and lifestyle tips.",
              icon: "🥗"
            },
            {
              title: "Senior Health",
              desc: "Resources tailored for older adults and caregivers.",
              icon: "👴"
            },
            {
              title: "Mental Wellness",
              desc: "Support for stress, anxiety, depression, and emotional well-being.",
              icon: "🧠"
            }
          ].map((item, index) => (
            <div
              key={index}
              className="p-8 bg-white border rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#0FA47F] mb-3 group-hover:text-[#1A73E8] transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Useful Links */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20 bg-white rounded-2xl shadow-lg animate-fade-in-up">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1 bg-[#1A73E8]/10 text-[#1A73E8] rounded-full text-sm font-semibold mb-4">
            USEFUL LINKS
          </div>
          <h2 className="text-3xl font-bold text-[#0FA47F] mb-6">Useful Health Links</h2>
          <p className="text-gray-600 text-lg">
            Trusted external resources for your health information
          </p>
        </div>

        <ul className="space-y-6">
          <li className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <a
              href="https://www.cdc.gov/"
              className="flex items-center p-6 bg-[#F8FAFB] rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="text-3xl mr-4 group-hover:text-[#0FA47F] transition-colors">🔗</div>
              <div>
                <h3 className="text-xl font-semibold text-[#1A73E8] group-hover:text-[#0FA47F] transition-colors">CDC – Centers for Disease Control and Prevention</h3>
                <p className="text-gray-600 mt-1">Official source for health information and recommendations</p>
              </div>
              <svg className="w-6 h-6 ml-auto text-gray-400 group-hover:text-[#0FA47F] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </a>
          </li>
          <li className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <a href="https://www.fda.gov/" className="flex items-center p-6 bg-[#F8FAFB] rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group" target="_blank" rel="noopener noreferrer">
              <div className="text-3xl mr-4 group-hover:text-[#0FA47F] transition-colors">🔗</div>
              <div>
                <h3 className="text-xl font-semibold text-[#1A73E8] group-hover:text-[#0FA47F] transition-colors">FDA – Medication & Drug Safety</h3>
                <p className="text-gray-600 mt-1">Information about drug safety and approvals</p>
              </div>
              <svg className="w-6 h-6 ml-auto text-gray-400 group-hover:text-[#0FA47F] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </a>
          </li>
          <li className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <a href="https://healthfinder.gov/" className="flex items-center p-6 bg-[#F8FAFB] rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group" target="_blank" rel="noopener noreferrer">
              <div className="text-3xl mr-4 group-hover:text-[#0FA47F] transition-colors">🔗</div>
              <div>
                <h3 className="text-xl font-semibold text-[#1A73E8] group-hover:text-[#0FA47F] transition-colors">HealthFinder.gov – Healthy Living Guides</h3>
                <p className="text-gray-600 mt-1">Preventive care and healthy living resources</p>
              </div>
              <svg className="w-6 h-6 ml-auto text-gray-400 group-hover:text-[#0FA47F] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </a>
          </li>
          <li className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <a href="https://www.heart.org/" className="flex items-center p-6 bg-[#F8FAFB] rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group" target="_blank" rel="noopener noreferrer">
              <div className="text-3xl mr-4 group-hover:text-[#0FA47F] transition-colors">🔗</div>
              <div>
                <h3 className="text-xl font-semibold text-[#1A73E8] group-hover:text-[#0FA47F] transition-colors">American Heart Association – Heart Health</h3>
                <p className="text-gray-600 mt-1">Resources for cardiovascular health and disease prevention</p>
              </div>
              <svg className="w-6 h-6 ml-auto text-gray-400 group-hover:text-[#0FA47F] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </a>
          </li>
          <li className="animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <a href="https://www.mhanational.org/" className="flex items-center p-6 bg-[#F8FAFB] rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group" target="_blank" rel="noopener noreferrer">
              <div className="text-3xl mr-4 group-hover:text-[#0FA47F] transition-colors">🔗</div>
              <div>
                <h3 className="text-xl font-semibold text-[#1A73E8] group-hover:text-[#0FA47F] transition-colors">Mental Health America – Support & Resources</h3>
                <p className="text-gray-600 mt-1">Mental health support and educational resources</p>
              </div>
              <svg className="w-6 h-6 ml-auto text-gray-400 group-hover:text-[#0FA47F] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </a>
          </li>
        </ul>
      </section>

      {/* FAQ Section */}
      <section className="bg-gradient-to-br from-[#0FA47F]/5 to-[#1A73E8]/5 py-20 animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1 bg-[#0FA47F]/10 text-[#0FA47F] rounded-full text-sm font-semibold mb-4">
              FAQ
            </div>
            <h2 className="text-3xl font-bold text-[#0FA47F] mb-6">❓ Frequently Asked Questions (FAQ)</h2>
            <p className="text-gray-600 text-lg">
              Common questions about our pharmacy services
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-xl font-semibold text-[#0FA47F] mb-4 flex items-center group-hover:text-[#1A73E8] transition-colors">
                <svg className="w-6 h-6 mr-3 text-[#1A73E8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                How do I refill my prescription?
              </h3>
              <p className="text-gray-600">You can refill your prescription by calling our pharmacy at 718-282-2000, using our online prescription refill service, or visiting us in person. Refills are typically processed within 1-2 hours during business hours.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-xl font-semibold text-[#0FA47F] mb-4 flex items-center group-hover:text-[#1A73E8] transition-colors">
                <svg className="w-6 h-6 mr-3 text-[#1A73E8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Can I transfer my prescription to your pharmacy?
              </h3>
              <p className="text-gray-600">Yes, we offer free prescription transfers from your previous pharmacy. Simply provide us with your prescription information, and our team will handle the transfer process for you with expert assistance.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-xl font-semibold text-[#0FA47F] mb-4 flex items-center group-hover:text-[#1A73E8] transition-colors">
                <svg className="w-6 h-6 mr-3 text-[#1A73E8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Do you offer home delivery?
              </h3>
              <p className="text-gray-600">Yes, we provide free home delivery every day. We deliver your medications directly to your doorstep with fast, reliable, and contactless service. Schedule your delivery by calling us or through our online portal.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-xl font-semibold text-[#0FA47F] mb-4 flex items-center group-hover:text-[#1A73E8] transition-colors">
                <svg className="w-6 h-6 mr-3 text-[#1A73E8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                How long does a refill take?
              </h3>
              <p className="text-gray-600">Most prescription refills are ready within 1-2 hours during our regular business hours. For complex medications or special orders, it may take 1-2 business days. We'll notify you when your prescription is ready for pickup or delivery.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <h3 className="text-xl font-semibold text-[#0FA47F] mb-4 flex items-center group-hover:text-[#1A73E8] transition-colors">
                <svg className="w-6 h-6 mr-3 text-[#1A73E8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Do you accept insurance?
              </h3>
              <p className="text-gray-600">Yes, we accept Medicaid, Medicare Part D, and most private insurances. We also offer competitive cash pricing for medications and various discount programs to help you save on your prescriptions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Wellness Tips Section */}
      <section className="bg-gradient-to-r from-[#1A73E8] to-[#0FA47F] text-white py-20 animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1 bg-white/20 text-white rounded-full text-sm font-semibold mb-4">
              WELLNESS TIPS
            </div>
            <h2 className="text-3xl font-bold mb-6">Quick Wellness Tips</h2>
            <p className="text-white/90 text-lg">
              Simple habits for a healthier lifestyle
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "💧 Stay hydrated — your body functions better.",
              "⏰ Take medications on time — set reminders.",
              "😴 Get at least 7–8 hours of sleep.",
              "🥗 Eat a balanced diet rich in fruits & vegetables.",
              "🏃 Exercise for at least 30 minutes daily.",
              "📅 Schedule regular health check-ups."
            ].map((tip, i) => (
              <div key={i} className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="text-2xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {tip.substring(0, 2)}
                </div>
                <p className="text-white">{tip.substring(2)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-white animate-fade-in-up">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-[#0FA47F] mb-6">
            Need personalized health advice?
          </h3>
          <p className="text-gray-600 mb-10 text-lg">
            Contact our pharmacists for expert guidance and medication support.
          </p>

          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-[#0FA47F] text-white rounded-lg shadow-lg hover:bg-[#0C8E6C] transition transform hover:-translate-y-1 font-semibold"
          >
            Contact Us
          </a>
        </div>
      </section>

    </div>
  );
}
