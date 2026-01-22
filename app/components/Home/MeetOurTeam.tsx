import React from 'react';
import { Play, Image as ImageIcon, Film } from 'lucide-react';
import s1 from "@/app/assets/gallery/cabcab.jpeg"

import s3 from "@/app/assets/gallery/cascabImg1compress.jpg"
import s4 from "@/app/assets/gallery/cascabvideo2.mp4"

export default function MediaGallery() {
  const mediaItems = [
    {
      id: 1,
      type: "image",
      title: "Our Spices Manufacturing",
      description: "State-of-the-art facilities producing premium quality masalas",
      thumbnail: s1.src,
      icon: <ImageIcon className="w-6 h-6" />
    },
    {
      id: 2,
      type: "video",
      title: "CasCab Group Journey",
      description: "Watch our story of innovation and excellence across industries",
      thumbnail: s4.src,
      icon: <Film className="w-6 h-6" />,
      isGif: true
    },
    {
      id: 3,
      type: "image",
      title: "Community Impact",
      description: "Empowering entrepreneurs and transforming lives across India",
      thumbnail: s3.src,
      icon: <ImageIcon className="w-6 h-6" />
    }
  ];

  return (
    <div className="rounded-lg bg-[#f5f4ed] py-16 px-4 sm:px-6 lg:px-8 mt-10 lg:mt-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex flex-col items-center text-center gap-4 mb-6">
            <div>
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="relative w-7 h-7 border-2 border-[#044441] rounded-full flex items-center justify-center">
                  <span className="w-2.5 h-2.5 bg-[#044441] rounded-full animate-pulse"></span>
                </div>
                <span className="text-[#0a3d3d] text-sm font-bold tracking-[0.2em] uppercase">
                  Media Gallery
                </span>
              </div>

              <h2 className="text-[#0a3d3d] text-4xl md:text-5xl font-bold leading-tight mb-4">
                Witness our journey of<br />innovation and excellence
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Explore the visual story of CasCab Group - from our premium spices manufacturing to community empowerment initiatives.
              </p>
            </div>
          </div>
        </div>

        {/* Media Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mediaItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
            >
              {/* Media Preview */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-50">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a3d3d]/80 via-[#0a3d3d]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-[#9ae761] w-16 h-16 rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                    {item.isGif ? (
                      <Play className="w-8 h-8 text-[#0a3d3d]" fill="currentColor" />
                    ) : (
                      <ImageIcon className="w-8 h-8 text-[#0a3d3d]" />
                    )}
                  </div>
                </div>

                {/* Media Type Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-2 shadow-md">
                  <span className="text-[#0a3d3d]">{item.icon}</span>
                  <span className="text-xs font-semibold text-[#0a3d3d] uppercase">
                    {item.isGif ? 'Video' : 'Photo'}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-[#0a3d3d] text-xl font-bold mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom Accent */}
              <div className="h-1 bg-gradient-to-r from-[#9ae761] via-[#b8e827] to-[#9ae761] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 text-lg mb-6">
            Want to see more of what we do?
          </p>
          <button className="bg-[#9ae761] hover:bg-[#b8e827] text-[#0a3d3d] px-8 py-4 rounded-full font-bold text-base transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
            View Full Gallery
          </button>
        </div>
      </div>
    </div>
  );
}