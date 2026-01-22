'use client'
import { useState } from 'react';
import h1 from "@/app/assets/heroSection/CEO.png";
import BgImg from "@/app/assets/gallery/cabcab.jpeg";
import Image from "next/image";


export default function AboutUs() {
const [hoveredStat, setHoveredStat] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState('story');

  const stats = [
    { value: "15", suffix: "+", label: "Years Experience", icon: "📅" },
    { value: "120", suffix: "+", label: "Campaign Launched", icon: "🚀" },
    { value: "75", suffix: "+", label: "Client Served", icon: "🤝" },
    { value: "300", suffix: "%", label: "Average Engagement Boost", icon: "📈" }
  ];

  return (
    <section className="relative bg-[#f9f7f0] overflow-hidden">
      {/* Single Background Image - Top Right Only with Reduced Glow */}
      <div className="absolute top-20 right-10 w-[450px] h-[450px] opacity-30 animate-pulse">
        <div className="relative w-full h-full rounded-full overflow-hidden">
          {/* Reduced outer glow - less intense */}
          <div className="absolute -inset-4 bg-gradient-to-br from-[#c4d82e]/20 to-[#044441]/20 rounded-full blur-2xl"></div>
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/50 shadow-2xl">
            <img 
              src={BgImg.src}
              alt="Business team collaboration"
              className="object-cover"
            />
            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#c4d82e]/10 to-[#044441]/10"></div>
          </div>
        </div>
      </div>
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-20 relative z-10">
        
        {/* Hero Header with Modern Typography */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#044441]"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-[#044441] opacity-60"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-[#044441] opacity-30"></div>
            </div>
            <span className="text-[#044441] text-xs font-bold tracking-[0.25em] uppercase">About Cascab</span>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-end">
            <div>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-[#032e2c] leading-[0.95] mb-6">
                Strategic
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#044441] via-[#0a6b66] to-[#c4d82e] mt-2">
                  minds
                </span>
                <span className="block mt-2">behind your</span>
                <span className="block text-[#044441] mt-2">online growth</span>
              </h1>
            </div>
            
            <div className="space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed font-light">
                Transforming businesses through strategic coaching and innovative solutions. We don't just provide advice—we create lasting impact.
              </p>
              <div className="flex gap-4">
                <button className="px-8 py-4 bg-[#044441] text-white rounded-full font-semibold hover:bg-[#0a6b66] transition-all duration-300 hover:scale-105 shadow-lg">
                  Our Story
                </button>
                <button className="px-8 py-4 border-2 border-[#044441] text-[#044441] rounded-full font-semibold hover:bg-[#044441] hover:text-white transition-all duration-300">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
          
          {/* Founder Story Card - Large */}
          <div className="lg:col-span-8 bg-white rounded-[2.5rem] p-10 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden">
            {/* Enhanced internal glow effects */}
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#c4d82e]/15 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-[#044441]/15 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-start gap-3 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#044441] to-[#0a6b66] flex items-center justify-center text-2xl shadow-lg">
                  👨‍💼
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-[#032e2c] mb-2">Er. Mukesh Bhaskar</h3>
                  <p className="text-[#c4d82e] font-semibold">Founder & CEO, Cascab</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Mukesh Bhaskar is a renowned corporate coach, entrepreneur, and planner from India. Born on 28 November 1987, in Bhander. His journey to success is marked by perseverance, self-belief, and a deep understanding of the human mind.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Mukesh Bhaskar helps business owners tackle challenges and guides them toward success. His approach is personalized, not generic, and offers a clear path to success. Your business is in good hands.
                </p>
                
                {/* Quote Section */}
                <div className="mt-8 p-6 bg-gradient-to-br from-[#044441]/5 to-[#c4d82e]/5 rounded-3xl border-l-4 border-[#044441]">
                  <svg className="w-8 h-8 text-[#044441] opacity-30 mb-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-lg text-gray-800 italic font-light">
                    "Er. Mukesh Bhaskar's ideas and advice have significantly helped both leading business figures and small business owners."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CEO Image Card */}
          <div className="lg:col-span-4 bg-gradient-to-br from-[#044441] to-[#0a6b66] rounded-[2.5rem] overflow-hidden shadow-xl relative group min-h-[500px]">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>
            
            {/* Enhanced glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#c4d82e]/30 via-transparent to-[#044441]/30 blur-2xl animate-pulse"></div>
            
            <div className="relative h-full p-8 flex flex-col">
              <div className="flex-1 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full bg-white/10 backdrop-blur-sm border-4 border-white/20 shadow-2xl overflow-hidden relative">
                  {/* Enhanced glow ring around image */}
                  <div className="absolute -inset-3 bg-gradient-to-r from-[#c4d82e] to-[#044441] rounded-full blur-lg opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>
                  <img 
                    src={h1.src}
                    alt="CEO" 
                    className="w-full h-full object-cover relative z-10"
                  />
                </div>
              </div>
              
              <div className="text-center text-white">
                <div className="inline-block px-6 py-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30 mb-4">
                  <p className="font-bold">15+ Years of Excellence</p>
                </div>
                <p className="text-white/80 text-sm">Leading businesses to success</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid - Modern Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100 overflow-hidden"
              onMouseEnter={() => setHoveredStat(index)}
              onMouseLeave={() => setHoveredStat(null)}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br from-[#044441] to-[#c4d82e] opacity-0 transition-opacity duration-500 ${hoveredStat === index ? 'opacity-100' : ''}`}></div>
              
              {/* Enhanced glow effect on hover */}
              <div className={`absolute -inset-2 bg-gradient-to-r from-[#c4d82e] to-[#044441] rounded-3xl blur-md opacity-0 transition-opacity duration-500 ${hoveredStat === index ? 'opacity-40' : ''}`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="text-4xl mb-4 transform transition-transform duration-500 group-hover:scale-110">
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

              {/* Corner accent */}
              <div className={`absolute top-4 right-4 w-2 h-2 rounded-full transition-all duration-500 ${hoveredStat === index ? 'bg-[#c4d82e] scale-100' : 'bg-[#044441] scale-0'}`}></div>
            </div>
          ))}
        </div>

        {/* Bottom Accent */}
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
    </section>
  );
}