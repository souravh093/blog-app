import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

import Loading from "../components/Loading/Loading";

const PrivateRoute = ({ children }) => {
  const { pathname } = useLocation();
  const { isLoading, email } = useSelector((state) => state.userSlice);

  if (isLoading) {
    return <Loading />;
  }

  if (!isLoading && !email) {
    return <Navigate to={"/login"} state={{ path: pathname }} />;
  }

  return children;
};

export default PrivateRoute;
