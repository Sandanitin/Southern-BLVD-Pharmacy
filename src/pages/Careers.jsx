import React from "react";
import HeroSlider from "../components/HeroSlider";

export default function Careers() {
  // Job openings data
  const jobOpenings = [
    {
      title: "Pharmacy Technician",
      type: "Full-time",
      responsibilities: [
        "Assist pharmacists",
        "Manage inventory",
        "Handle customer service"
      ],
      requirements: [
        "High school diploma",
        "Basic computer skills",
        "Pharmacy experience preferred"
      ]
    },
    {
      title: "Pharmacist (Staff Pharmacist)",
      type: "Full-time / Part-time",
      responsibilities: [
        "Fill prescriptions",
        "Counsel patients",
        "Perform screenings"
      ],
      requirements: [
        "Valid pharmacy license",
        "Strong communication skills"
      ]
    },
    {
      title: "Customer Service Associate",
      type: "Part-time",
      responsibilities: [
        "Assist customers",
        "Manage billing",
        "Handle phone calls"
      ],
      requirements: [
        "Good communication",
        "Friendly attitude"
      ]
    },
    {
      title: "Delivery Driver",
      type: "Part-time",
      responsibilities: [
        "Deliver medications safely to customers",
        "Maintain delivery logs"
      ],
      requirements: [
        "Valid driver's license"
      ]
    }
  ];

  return (
    <div className="bg-gradient-to-b from-white to-[#F8FAFB] text-gray-800">

      {/* Hero Section */}
    
      
      <section className="bg-white py-8 animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-[#0FA47F]">Join Our Team</h1>
        </div>
      </section>

      {/* Our Culture Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20 animate-fade-in-up">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1 bg-[#0FA47F]/10 text-[#0FA47F] rounded-full text-sm font-semibold mb-4">
            OUR CULTURE
          </div>
          <h2 className="text-3xl font-bold text-[#0FA47F] mb-6">Our Work Culture</h2>
          <p className="text-gray-600 text-lg">
            A supportive environment where you can grow and make a difference
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <img
              src="joinourteam.png"
              alt="Work Culture"
              className="rounded-2xl shadow-xl w-full object-cover"
            />
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-lg leading-relaxed mb-6">
              At Southern BLVD Pharmacy, we foster a work environment built on compassion,
              professionalism, and growth. We believe that every team member plays a vital
              role in delivering exceptional care to our patients.
            </p>
            
            <p className="text-lg leading-relaxed">
              Our workplace encourages continuous learning, teamwork, and respect while 
              offering opportunities to expand your career in the healthcare industry. 
              We're committed to supporting your professional development and personal well-being.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="bg-gradient-to-r from-[#0FA47F] to-[#1A73E8] text-white py-20 animate-fade-in-up">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1 bg-white/20 text-white rounded-full text-sm font-semibold mb-4">
              WHY JOIN US
            </div>
            <h2 className="text-3xl font-bold mb-6">Why Work With Us?</h2>
            <p className="text-white/90 text-lg">
              We offer a rewarding career path in a growing healthcare field
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Supportive Environment",
                desc: "Supportive and collaborative work environment",
                icon: "🤝"
              },
              {
                title: "Professional Growth",
                desc: "Opportunities for professional development",
                icon: "📈"
              },
              {
                title: "Competitive Benefits",
                desc: "Competitive salary and benefits package",
                icon: "💰"
              },
              {
                title: "Patient Focus",
                desc: "Strong focus on patient-centered care",
                icon: "❤️"
              },
              {
                title: "Career Stability",
                desc: "Career growth in a stable healthcare sector",
                icon: "🚀"
              },
              {
                title: "Training Programs",
                desc: "Empowering employees through training programs",
                icon: "🎓"
              }
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-white/90">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20 animate-fade-in-up">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1 bg-[#0FA47F]/10 text-[#0FA47F] rounded-full text-sm font-semibold mb-4">
            JOB OPENINGS
          </div>
          <h2 className="text-3xl font-bold text-[#0FA47F] mb-6">
            Current Job Openings
          </h2>
          <p className="text-gray-600 text-lg">
            Join our team and make a difference in healthcare
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {jobOpenings.map((job, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-[#0FA47F] group-hover:text-[#1A73E8] transition-colors">
                    {job.title}
                  </h3>
                  <span className="bg-[#0FA47F]/10 text-[#0FA47F] text-xs font-semibold px-3 py-1 rounded-full">
                    {job.type}
                  </span>
                </div>

                <div className="mt-6">
                  <h4 className="font-semibold text-[#1A73E8] mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                    </svg>
                    Responsibilities:
                  </h4>
                  <ul className="space-y-2">
                    {job.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="w-5 h-5 text-[#0FA47F] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-600">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <h4 className="font-semibold text-[#1A73E8] mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                    Requirements:
                  </h4>
                  <ul className="space-y-2">
                    {job.requirements.map((requirement, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="w-5 h-5 text-[#0FA47F] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-600">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How to Apply */}
      <section className="bg-gradient-to-r from-[#1A73E8] to-[#0FA47F] text-white py-20 animate-fade-in-up">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1 bg-white/20 text-white rounded-full text-sm font-semibold mb-4">
            HOW TO APPLY
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Join Our Team?
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-10">
            Take the next step in your healthcare career with us
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <p className="text-xl mb-6">
              Interested candidates can send their resume and cover letter to:
            </p>
            
            <div className="flex items-center justify-center mb-8">
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              <span className="text-2xl font-bold">livingwordpharmacy@gmail.com</span>
            </div>
            
            <p className="text-lg mb-8">
              Or fill out the application form below.
            </p>
            
            <a
              href="/contact"
              className="inline-block bg-white text-[#1A73E8] px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              Contact Us to Apply
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-gradient-to-r from-[#F8FAFB] to-white animate-fade-in-up">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-[#0FA47F] mb-6">
            Don't see a role that fits?
          </h3>
          <p className="text-gray-600 mb-10 text-lg max-w-2xl mx-auto">
            We are always looking for passionate individuals to join our team. Send us your resume and we'll contact you when a suitable position opens up.
          </p>

          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-[#0FA47F] text-white rounded-lg shadow-lg hover:bg-[#0C8E6C] transition transform hover:-translate-y-1 font-semibold"
          >
            Submit General Application
          </a>
        </div>
      </section>

    </div>
  );
}
