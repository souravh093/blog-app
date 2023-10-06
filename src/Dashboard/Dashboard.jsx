import React from "react";
import Container from "../components/Container/Container";
import { useGetUserBlogQuery } from "../redux/features/blogs/blogSlice";
import { useSelector } from "react-redux";
import ManageBlog from "./ManageBlog/ManageBlog";

const Dashboard = () => {
  const { email } = useSelector((state) => state.userSlice);
  console.log(email);
  const { data: userBlogData, isLoading, isError } = useGetUserBlogQuery(email);
  console.log(userBlogData);
  return (
    <div className="mt-10 min-h-screen">
      <Container>
        <div>
          <div className="grid grid-cols-3 gap-16">
            <div className="bg-gray-200 py-10 text-2xl font-bold flex items-center justify-center gap-3">
              <h2 className="uppercase">Total Posted: </h2>
              <h1 className="text-primary">{userBlogData?.length ? userBlogData?.length : 0}</h1>
            </div>
            <div className="bg-gray-200 py-10 text-2xl font-bold flex items-center justify-center gap-3">
              <h2 className="uppercase">Total Views: </h2>
              <h1 className="text-primary">{196}</h1>
            </div>
            <div className="bg-gray-200 py-10 text-2xl font-bold flex items-center justify-center gap-3">
              <h2 className="uppercase">Comments: </h2>
              <h1 className="text-primary">
                {userBlogData?.comments?.length
                  ? userBlogData?.comments?.length
                  : 0}
              </h1>
            </div>
          </div>

          <div className="relative overflow-x-auto mt-10">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-200">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Image
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Blog Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                  <tr>
                    <td>Loading...</td>
                  </tr>
                ) : (
                  userBlogData?.map((blog) => (
                    <ManageBlog key={blog._id} blog={blog} />
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Dashboard;
