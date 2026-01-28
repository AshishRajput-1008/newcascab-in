"use client";
import { useState } from "react";
import logo from "@/app/assets/heroSection/ChatGPT Image Nov 20, 2025, 06_19_01 PM.png";
import {
  Mail,
  Phone,
  ArrowUp,
  Send,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  ExternalLink,
} from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate newsletter submission
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail("");
      // You can add a success message here
    }, 1500);
  };

  // Updated to match header routes
  const companyLinks = [
    { name: "Our Profile", href: "/Ourprofile" },
    { name: "Our Group", href: "/Ourgroup" },
    { name: "Startup", href: "/Startup" },
    { name: "Opportunities", href: "/Opportunities" },
  ];

  const resourcesLinks = [
    { name: "Media Gallery", href: "/Media" },
    { name: "Query & Support", href: "/Query" },
    { name: "FAQs", href: "/faq" },
    { name: "Contact Us", href: "/Query" },
  ];

  // Service links can remain as is or be updated based on your actual services
  const servicesLinks = [
    { name: "Spices Manufacturing", href: "#spices" },
    { name: "Highway Tree Restaurant", href: "#restaurant" },
    { name: "Research & Organic Farming", href: "#farming" },
    { name: "Consultancy Services", href: "#consultancy" },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      href: "#linkedin",
      color: "hover:bg-[#0A66C2]",
    },
    {
      name: "Facebook",
      icon: <Facebook className="w-5 h-5" />,
      href: "#facebook",
      color: "hover:bg-[#1877F2]",
    },
    {
      name: "Twitter",
      icon: <Twitter className="w-5 h-5" />,
      href: "#twitter",
      color: "hover:bg-[#1DA1F2]",
    },
    {
      name: "YouTube",
      icon: <Youtube className="w-5 h-5" />,
      href: "#youtube",
      color: "hover:bg-[#FF0000]",
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-5 h-5" />,
      href: "#instagram",
      color:
        "hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737]",
    },
  ];

  const quickLinks = [
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
    { name: "Cookie Policy", href: "#cookies" },
  ];

  return (
    <footer className="relative bg-[#0a3d3d] text-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#a8e063]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#a8e063]/3 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10">
        {/* Premium CTA Section */}
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-20 pb-12">
          <div className="relative bg-gradient-to-br from-[#a8e063] via-[#b8f073] to-[#a8e063] rounded-[3rem] p-12 md:p-16 overflow-hidden shadow-2xl">
            {/* Animated Pattern Overlay */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIgZmlsbD0iIzBhM2QzZCIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
            </div>

            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="flex-1 max-w-2xl">
                <a href="/Query">
                  <div className="flex items-center gap-3 mb-6 group cursor-pointer">
                    <div className="w-12 h-12 rounded-2xl bg-[#0a3d3d] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <ArrowUp className="w-6 h-6 text-[#a8e063] group-hover:rotate-45 transition-transform" />
                    </div>
                    <span className="text-[#0a3d3d] font-bold text-sm uppercase tracking-[0.2em] group-hover:tracking-[0.25em] transition-all">
                      Get Started
                    </span>
                  </div>
                </a>

                <h2 className="text-[#0a3d3d] text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1]">
                  Ready to achieve
                  <span className="block mt-2">Financial freedom &</span>
                  <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#0a3d3d] to-[#044441]">
                    Business success?
                  </span>
                </h2>

                <p className="text-[#0a3d3d] text-lg md:text-xl opacity-80 leading-relaxed">
                  Join CasCab Group and unlock your inner strength and potential
                  for lasting success.
                </p>
              </div>

              <a href="/Query">
                <button className="group relative bg-[#0a3d3d] text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-[#044441] transition-all duration-300 shadow-2xl hover:shadow-[0_20px_60px_rgba(10,61,61,0.4)] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white">
                  <span className="flex items-center gap-3">
                    Get Started Now
                    <ArrowUp className="w-6 h-6 rotate-45 group-hover:rotate-90 transition-transform duration-300" />
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
            {/* Newsletter & Social Section */}
            <div className="lg:col-span-5">
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 h-full">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 leading-tight">
                  Stay updated with us
                  <span className="block text-[#a8e063] mt-1">
                    Let us help you achieve your goals
                  </span>
                </h3>

                {/* Newsletter Form */}
                {/* <form onSubmit={handleNewsletterSubmit} className="mb-8">
                  <div className="flex gap-2 mb-4">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="flex-1 px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#a8e063] focus:ring-2 focus:ring-[#a8e063]/30 transition-all"
                    />
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-[#a8e063] text-[#0a3d3d] px-8 py-4 rounded-2xl font-bold hover:bg-[#b8f073] transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[#a8e063]"
                    >
                      <Send className={`w-5 h-5 transition-transform ${isSubmitting ? 'animate-pulse' : 'group-hover:translate-x-1'}`} />
                    </button>
                  </div>
                  <p className="text-white/60 text-sm">
                    Join our community. No spam, unsubscribe anytime.
                  </p>
                </form> */}

                {/* Social Links */}
                <div className="space-y-4">
                  <p className="text-sm font-semibold text-white/80 uppercase tracking-wider">
                    Connect With Us
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        className={`group relative w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center transition-all duration-300 border border-white/20 hover:border-white hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#a8e063] ${social.color}`}
                        title={social.name}
                        aria-label={social.name}
                      >
                        <span className="group-hover:scale-110 transition-transform text-white">
                          {social.icon}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Links Grid - Updated to match header navigation */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
              {/* Company Links */}
              <div>
                <h4 className="font-bold text-sm uppercase tracking-[0.2em] text-[#a8e063] mb-6 flex items-center gap-2">
                  <div className="w-8 h-[2px] bg-[#a8e063]"></div>
                  Company
                </h4>
                <ul className="space-y-4">
                  {companyLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="group flex items-center gap-2 hover:text-[#a8e063] transition-all duration-300 hover:translate-x-1 focus:outline-none focus:text-[#a8e063]"
                        onMouseEnter={() => setHoveredLink(`company-${index}`)}
                        onMouseLeave={() => setHoveredLink(null)}
                      >
                        <span
                          className={`text-base transition-colors ${hoveredLink === `company-${index}` ? "text-[#a8e063]" : "text-white/90"}`}
                        >
                          {link.name}
                        </span>
                        {hoveredLink === `company-${index}` && (
                          <ExternalLink className="w-3 h-3 text-[#a8e063]" />
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources Links */}
              <div>
                <h4 className="font-bold text-sm uppercase tracking-[0.2em] text-[#a8e063] mb-6 flex items-center gap-2">
                  <div className="w-8 h-[2px] bg-[#a8e063]"></div>
                  Resources
                </h4>
                <ul className="space-y-4">
                  {resourcesLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="group hover:text-[#a8e063] transition-all duration-300 hover:translate-x-1 inline-block focus:outline-none focus:text-[#a8e063]"
                        onMouseEnter={() => setHoveredLink(`resource-${index}`)}
                        onMouseLeave={() => setHoveredLink(null)}
                      >
                        <span
                          className={`text-base transition-colors ${hoveredLink === `resource-${index}` ? "text-[#a8e063]" : "text-white/90"}`}
                        >
                          {link.name}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services Links */}
              <div>
                <h4 className="font-bold text-sm uppercase tracking-[0.2em] text-[#a8e063] mb-6 flex items-center gap-2">
                  <div className="w-8 h-[2px] bg-[#a8e063]"></div>
                  Our Services
                </h4>
                <ul className="space-y-4">
                  {servicesLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="group flex items-center gap-2 hover:text-[#a8e063] transition-all duration-300 hover:translate-x-1 focus:outline-none focus:text-[#a8e063]"
                        onMouseEnter={() => setHoveredLink(`service-${index}`)}
                        onMouseLeave={() => setHoveredLink(null)}
                      >
                        <span
                          className={`text-base transition-colors ${hoveredLink === `service-${index}` ? "text-[#a8e063]" : "text-white/90"}`}
                        >
                          {link.name}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <a 
              href="tel:+917355996988"
              className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#a8e063] transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#a8e063] cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#a8e063] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-[#0a3d3d]" />
                </div>
                <div>
                  <div className="text-xs text-white/60 uppercase tracking-wider mb-1">
                    Call Us
                  </div>
                  <div className="font-bold text-base group-hover:text-[#a8e063] transition-colors">
                    +91 7355996988
                  </div>
                </div>
              </div>
            </a>

            <a 
              href="mailto:help@cascab.com"
              className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#a8e063] transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#a8e063] cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#a8e063] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-[#0a3d3d]" />
                </div>
                <div>
                  <div className="text-xs text-white/60 uppercase tracking-wider mb-1">
                    Email
                  </div>
                  <div className="font-bold text-base group-hover:text-[#a8e063] transition-colors">
                    help@cascab.com
                  </div>
                </div>
              </div>
            </a>

            <a 
              href="https://maps.google.com/?q=81+Vivekanand+Nagar+Karond+Bhopal"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#a8e063] transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#a8e063] cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#a8e063] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6 text-[#0a3d3d]" />
                </div>
                <div>
                  <div className="text-xs text-white/60 uppercase tracking-wider mb-1">
                    Location
                  </div>
                  <div className="font-bold text-sm leading-tight group-hover:text-[#a8e063] transition-colors">
                    Bhopal, MP, India
                  </div>
                </div>
              </div>
            </a>
          </div>

          {/* Divider */}
          <div className="h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent mb-12"></div>

          {/* Bottom Bar */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Address & Copyright */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <div className="text-white/90 text-sm leading-relaxed mb-3">
                <strong className="text-white">Cascab Pvt. Ltd.</strong>
                <br />
                81 Vivekanand Nagar, Karond
                <br />
                Bhopal (MP), PIN-462038, India
              </div>
              <div className="text-white/60 text-sm mb-2">
                © {new Date().getFullYear()} Cascab. All rights reserved.
              </div>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-xs text-white/50">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="hover:text-[#a8e063] transition-colors focus:outline-none focus:text-[#a8e063]"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Logo */}
            <div className="order-1 lg:order-2">
              <a href="/" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#a8e063] rounded-lg">
                <img 
                  className="w-28 h-28 group-hover:scale-110 transition-transform" 
                  src={logo.src} 
                  alt="CasCab Logo" 
                />
              </a>
            </div>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-3 bg-[#a8e063] text-[#0a3d3d] px-6 py-3 rounded-full font-bold hover:bg-[#b8f073] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 order-3 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
              Back To Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}