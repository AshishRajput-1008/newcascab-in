"use client";
import React, { useState } from "react";
import {
  HelpCircle,
  ChevronDown,
  Search,
  MessageCircle,
  Phone,
  Mail,
} from "lucide-react";
import Header from "@/app/components/Home/Header"
import Footer from "@/app/components/Home/Footer"

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchTerm, setSearchTerm] = useState("");

  const faqs = [
    {
      category: "About CASCAB",
      questions: [
        {
          q: "What are CASCAB and their working?",
          a: "CASCAB is a brand name of FMCG products manufacturing company. We specialize in spices, food products, and provide comprehensive business consultancy services. For more details, visit www.cascab.com",
        },
        {
          q: "Who is the founder of CASCAB?",
          a: "Er. Mukesh Bhaskar is the founder and CEO of CASCAB Pvt. Ltd. company. He is a renowned business coach and entrepreneur with over 15 years of experience.",
        },
        {
          q: "Who is Mukesh Bhaskar and what is his work?",
          a: "He is an entrepreneur with over 15 years of experience, renowned for solving complex business challenges. He is a customized spices & food products formulation specialist, Master Trainer in Financial Freedom. His qualifications include M.Tech., B.E., Polytechnic, EDP in MM, TEDP in PPMT, etc.",
        },
        {
          q: "What ventures does CASCAB have?",
          a: "CASCAB has the following ventures: Spices industry, FMCG product manufacturing and trading, Hotels and restaurants, Organic farming, Business consultancy and planning. Visit www.cascab.in for more details.",
        },
      ],
    },
    {
      category: "Products & Services",
      questions: [
        {
          q: "What are the special features of CASCAB products?",
          a: "CASCAB special features include: No preservatives, No chemicals, 100% pure and ayurvedic compound base products. We maintain traditional values while using modern technology.",
        },
        {
          q: "How can we partner with CASCAB and make money?",
          a: "You can obtain a franchise for CASCAB company's products by visiting www.cascab.com. You can also start your own business by taking business consulting services at www.cascab.in",
        },
        {
          q: "What services does CASCAB Consultancy Services provide?",
          a: "We provide: EDP training, Business planning, Financial planning, Leadership development, Factory setup, Business expansion, Brand building, and complete implementation support.",
        },
      ],
    },
    {
      category: "Pricing & Guarantee",
      questions: [
        {
          q: "What is CASCAB Consultancy Service and who is its owner?",
          a: "CASCAB Consultancy Service provides 100% practical implementation and support services. We assist businesses from inception to becoming fully operational, with a 100% money-back guarantee if you're not satisfied. The owner is Er. Mukesh Bhaskar.",
        },
        {
          q: "Why connect with CASCAB specifically?",
          a: "We provide a 100% guarantee. If you don't succeed, we won't even charge you any money. Your success is our commitment.",
        },
        {
          q: "What are the benefits of joining with CASCAB Consultancy Services?",
          a: "When you join us, we solve all your problems with a 100% money-back guarantee. We provide support from learning to earning and guarantee your success.",
        },
      ],
    },
    {
      category: "Getting Started",
      questions: [
        {
          q: "How can I connect with CASCAB Consultancy Services?",
          a: "To join us, please fill out our registration form or call us directly between 9:00 AM and 5:00 PM at +91 73355996988. You can also WhatsApp us or email at mukeshbhaskar931@gmail.com",
        },
        {
          q: "Is CASCAB Consultancy Services genuine?",
          a: "Yes, 100% genuine! Visit us at www.cascab.in to learn more about our services and track record.",
        },
        {
          q: "What benefits can we get by connecting with CASCAB?",
          a: "By connecting with CASCAB, you can achieve financial and mental freedom through our proven strategies and personalized guidance.",
        },
        {
          q: "How will CASCAB support me?",
          a: "CASCAB supports you from learning to earning and guarantees your success through personalized mentorship, practical training, and ongoing business support.",
        },
      ],
    },
  ];

  const filteredFaqs = faqs
    .map((category) => ({
      ...category,
      questions: category.questions.filter(
        (faq) =>
          faq.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
          faq.a.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    }))
    .filter((category) => category.questions.length > 0);

  return (
    <>
    <Header/>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#044441] via-teal-800 to-teal-900 py-32 overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-lime-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-600/10 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-[#9ae761]/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8">
                <HelpCircle className="w-5 h-5 text-[#9ae761]" />
                <span className="text-[#9ae761] font-bold text-sm uppercase tracking-wider">
                  FAQ
                </span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                Frequently Asked
                <br />
                <span className="text-[#9ae761]">Questions</span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed mb-12">
                Find answers to common questions about CASCAB and our services
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search for answers..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-16 pr-6 py-5 rounded-full text-lg border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white placeholder-white/60 focus:outline-none focus:border-[#9ae761] transition-all"
                  />
                </div>
              </div>
            </div>
          </div>

          <svg
            className="absolute bottom-0 left-0 w-full h-24 text-white"
            viewBox="0 0 1440 120"
            fill="currentColor"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C480,120 960,120 1440,0 L1440,120 L0,120 Z"></path>
          </svg>
        </section>

        {/* FAQ Content */}
        <section className="py-20 -mt-12 relative z-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto">
              {filteredFaqs.length > 0 ? (
                <div className="space-y-12">
                  {filteredFaqs.map((category, categoryIndex) => (
                    <div key={categoryIndex}>
                      <h2 className="text-3xl font-bold text-teal-900 mb-6 flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-teal-800 rounded-xl flex items-center justify-center">
                          <span className="text-white font-bold">
                            {categoryIndex + 1}
                          </span>
                        </div>
                        {category.category}
                      </h2>

                      <div className="space-y-4">
                        {category.questions.map((faq, index) => {
                          const globalIndex =
                            faqs.reduce((acc, cat, idx) => {
                              if (idx < categoryIndex)
                                return acc + cat.questions.length;
                              return acc;
                            }, 0) + index;

                          const isOpen = openIndex === globalIndex;

                          return (
                            <div
                              key={index}
                              className={`bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 overflow-hidden ${
                                isOpen
                                  ? "border-[#9ae761]"
                                  : "border-teal-100 hover:border-teal-200"
                              }`}
                            >
                              <button
                                onClick={() =>
                                  setOpenIndex(isOpen ? null : globalIndex)
                                }
                                className="w-full text-left p-6 flex items-start justify-between gap-4 hover:bg-teal-50 transition-colors"
                              >
                                <span className="text-lg font-semibold text-teal-900 pr-8">
                                  {faq.q}
                                </span>
                                <ChevronDown
                                  className={`w-6 h-6 text-teal-600 flex-shrink-0 transition-transform ${
                                    isOpen ? "rotate-180" : ""
                                  }`}
                                />
                              </button>

                              <div
                                className={`transition-all duration-300 ${
                                  isOpen
                                    ? "max-h-96 opacity-100"
                                    : "max-h-0 opacity-0"
                                }`}
                              >
                                <div className="px-6 pb-6 pt-2">
                                  <div className="bg-teal-50 rounded-xl p-6">
                                    <p className="text-gray-700 leading-relaxed">
                                      {faq.a}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <div className="w-24 h-24 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Search className="w-12 h-12 text-teal-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-teal-900 mb-4">
                    No results found
                  </h3>
                  <p className="text-gray-600">
                    Try searching with different keywords
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="py-20 bg-gradient-to-br from-teal-50 to-lime-50">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <MessageCircle className="w-16 h-16 text-teal-600 mx-auto mb-6" />
                <h2 className="text-4xl lg:text-5xl font-bold text-teal-900 mb-4">
                  Still Have Questions?
                </h2>
                <p className="text-xl text-gray-600">
                  We're here to help! Contact us through any of these channels
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-2xl p-8 shadow-xl text-center hover:shadow-2xl transition-all group">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-teal-800 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-teal-900 mb-3">
                    Call Us
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Mon-Sat: 9:00 AM - 5:00 PM
                  </p>
                  <a
                    href="tel:+917335599698"
                    className="text-teal-600 font-bold text-lg hover:text-teal-800"
                  >
                    +91 73355996988
                  </a>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-xl text-center hover:shadow-2xl transition-all group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-800 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-teal-900 mb-3">
                    WhatsApp
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Quick response guaranteed
                  </p>
                  <a
                    href="https://wa.me/917335599698"
                    className="text-green-600 font-bold text-lg hover:text-green-800"
                  >
                    Chat Now
                  </a>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-xl text-center hover:shadow-2xl transition-all group">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-teal-900 mb-3">
                    Email Us
                  </h3>
                  <p className="text-gray-600 mb-4">
                    We'll respond within 24 hours
                  </p>
                  <a
                    href="mailto:mukeshbhaskar931@gmail.com"
                    className="text-blue-600 font-bold text-sm hover:text-blue-800 break-all"
                  >
                    mukeshbhaskar931@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-teal-900 to-teal-800 text-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-white/90 mb-10">
                Join 750+ successful entrepreneurs who transformed their
                business with CASCAB
              </p>
              <button className="group bg-[#9ae761] text-teal-900 px-10 py-5 rounded-full text-lg font-bold hover:bg-lime-300 transition-all shadow-xl hover:shadow-2xl hover:scale-105 inline-flex items-center gap-3">
                Contact Us Today
                <ChevronDown className="w-6 h-6 -rotate-90 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer/>
    </>
  );
}
