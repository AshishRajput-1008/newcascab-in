'use client'
import { useState } from 'react';
import h1 from "@/app/assets/heroSection/CEO.png";
import BgImg from "@/app/assets/gallery/cabcab.jpeg";
import Image from "next/image";
import ceoImg from "@/app/assets/heroSection/CEO-2.png"
import s1 from "@/app/assets/gallery/cabcab.jpeg"
import s3 from "@/app/assets/gallery/cascabImg1compress.jpg"


export default function AboutUs() {
const [hoveredStat, setHoveredStat] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState('story');

  const stats = [
    { value: "15", suffix: "+", label: "Years of Excellence", icon: "📅" },
    { value: "120", suffix: "+", label: "Campaigns Launched", icon: "🚀" },
    { value: "750", suffix: "+", label: "Clients Served", icon: "🤝" },
    { value: "300", suffix: "%", label: "Average ROI Increase", icon: "📈" }
  ];

  return (
    <section className="relative bg-gradient-to-br from-[#f9f7f0] via-[#f5f3ea] to-[#f9f7f0] overflow-hidden">
      {/* Enhanced Background Decorative Elements */}
      <div className="absolute top-20 right-10 w-[450px] h-[450px] opacity-20 animate-pulse">
        <div className="relative w-full h-full rounded-full overflow-hidden">
          <div className="absolute -inset-4 bg-gradient-to-br from-[#c4d82e]/15 to-[#044441]/15 rounded-full blur-3xl"></div>
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/60 shadow-2xl">
            <img 
              src={BgImg.src}
              alt="Business team collaboration"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#c4d82e]/10 to-[#044441]/10"></div>
          </div>
        </div>
      </div>

      {/* Additional decorative circles */}
      <div className="absolute top-1/3 left-10 w-32 h-32 bg-[#c4d82e]/5 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-[#044441]/5 rounded-full blur-3xl animate-pulse delay-700"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-20 relative z-10">
        
        {/* Enhanced Hero Header */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#044441] animate-pulse"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-[#044441] opacity-60 animate-pulse delay-200"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-[#044441] opacity-30 animate-pulse delay-400"></div>
            </div>
            <span className="text-[#044441] text-xs font-bold tracking-[0.25em] uppercase">About Cascab</span>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-end">
            <div>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-[#032e2c] leading-[0.95] mb-6">
                Strategic
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#044441] via-[#0a6b66] to-[#c4d82e] mt-2 animate-gradient">
                  visionaries
                </span>
                <span className="block mt-2">driving your</span>
                <span className="block text-[#044441] mt-2">business forward</span>
              </h1>
            </div>
            
            <div className="space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed font-light">
                Empowering businesses through strategic coaching and transformative solutions. We don&apos;t just offer guidance—we forge partnerships that create sustainable success.
              </p>
              <div className="flex gap-4">
                <a href='/Ourprofile'> 
                <button className="group px-8 py-4 bg-[#044441] text-white rounded-full font-semibold hover:bg-[#0a6b66] transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2">
                  Our Story
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                </button>
                </a>

                <a href='/Query'> 
                <button className="px-8 py-4 border-2 border-[#044441] text-[#044441] rounded-full font-semibold hover:bg-[#044441] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg">
                  Contact Us
                </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
          
          {/* Enhanced Founder Story Card */}
          <div className="lg:col-span-8 bg-white rounded-[2.5rem] p-10 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden group">
            {/* Enhanced internal glow effects */}
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#c4d82e]/15 rounded-full blur-3xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-[#044441]/15 rounded-full blur-3xl group-hover:blur-2xl transition-all duration-500"></div>
            
            {/* Subtle corner accent */}
            <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-[#c4d82e]/20 rounded-tl-[2.5rem]"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-[#044441]/20 rounded-br-[2.5rem]"></div>

            <a href='/Ourprofile' className="block">
            <div className="relative z-10">
              <div className="flex items-start gap-4 mb-8">
                <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-[#044441] to-[#0a6b66] flex items-center justify-center shadow-lg overflow-hidden ring-4 ring-[#c4d82e]/20">
                  <img src={s3.src} alt="Cascab Logo" className="w-full h-full object-cover"/>
                </div>
                <div>
                  <h3 className="text-3xl font-black text-[#032e2c] mb-1">Er. Mukesh Bhaskar</h3>
                  <p className="text-[#c4d82e] font-bold text-sm tracking-wide">Founder & CEO, Cascab</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed font-light">
                  Er. Mukesh Bhaskar is a distinguished corporate strategist, entrepreneur, and visionary leader from India. Born in Bhander, his remarkable journey embodies resilience, unwavering self-belief, and an exceptional understanding of human psychology and business dynamics.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed font-light">
                  With over 15 years of experience, Mukesh specializes in helping business owners navigate complex challenges and unlock their full potential. His methodology is uniquely personalized—not cookie-cutter—providing each client with a tailored roadmap to sustainable success. When you partner with Mukesh, your business gains a trusted advisor committed to your growth.
                </p>
                
                {/* Enhanced Quote Section */}
                <div className="mt-8 p-6 bg-gradient-to-br from-[#044441]/5 to-[#c4d82e]/5 rounded-3xl border-l-4 border-[#044441] relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#c4d82e]/5 rounded-full blur-2xl"></div>
                  <svg className="w-10 h-10 text-[#044441] opacity-20 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-lg text-gray-800 italic font-light leading-relaxed relative z-10">
                    &quot;Er. Mukesh Bhaskar&apos;s strategic insights and actionable guidance have been instrumental in transforming businesses—from Fortune 500 companies to ambitious startups—creating measurable impact and lasting success.&quot;
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-[#044441]"></div>
                    <span className="text-sm text-gray-600 font-semibold">Client Testimonial</span>
                  </div>
                </div>

                {/* Achievement Highlights */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="p-4 bg-gradient-to-br from-[#044441]/5 to-transparent rounded-2xl border border-[#044441]/10">
                    <div className="text-2xl font-black text-[#044441] mb-1">750+</div>
                    <div className="text-sm text-gray-600 font-semibold">Businesses Transformed</div>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-[#c4d82e]/5 to-transparent rounded-2xl border border-[#c4d82e]/20">
                    <div className="text-2xl font-black text-[#044441] mb-1">98%</div>
                    <div className="text-sm text-gray-600 font-semibold">Client Satisfaction Rate</div>
                  </div>
                </div>
              </div>
            </div>
            </a>
          </div>

          {/* Enhanced CEO Image Card */}
          <div className="lg:col-span-4 bg-gradient-to-br from-[#044441] to-[#0a6b66] rounded-[2.5rem] overflow-hidden shadow-xl relative group min-h-[500px] hover:shadow-2xl transition-all duration-500">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>
            
            {/* Enhanced animated glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#c4d82e]/30 via-transparent to-[#044441]/30 blur-2xl animate-pulse group-hover:blur-xl transition-all duration-700"></div>
            
            <a href='/Ourprofile'>
            <div className="relative h-full p-8 flex flex-col">
              <div className="flex-1 flex items-center justify-center">
                <div className="relative w-64 h-64 rounded-full bg-white/10 backdrop-blur-sm border-4 border-white/20 shadow-2xl overflow-hidden group-hover:scale-105 transition-transform duration-500">
                  {/* Enhanced glow ring around image */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#c4d82e] to-[#044441] rounded-full blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                  <img 
                    src={h1.src}
                    alt="CEO Er. Mukesh Bhaskar" 
                    className="w-full h-full object-cover relative z-10"
                  />
                  
                  {/* Corner sparkles */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-[#c4d82e] rounded-full animate-ping"></div>
                  <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-white rounded-full animate-ping delay-300"></div>
                </div>
              </div>
              
              <div className="text-center text-white space-y-3">
                <div className="inline-block px-6 py-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30 shadow-lg">
                  <p className="font-bold text-sm">15+ Years of Excellence</p>
                </div>
                <p className="text-white/80 text-sm font-medium">Pioneering Business Transformation</p>
                
                {/* Additional badge */}
                <div className="flex items-center justify-center gap-2 mt-4">
                  <div className="w-2 h-2 rounded-full bg-[#c4d82e] animate-pulse"></div>
                  <span className="text-xs text-white/70 font-semibold uppercase tracking-wider">Industry Leader</span>
                </div>
              </div>
            </div>
            </a>
          </div>
        </div>

        {/* Enhanced Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100 overflow-hidden"
              onMouseEnter={() => setHoveredStat(index)}
              onMouseLeave={() => setHoveredStat(null)}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br from-[#044441] to-[#c4d82e] opacity-0 transition-all duration-500 ${hoveredStat === index ? 'opacity-100' : ''}`}></div>
              
              {/* Enhanced glow effect on hover */}
              <div className={`absolute -inset-2 bg-gradient-to-r from-[#c4d82e] to-[#044441] rounded-3xl blur-md opacity-0 transition-opacity duration-500 ${hoveredStat === index ? 'opacity-50' : ''}`}></div>
              
              {/* Animated corner accent */}
              <div className={`absolute top-4 right-4 w-2 h-2 rounded-full transition-all duration-500 ${hoveredStat === index ? 'bg-[#c4d82e] scale-100 animate-ping' : 'bg-[#044441] scale-0'}`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="text-4xl mb-4 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                  {stat.icon}
                </div>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className={`text-5xl font-black transition-all duration-500 ${hoveredStat === index ? 'text-white' : 'text-[#032e2c]'}`}>
                    {stat.value}
                  </span>
                  <span className={`text-3xl font-black transition-all duration-500 ${hoveredStat === index ? 'text-[#c4d82e]' : 'text-[#044441]'}`}>
                    {stat.suffix}
                  </span>
                </div>
                <p className={`text-sm font-semibold leading-tight transition-colors duration-500 ${hoveredStat === index ? 'text-white/90' : 'text-gray-600'}`}>
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Bottom Accent */}
        <div className="mt-16 flex items-center justify-center gap-4">
          <div className="h-0.5 w-20 bg-gradient-to-r from-transparent via-[#044441] to-transparent"></div>
          <div className="flex gap-2">
            <div className="w-2 h-2 rounded-full bg-[#044441] animate-pulse"></div>
            <div className="w-2 h-2 rounded-full bg-[#c4d82e] animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 rounded-full bg-[#044441] animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
          <div className="h-0.5 w-20 bg-gradient-to-r from-transparent via-[#044441] to-transparent"></div>
        </div>

      </div>

      {/* Add gradient animation CSS */}
      <style jsx>{`
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
        .delay-400 {
          animation-delay: 0.4s;
        }
        .delay-700 {
          animation-delay: 0.7s;
        }
      `}</style>
    </section>
  );
}