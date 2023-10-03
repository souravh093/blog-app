import React from "react";
import Container from "../../../components/Container/Container";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight, AiOutlineMail } from "react-icons/ai";
import { useGetRecentBlogsAppsQuery } from "../../../redux/features/blogs/blogSlice";
import AppPickCard from "./AppPickCard/AppPickCard";

const AppsPick = () => {
  const {
    data: recentAppsBlogs,
    isLoading,
    isError,
  } = useGetRecentBlogsAppsQuery();

  console.log(recentAppsBlogs);
  return (
    <div className="mt-16">
      <Container>
        <div className="grid grid-cols-4  gap-10">
          <div className="col-span-3">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-4xl font-bold">Apps Pick</h2>
              <Link
                className="text-primary text-2xl font-bold flex items-center gap-2"
                to={"/"}
              >
                View All <AiOutlineArrowRight />
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-5 mb-10">
              {isLoading ? (
                <h2>Loading...</h2>
              ) : (
                recentAppsBlogs.map((blog) => (
                  <AppPickCard key={blog._id} blog={blog} />
                ))
              )}
            </div>
            <hr />
          </div>

          <div className="col-span-1 border">
            <div className="px-10 pb-10 flex flex-col gap-3">
              <AiOutlineMail className="text-6xl bg-primary p-2 text-gray-50 mb-10" />

              <h2 className="text-2xl font-semibold">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-gray-800">
                gravida aliquet vulputate faucibus tristique odio.
              </p>
              <form>
                <input
                  type="email"
                  placeholder="Email address"
                  className="mb-3 border p-4"
                />
                <button className="bg-primary text-gray-50 px-7 py-4 rounded-full text-xl font-bold">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AppsPick;
