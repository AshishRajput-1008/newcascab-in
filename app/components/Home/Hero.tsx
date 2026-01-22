"use client"
import React from "react";
import {
  ChevronDown,
  Users,
  FolderKanban,
  HelpCircle,
  Newspaper,
  BookOpen,
  Star,
  Menu,
  X,
} from "lucide-react";
import logo2 from "@/app/assets/heroSection/ChatGPT Image Nov 20, 2025, 06_19_01 PM.png";
import heroImage from "@/app/assets/gallery/cascab2.jpeg";
import Image from "next/image";

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  // Indian client avatars
  const indianClients = [
    "https://i.pravatar.cc/150?img=12",
    "https://i.pravatar.cc/150?img=15",
    "https://i.pravatar.cc/150?img=33",
  ];

  return (
    <>
      {/* Main container with rounded top corners */}
      <div className="relative bg-gradient-to-br from-[#044441] via-teal-800 to-teal-900 overflow-hidden rounded-t-[3rem] md:rounded-t-[4rem] lg:rounded-t-[5rem]">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-lime-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-600/10 rounded-full blur-3xl"></div>
        
        {/* Content wrapper */}
        <div className="relative z-10">
          {/* Navigation */}
          <nav className="container mx-auto px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center">
                <img
                  src={logo2.src}
                  alt="CasCab Logo"
                  className="w-20 h-20 lg:w-24 lg:h-24"
                />
              </div>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-8 xl:gap-10">
                <a href="#" className="text-lime-400 text-base font-semibold hover:text-lime-300 transition-colors">
                  Our Profile
                </a>
                <a href="#" className="font-semibold text-white text-base hover:text-lime-400 transition-colors">
                  Startup Programs
                </a>
                <div className="relative group">
                  <button className="flex font-semibold items-center gap-1 text-white text-base hover:text-lime-400 transition-colors">
                    Opportunities
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>
                <div className="relative group">
                  <button className="font-semibold flex items-center gap-1 text-white text-base hover:text-lime-400 transition-colors">
                    Media
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  <div className="absolute left-0 mt-2 w-48 bg-white text-gray-800 shadow-xl rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-2">
                    <a className="flex items-center gap-2 px-4 py-3 hover:bg-gray-50 rounded-xl transition cursor-pointer">
                      <Users className="w-4 h-4 text-teal-600" />
                      <span className="text-sm font-medium">Our Group</span>
                    </a>
                    <a className="flex items-center gap-2 px-4 py-3 hover:bg-gray-50 rounded-xl transition cursor-pointer">
                      <FolderKanban className="w-4 h-4 text-teal-600" />
                      <span className="text-sm font-medium">Contact</span>
                    </a>
                    <a className="flex items-center gap-2 px-4 py-3 hover:bg-gray-50 rounded-xl transition cursor-pointer">
                      <HelpCircle className="w-4 h-4 text-teal-600" />
                      <span className="text-sm font-medium">FAQs</span>
                    </a>
                  </div>
                </div>
                <div className="relative group">
                  <button className="font-semibold flex items-center gap-1 text-white text-base hover:text-lime-400 transition-colors">
                    Query
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  <div className="absolute left-0 mt-2 w-48 bg-white text-gray-800 shadow-xl rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-2">
                    <a className="flex items-center gap-2 px-4 py-3 hover:bg-gray-50 rounded-xl transition cursor-pointer">
                      <Newspaper className="w-4 h-4 text-teal-600" />
                      <span className="text-sm font-medium">Latest Posts</span>
                    </a>
                    <a className="flex items-center gap-2 px-4 py-3 hover:bg-gray-50 rounded-xl transition cursor-pointer">
                      <BookOpen className="w-4 h-4 text-teal-600" />
                      <span className="text-sm font-medium">Case Studies</span>
                    </a>
                  </div>
                </div>
                <a href="#" className="font-semibold text-white text-base hover:text-lime-400 transition-colors">
                  Contact
                </a>
              </div>

              {/* Smaller FAQ Button */}
              <button className="hidden lg:flex bg-[#9ae761] text-teal-900 px-6 py-2.5 rounded-full text-sm font-bold hover:bg-lime-300 transition-all items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105">
                FAQ
                <span className="bg-[#044441] text-white rounded-full w-7 h-7 flex items-center justify-center text-xs">
                  →
                </span>
              </button>

              {/* Mobile Menu Button */}
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition">
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
              <div className="lg:hidden mt-4 bg-white/10 backdrop-blur-lg rounded-2xl p-4 space-y-2">
                <a href="#" className="block text-lime-400 font-semibold py-2 px-4 rounded-lg hover:bg-white/10">Our Profile</a>
                <a href="#" className="block text-white font-semibold py-2 px-4 rounded-lg hover:bg-white/10">Startup Programs</a>
                <a href="#" className="block text-white font-semibold py-2 px-4 rounded-lg hover:bg-white/10">Opportunities</a>
                <a href="#" className="block text-white font-semibold py-2 px-4 rounded-lg hover:bg-white/10">Media</a>
                <a href="#" className="block text-white font-semibold py-2 px-4 rounded-lg hover:bg-white/10">Query</a>
                <a href="#" className="block text-white font-semibold py-2 px-4 rounded-lg hover:bg-white/10">Contact Us</a>
              </div>
            )}
          </nav>

          {/* Hero Content */}
          <div className="container mx-auto px-6 lg:px-12 xl:px-16 pt-8 pb-24 lg:pb-32">
            
            {/* Mobile Layout - Smaller Image */}
            <div className="lg:hidden space-y-8">
              <div className="relative -mx-6 px-6">
                <div className="relative max-w-sm mx-auto">
                  <div className="absolute -top-4 -right-4 w-40 h-40 bg-lime-400/20 rounded-full blur-3xl"></div>
                  <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-teal-600/20 rounded-full blur-3xl"></div>
                  
                  <div className="relative bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm p-4 rounded-[1.5rem] shadow-2xl border border-white/20">
                    <div className="relative rounded-xl overflow-hidden shadow-xl">
                      <Image src={heroImage} alt="Er. Mukesh Bhaskar - CEO" width={400} height={480} className="w-full h-auto" priority />
                      <div className="absolute inset-0 bg-gradient-to-t from-teal-900/50 via-transparent to-transparent"></div>
                    </div>
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#9ae761] px-4 py-2 rounded-lg shadow-xl">
                      <div className="flex items-center gap-2">
                        <Star className="w-3.5 h-3.5 fill-teal-900 text-teal-900" />
                        <span className="text-teal-900 font-bold text-xs">Er.Mukesh Bhaskar</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h1 className="text-5xl font-bold text-white leading-tight">Best Business<br />Coach</h1>
                <h2 className="text-4xl font-bold text-[#9ae761] leading-tight">Entrepreneurs with<br />Small Business</h2>
              </div>

              <p className="text-base text-white/90 leading-relaxed">
                Mukesh Bhaskar is a renowned corporate coach, entrepreneur, and planner from India. He is a young successful entrepreneur in the spices industry known as CASCAB.
              </p>

              <div className="space-y-6">
                <button className="w-full group bg-[#9ae761] text-teal-900 px-8 py-4 rounded-full text-base font-bold hover:bg-lime-300 transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-3">
                  Contact Us
                  <span className="bg-teal-900 text-lime-400 rounded-full w-10 h-10 flex items-center justify-center group-hover:rotate-45 transition-transform">→</span>
                </button>

                <div className="flex items-center justify-center gap-3">
                  <div className="flex -space-x-3">
                    {indianClients.map((avatar, i) => (
                      <div key={i} className="w-12 h-12 rounded-full border-4 border-teal-900 overflow-hidden bg-white shadow-lg">
                        <img src={avatar} alt={`Client ${i + 1}`} className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <Star className="w-4 h-4 fill-lime-400 text-lime-400" />
                      <span className="text-white font-bold text-sm">4.9/5 Rating</span>
                    </div>
                    <p className="text-white/60 text-xs font-medium">Trusted by 750+ Clients</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:grid lg:grid-cols-12 gap-12 xl:gap-16 items-center">
              <div className="lg:col-span-7 xl:col-span-6 space-y-8">
                <div className="space-y-3">
                  <h1 className="text-6xl xl:text-7xl font-bold text-white leading-[1.1]">Best Business<br />Coach</h1>
                  <h2 className="text-5xl xl:text-6xl font-bold text-[#9ae761] leading-[1.1]">Entrepreneurs with<br />Small Business</h2>
                </div>

                <p className="text-lg xl:text-xl text-white/90 leading-relaxed max-w-2xl">
                  Mukesh Bhaskar is a renowned corporate coach, entrepreneur, and planner from India. He is a young successful entrepreneur in the spices industry known as CASCAB.
                </p>

                <div className="flex items-center gap-8 pt-4">
                  <button className="group bg-[#9ae761] text-teal-900 px-8 py-4 rounded-full text-base font-bold hover:bg-lime-300 transition-all shadow-xl hover:shadow-2xl hover:scale-105 flex items-center gap-3">
                    Contact
                    <span className="bg-teal-900 text-lime-400 rounded-full w-10 h-10 flex items-center justify-center group-hover:rotate-45 transition-transform">→</span>
                  </button>

                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      {indianClients.map((avatar, i) => (
                        <div key={i} className="w-12 h-12 rounded-full border-4 border-teal-900 overflow-hidden bg-white shadow-lg">
                          <img src={avatar} alt={`Client ${i + 1}`} className="w-full h-full object-cover" />
                        </div>
                      ))}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <Star className="w-4 h-4 fill-lime-400 text-lime-400" />
                        <span className="text-white font-bold text-sm">4.9/5 Rating</span>
                      </div>
                      <p className="text-white/60 text-xs font-medium">Trusted by 750+ Clients</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 xl:col-span-6">
                <div className="relative">
                  <div className="absolute -top-8 -right-8 w-80 h-80 bg-lime-400/20 rounded-full blur-3xl"></div>
                  <div className="absolute -bottom-8 -left-8 w-80 h-80 bg-teal-600/20 rounded-full blur-3xl"></div>
                  
                  <div className="relative bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm p-8 rounded-[2.5rem] shadow-2xl border border-white/20 transform hover:scale-105 transition-transform duration-300">
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                      <Image src={heroImage} alt="Er. Mukesh Bhaskar - CEO" width={600} height={700} className="w-full h-auto" priority />
                      <div className="absolute inset-0 bg-gradient-to-t from-teal-900/50 via-transparent to-transparent"></div>
                    </div>
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-[#9ae761] px-6 py-3 rounded-2xl shadow-xl">
                      <div className="flex items-center gap-2">
                        <Star className="w-5 h-5 fill-teal-900 text-teal-900" />
                        <span className="text-teal-900 font-bold text-base">Er.Mukesh Bhaskar</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Curved bottom edge */}
        <svg className="absolute bottom-0 left-0 w-full h-24 lg:h-32 text-white" viewBox="0 0 1440 120" fill="currentColor" preserveAspectRatio="none">
          <path d="M0,0 C480,120 960,120 1440,0 L1440,120 L0,120 Z"></path>
        </svg>
      </div>

      <div className="bg-white pt-16"></div>
    </>
  );
}