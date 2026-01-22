"use client"
import { SetStateAction, useState } from 'react';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import bgImg from "@/app/assets/gallery/cascab12.jpeg"

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What ventures does CasCab Group have?",
      answer: "CasCab Group operates across multiple industries including Spices Industry, FMCG Product Manufacturing and Trading, Hotels and Restaurants, Organic Farming, and Business Consultancy and Planning. Visit us at www.cascab.in"
    },
    {
      question: "How can I partner with CasCab and make money?",
      answer: "You can obtain a franchise for CasCab company's products by visiting www.cascab.com. Alternatively, you can start your own business by taking our business consulting services at www.cascab.in"
    },
    {
      question: "Why should I connect with CasCab specifically?",
      answer: "We give you a 100% guarantee. If you don't succeed, we won't even charge you any money. This commitment to your success sets us apart from others."
    },
    {
      question: "What benefits can I get by connecting with CasCab?",
      answer: "By connecting with CasCab, you can achieve financial and mental freedom through our comprehensive support system and proven business strategies."
    },
    {
      question: "How will CasCab support me?",
      answer: "CasCab supports you from learning to earning and guarantees your success. We provide end-to-end assistance throughout your business journey."
    },
    {
      question: "What are the special features of CasCab's products?",
      answer: "CasCab's special features include No Preservatives, No Chemicals, 100% Pure, and Ayurvedic Compound-Based Products. We prioritize quality and authenticity in everything we manufacture."
    },
    {
      question: "What is CasCab Consultancy Service and who is its owner?",
      answer: "CasCab Consultancy Service provides 100% practical implementation and support services. We assist businesses from inception to becoming fully operational, with a 100% money-back guarantee if you're not satisfied. The owner is Er. Mukesh Bhaskar."
    },
    {
      question: "How can I connect with CasCab Consultancy Services?",
      answer: "To join us, please fill out our registration form or call us directly between 9:00 AM and 5:00 PM. We're here to help you start your success journey."
    }
  ];

  const toggleFAQ = (index: SetStateAction<number>) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="rounded-xl min-h-screen bg-[#f5f3ed] py-12 px-4 sm:px-6 lg:px-8 mt-10 lg:mt-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left side - Tall Vertical Image */}
          <div className="relative h-full">
            <div className="sticky top-8 rounded-3xl overflow-hidden shadow-lg bg-gray-200 h-[800px] lg:h-[900px]">
              <img 
                src={bgImg.src} 
                alt="CasCab Team collaboration" 
                className="w-full h-full object-cover"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              
              {/* Get Started Button */}
              <button className="absolute bottom-8 left-8 bg-[#9ae761] text-teal-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#b8e827] transition flex items-center gap-3 shadow-lg hover:shadow-xl z-10">
                Get Started
                <span className="bg-[#044441] text-white rounded-full w-9 h-9 flex items-center justify-center text-sm">
                  →
                </span>
              </button>
            </div>
          </div>

          {/* Right side - FAQ Content */}
          <div>
            {/* Section Badge */}
            <div className="flex items-center gap-3 mb-8">
              <div className="relative w-7 h-7 border-2 border-[#044441] rounded-full flex items-center justify-center">
                <span className="w-2.5 h-2.5 bg-[#044441] rounded-full animate-pulse"></span>
              </div>
              <span className="text-[#0a3d3d] mt-1 text-sm font-bold tracking-[0.2em] uppercase">
                Frequently Asked Questions
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-[#0a3d3d] text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Got questions?<br />We've got answers
            </h2>
            <p className="text-gray-600 text-base mb-8 leading-relaxed">
              Find answers to the most common questions about CasCab Group's ventures, partnerships, and services.
            </p>

            {/* FAQ Accordion */}
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`rounded-2xl transition-all ${
                    openIndex === index
                      ? 'bg-[#e8f5d0] shadow-md'
                      : 'bg-white hover:bg-gray-50'
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left"
                  >
                    <span className={`font-semibold text-base lg:text-lg ${
                      openIndex === index ? 'text-gray-900' : 'text-gray-800'
                    }`}>
                      {faq.question}
                    </span>
                    <span className="flex-shrink-0 ml-4">
                      {openIndex === index ? (
                        <Minus className="w-5 h-5 text-gray-700" />
                      ) : (
                        <Plus className="w-5 h-5 text-gray-700" />
                      )}
                    </span>
                  </button>
                  
                  {openIndex === index && faq.answer && (
                    <div className="px-6 pb-5">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Additional CTA */}
            <div className="mt-8 p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <p className="text-gray-700 text-sm mb-4">
                Still have questions? Our team is ready to help you succeed.
              </p>
              <a 
                href="tel:+91XXXXXXXXXX" 
                className="text-[#0a3d3d] font-bold hover:text-[#9ae761] transition-colors inline-flex items-center gap-2"
              >
                Call us: 9:00 AM - 5:00 PM
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}