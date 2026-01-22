import React from 'react';
import { CheckCircle2, ArrowUpRight } from 'lucide-react';

import b1 from "@/app/assets/Services/Services -ads.png"
import b2 from "@/app/assets/Services/audience-services.png"
import b3 from "@/app/assets/Services/blog-services.png"
import b4 from "@/app/assets/Services/social-media-about-us.png"

export default function OurGroups() {
  const services = [
    {
      icon: <img src={b1.src} alt="Spices Division" className="w-8 h-8" />,
      title: "Spices Division",
      description: "Premium quality spices blending traditional Indian flavors with modern manufacturing excellence.",
      features: [
        "Authentic masala blends with superior aroma, taste, and color",
        "State-of-the-art manufacturing ensuring hygiene and quality",
        "Direct farm sourcing for freshest ingredients and fair pricing"
      ]
    },

    {
      icon: <img src={b4.src} alt="Political Advisory" className="w-8 h-8" />,
      title: "Political Advisory",
      description: "Strategic political consulting and governance solutions for aspiring leaders and public representatives.",
      features: [
        "Election campaign strategy and grassroots mobilization",
        "Policy advisory and governance consulting services",
        "Political communication and media management expertise"
      ]
    },

    {
      icon: <img src={b2.src} alt="Skill Development" className="w-8 h-8" />,
      title: "Skill Development",
      description: "Empowering communities through comprehensive skill training and entrepreneurship development programs.",
      features: [
        "Entrepreneurship training and business mentorship programs",
        "Rural development initiatives and farmer skill enhancement",
        "Youth empowerment through vocational training and placement"
      ]
    },

    {
      icon: <img src={b3.src} alt="Formulation Labs" className="w-8 h-8" />,
      title: "Formulation Labs",
      description: "Cutting-edge research and development in food science, spice formulations, and quality innovation.",
      features: [
        "Advanced spice blend research and product innovation",
        "Quality control and food safety testing facilities",
        "Custom formulation development for B2B clients"
      ]
    },
  ];

  return (
    <section className="py-16 rounded-3xl bg-gradient-to-b from-[#0a3d3d] to-[#08302e] py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-32">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="relative w-7 h-7 border-2 border-[white] rounded-full flex items-center justify-center">
              <span className="w-2.5 h-2.5 bg-[#9ae761] rounded-full animate-pulse"></span>
            </div>
            <span className="text-[white] mt-1 text-sm font-bold tracking-[0.2em] uppercase">
              Our Groups
            </span>
          </div>

          <h2 className="text-white text-5xl md:text-6xl font-bold mb-4 leading-tight">
            Diversified Excellence<br />Across Industries
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            CasCab Group operates across multiple sectors, driving innovation and creating value through our integrated business divisions.
          </p>
        </div>

        {/* Services Grid - Staggered Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`transform transition-all duration-500 hover:scale-105 ${
                index % 2 === 0 ? 'lg:mt-0' : 'lg:mt-12'
              }`}
            >
              <div className="bg-white rounded-3xl p-8 relative group hover:shadow-2xl hover:shadow-[#a8e063]/20 transition-all duration-300 h-full border border-transparent hover:border-[#a8e063]/20">
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#a8e063]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>

                {/* Arrow Button */}
                <button className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-br from-[#f5f5f5] to-[#e8e8e8] rounded-full flex items-center justify-center group-hover:from-[#a8e063] group-hover:to-[#98d053] transition-all duration-300 shadow-lg z-10">
                  <ArrowUpRight className="w-5 h-5 text-[#0a3d3d] group-hover:rotate-45 group-hover:scale-110 transition-transform duration-300" />
                </button>

                {/* Icon */}
                <div className="w-20 h-20 bg-gradient-to-br from-[#a8e063]/20 to-[#a8e063]/5 rounded-2xl flex items-center justify-center mb-6 text-[#0a3d3d] group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-[#0a3d3d] text-xl font-bold mb-3 group-hover:text-[#0a3d3d] transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Divider */}
                <div className="w-12 h-1 bg-gradient-to-r from-[#a8e063] to-transparent mb-6 rounded-full"></div>

                {/* Features List */}
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-700 group/item hover:text-[#0a3d3d] transition-colors">
                      <CheckCircle2 className="w-5 h-5 text-[#a8e063] flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#a8e063] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-3xl"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}