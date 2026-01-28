"use client";
import React, { useEffect } from "react";
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
  Globe,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import logo2 from "@/app/assets/heroSection/ChatGPT Image Nov 20, 2025, 06_19_01 PM.png";
import heroImage from "@/app/assets/gallery/cascab2.jpeg";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  // Initialize Google Translate
  useEffect(() => {
    if (typeof window === "undefined") return;

    const configScript = document.createElement("script");
    configScript.innerHTML = `
      window.gtranslateSettings = {
        default_language: "en",
        native_language_names: true,
        detect_browser_language: true,
        url_structure: "none",
        wrapper_selector: ".gtranslate_wrapper",
        languages: [
          "en", "hi", "te", "pa", "ml", 
          "ur", "bn", "gu", "kn", "ta", "mr"
        ]
      };
    `;
    document.body.appendChild(configScript);

    const translateScript = document.createElement("script");
    translateScript.src =
      "https://cdn.gtranslate.net/widgets/latest/dropdown.js";
    translateScript.defer = true;
    document.body.appendChild(translateScript);

    return () => {
      if (configScript.parentNode)
        configScript.parentNode.removeChild(configScript);
      if (translateScript.parentNode)
        translateScript.parentNode.removeChild(translateScript);
    };
  }, []);

  const indianClients = [
    "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
  ];

  return (
    <>
      {/* Global styles for Google Translate widget */}
      <style jsx global>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .animate-gradient {
          animation: gradient 3s ease infinite;
        }

        .desktop-translate .gtranslate_wrapper select {
          appearance: none;
          background: transparent;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          color: white;
          padding: 0.5rem 1.4rem 0.5rem 1rem;
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 9999px;
          font-weight: 600;
          font-size: 0.875rem;
          cursor: pointer;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease-in-out;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='rgba(255,255,255,0.7)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 0.75rem center;
          background-color: rgba(255, 255, 255, 0.1);
          height: 2.5rem;
        }

        .desktop-translate .gtranslate_wrapper select:hover {
          background-color: #b9f57c;
          border-color: rgba(154, 231, 97, 0.6);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }

        .desktop-translate .gtranslate_wrapper select:focus {
          outline: none;
          border-color: rgba(154, 231, 97, 0.8);
          box-shadow: 0 0 0 3px rgba(154, 231, 97, 0.2);
        }

        .desktop-translate .gtranslate_wrapper select option {
          background-color: #044441;
          color: white;
          padding: 0.5rem;
        }

.mobile-translate .gtranslate_wrapper select {
  appearance: none;
  background-color: #b9f57c;
  color: #0a3d35;

  padding: 0.35rem 1.8rem 0.35rem 0.7rem; /* ⬅ less horizontal space */
  border: 1.5px solid rgba(138, 200, 75, 0.4);
  border-radius: 9999px;

  font-weight: 700;
  font-size: 0.75rem;   /* ⬅ smaller text */
  cursor: pointer;

  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.12);
  transition: all 0.25s ease;

  width: auto;
  min-width: unset;
  height: 2rem;         /* ⬅ shorter button */
  line-height: 1;
}


