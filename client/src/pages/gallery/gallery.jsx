import React, { useEffect } from "react";
import image1 from "../../assets/gallery1.jpg";
import image2 from "../../assets/gallery2.jpg";
import image3 from "../../assets/gallery3.jpg";
import image4 from "../../assets/gallery4.jpg";
import image5 from "../../assets/gallery5.jpg";
import image6 from "../../assets/gallery6.jpg";
import image7 from "../../assets/gallery7.jpg";
import image8 from "../../assets/gallery8.jpg";
import image9 from "../../assets/gallery9.jpg";
import image10 from "../../assets/gallery10.jpg";
import image11 from "../../assets/gallery11.jpg";
import "./gallery.css";

const galleryData = [
  {
    image: image1,
    title: "At Mombasa",
    description: "Beautiful coastal scenery with pristine beaches.",
  },
  {
    image: image2,
    title: "At Naivasha",
    description: "Lush greenery and serene lake views.",
  },
  {
    image: image3,
    title: "At Tsavo",
    description: "Experience the wilderness and wildlife.",
  },
  {
    image: image4,
    title: "At Diani",
    description: "Crystal clear waters and white sandy beaches.",
  },
  {
    image: image5,
    title: "At Nakuru",
    description: "Stunning pink flamingos and landscapes.",
  },
  {
    image: image6,
    title: "At Kilifi",
    description: "Historic sites with breathtaking ocean views.",
  },
  {
    image: image7,
    title: "At Amboseli",
    description: "Majestic views of Mount Kilimanjaro.",
  },
  {
    image: image8,
    title: "At Watamu",
    description: "Marine life and coral reefs to explore.",
  },
  {
    image: image9,
    title: "At Nairobi",
    description: "The bustling city with iconic landmarks.",
  },
  {
    image: image10,
    title: "At Samburu",
    description: "Diverse wildlife in a unique ecosystem.",
  },
  {
    image: image11,
    title: "At Lamu",
    description: "A tranquil and historic coastal town.",
  },
];

const Gallery = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.1 },
    );

    const cards = document.querySelectorAll(".gallery-card");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="gallery">
      <h1 className="page-title">Gallery</h1>
      <div className="gallery-grid">
        {galleryData.map((item, index) => (
          <div className="gallery-card" key={index}>
            <img src={item.image} alt={item.title} className="gallery-image" />
            <div className="gallery-overlay">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
