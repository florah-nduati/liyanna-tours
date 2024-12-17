import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaWhatsappSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/packages">Tour Packages</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/218286854711513"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://x.com/LiyannaLuxuryT?t=6oZenAFmVgHk7l0JZIMt_w&s=09"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/liyanna_luxury_tours/"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/liyanna-luxury-tours/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://wa.me/254732266660"
              aria-label="Whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsappSquare />
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h4>Contact Info</h4>
          <p>Email: liyannaluxurytours@gmail.com</p>
          <p>Phone: +254732266660</p>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2024 Liyanna Luxury Tours | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
