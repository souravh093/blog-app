import React from "react";
import Container from "../../../components/Container/Container";
import techBanner from "../../../assets/banner.jpg";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useGetRecentTechnologyBlogsQuery } from "../../../redux/features/blogs/blogSlice";
import TechReviewCard from "./TechReviewCard/TechReviewCard";
import Social from "./Social/Social";

const TechReviews = () => {
  const { data: techRecentBlogs, isLoading } =
    useGetRecentTechnologyBlogsQuery();
  return (
    <div className="mt-10">
      <Container>
        <div className="grid grid-cols-4 gap-10">
          <div className="col-span-3">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-4xl font-bold">Tech Reviews</h2>
              <Link
                className="text-primary text-2xl font-bold flex items-center gap-2"
                to={`/category/Technology`}
              >
                View All <AiOutlineArrowRight />
              </Link>
            </div>
            <div className="flex flex-col gap-10">
              {isLoading ? (
                <h2>Loading...</h2>
              ) : (
                techRecentBlogs.map((blog) => (
                  <TechReviewCard key={blog._id} blog={blog} />
                ))
              )}
            </div>
          </div>
          <div className="col-span-1 flex flex-col gap-10">
            <img src={techBanner} alt="" />
            <hr />
            <Social />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TechReviews;
