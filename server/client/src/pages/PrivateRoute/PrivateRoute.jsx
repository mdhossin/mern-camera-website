import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../components/Loading/Loading";

const PrivateRoute = ({ children }) => {
  const user = useSelector((state) => state?.userLogin);
  const { userInfo, loading } = user;
  let location = useLocation();
  if (loading) {
    return <Loading />;
  }

  if (!userInfo?.access_token) {
    return <Navigate to="/login" state={{ path: location.pathname }} />;
  }
  return children;
};

export default PrivateRoute;
