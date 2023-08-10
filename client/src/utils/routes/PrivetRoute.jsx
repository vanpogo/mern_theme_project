import React from "react";
import { useSelector } from "react-redux";
import { checkAuth, isCheckAuth } from "../../redux/slices/auth/authSlice";
import { Navigate, Outlet } from "react-router-dom";

function PrivetRoute() {
  const auth = useSelector(isCheckAuth);
  return auth ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivetRoute;
