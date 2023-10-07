import React from "react";
import Container from "../../components/Container/Container";
import Social from "../Home/TechReviews/Social/Social";
import techBanner from "../../assets/banner.jpg";
import { useParams } from "react-router-dom";
import { useGetAllCategoryBlogsQuery } from "../../redux/features/blogs/blogSlice";
import TechReviewCard from "../Home/TechReviews/TechReviewCard/TechReviewCard";

const CategoryWiseBlogs = () => {
  const { categoryName } = useParams();
  const {
    data: categoryBlogs,
    isLoading,
    isError,
  } = useGetAllCategoryBlogsQuery(categoryName);
  console.log(categoryBlogs);
  return (
    <div className="my-10">
      <Container>
        <div className="grid grid-cols-4 gap-10">
          <div className="col-span-3">
            <div className="mb-5">
              <h2 className="text-4xl font-bold uppercase">{categoryName}</h2>
            </div>
            <div className="flex flex-col gap-5">
              {isLoading ? (
                <h2>Loading...</h2>
              ) : (
                categoryBlogs.map((blog) => (
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

export default CategoryWiseBlogs;
