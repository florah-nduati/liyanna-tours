import React from "react";
import { Link } from "react-router-dom"; // For navigation
import "./thankYou.css"; // Include the CSS file for styling

const ThankYou = () => {
  return (
    <div className="thank-you-container">
      <div className="thank-you-content">
        <h1 className="thank-you-title">Thank You for Your Booking!</h1>
        <p className="thank-you-message">
          We’ve received your booking request. Our team will get in touch with
          you soon to confirm your details and finalize the arrangements.
        </p>
        <p className="thank-you-info">
          If you have any questions or need further assistance, feel free to{" "}
          <span className="highlight">reach out</span> to us anytime.
        </p>
        <Link to="/" className="back-home-button">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
