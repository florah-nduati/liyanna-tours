import React from "react";
import "./services.css";
import image1 from "../../assets/hotel.jpg";
import image2 from "../../assets/airport.jpg";
import image3 from "../../assets/yatch.jpg";
import image4 from "../../assets/event.jpg";
import image5 from "../../assets/car.jpg";
import image6 from "../../assets/security.jpg";
import image7 from "../../assets/planes.jpg";
import image8 from "../../assets/tours.jpg";
import image9 from "../../assets/bush.jpg"; 
import image10 from "../../assets/corporate.jpg";
import image11 from "../../assets/adventure.jpg";
import image12 from "../../assets/customized.jpg";
import image13 from "../../assets/ticketing.jpg";

const KeyServices = () => {
  const services = [
    {
      id: 1,
      title: "Hotel Bookings",
      description: "Book luxurious stays in top-rated hotels around the world.",
      image: image1,
    },
    {
      id: 2,
      title: "Airport Transfers",
      description: "Seamless, first-class airport transfer services.",
      image: image2,
    },
    {
      id: 3,
      title: "Luxury Yacht Charter",
      description: "Explore the seas with our exclusive yacht charters.",
      image: image3,
    },
    {
      id: 4,
      title: "Event Planning",
      description: "Plan your dream events with unparalleled luxury.",
      image: image4,
    },
    {
      id: 5,
      title: "Car Hire",
      description: "Travel in style with our luxury car rental services.",
      image: image5,
    },
    {
      id: 6,
      title: "Security Services",
      description: "Exclusive, professional security for your peace of mind.",
      image: image6,
    },
    {
      id: 7,
      title: "Chartered Planes",
      description: "Fly privately with our premium chartered planes.",
      image: image7,
    },
    {
      id: 8,
      title: "Customized Package Tours",
      description: "Tailored tours to create your perfect travel experience.",
      image: image8,
    },
    {
      id: 9,
      title: "Bush Safaris",
      description: "Experience the thrill of the wilderness with our bush safaris.",
      image: image9,
    },
    {
      id: 10,
      title: "Corporate Safaris",
      description: "Elevate corporate travel with our luxurious safari packages.",
      image: image10,
    },
    {
      id: 11,
      title: "Adventure Activities",
      description: "Get your adrenaline pumping with our exciting adventures.",
      image: image11,
    },
    {
      id: 12,
      title: "Customized Itineraries",
      description: "Personalized travel plans for your unique preferences.",
      image: image12,
    },
    {
      id: 13,
      title: "Air Ticketing",
      description: "Effortless air ticketing for a hassle-free travel experience.",
      image: image13,
    },
  ];

  return (
    <section className="key-services">
      <h2 className="section-title">Our Services</h2>
      <div className="services-grid">
        {services.map((service) => (
          <div className="service-card" key={service.id}>
            <img src={service.image} alt={service.title} />
            <h3>{service.title}</h3>
            <span className="service-stars">★★★★★</span>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeyServices;
