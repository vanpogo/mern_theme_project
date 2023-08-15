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
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema, registerSchema } from "../../../utils/yup/index.js";

function RootAuthComponent() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuth = useSelector(isCheckAuth);
  const { token, isLoading } = useSelector((state) => state.auth);

  const classes = useStyles();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(
      pathname === "/register" ? registerSchema : loginSchema
    ),
  });

  const onHandleSubmit = async (data) => {
    try {
      if (pathname === "/register") {
        dispatch(registerUser(data));
        reset();
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
            <Register
              register={register}
              errors={errors}
              isLoading={isLoading}
            />
          ) : pathname === "/login" ? (
            <Login register={register} errors={errors} isLoading={isLoading} />
          ) : null}
        </form>
      </Box>
    </Box>
  );
}

export default RootAuthComponent;
