import React from "react";
import Hero from "./Hero/Hero";
import AppsPick from "./AppsPick/AppsPick";
import TechReviews from "./TechReviews/TechReviews";
import Podcast from "./Podcast/Podcast";
import Gadget from "./Gadget/Gadget";

const Home = () => {
  return (
    <div>
      <Hero />
      <AppsPick />
      <TechReviews />
      <Podcast />
      <Gadget />
    </div>
  );
};

export default Home;
