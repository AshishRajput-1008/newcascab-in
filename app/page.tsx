import React from "react";
import { Star, Mountain } from "lucide-react";
import Image from "next/image";
import h1 from "@/app/assets/heroSection/d-img1.jpg";
import h2 from "@/app/assets/heroSection/d-img-2.jpg";
import h6 from "@/app/assets/heroSection/d-img-6.jpg";
import h7 from "@/app/assets/heroSection/d-img-7.jpg";
import h3 from "@/app/assets/heroSection/d-img-3.jpg";
import h4 from "@/app/assets/heroSection/d-img-4.jpg";
import h5 from "@/app/assets/heroSection/d-img-5.jpg";
import { Smartphone, FileText, Megaphone, Users, Check } from "lucide-react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Twitter,
  ArrowRight,
  Phone,
  Mail,
  ArrowUp,
} from "lucide-react";

import { Target } from "lucide-react";

import teamImg1 from "@/app/assets/heroSection/d-about-1.jpg";
import teamImg2 from "@/app/assets/heroSection/d-about-1.jpg";
import founderImg from "@/app/assets/heroSection/d-about-1.jpg";
import Hero from "./components/Home/Hero";
import AboutUs from "./components/Home/AboutUs";
import OurServices from "./components/Home/OurServices";
import OurWork from "./components/Home/OurWork";
import WhyChooseUs from "./components/Home/WhyChooseUs";
import MeetOurTeam from "./components/Home/MeetOurTeam";
import FAQSection from "./components/Home/FAQSection";
import PricingPlans from "./components/Home/PricingPlans";
import Footer from "./components/Home/Footer";

export default function MarkoraHero() {
  // meet or tem

  const teamMembers = [
    {
      name: "Clara Juansan",
      role: "Creative Director",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop",
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
    {
      name: "Rezar Guetan",
      role: "SMM Strategist",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
    {
      name: "Alvest Sianata",
      role: "Content Specialist",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop",
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  ];

  return (
    <>
    <div className="bg-gradient-to-b from-[#03413d] via-[#093836] to-[#03413d] lg:px-10">
      
        <Hero />

        {/* <br/>
    <br/> */}

        <AboutUs />
        {/* <br /> */}

        <OurServices />

        {/* <br />
        <br /> */}

        <OurWork />

        <WhyChooseUs />

        <br />

        <PricingPlans />

        <br />
        <br />

        <MeetOurTeam />

        <br />
        <br />

        <FAQSection />

        {/* meet our team start   */}

        <br />
        <br />

        {/* 
    our work section */}

        <Footer />

        {/* footer */}
      </div>
    </>
  );
}
