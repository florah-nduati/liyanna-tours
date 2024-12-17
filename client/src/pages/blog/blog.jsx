import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import image1 from "../../assets/destination.jpg";
import image2 from "../../assets/planning.webp";
import image3 from "../../assets/hotels.jpg";
import image4 from "../../assets/adventure.jpg";
import image5 from "../../assets/food.jpg";
import "./blog.css";

const Blog = () => {
  const posts = [
    {
      title: "Top 5 Luxury Destinations You Must Visit",
      image: image1,
      description:
        "Discover the most exclusive destinations for a luxury vacation.",
      link: "/blog/top-5-luxury-destinations",
      category: "Destinations",
    },
    {
      title: "How to Plan Your Perfect Luxury Safari in Kenya",
      image: image2,
      description:
        "A step-by-step guide to planning a memorable safari adventure.",
      link: "/blog/perfect-luxury-safari-kenya",
      category: "Safari",
    },
    {
      title: "Traveling in Style: Best Luxury Hotels for Your Getaway",
      image: image3,
      description:
        "Our hand-picked list of the best luxury hotels around the world.",
      link: "/blog/best-luxury-hotels",
      category: "Hotels",
    },
    {
      title: "Adventure Awaits: Explore Exotic Locations",
      image: image4,
      description:
        "Get ready for an exciting adventure with our expert recommendations.",
      link: "/blog/exotic-adventures",
      category: "Adventure",
    },
    {
      title: "Gastronomic Delights: Top Food Experiences Around the World",
      image: image5,
      description: "Indulge in world-class cuisine while traveling the globe.",
      link: "/blog/top-food-experiences",
      category: "Food",
    },
  ];

  const [category, setCategory] = useState("All");

  const filteredPosts =
    category === "All"
      ? posts
      : posts.filter((post) => post.category === category);

  return (
    <div className="blog">
      <div className="blog-header">
        <h2 className="blog-title">Liyanna Luxury Tours Blog</h2>
        <p className="blog-intro">
          Dive into expert travel tips, luxury destination highlights, and the
          latest travel trends.
        </p>
      </div>

      <div className="blog-category-filter">
        <label htmlFor="category" className="category-label">
          Filter by Category
        </label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="category-select"
        >
          <option value="All">All Categories</option>
          <option value="Destinations">Destinations</option>
          <option value="Safari">Safari</option>
          <option value="Hotels">Hotels</option>
          <option value="Adventure">Adventure</option>
          <option value="Food">Food</option>
        </select>
      </div>

      <div className="featured-post">
        <img
          src={posts[0].image}
          alt={posts[0].title}
          className="featured-image"
        />
        <div className="featured-content">
          <h3>{posts[0].title}</h3>
          <p>{posts[0].description}</p>
          <Link to={posts[0].link} className="featured-link">
            Read More
          </Link>
        </div>
      </div>

      <div className="blog-posts">
        {filteredPosts.map((post, index) => (
          <div className="blog-card" key={index}>
            <img src={post.image} alt={post.title} className="blog-image" />
            <div className="blog-content">
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <Link to={post.link} className="blog-read-more">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button className="pagination-button">Previous</button>
        <button className="pagination-button">Next</button>
      </div>
    </div>
  );
};

export default Blog;
