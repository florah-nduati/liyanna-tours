import React from "react";
import HeroSection from "../../components/hero/hero";
import KeyServices from "../../components/services/services";
import FeaturedTours from "../../components/featuredTours/featuredTours";
import { FaWhatsapp } from "react-icons/fa"; 
import "./home.css"; 

const Home = () => {
  const handleWhatsAppClick = () => {
    const whatsappNumber = "+254732266660"; 
    const message = encodeURIComponent("Hello, I would like to inquire about your tours!");
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <div>
      <HeroSection />
      <KeyServices />
      <FeaturedTours />

      {/* Floating WhatsApp Button */}
      <button
        className="whatsapp-button"
        onClick={handleWhatsAppClick}
        aria-label="Contact us on WhatsApp"
      >
        <FaWhatsapp className="whatsapp-icon" />
      </button>
    </div>
  );
};

export default Home;
