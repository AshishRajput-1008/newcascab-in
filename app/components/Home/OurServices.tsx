import React from 'react';
import { CheckCircle2, ArrowUpRight, Lightbulb, TrendingUp, Users, Factory } from 'lucide-react';

import b1 from "@/app/assets/Services/Services -ads.png"
import b2 from "@/app/assets/Services/audience-services.png"
import b3 from "@/app/assets/Services/blog-services.png"
import b4 from "@/app/assets/Services/social-media-about-us.png"

export default function OurGroups() {
  const services = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      image: b1,
      title: "Entrepreneurship Development Program",
      subtitle: "EDP",
      description: "Transform your business vision into reality.",
      features: [
    
        "Market analysis, competitive positioning, and go-to-market strategy development",
        "Hands-on mentorship from successful entrepreneurs and industry veterans"
      ]
    },

    {
      icon: <TrendingUp className="w-8 h-8" />,
      image: b2,
      title: "Wealth & Life Management",
      subtitle: "Financial Wellness",
      description: "Achieve true prosperity through our integrated approach.",
      features: [
        "Comprehensive financial planning with tax optimization and wealth accumulation strategies",
        "Investment portfolio management across equity, real estate, and alternative assets",
      ]
    },

    {
      icon: <Users className="w-8 h-8" />,
      image: b3,
      title: "Leadership Development",
      subtitle: "Executive Excellence",
      description: "Cultivate exceptional leadership capabilities that drive organizational success",
      features: [
        "Advanced strategic thinking frameworks and scenario-based decision-making training",
    
        "Organizational change management and digital transformation leadership skills",
      ]
    },

    {
      icon: <Factory className="w-8 h-8" />,
      image: b4,
      title: "Spices & Food Product Formulation",
      subtitle: "10+ Premium Formulas",
      description: "Leverage our food science expertise to create distinctive spice blends.",
      features: [
        "Custom masala and seasoning development using traditional recipes and modern techniques",
        "Comprehensive quality assurance including microbiological testing and stability studies",
       
      ]
    },

    {
      icon: <Factory className="w-8 h-8" />,
      image: b1,
      title: "Industry Establishment & Operations",
      subtitle: "Turnkey Solutions",
      description: "From concept to commissioning, we provide complete industrial setup.",
      features: [
       
  
        "Licensing support including factory registration, FSSAI, ISO, and environmental clearances",
        "Operations manual development, workforce training, and continuous improvement systems"
      ]
    },
  ];

  return (
    <section className="py-20 rounded-3xl bg-gradient-to-br from-[#0a3d3d] via-[#0c4544] to-[#08302e] px-6 overflow-hidden relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-[1600px] mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="relative w-8 h-8 border-2 border-white/40 rounded-full flex items-center justify-center backdrop-blur-sm">
              <span className="w-3 h-3 bg-[#9ae761] rounded-full animate-pulse shadow-lg shadow-[#9ae761]/50"></span>
            </div>
            <span className="text-white/90 text-xs font-semibold tracking-[0.25em] uppercase">
              Our Business Divisions
            </span>
          </div>

          <h2 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Integrated Excellence<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a8e063] to-[#7bc844]">
              Across Multiple Sectors
            </span>
          </h2>
          <p className="text-white/60 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            CasCab Group delivers specialized expertise across five strategic business verticals, 
            combining industry knowledge with innovative solutions to drive sustainable growth.
          </p>
        </div>

        {/* Services Grid - All in one row on desktop */}
        <a href='/Ourgroup'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="transform transition-all duration-500 hover:scale-[1.02] group"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="bg-white rounded-2xl p-7 relative overflow-hidden hover:shadow-2xl hover:shadow-[#a8e063]/30 transition-all duration-500 h-full border border-gray-100 hover:border-[#a8e063]/30 flex flex-col">
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#a8e063]/0 via-[#a8e063]/5 to-[#a8e063]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Top glow effect */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#a8e063] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Content wrapper */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon Container */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#a8e063]/20 via-[#a8e063]/10 to-transparent rounded-xl flex items-center justify-center text-[#0a3d3d] group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-sm border border-[#a8e063]/20">
                      {service.icon}
                    </div>

                    {/* Arrow Button */}
                    <button className="w-10 h-10 bg-gradient-to-br from-gray-100 to-gray-50 rounded-full flex items-center justify-center group-hover:from-[#a8e063] group-hover:to-[#98d053] transition-all duration-500 shadow-md hover:shadow-lg">
                      <ArrowUpRight className="w-4 h-4 text-[#0a3d3d] group-hover:rotate-45 group-hover:scale-110 transition-transform duration-500" />
                    </button>
                  </div>

                  {/* Subtitle Tag */}
                  {/* <div className="inline-flex mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 bg-[#a8e063]/10 text-[#0a3d3d] rounded-full border border-[#a8e063]/20">
                      {service.subtitle}
                    </span>
                  </div> */}

                  {/* Title */}
                  <h3 className="text-[#0a3d3d] text-lg font-bold mb-3 leading-tight group-hover:text-[#0a3d3d] transition-colors min-h-[3.5rem]">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-xs mb-5 leading-relaxed line-clamp-4">
                    {service.description}
                  </p>

                  {/* Divider */}
                  <div className="w-10 h-0.5 bg-gradient-to-r from-[#a8e063] to-transparent mb-5 rounded-full group-hover:w-16 transition-all duration-500"></div>

                  {/* Features List */}
                  <ul className="space-y-2.5 flex-grow">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-700 group/item">
                        <CheckCircle2 className="w-4 h-4 text-[#a8e063] flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#a8e063] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>
        </a>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-white/50 text-sm mb-4">
            Interested in partnering with us or learning more about our services?
          </p>
          <a href='/Query'>
          <button className="px-8 py-3 bg-gradient-to-r from-[#a8e063] to-[#98d053] text-[#0a3d3d] font-semibold rounded-full hover:shadow-2xl hover:shadow-[#a8e063]/50 transition-all duration-300 hover:scale-105">
            Get in Touch
          </button>
          </a>
        </div>
      </div>
    </section>
  );
}