"use client"
import React from "react";
import { Rocket, Target, TrendingUp, Users, Lightbulb, BarChart3, CheckCircle, ArrowRight, Zap, Award } from "lucide-react";
import Header from "@/app/components/Home/Header"
import Footer from "@/app/components/Home/Footer"


export default function Startup() {
  const programs = [
    {
      title: "Entrepreneurship Development (EDP)",
      price: "₹40,000",
      icon: Rocket,
      features: [
        "Complete business startup information",
        "Career counseling - Business vs Job",
        "Right business selection guidance",
        "Skill development training",
        "Decision making ability enhancement",
        "Personalized success roadmap"
      ],
      popular: true
    },
    {
      title: "Industry Establishment & Operations",
      price: "₹3,50,000",
      icon: BarChart3,
      features: [
        "Complete factory setup solution",
        "Resource gathering assistance",
        "Location selection guidance",
        "Manufacturing support",
        "Formulation providing",
        "Marketing support with sales targets"
      ],
      popular: false
    },
    {
      title: "Spices & Food Formulation",
      price: "₹1,80,000",
      icon: Lightbulb,
      features: [
        "10 custom formulas included",
        "Blended spices formulation",
        "Pickle formulation",
        "Ground spices recipes",
        "Quality assurance guidance",
        "Market-ready products"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: "100% Practical Implementation",
      description: "Hands-on training with real-world application"
    },
    {
      icon: Users,
      title: "Personalized Mentorship",
      description: "One-on-one guidance from Er. Mukesh Bhaskar"
    },
    {
      icon: TrendingUp,
      title: "Proven Success Track",
      description: "750+ successful entrepreneurs trained"
    },
    {
      icon: Award,
      title: "Money-Back Guarantee",
      description: "100% refund if not satisfied with results"
    }
  ];

  const successSteps = [
    { step: "01", title: "Making the Right Plan", description: "Strategic business planning tailored to your goals" },
    { step: "02", title: "Skill Development", description: "Comprehensive training in entrepreneurial skills" },
    { step: "03", title: "Resource Gathering", description: "Assistance in securing necessary resources" },
    { step: "04", title: "Funding Arrangement", description: "Support in obtaining business funding" },
    { step: "05", title: "Business Setup", description: "Complete setup from location to operations" },
    { step: "06", title: "Growth & Scaling", description: "Ongoing support for business expansion" }
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
              <Rocket className="w-5 h-5 text-[#9ae761]" />
              <span className="text-[#9ae761] font-bold text-sm uppercase tracking-wider">Startup Programs</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Turn Your Dreams Into<br />
              <span className="text-[#9ae761]">Successful Business</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-12">
              From ideation to execution, we guide you every step of the way to build a thriving enterprise
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-[#9ae761] text-teal-900 px-8 py-5 rounded-full text-lg font-bold hover:bg-lime-300 transition-all shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-3">
                Start Your Journey
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-5 rounded-full text-lg font-bold hover:bg-white/20 transition-all">
                View Programs
              </button>
            </div>
          </div>
        </div>

        <svg className="absolute bottom-0 left-0 w-full h-24 text-white" viewBox="0 0 1440 120" fill="currentColor" preserveAspectRatio="none">
          <path d="M0,0 C480,120 960,120 1440,0 L1440,120 L0,120 Z"></path>
        </svg>
      </section>

      {/* Benefits Section */}
      <section className="py-20 -mt-16 relative z-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-2xl border-2 border-teal-100 hover:border-[#9ae761] transition-all duration-300 hover:scale-105">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-600 to-teal-800 rounded-xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-teal-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-lime-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-teal-900 mb-6">Our Startup Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions to help you establish and grow your business successfully
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {programs.map((program, index) => (
              <div key={index} className={`relative bg-white rounded-3xl p-8 shadow-xl transition-all duration-300 hover:scale-105 ${program.popular ? 'ring-4 ring-[#9ae761] lg:-translate-y-4' : 'border-2 border-teal-100'}`}>
                {program.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-[#9ae761] text-teal-900 px-6 py-2 rounded-full font-bold text-sm shadow-lg">
                      MOST POPULAR
                    </div>
                  </div>
                )}
                
                <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-teal-800 rounded-2xl flex items-center justify-center mb-6">
                  <program.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-teal-900 mb-4">{program.title}</h3>
                {/* <div className="mb-6">
                  <span className="text-4xl font-bold text-teal-800">{program.price}</span>
                  <span className="text-gray-600"> + GST</span>
                </div> */}
                
                <ul className="space-y-4 mb-8">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#9ae761] flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-4 rounded-full font-bold transition-all duration-300 ${program.popular ? 'bg-[#9ae761] text-teal-900 hover:bg-lime-300 shadow-lg hover:shadow-xl' : 'bg-teal-900 text-white hover:bg-teal-800'}`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Steps */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-teal-900 mb-6">Your Path to Success</h2>
              <p className="text-xl text-gray-600">
                We support you through every stage of your entrepreneurial journey
              </p>
            </div>

            <div className="space-y-6">
              {successSteps.map((item, index) => (
                <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg border-2 border-teal-100 hover:border-[#9ae761] transition-all duration-300 hover:shadow-xl">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-teal-600 to-teal-800 rounded-2xl flex items-center justify-center">
                      <span className="text-white text-2xl font-bold">{item.step}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-teal-900 mb-3 group-hover:text-teal-700 transition-colors">{item.title}</h3>
                      <p className="text-gray-600 text-lg">{item.description}</p>
                    </div>
                    <Zap className="w-8 h-8 text-[#9ae761] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-teal-900 to-teal-800 text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold mb-12 text-center">Why Connect With CASCAB?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-4 text-[#9ae761]">100% Guarantee</h3>
                <p className="text-white/90 text-lg">If you don't succeed, we won't charge you any money. Your success is our commitment.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-4 text-[#9ae761]">From Learning to Earning</h3>
                <p className="text-white/90 text-lg">Complete support from inception to becoming fully operational with guaranteed results.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-4 text-[#9ae761]">Financial & Mental Freedom</h3>
                <p className="text-white/90 text-lg">Achieve both financial independence and peace of mind through proper planning.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-4 text-[#9ae761]">15+ Years Experience</h3>
                <p className="text-white/90 text-lg">Learn from proven strategies that have helped 750+ businesses succeed.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-lime-50 to-teal-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-teal-900 mb-6">Ready to Start Your Business?</h2>
            <p className="text-xl text-gray-600 mb-10">
              Join 750+ successful entrepreneurs who transformed their dreams into reality
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-[#9ae761] text-teal-900 px-10 py-5 rounded-full text-lg font-bold hover:bg-lime-300 transition-all shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-3">
                Enroll Now
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="bg-teal-900 text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-teal-800 transition-all">
                Call: +91 73355996988
              </button>
            </div>
            <p className="text-gray-500 mt-8">
              Contact us between 9:00 AM - 5:00 PM for immediate assistance
            </p>
          </div>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
}