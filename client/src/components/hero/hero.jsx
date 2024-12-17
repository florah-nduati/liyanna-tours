import React, { useState, useEffect } from "react";
import "./hero.css";
import video1 from "../../assets/hero.mp4";
import video2 from "../../assets/hero1.mp4";
import video3 from "../../assets/hero2.mp4";
import video4 from "../../assets/hero3.mp4";
import video5 from "../../assets/hero4.mp4";

const videos = [video1, video2, video3, video4, video5];

const HeroSection = () => {
  const [currentVideo, setCurrentVideo] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prevVideo) => (prevVideo + 1) % videos.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero">
     
      <video className="hero-video" autoPlay muted loop key={currentVideo}>
        <source src={videos[currentVideo]} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

   
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Luxury Redefined, Memories Reimagined</h1>
          <p>
            Explore the world with Liyanna Luxury Tours. We provide world-class
            services to make your travel unforgettable.
          </p>
          <a href="/packages" className="hero-btn">
            Explore Packages
          </a>
        </div>

        <div className="hero-navigation">
          {videos.map((_, index) => (
            <button
              key={index}
              className={`nav-btn ${index === currentVideo ? "active" : ""}`}
              onClick={() => setCurrentVideo(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
