import React from "react";
import Container from "../../../components/Container/Container";
import podcastImg from "../../../assets/podcast.png";

const Podcast = () => {
  return (
    <div className="mt-20">
      <Container>
        <div className="grid grid-cols-5 items-center bg-[#8EFBDA] overflow-hidden rounded-xl">
          <div className="col-span-1">
            <img src={podcastImg} alt="podcast image" />
          </div>
          <div className="col-span-3">
            <h3>Vertex Podcast</h3>
            <h1>Listen to daily tech news podcast</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni id
              nihil possimus blanditiis rerum,
            </p>
          </div>
          <div className="col-span-1">
            <button className="bg-primary rounded-full text-xl font-bold text-white px-7 py-3">
              Listen Now
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Podcast;
