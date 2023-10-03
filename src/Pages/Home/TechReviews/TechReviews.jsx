import React from "react";
import Container from "../../../components/Container/Container";
import techBanner from "../../../assets/banner.jpg";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

const TechReviews = () => {
  return (
    <div className="mt-10">
      <Container>
        <div className="grid grid-cols-4 gap-10">
          <div className="col-span-3">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-5xl font-bold">Tech Reviews</h2>
              <Link
                className="text-primary text-2xl font-bold flex items-center gap-2"
                to={"/"}
              >
                View All <AiOutlineArrowRight />
              </Link>
            </div>
          </div>
          <div className="col-span-1">
            <img src={techBanner} alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TechReviews;
