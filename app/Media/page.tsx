


"use client"
import React, { useState } from "react";
import { Image as ImageIcon, Video, Newspaper, Award, Calendar, Share2, Eye, Play } from "lucide-react";
import Header from "@/app/components/Home/Header"
import Footer from "@/app/components/Home/Footer"


import g1 from "@/app/assets/Gallery2/cascab-G.jpg"
import g2 from "@/app/assets/Gallery2/cascab2-g.jpg"
import g3 from "@/app/assets/Gallery2/0P2A6108.JPG.jpeg"
import g4 from "@/app/assets/heroSection/CEO.png";


export default function Media() {
  const [activeTab, setActiveTab] = useState<'news' | 'gallery' | 'videos'>('news');
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const newsItems = [
    {
      date: "January 2026",
      title: "CASCAB Innovation & Excellence Showcase",
      excerpt: "Watch our latest video featuring CASCAB's commitment to quality and innovation",
      category: "Featured Video",
      views: "8.5K",
      hasVideo: true,
      videoEmbedId: "6f-SciDpbnI",
      videoThumbnail: "https://img.youtube.com/vi/6f-SciDpbnI/maxresdefault.jpg",
      videoLink: "https://www.youtube.com/watch?v=6f-SciDpbnI"
    },
    {
      date: "January 2026",
      title: "CASCAB Reaches 750+ Client Milestone",
      excerpt: "Er. Mukesh Bhaskar's consultancy services achieve remarkable success rate",
      category: "Achievement",
      views: "2.5K",
      hasImage: true,
      image: g4
    },
    {
      date: "January 2026",
      title: "CASCAB Journey: Vision to Success",
      excerpt: "Discover the inspiring story behind CASCAB's remarkable growth and transformation",
      category: "Featured Video",
      views: "12K",
      hasVideo: true,
      videoEmbedId: "m8YUBTe2J5w",
      videoThumbnail: "https://img.youtube.com/vi/m8YUBTe2J5w/maxresdefault.jpg",
      videoLink: "https://www.youtube.com/watch?v=m8YUBTe2J5w"
    },
    {
      date: "December 2025",
      title: "New Product Line Launch: Organic Spices Range",
      excerpt: "CASCAB introduces 100% organic, chemical-free spice collection",
      category: "Product Launch",
      views: "3.2K",
      hasImage: true,
      image: g1
    },
    {
      date: "November 2025",
      title: "CASCAB Highway Treat Expansion",
      excerpt: "Popular restaurant announces new location on NH 44",
      category: "Expansion",
      views: "1.8K",
      hasImage: true,
      image: g3
    },
    {
      date: "October 2025",
      title: "Entrepreneurship Development Program Success",
      excerpt: "200+ entrepreneurs trained in Q4 2025 with 100% satisfaction rate",
      category: "Training",
      views: "2.1K",
      hasImage: true,
      image: g2
    }
  ];

  const galleryItems = [
    {
      title: "Manufacturing Facility",
      description: "State-of-the-art spices processing unit",
      category: "Facility",
      image: g1
    },
    {
      title: "Training Session",
      description: "EDP workshop with aspiring entrepreneurs",
      category: "Events",
      image: g2
    },
    {
      title: "Product Range",
      description: "CASCAB's diverse spices and FMCG products",
      category: "Products",
      image: g3
    },
    {
      title: "Leadership Excellence",
      description: "Er. Mukesh Bhaskar - Visionary Leader",
      category: "Leadership",
      image: g4
    },
    {
      title: "Team Collaboration",
      description: "Strategic planning with business partners",
      category: "Team",
      image: g1
    },
    {
      title: "Award Ceremony",
      description: "Recognition for business excellence",
      category: "Awards",
      image: g2
    }
  ];

  const videos = [
    {
      title: "CASCAB Journey: From Vision to Success",
      duration: "5:30",
      views: "12K",
      description: "Er. Mukesh Bhaskar shares the inspiring story of CASCAB",
      link: "https://www.youtube.com/watch?v=m8YUBTe2J5w",
      embedId: "m8YUBTe2J5w",
      thumbnail: "https://img.youtube.com/vi/m8YUBTe2J5w/maxresdefault.jpg"
    },
    {
      title: "CASCAB Innovation & Excellence",
      duration: "4:15",
      views: "8.5K",
      description: "Discover CASCAB's commitment to quality and innovation in the spices industry",
      link: "https://www.youtube.com/watch?v=6f-SciDpbnI",
      embedId: "6f-SciDpbnI",
      thumbnail: "https://img.youtube.com/vi/6f-SciDpbnI/maxresdefault.jpg"
    },
    {
      title: "CASCAB Business Solutions & Growth",
      duration: "6:20",
      views: "15K",
      description: "Learn how CASCAB helps businesses achieve sustainable growth and success",
      link: "https://www.youtube.com/watch?v=nqiJWpmDONY",
      embedId: "nqiJWpmDONY",
      thumbnail: "https://img.youtube.com/vi/nqiJWpmDONY/maxresdefault.jpg"
    }
  ];

  const handleVideoClick = (embedId: string) => {
    setSelectedVideo(embedId);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
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
              <Newspaper className="w-5 h-5 text-[#9ae761]" />
              <span className="text-[#9ae761] font-bold text-sm uppercase tracking-wider">Media Center</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              News, Gallery<br />
              <span className="text-[#9ae761]">& Media Coverage</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Stay updated with CASCAB's latest developments, achievements, and insights
            </p>
          </div>
        </div>

        <svg className="absolute bottom-0 left-0 w-full h-24 text-white" viewBox="0 0 1440 120" fill="currentColor" preserveAspectRatio="none">
          <path d="M0,0 C480,120 960,120 1440,0 L1440,120 L0,120 Z"></path>
        </svg>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 sticky top-0 bg-white/95 backdrop-blur-sm z-30 border-b-2 border-teal-100">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setActiveTab('news')}
              className={`flex items-center gap-2 px-8 py-4 rounded-full font-bold text-lg transition-all ${
                activeTab === 'news'
                  ? 'bg-[#9ae761] text-teal-900 shadow-lg'
                  : 'bg-teal-50 text-teal-600 hover:bg-teal-100'
              }`}
            >
              <Newspaper className="w-5 h-5" />
              Latest News
            </button>
            <button
              onClick={() => setActiveTab('gallery')}
              className={`flex items-center gap-2 px-8 py-4 rounded-full font-bold text-lg transition-all ${
                activeTab === 'gallery'
                  ? 'bg-[#9ae761] text-teal-900 shadow-lg'
                  : 'bg-teal-50 text-teal-600 hover:bg-teal-100'
              }`}
            >
              <ImageIcon className="w-5 h-5" />
              Gallery
            </button>
            <button
              onClick={() => setActiveTab('videos')}
              className={`flex items-center gap-2 px-8 py-4 rounded-full font-bold text-lg transition-all ${
                activeTab === 'videos'
                  ? 'bg-[#9ae761] text-teal-900 shadow-lg'
                  : 'bg-teal-50 text-teal-600 hover:bg-teal-100'
              }`}
            >
              <Video className="w-5 h-5" />
              Videos
            </button>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          {/* News Tab */}
          {activeTab === 'news' && (
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8">
                {newsItems.map((item, index) => (
                  <article
                    key={index}
                    className="group bg-white rounded-2xl shadow-lg border-2 border-teal-100 hover:border-[#9ae761] transition-all duration-300 overflow-hidden hover:shadow-2xl"
                  >
                    {/* Video News Item */}
                    {item.hasVideo ? (
                      <div 
                        className="relative h-64 cursor-pointer overflow-hidden"
                        onClick={() => handleVideoClick(item.videoEmbedId)}
                      >
                        <img 
                          src={item.videoThumbnail}
                          alt={item.title}
                          className="absolute inset-0 w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        
                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                            <Play className="w-8 h-8 text-teal-900 ml-1" />
                          </div>
                        </div>
                        
                        {/* Category Badge */}
                        <span className="absolute top-4 left-4 bg-[#9ae761] text-teal-900 px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                          <Video className="w-4 h-4" />
                          {item.category}
                        </span>
                      </div>
                    ) : item.hasImage ? (
                      /* Image News Item */
                      <div className="relative h-64 overflow-hidden">
                        <img 
                          src={item.image.src}
                          alt={item.title}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                        
                        {/* Category Badge */}
                        <span className="absolute top-4 left-4 bg-[#9ae761] text-teal-900 px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                          <ImageIcon className="w-4 h-4" />
                          {item.category}
                        </span>
                        
                        {/* Eye Icon on Hover */}
                        <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                          <Eye className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    ) : (
                      /* Regular News Item (Fallback) */
                      <div className="h-48 bg-gradient-to-br from-teal-600 to-teal-800 flex items-center justify-center relative overflow-hidden">
                        <Newspaper className="w-20 h-20 text-white/30" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        <span className="absolute top-4 left-4 bg-[#9ae761] text-teal-900 px-4 py-2 rounded-full text-sm font-bold">
                          {item.category}
                        </span>
                      </div>
                    )}
                    
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {item.date}
                        </div>
                        <div className="flex items-center gap-2">
                          <Eye className="w-4 h-4" />
                          {item.views} views
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-teal-900 mb-3 group-hover:text-teal-700 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{item.excerpt}</p>
                      
                      <div className="flex items-center justify-between">
                        {item.hasVideo ? (
                          <a 
                            href={item.videoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-teal-600 font-semibold hover:text-teal-800 flex items-center gap-2"
                          >
                            Watch on YouTube →
                          </a>
                        ) : (
                          <button className="text-teal-600 font-semibold hover:text-teal-800 flex items-center gap-2">
                            Read More →
                          </button>
                        )}
                        <button className="p-2 hover:bg-teal-50 rounded-full transition-colors">
                          <Share2 className="w-5 h-5 text-teal-600" />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

          {/* Gallery Tab */}
          {activeTab === 'gallery' && (
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryItems.map((item, index) => (
                  <div
                    key={index}
                    className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                  >
                    {/* Actual Image */}
                    <img 
                      src={item.image.src}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                      <span className="text-[#9ae761] text-sm font-bold mb-2">{item.category}</span>
                      <h3 className="text-white text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-white/80 text-sm">{item.description}</p>
                    </div>
                    
                    {/* Eye Icon */}
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                      <Eye className="w-5 h-5 text-white" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Videos Tab - Enhanced with YouTube Integration */}
          {activeTab === 'videos' && (
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8">
                {videos.map((video, index) => (
                  <div
                    key={index}
                    className="group bg-white rounded-2xl shadow-lg border-2 border-teal-100 hover:border-[#9ae761] transition-all duration-300 overflow-hidden hover:shadow-2xl"
                  >
                    <div 
                      className="relative aspect-video bg-gradient-to-br from-teal-600 to-teal-800 overflow-hidden cursor-pointer"
                      onClick={() => handleVideoClick(video.embedId)}
                    >
                      {/* YouTube Thumbnail */}
                      <img 
                        src={video.thumbnail}
                        alt={video.title}
                        className="absolute inset-0 w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback to gradient if thumbnail fails to load
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                          <Play className="w-10 h-10 text-teal-900 ml-1" />
                        </div>
                      </div>
                      
                      {/* Duration Badge */}
                      <span className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {video.duration}
                      </span>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-teal-900 mb-3 group-hover:text-teal-700 transition-colors">
                        {video.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{video.description}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-gray-500">
                          <Eye className="w-4 h-4" />
                          <span className="text-sm">{video.views} views</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <a 
                            href={video.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-teal-600 font-semibold hover:text-teal-800 text-sm"
                          >
                            Watch on YouTube →
                          </a>
                          <button className="p-2 hover:bg-teal-50 rounded-full transition-colors">
                            <Share2 className="w-5 h-5 text-teal-600" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeVideoModal}
        >
          <div 
            className="relative w-full max-w-6xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeVideoModal}
              className="absolute -top-12 right-0 text-white hover:text-[#9ae761] text-4xl font-bold transition-colors"
            >
              ×
            </button>
            <iframe
              className="w-full h-full rounded-2xl shadow-2xl"
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      {/* Social Media Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-lime-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-teal-900 mb-6">Follow Us on Social Media</h2>
            <p className="text-xl text-gray-600 mb-12">Stay connected for daily updates, tips, and insights</p>
            
            <div className="grid md:grid-cols-4 gap-6">
              <a href="https://www.facebook.com/share/1GojrhSSiQ/" target="_blank" rel="noopener noreferrer" className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-white text-3xl font-bold">f</span>
                </div>
                <h3 className="font-bold text-teal-900 text-lg">Facebook</h3>
              </a>
              
              <a href="https://www.instagram.com/er.mukeshbhaskar_?igsh=Z3p6dzFvaTRza21i" target="_blank" rel="noopener noreferrer" className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <ImageIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-teal-900 text-lg">Instagram</h3>
              </a>
              
              <a href="https://youtube.com/@cascab2014?si=CaFjI2KFj1guEXZ8" target="_blank" rel="noopener noreferrer" className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
                <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-teal-900 text-lg">YouTube</h3>
              </a>
              
              <a href="https://wa.me/917355996988" target="_blank" rel="noopener noreferrer" className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
                <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-white text-3xl font-bold">W</span>
                </div>
                <h3 className="font-bold text-teal-900 text-lg">WhatsApp</h3>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 bg-gradient-to-br from-teal-900 to-teal-800 text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <Award className="w-16 h-16 text-[#9ae761] mx-auto mb-6" />
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Stay Updated</h2>
            <p className="text-xl text-white/90 mb-10">
              Subscribe to our newsletter for the latest news, updates, and exclusive offers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#9ae761]"
              />
              <button className="bg-[#9ae761] text-teal-900 px-8 py-4 rounded-full font-bold hover:bg-lime-300 transition-all shadow-lg hover:shadow-xl whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
}