"use client"
import React from "react";
import { Building2, UtensilsCrossed, Sprout, Users, Briefcase, Target, Globe, Award, ArrowRight } from "lucide-react";
import Header from "@/app/components/Home/Header"
import Footer from "@/app/components/Home/Footer"
export default function OurGroup() {
  const ventures = [
    {
      icon: Building2,
      title: "CASCAB Spices Manufacturing",
      tagline: "Fast Growing Spices Industry in Central India",
      features: [
        "Traditional process with modern technology",
        "High quality spices at affordable prices",
        "Quality, Quality & Quality - Our Motto",
        "No preservatives, 100% pure products",
        "Ayurvedic compound base products"
      ],
      highlights: [
        "Quality assured by Er. Mukesh Bhaskar",
        "EDP trained professional management",
        "Sealed packaging maintaining aroma & taste",
        "Traditional values preserved"
      ],
      gradient: "from-amber-500 to-orange-600"
    },
    {
      icon: UtensilsCrossed,
      title: "CASCAB Highway Treat",
      tagline: "Traditional Bundelkhandi & Chinese Cuisine",
      location: "NH 44, Jhansi-Sagar Road",
      features: [
        "Ancient cooking methods preserved",
        "Open fire cooking techniques",
        "Mortar & pestle spice grinding",
        "Earthenware preparation",
        "Authentic Bundelkhandi flavors"
      ],
      highlights: [
        "Heritage cooking techniques",
        "Clay pot preparations",
        "Traditional roti on open flames",
        "Unique taste and aroma"
      ],
      gradient: "from-red-500 to-pink-600"
    },
    {
      icon: Sprout,
      title: "Agriculture & Farming",
      tagline: "Research & Organic Farming",
      features: [
        "Research farming initiatives",
        "Organic farming practices",
        "Product quality improvement",
        "Best product delivery",
        "Sustainable agriculture"
      ],
      highlights: [
        "Time-to-time research",
        "Quality enhancement focus",
        "Organic methods",
        "Best product guarantee"
      ],
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: Briefcase,
      title: "CASCAB Consultancy Services",
      tagline: "Complete Business Solutions",
      features: [
        "Business planning & counseling",
        "Skill development training",
        "Resource gathering support",
        "Funding arrangement",
        "Factory establishment",
        "Manufacturing support",
        "Marketing strategies"
      ],
      highlights: [
        "100% practical implementation",
        "Money-back guarantee",
        "Learning to earning support",
        "Complete business solutions"
      ],
      gradient: "from-blue-500 to-indigo-600"
    }
  ];

  const services = [
    {
      title: "Industry/Factory Establishment",
      description: "Complete solution from factory setup to operations",
      icon: Building2
    },
    {
      title: "Spices & Food Formulation",
      description: "Custom formulations for all types of food products",
      icon: Target
    },
    {
      title: "Wealth & Life Planning",
      description: "Financial planning for a secure future",
      icon: Award
    },
    {
      title: "Leadership Development",
      description: "Election strategies and leadership training",
      icon: Users
    }
  ];

  return (

    <>
    <Header/>
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#044441] via-teal-800 to-teal-900 py-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-lime-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-600/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#9ae761]/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8">
              <Globe className="w-5 h-5 text-[#9ae761]" />
              <span className="text-[#9ae761] font-bold text-sm uppercase tracking-wider">Our Group</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              The <span className="text-[#9ae761]">CASCAB</span> Group
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              A diversified business group committed to excellence in manufacturing, hospitality, agriculture, and consultancy
            </p>
          </div>
        </div>

        <svg className="absolute bottom-0 left-0 w-full h-24 text-white" viewBox="0 0 1440 120" fill="currentColor" preserveAspectRatio="none">
          <path d="M0,0 C480,120 960,120 1440,0 L1440,120 L0,120 Z"></path>
        </svg>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 -mt-12 relative z-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-teal-600 to-teal-800 rounded-3xl p-10 text-white shadow-2xl">
              <Target className="w-14 h-14 text-[#9ae761] mb-6" />
              <h3 className="text-3xl font-bold mb-4">Vision</h3>
              <p className="text-xl text-white/90 leading-relaxed">
                "My Target Is to Produce More Entrepreneurs in India and remove money crisis for a better life"
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#9ae761] to-lime-400 rounded-3xl p-10 text-teal-900 shadow-2xl">
              <Award className="w-14 h-14 text-teal-800 mb-6" />
              <h3 className="text-3xl font-bold mb-4">Mission</h3>
              <p className="text-xl leading-relaxed">
                "Committed to provide best quality products/services at reasonable prices and ensure a strong financial life"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Ventures */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-lime-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-teal-900 mb-6">Our Ventures</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Diverse businesses united by commitment to quality and customer satisfaction
            </p>
          </div>

          <div className="space-y-12 max-w-7xl mx-auto">
            {ventures.map((venture, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="grid lg:grid-cols-5 gap-8">
                  {/* Icon & Title Section */}
                  <div className={`lg:col-span-2 bg-gradient-to-br ${venture.gradient} p-10 text-white flex flex-col justify-center`}>
                    <venture.icon className="w-20 h-20 mb-6" />
                    <h3 className="text-3xl lg:text-4xl font-bold mb-4">{venture.title}</h3>
                    <p className="text-xl text-white/90 mb-4">{venture.tagline}</p>
                    {venture.location && (
                      <p className="text-white/80 text-lg">📍 {venture.location}</p>
                    )}
                  </div>

                  {/* Content Section */}
                  <div className="lg:col-span-3 p-10">
                    <div className="mb-8">
                      <h4 className="text-2xl font-bold text-teal-900 mb-4">Features</h4>
                      <ul className="space-y-3">
                        {venture.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-[#9ae761] mt-2"></div>
                            <span className="text-gray-700 text-lg">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-teal-50 rounded-2xl p-6">
                      <h4 className="text-xl font-bold text-teal-900 mb-4">Highlights</h4>
                      <ul className="grid md:grid-cols-2 gap-3">
                        {venture.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-teal-600"></div>
                            <span className="text-gray-700">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultancy Services */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-teal-900 mb-6">Consultancy Services</h2>
              <p className="text-xl text-gray-600">
                "Let Me Help You Overshoot Your Goals in the Right Ways"
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="group bg-gradient-to-br from-white to-teal-50 rounded-2xl p-8 shadow-lg border-2 border-teal-100 hover:border-[#9ae761] transition-all duration-300 hover:shadow-2xl">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-teal-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-teal-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 text-lg">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Leadership */}
      <section className="py-20 bg-gradient-to-br from-teal-900 to-teal-800 text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Users className="w-16 h-16 text-[#9ae761] mx-auto mb-6" />
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Social Leadership</h2>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 border border-white/20">
              <p className="text-xl text-white/90 leading-relaxed mb-6">
                Mukesh ji regularly engages in social work, traveling from village to village to deliver lectures on entrepreneurship development. He provides every possible assistance to help people develop and grow their work.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-white/10 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-[#9ae761] mb-3">Village Outreach</h4>
                  <p className="text-white/80">Regular visits to provide entrepreneurship education and guidance</p>
                </div>
                <div className="bg-white/10 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-[#9ae761] mb-3">Farmer Support</h4>
                  <p className="text-white/80">Technical farming and financial planning information for farmers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Website & Contact */}
      <section className="py-20 bg-gradient-to-br from-lime-50 to-teal-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-teal-900 mb-6">Connect With Us</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all">
                <Globe className="w-12 h-12 text-teal-600 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-teal-900 mb-2">Online Store</h4>
                <a href="https://www.cascab.com" className="text-teal-600 hover:text-teal-800 font-semibold">
                  www.cascab.com
                </a>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all">
                <Briefcase className="w-12 h-12 text-teal-600 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-teal-900 mb-2">B2B Services</h4>
                <a href="https://www.cascab.in" className="text-teal-600 hover:text-teal-800 font-semibold">
                  www.cascab.in
                </a>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all">
                <Users className="w-12 h-12 text-teal-600 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-teal-900 mb-2">Free Consultancy</h4>
                <a href="https://www.mukeshbhaskar.com" className="text-teal-600 hover:text-teal-800 font-semibold">
                  www.mukeshbhaskar.com
                </a>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-10 shadow-xl text-center">
              <h3 className="text-2xl font-bold text-teal-900 mb-6">Get In Touch</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group bg-[#9ae761] text-teal-900 px-8 py-4 rounded-full text-lg font-bold hover:bg-lime-300 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-3">
                  Call: +91 73355996988
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </button>
                <button className="bg-teal-900 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-teal-800 transition-all">
                  WhatsApp Us
                </button>
              </div>
              <p className="text-gray-600 mt-6">Email: mukeshbhaskar931@gmail.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
}