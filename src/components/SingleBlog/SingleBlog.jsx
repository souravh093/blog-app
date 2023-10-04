import React from "react";
import { useParams } from "react-router-dom";
import { useGetSingleBlogQuery } from "../../redux/features/blogs/blogSlice";
import Container from "../Container/Container";

const SingleBlog = () => {
  const { id } = useParams();
  const { data: blogData, isLoading, isError } = useGetSingleBlogQuery(id);
  const { category, title, writer, descOne, descTwo, date, image } = blogData;
  return (
    <div>
      <Container>
        {isLoading ? (
          <h2>Loading...</h2>
        ) : (
          <div>
            <img src={image} alt="" />
          </div>
        )}
      </Container>
    </div>
  );
};

export default SingleBlog;
