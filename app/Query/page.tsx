"use client"
import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, User, Building } from "lucide-react";
import Header from "@/app/components/Home/Header"
import Footer from "@/app/components/Home/Footer"

export default function Query() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 73355996988", "Mon-Sat: 9:00 AM - 5:00 PM"],
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["mukeshbhaskar931@gmail.com", "Response within 24 hours"],
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Bhander, Madhya Pradesh", "Central India"],
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Saturday", "9:00 AM - 5:00 PM"],
      gradient: "from-orange-500 to-red-600"
    }
  ];

  const queryTypes = [
    { value: "franchise", label: "Franchise Inquiry" },
    { value: "consultancy", label: "Business Consultancy" },
    { value: "product", label: "Product Information" },
    { value: "training", label: "Training Programs" },
    { value: "partnership", label: "Partnership Opportunity" },
    { value: "support", label: "Customer Support" },
    { value: "other", label: "Other" }
  ];

  const websites = [
    {
      icon: Building,
      name: "Online Store",
      url: "www.cascab.com",
      description: "FMCG Products & Franchise",
      color: "teal"
    },
    {
      icon: MessageSquare,
      name: "B2B Services",
      url: "www.cascab.in",
      description: "Business Solutions & Training",
      color: "blue"
    },
    {
      icon: User,
      name: "Free Consultancy",
      url: "www.mukeshbhaskar.com",
      description: "For Students & Social Work",
      color: "green"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
              <MessageSquare className="w-5 h-5 text-[#9ae761]" />
              <span className="text-[#9ae761] font-bold text-sm uppercase tracking-wider">Contact Us</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Get in <span className="text-[#9ae761]">Touch</span><br />
              With CASCAB
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              We're here to answer your questions and help you achieve your business goals
            </p>
          </div>
        </div>

        <svg className="absolute bottom-0 left-0 w-full h-24 text-white" viewBox="0 0 1440 120" fill="currentColor" preserveAspectRatio="none">
          <path d="M0,0 C480,120 960,120 1440,0 L1440,120 L0,120 Z"></path>
        </svg>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 -mt-12 relative z-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-2xl border-2 border-teal-100 hover:border-[#9ae761] transition-all duration-300 hover:scale-105 overflow-hidden">
                <div className={`bg-gradient-to-br ${info.gradient} p-6 text-white`}>
                  <info.icon className="w-10 h-10 mb-3" />
                  <h3 className="text-xl font-bold">{info.title}</h3>
                </div>
                <div className="p-6">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className={`${idx === 0 ? 'font-semibold text-teal-900' : 'text-gray-600'} ${idx > 0 ? 'mt-1' : ''}`}>
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-lime-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-teal-900 mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">Fill out the form below and we'll get back to you as soon as possible</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-teal-900 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-teal-100 focus:border-[#9ae761] focus:outline-none transition-colors"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-teal-900 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-teal-100 focus:border-[#9ae761] focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-teal-900 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-teal-100 focus:border-[#9ae761] focus:outline-none transition-colors"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-teal-900 mb-2">
                    Query Type *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-teal-100 focus:border-[#9ae761] focus:outline-none transition-colors"
                  >
                    <option value="">Select query type</option>
                    {queryTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-teal-900 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border-2 border-teal-100 focus:border-[#9ae761] focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#9ae761] text-teal-900 py-4 rounded-full font-bold text-lg hover:bg-lime-300 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-3 group"
                >
                  Send Message
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>

            {/* Quick Links & Info */}
            <div className="space-y-8">
              {/* Websites */}
              <div className="bg-white rounded-3xl shadow-2xl p-8">
                <h3 className="text-2xl font-bold text-teal-900 mb-6">Our Websites</h3>
                <div className="space-y-4">
                  {websites.map((site, index) => (
                    <a
                      key={index}
                      href={`https://${site.url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-4 rounded-xl border-2 border-teal-100 hover:border-[#9ae761] transition-all hover:shadow-lg group"
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 bg-${site.color}-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                          <site.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-teal-900 mb-1">{site.name}</h4>
                          <p className="text-sm text-teal-600 mb-1">{site.url}</p>
                          <p className="text-sm text-gray-600">{site.description}</p>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* WhatsApp Quick Contact */}
              <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-3xl shadow-2xl p-8 text-white">
                <MessageSquare className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-3">Quick Response on WhatsApp</h3>
                <p className="text-white/90 mb-6">
                  Get instant answers to your questions. Chat with us now!
                </p>
                <a
                  href="https://wa.me/917335599698"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white text-green-600 px-6 py-3 rounded-full font-bold hover:bg-green-50 transition-all"
                >
                  Chat on WhatsApp
                  <MessageSquare className="w-5 h-5" />
                </a>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-3xl shadow-2xl p-8">
                <h3 className="text-2xl font-bold text-teal-900 mb-6">Follow Us</h3>
                <div className="grid grid-cols-2 gap-4">
                  <a href="https://www.facebook.com/share/1GojrhSSiQ/" className="p-4 text-center rounded-xl border-2 border-teal-100 hover:border-blue-600 transition-all group">
                    <div className="text-2xl mb-2">📘</div>
                    <span className="text-sm font-semibold text-teal-900 group-hover:text-blue-600">Facebook</span>
                  </a>
                  <a href="https://www.instagram.com/er.mukeshbhaskar_?igsh=Z3p6dzFvaTRza21i" className="p-4 text-center rounded-xl border-2 border-teal-100 hover:border-pink-600 transition-all group">
                    <div className="text-2xl mb-2">📷</div>
                    <span className="text-sm font-semibold text-teal-900 group-hover:text-pink-600">Instagram</span>
                  </a>
                  <a href="https://youtube.com/@cascab2014?si=CaFjI2KFj1guEXZ8" className="p-4 text-center rounded-xl border-2 border-teal-100 hover:border-red-600 transition-all group">
                    <div className="text-2xl mb-2">▶️</div>
                    <span className="text-sm font-semibold text-teal-900 group-hover:text-red-600">YouTube</span>
                  </a>
                  <div className="p-4 text-center rounded-xl border-2 border-teal-100 hover:border-green-600 transition-all group">
                    <div className="text-2xl mb-2">💬</div>
                    <span className="text-sm font-semibold text-teal-900 group-hover:text-green-600">WhatsApp</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-teal-900 to-teal-800 text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Don't wait! Contact us today and take the first step towards success
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+917335599698"
                className="bg-[#9ae761] text-teal-900 px-10 py-5 rounded-full text-lg font-bold hover:bg-lime-300 transition-all shadow-xl hover:shadow-2xl inline-flex items-center justify-center gap-3"
              >
                <Phone className="w-6 h-6" />
                Call Now: +91 73355996988
              </a>
              <a
                href="mailto:mukeshbhaskar931@gmail.com"
                className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-10 py-5 rounded-full text-lg font-bold hover:bg-white/20 transition-all inline-flex items-center justify-center gap-3"
              >
                <Mail className="w-6 h-6" />
                Send Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer/>
     </>
  );
}