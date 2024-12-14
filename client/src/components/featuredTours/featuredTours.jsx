import React from "react";
import { Link } from "react-router-dom";
import image1 from "../../assets/beach.jpg";
import image2 from "../../assets/mountain.jpg";
import image3 from "../../assets/ciry.webp";
import "./featuredTours.css";

const FeaturedTours = () => {
  const tours = [
    {
      id: 1,
      title: "Exotic Beach Getaway",
      description: "Relax on pristine beaches with top-tier amenities.",
      image: image1,
    },
    {
      id: 2,
      title: "Mountain Adventure",
      description: "Discover breathtaking views and exhilarating hikes.",
      image: image2,
    },
    {
      id: 3,
      title: "Luxury City Tours",
      description: "Experience the finest cityscapes with exclusive access.",
      image: image3,
    },
  ];

  return (
    <section className="featured-tours">
      <h2 className="section-title">Featured Tours</h2>
      <div className="tours-carousel">
        {tours.map((tour) => (
          <div className="tour-card" key={tour.id}>
            <img src={tour.image} alt={tour.title} />
            <h3>{tour.title}</h3>
            <p>{tour.description}</p>
            <Link to="/packages">
              <button className="cta-button">View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedTours;
