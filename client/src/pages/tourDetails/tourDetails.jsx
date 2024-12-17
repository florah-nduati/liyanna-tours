import React from "react";
import { useParams } from "react-router-dom";
import "./tourDetails.css";

const TourDetails = () => {
  const { id } = useParams(); 

  const tour = {
    id,
    title: "Beach Getaway",
    image: "https://source.unsplash.com/800x400/?beach,resort",
    description:
      "Spend your days lounging on white sand beaches, sipping cocktails by the sea, and enjoying luxurious 5-star accommodations.",
    itinerary: [
      "Day 1: Arrival and beach relaxation",
      "Day 2: Island hopping tour",
      "Day 3: Spa and leisure",
    ],
  };

  return (
    <div className="tour-details">
      <img src={tour.image} alt={tour.title} className="tour-image" />
      <h1 className="tour-title">{tour.title}</h1>
      <p className="tour-description">{tour.description}</p>
      <h2>Itinerary</h2>
      <ul className="itinerary">
        {tour.itinerary.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default TourDetails;
