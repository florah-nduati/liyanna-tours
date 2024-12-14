import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.jpeg";
import "./navbar.css";
import useUserStore from "../../../store/userStore";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const isAuthenticated = localStorage.getItem("isAuthenticated");
  const user = useUserStore((state) => state.user);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="navbar-logo">
        <a href="/">
          <img src={logo} alt="Liyanna Luxury Tours Logo" />
        </a>
        <h1 className="navbar-heading">Liyanna Luxury Tours</h1>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div
        className="hamburger"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Navigation"
      >
        ☰
      </div>

      {/* Navbar Links */}
      <ul className={`navbar-links ${isOpen ? "show" : ""}`}>
        <li>
          <a href="/">Home</a>
        </li>
        {isAuthenticated ? (
          <>
            <li>
              <a href="/packages">Tour Packages</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/gallery">Gallery</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li className="dropdown">
              <a href="/more" className="dropdown-btn">
                More
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="/faqs">FAQs</a>
                </li>
                <li>
                  <a href="/booking">Booking</a>
                </li>
                <li>
                  <a href="/blog">Blog</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" onClick={handleLogout}>
                Logout
              </a>
            </li>
            <li>
              <a href="/profile">{user?.name}</a>
            </li>
          </>
        ) : (
          <>
            <li>
              <a href="/login">Login</a>
            </li>
            <li>
              <a href="/sign up">Sign Up</a>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
