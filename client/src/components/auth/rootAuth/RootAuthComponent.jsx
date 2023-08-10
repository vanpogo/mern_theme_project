import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Register from "../register/Register.jsx";
import Login from "../login/Login.jsx";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  isCheckAuth,
  loginUser,
  registerUser,
} from "../../../redux/slices/auth/authSlice";
import { useForm } from "react-hook-form";
import { useStyles } from "./style";

function RootAuthComponent() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuth = useSelector(isCheckAuth);
  const { token } = useSelector((state) => state.auth);

  const classes = useStyles();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onHandleSubmit = async (data) => {
    try {
      if (pathname === "/register") {
        dispatch(registerUser(data));
      } else {
        dispatch(loginUser(data));
        reset();
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (isAuth) {
      window.localStorage.setItem("token", token);
      navigate("/");
    }
  }, [token]);
  return (
    <Box component="div" className={classes.root}>
      <Box component="div" className={classes.block}>
        <form onSubmit={handleSubmit(onHandleSubmit)}>
          {pathname === "/register" ? (
            <Register register={register} errors={errors} />
          ) : pathname === "/login" ? (
            <Login register={register} errors={errors} />
          ) : null}
        </form>
      </Box>
    </Box>
  );
}

export default RootAuthComponent;
