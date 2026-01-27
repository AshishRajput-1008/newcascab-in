"use client"
import React from "react";
import { TrendingUp, Store, Users, Target, CheckCircle2, ArrowRight, Sparkles, Award, Zap } from "lucide-react";
import Header from "@/app/components/Home/Header"
import Footer from "@/app/components/Home/Footer"

export default function Opportunities() {
  const opportunities = [
    {
      title: "CASCAB Franchise",
      icon: Store,
      description: "Partner with a fast-growing spices brand in Central India",
      benefits: [
        "Established brand recognition",
        "100% pure & natural products",
        "Complete training & support",
        "Marketing materials provided",
        "Ongoing business guidance"
      ],
      investment: "Contact for details",
      returns: "High profit margins",
      gradient: "from-orange-500 to-red-600"
    },
    {
      title: "Distribution Partnership",
      icon: TrendingUp,
      description: "Become an authorized distributor in your region",
      benefits: [
        "Exclusive territory rights",
        "Wholesale pricing benefits",
        "Sales target assistance",
        "Logistics support",
        "Regular stock supply"
      ],
      investment: "₹5-10 Lakhs",
      returns: "20-30% margins",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      title: "Custom Business Setup",
      icon: Sparkles,
      description: "Start your own spices/food business with our formulations",
      benefits: [
        "10+ custom formulations",
        "Factory setup guidance",
        "Machinery recommendations",
        "Manufacturing support",
        "Brand development help"
      ],
      investment: "₹15-50 Lakhs",
      returns: "Custom projections",
      gradient: "from-green-500 to-emerald-600"
    }
  ];

  const whyPartner = [
    {
      icon: Award,
      title: "Proven Track Record",
      description: "15+ years of industry experience with 750+ satisfied clients"
    },
    {
      icon: Users,
      title: "Complete Support",
      description: "From setup to operations, we guide you at every step"
    },
    {
      icon: Zap,
      title: "Quality Assured",
      description: "100% pure products with no preservatives or chemicals"
    },
    {
      icon: Target,
      title: "Market Ready",
      description: "Established distribution channels and customer base"
    }
  ];

  const process = [
    { step: "01", title: "Initial Consultation", desc: "Discuss your goals and investment capacity" },
    { step: "02", title: "Business Planning", desc: "Customized business plan creation" },
    { step: "03", title: "Agreement & Training", desc: "Legal formalities and comprehensive training" },
    { step: "04", title: "Setup & Launch", desc: "Complete setup support and market launch" },
    { step: "05", title: "Ongoing Support", desc: "Continuous guidance for growth and success" }
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
              <Target className="w-5 h-5 text-[#9ae761]" />
              <span className="text-[#9ae761] font-bold text-sm uppercase tracking-wider">Business Opportunities</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Partner With <span className="text-[#9ae761]">CASCAB</span><br />
              Build Your Success Story
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-12">
              Join India's fastest growing spices and FMCG brand. Multiple partnership opportunities available for aspiring entrepreneurs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-[#9ae761] text-teal-900 px-8 py-5 rounded-full text-lg font-bold hover:bg-lime-300 transition-all shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-3">
                Explore Opportunities
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-5 rounded-full text-lg font-bold hover:bg-white/20 transition-all">
                Schedule Call
              </button>
            </div>
          </div>
        </div>

        <svg className="absolute bottom-0 left-0 w-full h-24 text-white" viewBox="0 0 1440 120" fill="currentColor" preserveAspectRatio="none">
          <path d="M0,0 C480,120 960,120 1440,0 L1440,120 L0,120 Z"></path>
        </svg>
      </section>

      {/* Why Partner Section */}
      <section className="py-20 -mt-12 relative z-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyPartner.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-2xl border-2 border-teal-100 hover:border-[#9ae761] transition-all duration-300 hover:scale-105">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-600 to-teal-800 rounded-xl flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-teal-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Opportunities Grid */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-lime-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-teal-900 mb-6">Available Opportunities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the partnership model that best fits your goals and investment capacity
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {opportunities.map((opp, index) => (
              <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                {/* Header with gradient */}
                <div className={`bg-gradient-to-br ${opp.gradient} p-8 text-white`}>
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                    <opp.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{opp.title}</h3>
                  <p className="text-white/90">{opp.description}</p>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="mb-8">
                    <h4 className="text-lg font-bold text-teal-900 mb-4">Key Benefits</h4>
                    <ul className="space-y-3">
                      {opp.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[#9ae761] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-teal-50 rounded-xl">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Investment</p>
                      <p className="font-bold text-teal-900">{opp.investment}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Returns</p>
                      <p className="font-bold text-teal-900">{opp.returns}</p>
                    </div>
                  </div> */}

                  <button className="w-full bg-teal-900 text-white py-4 rounded-full font-bold hover:bg-teal-800 transition-all">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-teal-900 mb-6">Partnership Process</h2>
              <p className="text-xl text-gray-600">Simple, transparent, and supportive - every step of the way</p>
            </div>

            <div className="space-y-6">
              {process.map((item, index) => (
                <div key={index} className="group bg-gradient-to-r from-white to-teal-50 rounded-2xl p-8 shadow-lg border-2 border-teal-100 hover:border-[#9ae761] transition-all duration-300">
                  <div className="flex items-center gap-6">
                    <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-teal-600 to-teal-800 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="text-white text-2xl font-bold">{item.step}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-teal-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-lg">{item.desc}</p>
                    </div>
                    <ArrowRight className="w-8 h-8 text-[#9ae761] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Teaser */}
      <section className="py-20 bg-gradient-to-br from-teal-900 to-teal-800 text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto text-center">
            <Award className="w-16 h-16 text-[#9ae761] mx-auto mb-8" />
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Join 750+ Successful Partners</h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Our partners have collectively generated over ₹50 Crores in revenue. With CASCAB's proven business model, comprehensive training, and ongoing support, success is within reach.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-5xl font-bold text-[#9ae761] mb-3">750+</div>
                <p className="text-white/80 text-lg">Active Partners</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-5xl font-bold text-[#9ae761] mb-3">₹50Cr+</div>
                <p className="text-white/80 text-lg">Revenue Generated</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-5xl font-bold text-[#9ae761] mb-3">100%</div>
                <p className="text-white/80 text-lg">Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-lime-50 to-teal-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-teal-900 mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl text-gray-600 mb-10">
              Let's discuss how we can help you build a successful business with CASCAB
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button className="group bg-[#9ae761] text-teal-900 px-10 py-5 rounded-full text-lg font-bold hover:bg-lime-300 transition-all shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-3">
                Schedule Consultation
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="bg-teal-900 text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-teal-800 transition-all">
                Call: +91 73355996988
              </button>
            </div>
            <p className="text-gray-500">
              Available Mon-Sat: 9:00 AM - 5:00 PM | Email: mukeshbhaskar931@gmail.com
            </p>
          </div>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
}