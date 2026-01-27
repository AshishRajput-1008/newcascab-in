"use client"
import React from "react";
import { Award, Briefcase, GraduationCap, Heart, Target, TrendingUp, Users, Sparkles } from "lucide-react";
import Image from "next/image";
import s1 from "@/app/assets/gallery/cabcab.jpeg"
import s3 from "@/app/assets/gallery/cascabImg1compress.jpg"
import s4 from "@/app/assets/gallery/cascabVideo.mp4"

import Header from "@/app/components/Home/Header"
import Footer from "@/app/components/Home/Footer"

export default function OurProfile() {
  const achievements = [
    { icon: Users, value: "750+", label: "Happy Clients" },
    { icon: Briefcase, value: "15+", label: "Years Experience" },
    { icon: Award, value: "100%", label: "Success Rate" },
    { icon: TrendingUp, value: "₹50Cr+", label: "Revenue Generated" }
  ];

  const qualifications = [
    "Master of Technology (M.Tech.) in Digital Communication",
    "Bachelor of Engineering (B.E.) in Electronics & Communication",
    "Polytechnic Diploma in Electronics & Tele Communication",
    "Certificate in 'Masala Making' - Dr. B.R. Ambedkar Institute",
    "Certificate in 'Plastics Products Manufacturing' - CIPET Bhopal",
    "Training in 'Embedded Systems & VLSI Design in Robotics'",
    "Purple Belt in Martial Art"
  ];

  const expertise = [
    {
      title: "Corporate Coaching",
      description: "15+ years of solving complex business challenges",
      icon: Briefcase
    },
    {
      title: "Spices & Food Formulation",
      description: "Customized products formulation specialist",
      icon: Sparkles
    },
    {
      title: "Financial Freedom Training",
      description: "Master trainer in wealth creation strategies",
      icon: TrendingUp
    },
    {
      title: "Entrepreneurship Development",
      description: "Guiding businesses from inception to success",
      icon: Target
    }
  ];

  return (
    <>
    <Header/>
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#044441] via-teal-800 to-teal-900 py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-lime-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-600/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-[#9ae761]/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
              <span className="text-[#9ae761] font-bold text-sm uppercase tracking-wider">Our Profile</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Let Me Help You Overshoot<br />Your Goals in the Right Ways
            </h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
              Er. Mukesh Bhaskar - Best Business Coach for Entrepreneurs & Small Business
            </p>
          </div>
        </div>

        <svg className="absolute bottom-0 left-0 w-full h-24 text-white" viewBox="0 0 1440 120" fill="currentColor" preserveAspectRatio="none">
          <path d="M0,0 C480,120 960,120 1440,0 L1440,120 L0,120 Z"></path>
        </svg>
      </section>

      {/* Stats Section */}
      <section className="py-16 -mt-12 relative z-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((stat, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-2xl border-2 border-teal-100 hover:border-[#9ae761] transition-all duration-300 hover:scale-105">
                <stat.icon className="w-12 h-12 text-teal-600 mb-4" />
                <div className="text-4xl font-bold text-teal-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CEO Image & Introduction Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-lime-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image Container */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-600 to-[#9ae761] rounded-3xl blur-2xl opacity-20 transform -rotate-6"></div>
                <div className="relative bg-white rounded-3xl p-3 shadow-2xl">
                  <div className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden">
                    <Image
                      src={s3.src}
                      alt="Er. Mukesh Bhaskar - CEO & Founder"
                      fill
                      className="object-cover object-center"
                      priority
                    />
                    {/* Decorative overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-teal-900/60 via-transparent to-transparent"></div>
                    
                    {/* Name badge on image */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                        <h3 className="text-2xl font-bold text-teal-900 mb-1">Er. Mukesh Bhaskar</h3>
                        <p className="text-teal-700 font-semibold">CEO & Founder, CASCAB Group</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#9ae761] rounded-full blur-xl opacity-40"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-teal-600 rounded-full blur-xl opacity-30"></div>
              </div>

              {/* Content */}
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-teal-900 mb-6">The Person</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    <span className="text-2xl font-bold text-teal-800 block mb-2">Mukesh Bhaskar</span>
                    is a renowned corporate coach, entrepreneur, and planner from India. Born on <span className="font-semibold">28 November 1987</span> in Bhander, his journey to success is marked by perseverance, self-belief, and a deep understanding of the human mind.
                  </p>
                  <p>
                    Mukesh Bhaskar helps business owners tackle challenges and guides them toward success. His approach is personalized, not generic, and offers a clear path to success. He is the founder and leader of <span className="font-bold text-teal-800">The CASCAB Group</span>, dedicating his career to fixing complex problems and revitalizing struggling businesses.
                  </p>
                  <p>
                    Mukesh Bhaskar's strategies and ideas have led to profit increases in the millions for his diverse client base. He has identified limiting patterns that hold back business growth and has become a leader in breaking these barriers.
                  </p>
                  
                  {/* Highlight Box */}
                  <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-2xl p-6 mt-6">
                    <p className="text-white font-semibold text-lg">
                      "Get financial freedom with your inner strength and potential"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-teal-900 mb-12 text-center">Core Expertise</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {expertise.map((item, index) => (
              <div key={index} className="group bg-gradient-to-br from-teal-50 to-white rounded-2xl p-8 border-2 border-teal-100 hover:border-[#9ae761] transition-all duration-300 hover:shadow-2xl">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-teal-800 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-teal-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Qualifications */}
      <section className="py-20 bg-gradient-to-br from-teal-900 to-teal-800 text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-12">
              <GraduationCap className="w-12 h-12 text-[#9ae761]" />
              <h2 className="text-4xl lg:text-5xl font-bold">Educational Qualifications</h2>
            </div>
            <div className="space-y-4">
              {qualifications.map((qual, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#9ae761] flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-teal-900 font-bold text-sm">{index + 1}</span>
                    </div>
                    <p className="text-white/90 leading-relaxed">{qual}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Director Profile */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-teal-900 mb-8 text-center">The Journey</h2>
            <div className="bg-gradient-to-br from-[#9ae761]/20 to-teal-50 rounded-3xl p-8 lg:p-12 border-2 border-[#9ae761]/30">
              <p className="text-gray-700 leading-relaxed mb-6">
                <span className="text-2xl font-bold text-teal-800">Er. Mukesh Bhaskar</span> is CASCAB Chairman of the Board, President and CEO. He is a young successful entrepreneur in the spices industry known as CASCAB.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Worked for more than 15 years to learn the development of Entrepreneurship and also achieved training from prestigious educational institutes like <span className="font-semibold">C.I.P.E.T.</span> and <span className="font-semibold">Dr. B. R. Ambedkar Institute of Rural Technology & Management</span>.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Along with this, an F.M.C.G. product manufacturing industry is also running in India with continuous research to produce & sell the best quality products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Message */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-lime-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <Heart className="w-16 h-16 text-teal-600 mx-auto mb-6" />
            <h2 className="text-4xl lg:text-5xl font-bold text-teal-900 mb-8">The Core Message</h2>
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
              <ul className="text-left space-y-4 text-gray-700 text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-[#9ae761] text-2xl">•</span>
                  <span>Founder of CASCAB with over 15 years of experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#9ae761] text-2xl">•</span>
                  <span>Renowned for solving complex business challenges and revitalizing struggling businesses</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#9ae761] text-2xl">•</span>
                  <span>Customized spices & food products formulation specialist</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#9ae761] text-2xl">•</span>
                  <span>Master Trainer in Financial Freedom</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#9ae761] text-2xl">•</span>
                  <span>Focus on self-improvement, happiness, and goal achievement</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#9ae761] text-2xl">•</span>
                  <span>Emphasis on proper planning according to time, resources, and your strengths</span>
                </li>
              </ul>
              <div className="mt-10 p-6 bg-gradient-to-r from-teal-800 to-teal-600 rounded-2xl">
                <p className="text-white text-xl font-semibold text-center">
                  "Get financial freedom with your inner strength and potential"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-teal-900 to-teal-800">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-white/80 mb-10">Let's work together to achieve your goals</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-[#9ae761] text-teal-900 px-8 py-4 rounded-full text-lg font-bold hover:bg-lime-300 transition-all shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-3">
                Contact Us Today
                <span className="bg-teal-900 text-lime-400 rounded-full w-10 h-10 flex items-center justify-center group-hover:rotate-45 transition-transform">→</span>
              </button>
              <button className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-full text-lg font-bold hover:bg-white/20 transition-all">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
}