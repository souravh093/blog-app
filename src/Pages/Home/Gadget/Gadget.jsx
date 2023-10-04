import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import Container from "../../../components/Container/Container";
import { useGetGadgetRecentBlogsQuery } from "../../../redux/features/blogs/blogSlice";
import GadgetCard from "./GadgetCard/GadgetCard";

const Gadget = () => {
  const { data: gadgetBlogs, isLoading } = useGetGadgetRecentBlogsQuery();
  return (
    <div className="my-20">
      <Container>
        <div>
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-4xl font-bold">Must Read</h2>
            <Link
              className="text-primary text-2xl font-bold flex items-center gap-2"
              to={"/"}
            >
              View All <AiOutlineArrowRight />
            </Link>
          </div>

          <div className="grid grid-cols-2">
            {isLoading ? (
              <h2>Loading...</h2>
            ) : (
              gadgetBlogs.map((blog) => (
                <GadgetCard key={blog._id} blog={blog} />
              ))
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Gadget;
