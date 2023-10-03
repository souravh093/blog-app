import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../firebase/firebase.config";
import { setUser, toggleLoading } from "../redux/features/user/userSlice";
import Loading from "../components/Loading/Loading";

const PrivateRoute = ({ children }) => {
  const { pathname } = useLocation();
  const { isLoading, email } = useSelector((state) => state.userSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser({ name: user.displayName, email: user.email }));
        dispatch(toggleLoading(false));
      } else {
        dispatch(toggleLoading(true));
      }
    });
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  if (!isLoading && !email) {
    return <Navigate to={"/login"} state={{ path: pathname }} />;
  }

  return children;
};

export default PrivateRoute;
