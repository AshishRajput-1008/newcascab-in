import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

import s1 from "@/app/assets/Works/c.jpg"
import s5 from "@/app/assets/heroSection/CEO.png";
import s2 from "@/app/assets/heroSection/about.png"
import s9 from "@/app/assets/gallery/highway treat.jpg"

export default function OurWork() {
  const projects = [
    {
      id: 1,
      badge: "95%",
      title: "Spices Manufacturing Plant",
      subtitle: "CASCAB Traditional Masala Excellence",
      description: "CASCAB is a fast-growing spices industry in Central India, combining traditional processes with modern technology. We provide high-quality spices at affordable prices, maintaining traditional values of aroma, taste, and color in sealed packs.",
      highlight: "QUALITY, QUALITY & QUALITY",
      date: "Since Inception",
      author: {
        name: "Er. Mukesh Bhaskar",
        role: "CEO Director",
        avatar: s5.src
      },
      image: s2.src,
      layout: "horizontal",
      accent: "lime"
    },
    {
      id: 2,
      badge: "98%",
      title: "Highway Treet Restaurant",
      subtitle: "Traditional Bundelkhandi Cuisine",
      description: "Located on NH 44 Jhansi-Sagar Road, we explore traditional Bundelkhandi and Chinese food using ancient cooking methods. Our dedication includes cooking on open fires, grinding spices with mortar and pestle, and preparing vegetables in earthenware.",
      highlight: "Authentic Heritage Flavors",
      date: "Now Open",
      author: {
        name: "Culinary Team",
        role: "Head Chef",
        avatar: s5.src
      },
      image: s9.src,
      layout: "horizontal-reverse",
      accent: "teal"
    },
    {
      id: 3,
      badge: "92%",
      title: "Research & Organic Farming",
      subtitle: "Quality Product Development",
      description: "CASCAB conducts ongoing research farming and organic farming initiatives to improve product quality and provide the best products. Our commitment to sustainable agriculture ensures that we deliver superior quality while maintaining environmental responsibility.",
      highlight: "Sustainable Excellence",
      date: "Continuous Research",
      author: {
        name: "Agriculture Team",
        role: "Research Lead",
        avatar: s5.src
      },
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop",
      layout: "horizontal",
      accent: "lime"
    },
    {
      id: 4,
      badge: "96%",
      title: "Consultancy Services",
      subtitle: "Entrepreneurship & Wealth Planning",
      description: "Let us help you overshoot your goals in the right ways. We provide complete solutions for financial planning, insurance policies, SIPs, and entrepreneurship development. Our EDP services help identify the right business opportunities and provide skill development training.",
      highlight: "Expert Guidance",
      date: "Expert Guidance",
      author: {
        name: "Consulting Team",
        role: "Business Advisor",
        avatar: s5.src
      },
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      layout: "horizontal-reverse",
      accent: "teal"
    }
  ];

  return (
    <div className="rounded-xl bg-[#f5f4ed] py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden mt-12">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#9ae761]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#044441]/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="relative w-7 h-7 border-2 border-[#044441] rounded-full flex items-center justify-center">
              <span className="w-2.5 h-2.5 bg-[#044441] rounded-full animate-pulse"></span>
            </div>
            <span className="text-[#0a3d3d] mt-1 text-sm font-bold tracking-[0.2em] uppercase">
              Our Work
            </span>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div>
              <h2 className="text-[#0a3d3d] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3">
                Proven success through<br />quality & tradition
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl">
                Discover our diverse ventures spanning premium spices, authentic cuisine, sustainable farming, and business consultancy.
              </p>
            </div>
            <a href='/Ourgroup'>
            <button className="hidden md:flex items-center gap-2 bg-[#9ae761] hover:bg-[#b8e827] text-[#0a3d3d] px-8 py-4 rounded-full font-bold text-base transition-all shadow-lg hover:shadow-xl hover:scale-105 whitespace-nowrap group">
              View All Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            </a>
          </div>
        </div>

        {/* Projects Grid */}

<a href='/Ourgroup'>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`group bg-white rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col border border-gray-100 hover:border-[#9ae761]/30 ${
                project.layout === 'horizontal-reverse' ? 'lg:flex-row-reverse' : 'lg:flex-row'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Section */}
              <div className="relative lg:w-1/2 overflow-hidden">
                <div className="relative h-64 lg:h-full">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform "
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                  
                  {/* Quality Badge */}
                  {/* <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-3 text-center min-w-[90px] shadow-xl border border-white/50">
                    <div className="flex items-center justify-center gap-1">
                      <span className="text-3xl font-black text-[#044441] leading-none">{project.badge}</span>
                    </div>
                    <div className="text-xs font-bold text-gray-600 mt-1 uppercase tracking-wider">Quality</div>
                  </div> */}

                  {/* Floating highlight tag */}
                  {/* <div className="absolute bottom-6 left-6 bg-[#9ae761] text-[#044441] px-5 py-2.5 rounded-full font-bold text-sm shadow-lg flex items-center gap-2 group-hover:scale-105 transition-transform">
                    <Sparkles className="w-4 h-4" />
                    {project.highlight}
                  </div> */}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 lg:w-1/2 lg:p-12 flex flex-col justify-center relative">
                {/* Decorative accent line */}
                <div className={`absolute left-0 top-8 bottom-8 w-1 bg-gradient-to-b ${
                  project.accent === 'lime' 
                    ? 'from-[#9ae761] via-[#9ae761] to-transparent' 
                    : 'from-[#044441] via-[#044441] to-transparent'
                } rounded-full`}></div>

                <div className="space-y-4">
                  {/* Title Section */}
                  <div>
                    <h3 className="text-[#0a3d3d] text-3xl lg:text-4xl font-bold leading-tight mb-2 group-hover:text-[#044441] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-[#9ae761] font-semibold text-lg">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-base leading-relaxed">
                    {project.description}
                  </p>

                  {/* Divider */}
                  <div className="w-16 h-1 bg-gradient-to-r from-[#044441] to-transparent rounded-full my-4"></div>

                  {/* Author Info */}
                  <div className="flex items-center gap-4 pt-2">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-[#9ae761] to-[#044441] rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
                      <img 
                        src={project.author.avatar}
                        alt={project.author.name}
                        className="relative w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
                      />
                    </div>
                    <div>
                      <p className="text-[#0a3d3d] text-base font-bold">
                        {project.author.name}
                      </p>
                      <p className="text-gray-500 text-sm font-medium">
                        {project.author.role}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative corner element */}
                <div className="absolute bottom-8 right-8 w-16 h-16 opacity-5 group-hover:opacity-10 transition-opacity">
                  <div className="w-full h-full border-4 border-[#044441] rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        </a>

        {/* Mobile View All Button */}
        <div className="mt-12 md:hidden">
          <button className="w-full flex items-center justify-center gap-3 bg-[#9ae761] hover:bg-[#b8e827] text-[#0a3d3d] px-8 py-4 rounded-full font-bold text-base transition-all shadow-lg active:scale-95">
            View All Works
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Bottom decorative accent */}
        <div className="mt-16 flex items-center justify-center gap-4">
          <div className="h-0.5 w-20 bg-gradient-to-r from-transparent via-[#044441] to-transparent"></div>
          <div className="flex gap-2">
            <div className="w-2 h-2 rounded-full bg-[#044441] animate-pulse"></div>
            <div className="w-2 h-2 rounded-full bg-[#9ae761] animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 rounded-full bg-[#044441] animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
          <div className="h-0.5 w-20 bg-gradient-to-r from-transparent via-[#044441] to-transparent"></div>
        </div>
      </div>
    </div>
  );
}