import React, { useState, useEffect } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import apiBase from "../../utils/api";
import "./booking.css";

const Booking = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [people, setPeople] = useState(1);
  const [message, setMessage] = useState("");
  const [packageType, setPackageType] = useState("Luxury");
  const [tourType, setTourType] = useState("Safari");
  const [paymentOption, setPaymentOption] = useState("Credit Card");
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  // Mutation function to create a booking
  const createBooking = async (credentials) => {
    const response = await fetch(`${apiBase}/booking`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // No need for Authorization header since token is in the cookies
      },
      body: JSON.stringify(credentials),
      credentials: "include", // Ensures cookies are sent with the request
    });

    if (!response.ok) {
      const errorDetails = await response.json();
      throw new Error(errorDetails.error || "Failed to create booking");
    }

    return response.json();
  };

  const { mutate, isLoading, isError, error, isSuccess } = useMutation(
    createBooking,
    {
      onSuccess: (data) => {
        setConfirmationMessage(
          "Thank you for your booking! We'll get in touch with you soon.",
        );
        console.log("Booking created:", data);
        navigate("/thank-you");
      },
      onError: (err) => {
        console.error("Booking failed:", err);
        setErrorMessage(
          err.message || "An error occurred. Please try again later.",
        );
        console.error("Booking failed:", err.message);
      },
    },
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    const bookingData = {
      name,
      email,
      date,
      people: parseInt(people, 10),
      packageType,
      tourType,
      paymentOption,
      message,
    };

    mutate(bookingData);
  };

  return (
    <div className="booking-form">
      <h2>Book Your Luxury Tour</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Preferred Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <label>Number of People:</label>
        <input
          type="number"
          value={people}
          onChange={(e) => setPeople(e.target.value)}
          min="1"
          required
        />
        <label>Tour Package:</label>
        <select
          value={packageType}
          onChange={(e) => setPackageType(e.target.value)}
          required
        >
          <option value="Luxury">Luxury</option>
          <option value="Adventure">Adventure</option>
          <option value="Custom">Custom</option>
        </select>
        <label>Tour Type:</label>
        <select
          value={tourType}
          onChange={(e) => setTourType(e.target.value)}
          required
        >
          <option value="Safari">Safari</option>
          <option value="Beach">Beach</option>
          <option value="Cultural">Cultural</option>
        </select>
        <label>Payment Option:</label>
        <select
          value={paymentOption}
          onChange={(e) => setPaymentOption(e.target.value)}
          required
        >
          <option value="Credit Card">Credit Card</option>
          <option value="PayPal">PayPal</option>
          <option value="Bank Transfer">Bank Transfer</option>
        </select>
        <label>Additional Requests:</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Submitting..." : "Submit Booking"}
        </button>
      </form>

      {confirmationMessage && (
        <p className="confirmation-message">{confirmationMessage}</p>
      )}
      {isError && <p className="error-message">{errorMessage}</p>}
      {isSuccess && (
        <p className="success-message">Your booking was successful!</p>
      )}
    </div>
  );
};

export default Booking;