.mobile-translate .gtranslate_wrapper {
  display: flex;
  justify-content: flex-end;
}

        .mobile-translate .gtranslate_wrapper select:hover {
          background: linear-gradient(135deg, #c5f88a 0%, #a8ed70 100%);
          transform: translateY(-1px);
        }

        .mobile-translate .gtranslate_wrapper select option {
          background-color: #ffffff;
          color: #0a3d35;
          padding: 1rem;
          font-weight: 600;
        }
      `}</style>

      {/* Main Container - New Geometric Design */}
      <div className="relative min-h-screen bg-gradient-to-br from-[#044441] via-teal-800 to-emerald-900 overflow-hidden">
        {/* Animated Background Pattern - Enhanced */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-[#8ed251] to-emerald-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-gradient-to-l from-teal-300 to-cyan-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
          <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-gradient-to-tr from-emerald-400 to-lime-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Geometric Accent Lines - Enhanced */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-40 h-40 border-2 border-[#8ed251]/30 rotate-45 animate-pulse"></div>
          <div className="absolute top-40 right-1/4 w-28 h-28 border-2 border-emerald-400/20 rounded-full animate-pulse delay-300"></div>
          <div className="absolute bottom-40 right-20 w-32 h-32 border-2 border-[#8ed251]/25 rotate-12 animate-pulse delay-500"></div>
          <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-[#8ed251]/15 rounded-full animate-pulse delay-700"></div>
          <div className="absolute bottom-1/3 left-1/4 w-24 h-24 border border-teal-300/20 rotate-45"></div>
          
          {/* Floating particles */}
          <div className="absolute top-1/4 left-1/2 w-3 h-3 bg-[#8ed251]/40 rounded-full animate-ping"></div>
          <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-emerald-400/40 rounded-full animate-ping delay-500"></div>
          <div className="absolute bottom-1/4 left-2/3 w-2.5 h-2.5 bg-lime-300/40 rounded-full animate-ping delay-1000"></div>
        </div>

        {/* Content Wrapper */}
        <div className="relative z-10">
          {/* Enhanced Navigation */}
          <nav className="container mx-auto px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between gap-4 bg-white/5 backdrop-blur-md rounded-2xl px-8 py-4 border border-white/10 shadow-xl">
              {/* Logo */}
              <Link href="/" className="flex items-center">
                <img
                  src={logo2.src}
                  alt="CasCab Logo"
                  className="w-24 h-24 lg:w-[120px] lg:h-[100px] drop-shadow-2xl"
                />
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-10">
                <Link
                  href="/Ourprofile"
                  className="text-[#8ed251] text-base font-bold hover:text-lime-300 transition-all hover:scale-105 relative group"
                >
                   Profile
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8ed251] group-hover:w-full transition-all duration-300"></span>
                </Link>
                <Link
                  href="/Startup"
                  className="font-bold text-white text-base hover:text-[#8ed251] transition-all hover:scale-105 relative group"
                >
                  Startups
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8ed251] group-hover:w-full transition-all duration-300"></span>
                </Link>
                
                <div className="relative group">
                  <button className="flex font-bold items-center gap-1 text-white text-base hover:text-[#8ed251] transition-colors">
                    Opportunities
                    <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
                  </button>
                  <div className="absolute left-0 mt-3 w-56 bg-white/95 backdrop-blur-xl text-gray-800 shadow-2xl rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 p-3 z-50 border border-gray-100">
                    <Link
                      href="/Opportunities"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gradient-to-r hover:from-lime-50 hover:to-teal-50 rounded-xl transition-all cursor-pointer group/item"
                    >
                      <FolderKanban className="w-5 h-5 text-teal-600 group-hover/item:scale-110 transition-transform" />
                      <span className="text-sm font-semibold">Current Opportunities</span>
                    </Link>
                    <Link
                      href="/Opportunities"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gradient-to-r hover:from-lime-50 hover:to-teal-50 rounded-xl transition-all cursor-pointer group/item"
                    >
                      <Star className="w-5 h-5 text-teal-600 group-hover/item:scale-110 transition-transform" />
                      <span className="text-sm font-semibold">Upcoming</span>
                    </Link>
                  </div>
                </div>

                <div className="relative group">
                  <button className="font-bold flex items-center gap-1 text-white text-base hover:text-[#8ed251] transition-colors">
                    Media
                    <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
                  </button>
                  <div className="absolute left-0 mt-3 w-56 bg-white/95 backdrop-blur-xl text-gray-800 shadow-2xl rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 p-3 z-50 border border-gray-100">
                    <Link
                      href="/Media"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gradient-to-r hover:from-lime-50 hover:to-teal-50 rounded-xl transition-all cursor-pointer group/item"
                    >
                      <Users className="w-5 h-5 text-teal-600 group-hover/item:scale-110 transition-transform" />
                      <span className="text-sm font-semibold">Cascab Gallery</span>
                    </Link>
                    {/* <Link
                      href="/Media"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gradient-to-r hover:from-lime-50 hover:to-teal-50 rounded-xl transition-all cursor-pointer group/item"
                    >
                      <FolderKanban className="w-5 h-5 text-teal-600 group-hover/item:scale-110 transition-transform" />
                      <span className="text-sm font-semibold">Gallery</span>
                    </Link> */}
                    {/* <Link
                      href="/Media"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gradient-to-r hover:from-lime-50 hover:to-teal-50 rounded-xl transition-all cursor-pointer group/item"
                    >
                      <Newspaper className="w-5 h-5 text-teal-600 group-hover/item:scale-110 transition-transform" />
                      <span className="text-sm font-semibold">News</span>
                    </Link> */}
                  </div>
                </div>

                <div className="relative group">
                  <button className="font-bold flex items-center gap-1 text-white text-base hover:text-[#8ed251] transition-colors">
                 Our Group
                    <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
                  </button>
                  <div className="absolute left-0 mt-3 w-56 bg-white/95 backdrop-blur-xl text-gray-800 shadow-2xl rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 p-3 z-50 border border-gray-100">
                    <Link
                      href="/Ourgroup"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gradient-to-r hover:from-lime-50 hover:to-teal-50 rounded-xl transition-all cursor-pointer group/item"
                    >
                      <HelpCircle className="w-5 h-5 text-teal-600 group-hover/item:scale-110 transition-transform" />
                      <span className="text-sm font-semibold">Services</span>
                    </Link>
                   
                  </div>
                </div>

                <Link
                  href="/Query"
                  className="font-bold text-white text-base hover:text-[#8ed251] transition-all hover:scale-105 relative group"
                >
                Query
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8ed251] group-hover:w-full transition-all duration-300"></span>
                </Link>
              </div>

              {/* Right Side Actions */}
              <div className="hidden lg:flex items-center gap-4">
                <div className="desktop-translate">
                  <div className="gtranslate_wrapper"></div>
                </div>

                <Link href="/faq">
                  <button className="bg-gradient-to-r from-[#9ae761] to-[#8ed251] text-teal-900 px-8 py-3 rounded-full text-base font-black hover:from-[#8ed251] hover:to-[#9ae761] transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-2xl hover:scale-105 border-2 border-lime-500/20">
                    FAQ
                    <span className="bg-[#044441] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm transition-all group-hover:rotate-90">
                      →
                    </span>
                  </button>
                </Link>
              </div>

              {/* Mobile Actions */}
              <div className="flex lg:hidden items-center gap-3">
                <div className="mobile-translate">
                  <div className="gtranslate_wrapper"></div>
                </div>

                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="flex items-center justify-center w-10 h-10 text-white hover:bg-white/10 rounded-xl transition-all active:scale-95 border border-white/20"
                >
                  {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
              <div className="lg:hidden mt-4 bg-white/10 backdrop-blur-lg rounded-2xl p-4 space-y-2 border border-white/20">
                <Link href="/OurProfile" className="block text-[#8ed251] font-semibold py-2.5 px-4 rounded-lg hover:bg-white/10 transition">
                  Our Profile
                </Link>
                <Link href="/Startup" className="block text-white font-semibold py-2.5 px-4 rounded-lg hover:bg-white/10 transition">
                  Startups
                </Link>
                <Link href="/Opportunities" className="block text-white font-semibold py-2.5 px-4 rounded-lg hover:bg-white/10 transition">
                  Opportunities
                </Link>
                <Link href="/Media" className="block text-white font-semibold py-2.5 px-4 rounded-lg hover:bg-white/10 transition">
                  Media
                </Link>
                <Link href="/Ourgroup" className="block text-white font-semibold py-2.5 px-4 rounded-lg hover:bg-white/10 transition">
                Our Group
                </Link>
                <Link href="/Query" className="block text-white font-semibold py-2.5 px-4 rounded-lg hover:bg-white/10 transition">
                  Query
                </Link>
                <Link href="/Query" className="block text-white font-semibold py-2.5 px-4 rounded-lg hover:bg-white/10 transition">
                  Contact
                </Link>
                <div className="border-t border-white/20 my-3"></div>
                <Link href="/faq" className="block">
                  <button className="w-full bg-[#9ae761] text-teal-900 px-6 py-3.5 rounded-xl text-base font-bold hover:bg-lime-300 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg">
                    FAQ
                    <span className="bg-[#044441] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">→</span>
                  </button>
                </Link>
              </div>
            )}
          </nav>

          {/* Hero Content - New Layout */}
          <div className="container mx-auto px-6 lg:px-12 xl:px-16 pt-12 pb-32 lg:pb-40">
            {/* Mobile Layout */}
            <div className="lg:hidden space-y-10">
              {/* Floating Badge */}
              <div className="flex justify-center">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#8ed251]/20 to-emerald-400/20 backdrop-blur-md border border-[#8ed251]/40 rounded-full px-5 py-2.5 shadow-xl animate-pulse">
                  <div className="w-2 h-2 bg-[#8ed251] rounded-full animate-ping absolute"></div>
                  <Sparkles className="w-4 h-4 text-[#8ed251] animate-spin-slow" />
                  <span className="text-[#8ed251] text-sm font-black tracking-wider">🚀 Transforming Dreams Into Reality</span>
                </div>
              </div>

              {/* Title */}
              <div className="text-center space-y-4">
                <h1 className="text-5xl sm:text-6xl font-black text-white leading-[1.1] tracking-tight">
                  Let Me Help You
                </h1>
                <div className="relative inline-block">
                  <h2 className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#9ae761] via-[#8ed251] to-[#9ae761] leading-[1.1] tracking-tight animate-gradient">
                    Overshoot Your Goals
                  </h2>
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#8ed251] to-transparent"></div>
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold text-white/90 leading-[1.2]">
                  In The Right Ways
                </h3>
              </div>

              {/* Image with Modern Card - Compact & Aesthetic */}
              <div className="relative max-w-sm mx-auto">
                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#8ed251]/20 to-emerald-400/20 rounded-2xl blur-2xl animate-pulse"></div>
                
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg p-3 rounded-2xl border border-white/30 shadow-xl">
                  {/* Minimalist corner accents */}
                  <div className="absolute top-1.5 left-1.5 w-6 h-6 border-l-2 border-t-2 border-[#8ed251]/60 rounded-tl-lg"></div>
                  <div className="absolute top-1.5 right-1.5 w-6 h-6 border-r-2 border-t-2 border-[#8ed251]/60 rounded-tr-lg"></div>
                  <div className="absolute bottom-1.5 left-1.5 w-6 h-6 border-l-2 border-b-2 border-[#8ed251]/60 rounded-bl-lg"></div>
                  <div className="absolute bottom-1.5 right-1.5 w-6 h-6 border-r-2 border-b-2 border-[#8ed251]/60 rounded-br-lg"></div>
                  
                  <div className="relative rounded-xl overflow-hidden h-[280px] group shadow-xl">
                    <a href="/Query">
                    <Image
                      src={heroImage}
                      alt="Er. Mukesh Bhaskar - CEO"
                      width={320}
                      height={280}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                      priority
                    />
                    </a>
                    <div className="absolute inset-0 bg-gradient-to-t from-teal-900/60 via-teal-900/20 to-transparent"></div>
                    
                    {/* Subtle sparkles */}
                    <div className="absolute top-3 right-3 w-1.5 h-1.5 bg-[#8ed251] rounded-full animate-ping"></div>
                    <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping delay-500"></div>
                    
                    {/* Name overlay on image */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-teal-900/95 via-teal-900/80 to-transparent p-4 pt-8">
                      <h3 className="text-white font-black text-base text-center drop-shadow-lg">
                        Er. Mukesh Bhaskar
                      </h3>
                      <p className="text-[#8ed251] text-xs font-bold text-center mt-0.5 drop-shadow-md">
                        Corporate Coach & Social Leader
                      </p>
                      <p className="text-white/90 text-xs font-semibold text-center mt-0.5 drop-shadow-md">
                        CEO - Cascab Pvt. Ltd
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-center text-base text-white/90 leading-relaxed max-w-lg mx-auto px-4">
                Mukesh Bhaskar is a renowned corporate coach, entrepreneur, and
                planner from India. He is a young successful entrepreneur in the
                spices industry known as CASCAB.
              </p>

              {/* CTA Section */}
              <div className="space-y-6">
                <Link href="/contact">
                  <button className="w-full group relative overflow-hidden bg-gradient-to-r from-[#9ae761] to-[#8ed251] text-teal-900 px-8 py-5 rounded-2xl text-lg font-black hover:from-[#8ed251] hover:to-[#9ae761] transition-all shadow-2xl hover:shadow-lime-500/50 flex items-center justify-center gap-3 border-2 border-lime-500/30">
                    <span className="relative z-10">Contact Us</span>
                    <span className="relative z-10 bg-teal-900 text-[#8ed251] rounded-full w-12 h-12 flex items-center justify-center group-hover:rotate-90 transition-transform duration-300">
                      →
                    </span>
                  </button>
                </Link>

                {/* Social Proof */}
                <div className="flex items-center justify-center gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4">
                  <div className="flex -space-x-3">
                    {indianClients.map((avatar, i) => (
                      <div
                        key={i}
                        className="w-14 h-14 rounded-full border-4 border-teal-900 overflow-hidden bg-white shadow-xl ring-2 ring-[#8ed251]/30"
                      >
                        <img src={avatar} alt={`Client ${i + 1}`} className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#8ed251] text-[#8ed251]" />
                      ))}
                    </div>
                    <p className="text-white font-bold text-sm mt-1">4.9/5 Rating</p>
                    <p className="text-white/70 text-xs font-medium">Trusted Globally</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Layout - Diagonal Split Design */}
            <div className="hidden lg:block">
              <div className="grid lg:grid-cols-2 gap-16 xl:gap-20 items-center min-h-[600px]">
                {/* Left Column - Content */}
                <div className="space-y-8 pt-8">
                  {/* Floating Badge */}
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#8ed251]/20 to-emerald-400/20 backdrop-blur-md border border-[#8ed251]/40 rounded-full px-5 py-2.5 shadow-xl animate-pulse">
                    <div className="w-2 h-2 bg-[#8ed251] rounded-full animate-ping absolute"></div>
                    <Sparkles className="w-5 h-5 text-[#8ed251] animate-spin-slow" />
                    <span className="text-[#8ed251] text-sm font-black tracking-wider">🚀 TRANSFORMING DREAMS INTO REALITY</span>
                  </div>

                  {/* Main Headline */}
                  <div className="space-y-3">
                    <h1 className="text-6xl xl:text-7xl 2xl:text-8xl font-black text-white leading-[1.05] tracking-tight">
                      Let Me Help You
                    </h1>
                    <div className="relative inline-block">
                      <h2 className="text-6xl xl:text-7xl 2xl:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#9ae761] via-[#8ed251] to-[#9ae761] leading-[1.05] tracking-tight">
                        Overshoot Your Goals
                      </h2>
                      <div className="absolute -bottom-3 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-[#8ed251] to-transparent rounded-full"></div>
                    </div>
                    <h3 className="text-5xl xl:text-6xl font-bold text-white/90 leading-[1.1] tracking-tight">
                      In The Right Ways
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-lg xl:text-xl text-white/90 leading-relaxed max-w-xl font-medium">
                    Mukesh Bhaskar is a renowned corporate coach, entrepreneur,
                    and planner from India. He is a young successful entrepreneur
                    in the spices industry known as CASCAB.
                  </p>

                  {/* CTA and Social Proof */}
                  <div className="flex flex-wrap items-center gap-6 pt-4">
                    <Link href="/contact">
                      <button className="group relative overflow-hidden bg-gradient-to-r from-[#9ae761] to-[#8ed251] text-teal-900 px-10 py-5 rounded-2xl text-lg font-black hover:from-[#8ed251] hover:to-[#9ae761] transition-all shadow-2xl hover:shadow-lime-500/50 hover:scale-105 flex items-center gap-3 border-2 border-lime-500/30">
                        <span className="relative z-10">Contact Us</span>
                        <span className="relative z-10 bg-teal-900 text-[#8ed251] rounded-full w-12 h-12 flex items-center justify-center group-hover:rotate-90 transition-transform duration-300">
                          →
                        </span>
                      </button>
                    </Link>

                    {/* Social Proof Card */}
                    <div className="flex items-center gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-5 py-4 shadow-xl">
                      <div className="flex -space-x-3">
                        {indianClients.map((avatar, i) => (
                          <div
                            key={i}
                            className="w-14 h-14 rounded-full border-4 border-teal-900 overflow-hidden bg-white shadow-xl ring-2 ring-[#8ed251]/30 hover:scale-110 transition-transform"
                          >
                            <img src={avatar} alt={`Client ${i + 1}`} className="w-full h-full object-cover" />
                          </div>
                        ))}
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-[#8ed251] text-[#8ed251]" />
                          ))}
                        </div>
                        <p className="text-white font-bold text-base mt-1">4.9/5 Rating</p>
                        <p className="text-white/70 text-sm font-medium">750+ Happy Clients</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Compact Image Card */}
                <div className="relative">
                  {/* Subtle glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#8ed251]/20 to-emerald-400/20 rounded-2xl blur-2xl opacity-60 animate-pulse"></div>
                  
                  {/* Main Card - Compact */}
                  <div className="relative bg-gradient-to-br from-white/12 to-white/5 backdrop-blur-xl p-4 rounded-2xl border border-white/30 shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
                    {/* Minimalist corner accents */}
                    <div className="absolute top-2 left-2 w-8 h-8 border-l-2 border-t-2 border-[#8ed251]/60 rounded-tl-lg"></div>
                    <div className="absolute top-2 right-2 w-8 h-8 border-r-2 border-t-2 border-[#8ed251]/60 rounded-tr-lg"></div>
                    <div className="absolute bottom-2 left-2 w-8 h-8 border-l-2 border-b-2 border-[#8ed251]/60 rounded-bl-lg"></div>
                    <div className="absolute bottom-2 right-2 w-8 h-8 border-r-2 border-b-2 border-[#8ed251]/60 rounded-br-lg"></div>
                    
                    <div className="relative rounded-xl overflow-hidden h-[420px] group shadow-2xl">
                      <Image
                        src={heroImage}
                        alt="Er. Mukesh Bhaskar - CEO"
                        width={380}
                        height={420}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-teal-900/70 via-teal-900/30 to-transparent"></div>
                      
                      {/* Subtle sparkles */}
                      <div className="absolute top-4 right-4 w-2 h-2 bg-[#8ed251] rounded-full animate-ping"></div>
                      <div className="absolute bottom-20 left-5 w-2 h-2 bg-emerald-400 rounded-full animate-ping delay-700"></div>
                      
                      {/* Name overlay on image */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-teal-900/95 via-teal-900/80 to-transparent p-5 pt-10">
                        <h3 className="text-white font-black text-lg text-center drop-shadow-lg">
                          Er. Mukesh Bhaskar
                        </h3>
                        <p className="text-[#8ed251] text-sm font-bold text-center mt-1 drop-shadow-md">
                          Corporate Coach & Social Leader
                        </p>
                        <p className="text-white/90 text-xs font-semibold text-center mt-0.5 drop-shadow-md">
                          CEO - Cascab Pvt. Ltd
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Minimal decorative elements */}
                  <div className="absolute -top-6 -left-6 w-20 h-20 border-2 border-[#8ed251]/30 rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-tl from-[#8ed251]/10 to-teal-400/10 rounded-full blur-xl animate-pulse delay-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Wave Bottom */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg className="w-full h-32 lg:h-40 text-white" viewBox="0 0 1440 120" fill="currentColor" preserveAspectRatio="none">
            <path d="M0,64 C240,120 480,120 720,64 C960,8 1200,8 1440,64 L1440,120 L0,120 Z" opacity="0.5"></path>
            <path d="M0,80 C320,20 640,20 960,80 C1280,140 1440,100 1440,80 L1440,120 L0,120 Z"></path>
          </svg>
        </div>
      </div>

      <div className="bg-white pt-20"></div>
    </>
  );
}