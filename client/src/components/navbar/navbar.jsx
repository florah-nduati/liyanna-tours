import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
        <Link to="/">
          <img src={logo} alt="Liyanna Luxury Tours Logo" />
        </Link>
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
          <Link to="/">Home</Link>
        </li>
        {isAuthenticated ? (
          <>
            <li>
              <Link to="/booking">Booking</Link>
            </li>

            <li>
              <button className="logout-button" onClick={handleLogout}>
                Logout
              </button>
            </li>
            <li>
              <Link to="/profile">{user?.name}</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/packages">Tour Packages</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li className="dropdown">
              <Link to="#" className="dropdown-btn">
                More
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/faqs">FAQs</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/sign-up">Sign Up</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
