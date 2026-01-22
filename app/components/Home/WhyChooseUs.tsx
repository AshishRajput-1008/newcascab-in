import React from 'react';
import { Briefcase, Users, Sprout, GraduationCap } from 'lucide-react';

export default function WhoCanJoinUs() {
  const joinCategories = [
    {
      icon: <Briefcase className="w-8 h-8" strokeWidth={2} />,
      iconBg: "bg-lime-100",
      iconColor: "text-lime-600",
      title: "Young Entrepreneurs",
      description: "Aspiring business owners looking to scale their ventures with expert guidance and resources."
    },
    {
      icon: <Users className="w-8 h-8" strokeWidth={2} />,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      title: "Professional Women",
      description: "Women leaders and entrepreneurs ready to break barriers and create their success stories."
    },
    {
      icon: <Sprout className="w-8 h-8" strokeWidth={2} />,
      iconBg: "bg-lime-100",
      iconColor: "text-lime-600",
      title: "Farmers & Agripreneurs",
      description: "Agricultural professionals looking to modernize farming practices and increase profitability."
    },
    {
      icon: <GraduationCap className="w-8 h-8" strokeWidth={2} />,
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
      title: "Students & Freelancers",
      description: "Young minds and independent professionals eager to learn, grow, and start their journey."
    }
  ];

  return (
    <div className="rounded-3xl bg-[#0d4d4d] py-16 px-4 sm:px-6 lg:px-8 mt-10 lg:mt-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Team Image */}
          <div className="order-2 lg:order-1">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=700&fit=crop"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="order-1 lg:order-2">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="relative w-7 h-7 border-2 border-[white] rounded-full flex items-center justify-center">
                  <span className="w-2.5 h-2.5 bg-[#9ae761] rounded-full animate-pulse"></span>
                </div>
                <span className="text-[white] text-sm font-bold tracking-[0.2em] uppercase">
                  Who Can Join Us
                </span>
              </div>

              <h2 className="text-white text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Building a community of dreamers and doers
              </h2>
              <p className="text-gray-300 text-base leading-relaxed">
                CasCab Group welcomes passionate individuals from all backgrounds who are ready to grow, learn, and create impact across India's diverse industries.
              </p>
            </div>

            {/* Categories Grid */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {joinCategories.map((category, index) => (
                  <div 
                    key={index}
                    className="space-y-3"
                  >
                    {/* Icon */}
                    <div className={`w-14 h-14 ${category.iconBg} rounded-xl flex items-center justify-center ${category.iconColor}`}>
                      {category.icon}
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-[#0d4d4d] text-lg font-bold mb-2">
                        {category.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {category.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}