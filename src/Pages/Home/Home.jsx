import React from "react";
import Hero from "./Hero/Hero";
import AppsPick from "./AppsPick/AppsPick";
import TechReviews from "./TechReviews/TechReviews";

const Home = () => {
  return (
    <div>
      <Hero />
      <AppsPick />
      <TechReviews />
    </div>
  );
};

export default Home;
