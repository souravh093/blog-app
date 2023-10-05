import React from "react";
import { useParams } from "react-router-dom";
import {
  useAddCommentMutation,
  useGetSimilarBlogQuery,
  useGetSingleBlogQuery,
} from "../../redux/features/blogs/blogSlice";
import Container from "../Container/Container";
import AppPickCard from "../../Pages/Home/AppsPick/AppPickCard/AppPickCard";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

const SingleBlog = () => {
  const { id } = useParams();
  const { data: blogData, isLoading } = useGetSingleBlogQuery(id);
  const { data: similarCategory } = useGetSimilarBlogQuery(blogData?.category);
  const { email, name } = useSelector((state) => state.userSlice);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [addComment, { data: commentAdd, error }] = useAddCommentMutation();

  const onSubmit = (data) => {
    console.log(data);
    const commentData = {
      name,
      email,
      comment: data,
      data: new Date(),
    };
    addComment({ id, commentData });
    reset();
    console.log(data);
  };


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

              {blogData.comments && (
                <div className="p-20 mx-32 my-20 bg-white">
                  <h2 className="text-3xl font-bold mb-5">
                    {blogData.comments.length} thoughts on{" "}
                    <span>"{blogData.title}"</span>
                  </h2>

                  {blogData?.comments?.map((com) => (
                    <div key={com._id} className="flex mb-10 gap-5">
                      <img
                        src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                        alt="user demo image"
                        className="w-12 h-12 rounded-full"
                      />

                      <div>
                        <h3 className="font-bold">

                          {com.name ? com.name : com.comment.name}
                        </h3>
                        <h3 className="font-bold">
                          {com.email ? com.email : com.comment.email}
                        </h3>
                        {com.comment && (
                          <p className="mb-2">{com.comment.comment}</p>
                        )}
                        <p className="text-gray-500">
                          {com.data && new Date(com.data).toDateString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="p-20 mx-32 my-20 bg-white">
                <h2 className="text-3xl font-bold mb-5">Leave a comment</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="flex flex-col">
                    <input
                      type="text"
                      placeholder="Name"
                      className="border border-gray-300 rounded-sm p-2 mb-2"
                      {...register("name", { required: true })}
                      {...(errors.name && <span>Name is required</span>)}
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="border border-gray-300 rounded-sm p-2 mb-2"
                      {...register("email", { required: true })}
                      {...(errors.email && <span>Email is required</span>)}
                    />
                    <textarea
                      cols="30"
                      rows="10"
                      placeholder="Comment"
                      className="border border-gray-300 rounded-sm p-2 mb-2"
                      {...register("comment", { required: true })}
                      {...(errors.comment && <span>Comment is required</span>)}
                    ></textarea>
                    <button className="inline-flex text-white">
                      <span className="bg-primary py-3 px-4">
                        Post a Comment
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </>
          )}
        </Container>
      </div>
    </div>
  );
};

export default SingleBlog;
