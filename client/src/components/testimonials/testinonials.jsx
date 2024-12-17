import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../assets/user1.jpg";
import image2 from "../../assets/user2.jpg";
import image3 from "../../assets/user3.jpg";
import "./testimonials.css";

// Dummy data
const testimonials = [
  {
    text: "Liyanna Luxury Tours planned the most incredible trip for us. Every detail was perfect!",
    author: "Jane Doe",
    image: image1,
  },
  {
    text: "From the yacht charters to hotel bookings, everything was seamless and luxurious.",
    author: "Michael Johnson",
    image: image2,
  },
  {
    text: "A once-in-a-lifetime experience, all thanks to Liyanna Luxury Tours. Highly recommend!",
    author: "Emily White",
    image: image3,
  },
  {
    text: "They turned our dream vacation into a reality. Everything was luxurious and stress-free.",
    author: "John Smith",
    image: image2,
  },
];


const settings = {
  dots: true, 
  infinite: true, 
  speed: 300, 
  autoplay: true, 
  autoplaySpeed: 3000, 
  slidesToShow: 2,
  slidesToScroll: 1, 
  arrows: true, 
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1, 
      },
    },
  ],
};

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <h2 className="section-title">What Our Clients Say</h2>
      <Slider {...settings} className="testimonials-slider">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <div className="testimonial-content">
              <img
                src={testimonial.image}
                alt={testimonial.author}
                className="testimonial-image"
              />
              <div className="testimonial-text">
                <p>"{testimonial.text}"</p>
                <span>- {testimonial.author}</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Testimonials;
