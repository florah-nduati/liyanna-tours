import React from "react";
import "./contact.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact">
      <h1 className="contact-title">Get In Touch</h1>

      {/* Contact Info */}
      <div className="contact-info">
        <div className="contact-item">
          <FaPhoneAlt className="contact-icon" />
          <a href="tel:+1234567890" className="contact-link">
          +254732266660
          </a>
        </div>
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <a href="mailto:info@liyannaluxurytours.com" className="contact-link">
            info@liyannaluxurytours.com
          </a>
        </div>
        <div className="contact-item social-links">
          <a
            href="https://www.facebook.com/218286854711513"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="social-icon" />
          </a>
          <a
            href="https://www.instagram.com/liyanna_luxury_tours/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="social-icon" />
          </a>
          <a
            href="https://x.com/LiyannaLuxuryT?t=6oZenAFmVgHk7l0JZIMt_w&s=09"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="social-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/liyanna-luxury-tours/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="social-icon" />
          </a>
        </div>
      </div>

      {/* Inquiry Form */}
      <div className="form-section">
        <h2 className="form-title">Send Us an Inquiry</h2>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              required
            />
          </div>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>

      
      <div className="map-section">
        <h2>Our Location</h2>
        <div className="map-container">
          <iframe
            title="Liyanna Luxury Tours Location - Nairobi, Kenya"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19842.69903161752!2d36.8219!3d-1.2921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f3a2c6b4f5a1f%3A0x95a6c2516809244!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1614251542156!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
