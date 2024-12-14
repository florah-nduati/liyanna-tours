import React from "react";
import HeroSection from "../../components/hero/hero";
import KeyServices from "../../components/services/services";
import FeaturedTours from "../../components/featuredTours/featuredTours";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <KeyServices />
      <FeaturedTours />
    </div>
  );
};

export default Home;
