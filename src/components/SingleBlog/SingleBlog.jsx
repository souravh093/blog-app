import React from "react";
import { useParams } from "react-router-dom";
import {
  useGetSimilarBlogQuery,
  useGetSingleBlogQuery,
} from "../../redux/features/blogs/blogSlice";
import Container from "../Container/Container";
import AppPickCard from "../../Pages/Home/AppsPick/AppPickCard/AppPickCard";

const SingleBlog = () => {
  const { id } = useParams();
  const { data: blogData, isLoading } = useGetSingleBlogQuery(id);
  const { data: similarCategory } = useGetSimilarBlogQuery(blogData?.category);
  console.log(similarCategory);
  return (
    <div className="bg-red-50 p-20">
      <div>
        <Container>
          {isLoading ? (
            <h2>Loading...</h2>
          ) : (
            <>
              <div className="p-20 mx-32 bg-white">
                <img src={blogData?.image} className="w-full" alt="" />
                <h1 className="text-3xl font-bold my-2">{blogData?.title}</h1>
                <p className="mb-10">
                  <span className="uppercase">{blogData?.category}</span> /
                  Leave a Comment
                </p>
                <p>{blogData.descOne}</p>
              </div>

              <div className="p-20 mx-32 my-20 bg-white">
                <h2 className="text-3xl font-bold mb-5">Similar Posts</h2>
                <div className="grid grid-cols-2 gap-10">
                  {similarCategory?.map((blog) => (
                    <AppPickCard key={blog._id} blog={blog} />
                  ))}
                </div>
              </div>
            </>
          )}
        </Container>
      </div>
    </div>
  );
};

export default SingleBlog;
