import React from "react";
import asideImage from "../../../assets/aside.jpg";
import Container from "../../../components/Container/Container";
import { useGetRecentBlogsQuery, useGetRecentHeroBlogsQuery } from "../../../redux/features/blogs/blogSlice";
import RecentBlog from "./RecentBlog/RecentBlog";
import Loading from "../../../components/Loading/Loading";
import HeroCard from "./HeroCard/HeroCard";

const Hero = () => {
  const { data: blogs, isLoading, isError } = useGetRecentBlogsQuery();
  const {data: heroBlog, isLoading: heroLoading} = useGetRecentHeroBlogsQuery()
  return (
    <div className="mt-10">
      <Container>
        <div className="grid grid-cols-4 gap-10">
          {
            heroLoading ? <h2>Loading...</h2> : heroBlog.map(blog => <HeroCard key={blog._id} blog={blog} />)
          }

          {/* hero sidebar */}
          <div className="con-span-1">
            <img src={asideImage} alt="hero sidebar image" />
            <div className="flex flex-col gap-5 mt-10">
              {isLoading ? (
                <h2>Loading...</h2>
              ) : (
                blogs?.map((blog) => <RecentBlog key={blog._id} blog={blog} />)
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
