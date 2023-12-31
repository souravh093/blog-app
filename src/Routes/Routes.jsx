import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import SingleBlog from "../components/SingleBlog/SingleBlog";
import WritePost from "../Pages/WritePost/WritePost";
import Dashboard from "../Dashboard/Dashboard";
import CategoryWiseBlogs from "../Pages/CategoryWiseblogs/CategoryWiseblogs";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog/:id",
        element: <SingleBlog />,
      },
      {
        path: "/writeBlog",
        element: <WritePost />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />
      },
      {
        path: "/category/:categoryName",
        element: <CategoryWiseBlogs />
      }
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default routes;
