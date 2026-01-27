"use client"
import React, { useEffect } from "react";
import {
  ChevronDown,
  Users,
  FolderKanban,
  HelpCircle,
  Newspaper,
  BookOpen,
  Menu,
  X,
} from "lucide-react";
import logo2 from "@/app/assets/heroSection/ChatGPT Image Nov 20, 2025, 06_19_01 PM.png";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  // Initialize Google Translate
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Add Google Translate configuration
    const configScript = document.createElement('script');
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
    const translateScript = document.createElement('script');
    translateScript.src = 'https://cdn.gtranslate.net/widgets/latest/dropdown.js';
    translateScript.defer = true;
    document.body.appendChild(translateScript);

    return () => {
      // Cleanup scripts on unmount
      if (configScript.parentNode) configScript.parentNode.removeChild(configScript);
      if (translateScript.parentNode) translateScript.parentNode.removeChild(translateScript);
    };
  }, []);

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
          background-color: #b9f57c ;
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

      {/* Header Container with Background */}
      <div className="relative bg-gradient-to-br from-[#044441] via-teal-800 to-teal-900">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-lime-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-600/10 rounded-full blur-3xl"></div>
        
        {/* Navigation */}
        <nav className="container mx-auto px-6 lg:px-8 py-6 relative z-10">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/">
                <img
                  src={logo2.src}
                  alt="CasCab Logo"
                  className="w-24 h-24 lg:w-28 lg:h-28 cursor-pointer"
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              <a href="/Ourprofile" className="text-lime-400 text-base font-semibold hover:text-lime-300 transition-colors whitespace-nowrap">
                Our Profile
              </a>
              <a href="/Startup" className="font-semibold text-white text-base hover:text-lime-400 transition-colors whitespace-nowrap">
                Startup
              </a>
              <a href="/Opportunities" className="flex font-semibold items-center gap-1 text-white text-base hover:text-lime-400 transition-colors whitespace-nowrap">
                Opportunities
              </a>
              <div className="relative group">
                <button className="font-semibold flex items-center gap-1 text-white text-base hover:text-lime-400 transition-colors whitespace-nowrap">
                  Our Group
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white text-gray-800 shadow-xl rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-2 z-50">
                  <a href="/Ourgroup" className="flex items-center gap-2 px-4 py-3 hover:bg-gray-50 rounded-xl transition cursor-pointer">
                    <Users className="w-4 h-4 text-teal-600" />
                    <span className="text-sm font-medium">Team Members</span>
                  </a>
                  <a href="/Ourgroup" className="flex items-center gap-2 px-4 py-3 hover:bg-gray-50 rounded-xl transition cursor-pointer">
                    <FolderKanban className="w-4 h-4 text-teal-600" />
                    <span className="text-sm font-medium">Projects</span>
                  </a>
                  <a href="/Ourgroup" className="flex items-center gap-2 px-4 py-3 hover:bg-gray-50 rounded-xl transition cursor-pointer">
                    <HelpCircle className="w-4 h-4 text-teal-600" />
                    <span className="text-sm font-medium">About Us</span>
                  </a>
                </div>
              </div>
              <div className="relative group">
                <button className="font-semibold flex items-center gap-1 text-white text-base hover:text-lime-400 transition-colors whitespace-nowrap">
                  Query
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white text-gray-800 shadow-xl rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-2 z-50">
                  <a href="/Query" className="flex items-center gap-2 px-4 py-3 hover:bg-gray-50 rounded-xl transition cursor-pointer">
                    <Newspaper className="w-4 h-4 text-teal-600" />
                    <span className="text-sm font-medium">Latest Posts</span>
                  </a>
                  <a href="/Query" className="flex items-center gap-2 px-4 py-3 hover:bg-gray-50 rounded-xl transition cursor-pointer">
                    <BookOpen className="w-4 h-4 text-teal-600" />
                    <span className="text-sm font-medium">Case Studies</span>
                  </a>
                </div>
              </div>
              <div className="relative group">
                <button className="font-semibold flex items-center gap-1 text-white text-base hover:text-lime-400 transition-colors whitespace-nowrap">
                  Media
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white text-gray-800 shadow-xl rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-2 z-50">
                  <a href="/Media" className="flex items-center gap-2 px-4 py-3 hover:bg-gray-50 rounded-xl transition cursor-pointer">
                    <Newspaper className="w-4 h-4 text-teal-600" />
                    <span className="text-sm font-medium">News</span>
                  </a>
                  <a href="/Media" className="flex items-center gap-2 px-4 py-3 hover:bg-gray-50 rounded-xl transition cursor-pointer">
                    <BookOpen className="w-4 h-4 text-teal-600" />
                    <span className="text-sm font-medium">Gallery</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side Actions - Language & FAQ */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Desktop Language Selector with Google Translate */}
              <div className="desktop-translate">
                <div className="gtranslate_wrapper"></div>
              </div>

              {/* FAQ Button */}
              <a href="/faq">
                <button className="bg-[#9ae761] text-teal-900 px-6 py-2.5 rounded-full text-sm font-bold hover:bg-lime-300 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 whitespace-nowrap">
                  FAQ
                  <span className="bg-[#044441] text-white rounded-full w-7 h-7 flex items-center justify-center text-xs transition-transform group-hover:rotate-45">
                    →
                  </span>
                </button>
              </a>
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
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 bg-white/10 backdrop-blur-lg rounded-2xl p-4 space-y-2">
              {/* Navigation Links */}
              <a href="/our-profile" className="block text-lime-400 font-semibold py-2.5 px-4 rounded-lg hover:bg-white/10 transition">
                Our Profile
              </a>
              <a href="/startup" className="block text-white font-semibold py-2.5 px-4 rounded-lg hover:bg-white/10 transition">
                Startup Programs
              </a>
              <a href="/opportunities" className="block text-white font-semibold py-2.5 px-4 rounded-lg hover:bg-white/10 transition">
                Opportunities
              </a>
              <a href="/our-group" className="block text-white font-semibold py-2.5 px-4 rounded-lg hover:bg-white/10 transition">
                Our Group
              </a>
              <a href="/query" className="block text-white font-semibold py-2.5 px-4 rounded-lg hover:bg-white/10 transition">
                Query
              </a>
              <a href="/media" className="block text-white font-semibold py-2.5 px-4 rounded-lg hover:bg-white/10 transition">
                Media
              </a>
              <a href="/query" className="block text-white font-semibold py-2.5 px-4 rounded-lg hover:bg-white/10 transition">
                Contact
              </a>
              
              {/* Divider */}
              <div className="border-t border-white/20 my-3"></div>

              {/* Mobile FAQ Button */}
              <a href="/faq">
                <button className="w-full bg-[#9ae761] text-teal-900 px-6 py-3.5 rounded-xl text-base font-bold hover:bg-lime-300 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl active:scale-95">
                  FAQ
                  <span className="bg-[#044441] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">
                    →
                  </span>
                </button>
              </a>
            </div>
          )}
        </nav>
      </div>
    </>
  );
}