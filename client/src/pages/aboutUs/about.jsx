import React from "react";
import Testimonials from "../../components/testimonials/testinonials";
import image1 from "../../assets/value.jpg";
import image2 from "../../assets/vision.jpg";
import image3 from "../../assets/mission.jpg";
import about from "../../assets/about.mp4";
import image4 from "../../assets/martin.jpg";
import "./about.css";

const About = () => {
  return (
    <div className="about">
      
      <div className="about-hero">
        <video className="about-video" autoPlay loop muted>
          <source src={about} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="about-hero-content">
          <h1>Welcome to Liyanna Luxury Tours</h1>
          <p>
            Discover unparalleled luxury, personalized experiences, and
            unforgettable journeys.
          </p>
        </div>
      </div>

      <h1 className="page-title">About Us</h1>

    
      <section className="about-card about-story">
        <div className="about-story-content">
          <h2>Our Story</h2>
          <p>
            Liyanna Luxury Tours was born out of a passion for exploring the
            world’s most stunning destinations while offering unparalleled
            luxury and comfort. Founded in [year], we have grown from a small
            travel agency to a global leader in luxury tours, trusted by
            thousands of discerning travelers.
          </p>
        </div>
        <div className="about-story-image">
          <img src={image1} alt="Our Story" />
        </div>
      </section>

     
      <section className="about-card-columns">
        <div className="about-card mission-card">
          <h2>Our Mission</h2>
          <img src={image3} alt="Our Story" />
          <p>
            At Liyanna Luxury Tours, our mission is to redefine luxury travel by
            creating exceptional, tailor-made experiences that inspire, delight,
            and create lifelong memories for our clients.
          </p>
        </div>

        <div className="about-card vision-card">
          <h2>Our Vision</h2>
          <img src={image2} alt="Our Story" />
          <p>
            To become the world’s most sought-after luxury tour company,
            recognized for our innovation, superior service, and commitment to
            delivering transformative travel experiences.
          </p>
        </div>

        <div className="about-card values-card">
          <h2>Our Values</h2>
          <img src={image1} alt="Our Story" />
          <ul className="about-values">
            <li>✨ Excellence: Striving for perfection at every step.</li>
            <li>
              🌍 Sustainability: Eco-friendly practices to protect the planet.
            </li>
            <li>
              💼 Professionalism: Impeccable service and attention to detail.
            </li>
            <li>
              ❤️ Customer-Centric: Crafting the best experiences for clients.
            </li>
            <li>
              🚀 Innovation: Embracing creativity to redefine luxury travel.
            </li>
          </ul>
        </div>
      </section>

    
      <section className="about-card services-card">
        <h2>Our Services</h2>
        <ul className="about-services">
          <li>🏝️ Luxury Beach Vacations</li>
          <li>🏔️ Exquisite Mountain Escapes</li>
          <li>🚢 Private Yacht Charters</li>
          <li>🏛️ Cultural City Tours</li>
          <li>✈️ Custom Travel Itineraries</li>
          <li>🏨 Luxury Hotel Bookings</li>
          <li>🎭 Exclusive Events and Experiences</li>
          <li>🚙 Private Chauffeur Services</li>
        </ul>
      </section>

      {/* Meet the Team Section */}
      <section className="about-card meet-team-card">
        <h2>Meet the Team</h2>
        <div className="team">
          <div className="team-member">
            <img src={image4} alt="Jane Smith" />
            <h3>martin Ng'ang'a</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-member">
            <img src={image4} alt="John Doe" />
            <h3>martin Ng'ang'a</h3>
            <p>Travel Consultant</p>
          </div>
          <div className="team-member">
            <img src={image4} alt="Emily White" />
            <h3>Emily White</h3>
            <p>Hospitality Manager</p>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Call-to-Action Section */}
      <section className="about-card call-to-action-card">
        <h2>Let’s Create Your Dream Journey</h2>
        <p>
          Ready to experience the world like never before? Contact us today, and
          let’s plan your next adventure!
        </p>
        <a href="/contact" className="cta-button">
          Get in Touch
        </a>
      </section>
    </div>
  );
};

export default About;
