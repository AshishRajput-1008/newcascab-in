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

    // Add Google Translate configuration
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

    // Add Google Translate script
    const translateScript = document.createElement("script");
    translateScript.src =
      "https://cdn.gtranslate.net/widgets/latest/dropdown.js";
    translateScript.defer = true;
    document.body.appendChild(translateScript);

    return () => {
      // Cleanup scripts on unmount
      if (configScript.parentNode)
        configScript.parentNode.removeChild(configScript);
      if (translateScript.parentNode)
        translateScript.parentNode.removeChild(translateScript);
    };
  }, []);

  // Indian client avatars
  const indianClients = [
    "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
  ];

  return (
    <>
      {/* Global styles for Google Translate widget */}
      <style jsx global>{`
        /* Desktop Language Selector Styling */
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

        /* Mobile Language Selector Styling - Professional Design */
        .mobile-translate .gtranslate_wrapper {
          position: relative;
        }

        .mobile-translate .gtranslate_wrapper select {
          appearance: none;
          -webkit-appearance: none;
          -moz-appearance: none;
          background-color: #b9f57c;
          color: #0a3d35;
          padding: 0.625rem 2.25rem 0.625rem 1rem;
          border: 1.5px solid rgba(138, 200, 75, 0.4);
          border-radius: 0.75rem;
          font-weight: 700;
          font-size: 0.875rem;
          line-height: 1.25;
          letter-spacing: 0.01em;
          cursor: pointer;
          box-shadow:
            0 2px 4px rgba(0, 0, 0, 0.08),
            0 4px 8px rgba(0, 0, 0, 0.06),
            inset 0 -1px 2px rgba(255, 255, 255, 0.25),
            inset 0 1px 2px rgba(255, 255, 255, 0.4);
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          min-width: 5rem;
          width: auto;
          max-width: 7rem;
          height: 2.75rem;
          text-align: left;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%230a3d35' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 0.625rem center;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          display: flex;
          align-items: center;
        }

        .mobile-translate .gtranslate_wrapper select:hover {
          background: linear-gradient(135deg, #c5f88a 0%, #a8ed70 100%);
          border-color: rgba(138, 200, 75, 0.6);
          box-shadow:
            0 4px 6px rgba(0, 0, 0, 0.1),
            0 6px 12px rgba(0, 0, 0, 0.08),
            inset 0 -1px 2px rgba(255, 255, 255, 0.3),
            inset 0 1px 2px rgba(255, 255, 255, 0.5);
          transform: translateY(-1px);
        }

        .mobile-translate .gtranslate_wrapper select:active {
          transform: translateY(0) scale(0.98);
          box-shadow:
            0 1px 2px rgba(0, 0, 0, 0.1),
            inset 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        .mobile-translate .gtranslate_wrapper select:focus {
          outline: none;
          border-color: #7ac62f;
          box-shadow:
            0 0 0 3px rgba(162, 241, 99, 0.25),
            0 4px 8px rgba(0, 0, 0, 0.12),
            inset 0 -1px 2px rgba(255, 255, 255, 0.3);
        }

        /* Dropdown Options Styling */
        .mobile-translate .gtranslate_wrapper select option {
          background-color: #ffffff;
          color: #0a3d35;
          padding: 1rem 1rem;
          font-size: 1rem;
          font-weight: 600;
          line-height: 1.5;
          border-bottom: 1px solid #e8f5e9;
          min-height: 3.5rem;
        }

        .mobile-translate .gtranslate_wrapper select option:last-child {
          border-bottom: none;
        }

        .mobile-translate .gtranslate_wrapper select option:hover {
          background: linear-gradient(to right, #f1f8f4 0%, #e8f5e9 100%);
        }

        .mobile-translate .gtranslate_wrapper select option:checked,
        .mobile-translate .gtranslate_wrapper select option:active {
          background: linear-gradient(to right, #d4f4dd 0%, #c8f2d4 100%);
          color: #0d5f4e;
          font-weight: 700;
        }

        /* Hide default arrow and use custom */
        .gtranslate_wrapper select::-ms-expand {
          display: none;
        }

        /* Ensure proper text display on mobile */
        @media (max-width: 1023px) {
          .mobile-translate .gtranslate_wrapper select {
            font-size: 0.875rem;
            padding-right: 2rem;
          }
        }

        /* Improve touch target size */
        @media (max-width: 640px) {
          .mobile-translate .gtranslate_wrapper select {
            min-height: 2.75rem;
          }
        }
      `}</style>

      {/* Main container with rounded top corners */}
      <div className="relative bg-gradient-to-br from-[#044441] via-teal-800 to-teal-900 overflow-hidden rounded-t-[3rem] md:rounded-t-[4rem] lg:rounded-t-[5rem]">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-lime-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-600/10 rounded-full blur-3xl"></div>

        {/* Content wrapper */}
        <div className="relative z-10">
          {/* Navigation */}
          <nav className="container mx-auto px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between gap-4">
              {/* Logo */}
              <Link href="/" className="flex items-center">
                <img
                  src={logo2.src}
                  alt="CasCab Logo"
                  className="w-24 h-24 lg:w-30 lg:h-30"
                />
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-6 xl:gap-8">
                <Link
                  href="/profile"
                  className="text-lime-400 text-base font-semibold hover:text-lime-300 transition-colors whitespace-nowrap"
                >
                  Our Profile
                </Link>
                <Link
                  href="/startups"
                  className="font-semibold text-white text-base hover:text-lime-400 transition-colors whitespace-nowrap"
                >
                  Startups
                </Link>
                <div className="relative group">
                  <button className="flex font-semibold items-center gap-1 text-white text-base hover:text-lime-400 transition-colors whitespace-nowrap">
                    Opportunities
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  <div className="absolute left-0 mt-2 w-48 bg-white text-gray-800 shadow-xl rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-2 z-50">
                    <Link
                      href="/opportunities/current"
                      className="flex items-center gap-2 px-4 py-3 hover:bg-gray-50 rounded-xl transition cursor-pointer"
                    >
                      <FolderKanban className="w-4 h-4 text-teal-600" />
                      <span className="text-sm font-medium">
                        Current Opportunities
                      </span>
                    </Link>
                    <Link
                      href="/opportunities/upcoming"
                      className="flex items-center gap-2 px-4 py-3 hover:bg-gray-50 rounded-xl transition cursor-pointer"
                    >
                      <Star className="w-4 h-4 text-teal-600" />
                      <span className="text-sm font-medium">Upcoming</span>
                    </Link>
                  </div>
                </div>
                <div className="relative group">
                  <button className="font-semibold flex items-center gap-1 text-white text-base hover:text-lime-400 transition-colors whitespace-nowrap">
                    Media
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  <div className="absolute left-0 mt-2 w-48 bg-white text-gray-800 shadow-xl rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-2 z-50">
                    <Link
                      href="/media/group"
                      className="flex items-center gap-2 px-4 py-3 hover:bg-gray-50 rounded-xl transition cursor-pointer"
                    >
                      <Users className="w-4 h-4 text-teal-600" />
                      <span className="text-sm font-medium">Our Group</span>
                    </Link>
                    <Link
                      href="/media/gallery"
                      className="flex items-center gap-2 px-4 py-3 hover:bg-gray-50 rounded-xl transition cursor-pointer"
                    >
                      <FolderKanban className="w-4 h-4 text-teal-600" />
                      <span className="text-sm font-medium">Gallery</span>
                    </Link>
                    <Link
                      href="/media/news"
                      className="flex items-center gap-2 px-4 py-3 hover:bg-gray-50 rounded-xl transition cursor-pointer"
                    >
                      <Newspaper className="w-4 h-4 text-teal-600" />
                      <span className="text-sm font-medium">News</span>
                    </Link>
                  </div>
                </div>
                <div className="relative group">
                  <button className="font-semibold flex items-center gap-1 text-white text-base hover:text-lime-400 transition-colors whitespace-nowrap">
                    Query
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  <div className="absolute left-0 mt-2 w-48 bg-white text-gray-800 shadow-xl rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-2 z-50">
                    <Link
                      href="/query/faq"
                      className="flex items-center gap-2 px-4 py-3 hover:bg-gray-50 rounded-xl transition cursor-pointer"
                    >
                      <HelpCircle className="w-4 h-4 text-teal-600" />
                      <span className="text-sm font-medium">FAQs</span>
                    </Link>
                    <Link
                      href="/query/blog"
                      className="flex items-center gap-2 px-4 py-3 hover:bg-gray-50 rounded-xl transition cursor-pointer"
                    >
                      <BookOpen className="w-4 h-4 text-teal-600" />
                      <span className="text-sm font-medium">Blog</span>
                    </Link>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="font-semibold text-white text-base hover:text-lime-400 transition-colors whitespace-nowrap"
                >
                  Contact
                </Link>
              </div>

              {/* Right Side Actions - Language & FAQ */}
              <div className="hidden lg:flex items-center gap-4">
                {/* Desktop Language Selector with Google Translate */}
                <div className="desktop-translate">
                  <div className="gtranslate_wrapper"></div>
                </div>

                {/* FAQ Button */}
                <Link href="/faq">
                  <button className="bg-[#9ae761] text-teal-900 px-6 py-2.5 rounded-full text-sm font-bold hover:bg-lime-300 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 whitespace-nowrap">
                    FAQ
                    <span className="bg-[#044441] text-white rounded-full w-7 h-7 flex items-center justify-center text-xs transition-transform group-hover:rotate-45">
                      →
                    </span>
                  </button>
                </Link>
              </div>

              {/* Mobile: Language Button & Menu Button */}
              <div className="flex lg:hidden items-center gap-3">
                {/* Mobile Language Button with Google Translate */}
                <div className="mobile-translate">
                  <div className="gtranslate_wrapper"></div>
                </div>

                {/* Mobile Menu Toggle Button */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="flex items-center justify-center w-10 h-10 text-white hover:bg-white/10 rounded-xl transition-all active:scale-95 border border-white/20"
                >
                  {mobileMenuOpen ? (
                    <X className="w-5 h-5" />
                  ) : (
                    <Menu className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
              <div className="lg:hidden mt-4 bg-white/10 backdrop-blur-lg rounded-2xl p-4 space-y-2">
                {/* Navigation Links */}
                <Link
                  href="/profile"
                  className="block text-lime-400 font-semibold py-2.5 px-4 rounded-lg hover:bg-white/10 transition"
                >
                  Our Profile
                </Link>
                <Link
                  href="/startups"
                  className="block text-white font-semibold py-2.5 px-4 rounded-lg hover:bg-white/10 transition"
                >
                  Startups
                </Link>
                <Link
                  href="/opportunities"
                  className="block text-white font-semibold py-2.5 px-4 rounded-lg hover:bg-white/10 transition"
                >
                  Opportunities
                </Link>
                <Link
                  href="/media"
                  className="block text-white font-semibold py-2.5 px-4 rounded-lg hover:bg-white/10 transition"
                >
                  Media
                </Link>
                <Link
                  href="/query"
                  className="block text-white font-semibold py-2.5 px-4 rounded-lg hover:bg-white/10 transition"
                >
                  Query
                </Link>
                <Link
                  href="/contact"
                  className="block text-white font-semibold py-2.5 px-4 rounded-lg hover:bg-white/10 transition"
                >
                  Contact
                </Link>

                {/* Divider */}
                <div className="border-t border-white/20 my-3"></div>

                {/* Mobile FAQ Button */}
                <Link href="/faq" className="block">
                  <button className="w-full bg-[#9ae761] text-teal-900 px-6 py-3.5 rounded-xl text-base font-bold hover:bg-lime-300 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl active:scale-95">
                    FAQ
                    <span className="bg-[#044441] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">
                      →
                    </span>
                  </button>
                </Link>
              </div>
            )}
          </nav>

          {/* Hero Content */}
          <div className="container mx-auto px-6 lg:px-12 xl:px-16 pt-8 pb-24 lg:pb-32">
            {/* Mobile Layout */}
            <div className="lg:hidden space-y-8">
              {/* Title First */}
              <div className="space-y-3">
                <h1 className="text-[2.5rem] sm:text-5xl font-bold text-white leading-[1.1] tracking-tight">
                  Let Me Help You<br />
                  <span className="text-[#9ae761]">Overshoot Your</span>
                </h1>
                <h2 className="text-[2.5rem] sm:text-5xl font-bold text-[#9ae761] leading-[1.1] tracking-tight">
                  Goals In The Right Ways
                </h2>
              </div>

              {/* Image Section */}
              <div className="relative -mx-6 px-6">
                <div className="relative max-w-sm mx-auto">
                  <div className="absolute -top-4 -right-4 w-40 h-40 bg-lime-400/20 rounded-full blur-3xl"></div>
                  <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-teal-600/20 rounded-full blur-3xl"></div>

                  <div className="relative bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm p-3 rounded-[1.5rem] shadow-2xl border border-white/20">
                    <div className="relative rounded-xl overflow-hidden shadow-xl h-[380px]">
                      <Image
                        src={heroImage}
                        alt="Er. Mukesh Bhaskar - CEO"
                        width={400}
                        height={380}
                        className="w-full h-full object-contain object-center"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-teal-900/30 via-transparent to-transparent"></div>
                    </div>
                  </div>

                  {/* Name Badge Below Image */}
                  <div className="mt-4 text-center space-y-1 bg-white/10 backdrop-blur-sm p-2.5 rounded-xl border border-white/20">
                    <h3 className="text-white font-bold text-sm">
                      Er. Mukesh Bhaskar
                    </h3>
                    <p className="text-lime-400 text-xs font-semibold">
                      Corporate Coach & Social Leader
                    </p>
                    <p className="text-white/80 text-xs font-medium">
                      CEO - Cascab Pvt. Ltd
                    </p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-base text-white/90 leading-relaxed">
                Mukesh Bhaskar is a renowned corporate coach, entrepreneur, and
                planner from India. He is a young successful entrepreneur in the
                spices industry known as CASCAB.
              </p>

              {/* CTA & Ratings */}
              <div className="space-y-6">
                <Link href="/contact">
                  <button className="w-full group bg-[#9ae761] text-teal-900 px-8 py-4 rounded-full text-base font-bold hover:bg-lime-300 transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-3">
                    Contact Us
                    <span className="bg-teal-900 text-lime-400 rounded-full w-10 h-10 flex items-center justify-center group-hover:rotate-45 transition-transform">
                      →
                    </span>
                  </button>
                </Link>

                <div className="flex items-center justify-center gap-3">
                  <div className="flex -space-x-3">
                    {indianClients.map((avatar, i) => (
                      <div
                        key={i}
                        className="w-12 h-12 rounded-full border-4 border-teal-900 overflow-hidden bg-white shadow-lg"
                      >
                        <img
                          src={avatar}
                          alt={`Client ${i + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <Star className="w-4 h-4 fill-lime-400 text-lime-400" />
                      <span className="text-white font-bold text-sm">
                        4.9/5 Rating
                      </span>
                    </div>
                    <p className="text-white/60 text-xs font-medium">
                      Trusted by 750+ Clients
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Layout - Aligned Image */}
            <div className="hidden lg:grid lg:grid-cols-2 gap-12 xl:gap-16 items-start">
              {/* Left Side - Content */}
              <div className="space-y-8">
                <div className="space-y-3">
                  <h1 className="text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white leading-[1.1] tracking-tight">
                    Let Me Help You<br />
                    <span className="text-[#9ae761]">Overshoot Your Goals</span>
                  </h1>
                  <h2 className="text-5xl xl:text-6xl 2xl:text-7xl font-bold text-[#9ae761] leading-[1.1] tracking-tight">
                    In The Right Ways
                  </h2>
                </div>

                <p className="text-lg text-white/90 leading-relaxed max-w-xl">
                  Mukesh Bhaskar is a renowned corporate coach, entrepreneur,
                  and planner from India. He is a young successful entrepreneur
                  in the spices industry known as CASCAB.
                </p>

                <div className="flex items-center gap-8 pt-4">
                  <Link href="/contact">
                    <button className="group bg-[#9ae761] text-teal-900 px-8 py-4 rounded-full text-base font-bold hover:bg-lime-300 transition-all shadow-xl hover:shadow-2xl hover:scale-105 flex items-center gap-3">
                      Contact
                      <span className="bg-teal-900 text-lime-400 rounded-full w-10 h-10 flex items-center justify-center group-hover:rotate-45 transition-transform">
                        →
                      </span>
                    </button>
                  </Link>

                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      {indianClients.map((avatar, i) => (
                        <div
                          key={i}
                          className="w-12 h-12 rounded-full border-4 border-teal-900 overflow-hidden bg-white shadow-lg"
                        >
                          <img
                            src={avatar}
                            alt={`Client ${i + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <Star className="w-4 h-4 fill-lime-400 text-lime-400" />
                        <span className="text-white font-bold text-sm">
                          4.9/5 Rating
                        </span>
                      </div>
                      <p className="text-white/60 text-xs font-medium">
                        Trusted by 750+ Clients
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Image (Aligned to start) */}
              <div className="flex justify-end">
                <div className="relative w-full max-w-sm">
                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -right-4 w-40 h-40 bg-lime-400/20 rounded-full blur-3xl"></div>
                  <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-teal-600/20 rounded-full blur-3xl"></div>

                  {/* Image Container */}
                  <div className="relative bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm p-3 rounded-[1.5rem] shadow-2xl border border-white/20 transform hover:scale-105 transition-transform duration-300">
                    <div className="relative rounded-xl overflow-hidden shadow-2xl h-[520px]">
                      <Image
                        src={heroImage}
                        alt="Er. Mukesh Bhaskar - CEO"
                        width={340}
                        height={520}
                        className="w-full h-full object-contain object-center"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-teal-900/30 via-transparent to-transparent"></div>
                    </div>
                  </div>

                  {/* Name Badge */}
                  <div className="mt-4 text-center space-y-1 bg-white/10 backdrop-blur-sm p-2.5 rounded-xl border border-white/20">
                    <h3 className="text-white font-bold text-sm">
                      Er. Mukesh Bhaskar
                    </h3>
                    <p className="text-lime-400 text-xs font-semibold">
                      Corporate Coach & Social Leader
                    </p>
                    <p className="text-white/80 text-xs font-medium">
                      CEO - Cascab Pvt. Ltd
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Curved bottom edge */}
        <svg
          className="absolute bottom-0 left-0 w-full h-24 lg:h-32 text-white"
          viewBox="0 0 1440 120"
          fill="currentColor"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C480,120 960,120 1440,0 L1440,120 L0,120 Z"></path>
        </svg>
      </div>

      <div className="bg-white pt-16"></div>
    </>
  );
}