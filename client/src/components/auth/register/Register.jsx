import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { useStyles } from "./style";
import { inputLabelClasses } from "@mui/material/InputLabel";

function Register(props) {
  const { register, errors } = props;

  const classes = useStyles();

  return (
    <Box component="div" className={classes.root}>
      <Typography className={classes.title} variant="h4" margin="normal">
        Регистрация
      </Typography>
      <TextField
        {...register("firstName", { required: "Обязательное поле" })}
        error={!!errors.firstName}
        helperText={errors?.firstName?.message}
        type="text"
        name="firstName"
        margin="normal"
        fullWidth
        variant="outlined"
        label="Firstname"
        InputLabelProps={{
          sx: {
            color: "white",
            [`&.${inputLabelClasses.shrink}`]: {
              color: "white",
            },
          },
        }}
      />
      <TextField
        {...register("userName", { required: "Обязательное поле" })}
        error={!!errors.userName}
        helperText={errors?.userName?.message}
        type="text"
        label="Username"
        name="userName"
        fullWidth
        variant="outlined"
        InputLabelProps={{
          sx: {
            color: "white",
            [`&.${inputLabelClasses.shrink}`]: {
              color: "white",
            },
          },
        }}
        margin="normal"
      />
      <TextField
        {...register("email", { required: "Обязательное поле", pattern: /@/ })}
        error={!!errors.email}
        helperText={errors?.email?.message}
        type="email"
        margin="normal"
        name="email"
        fullWidth
        variant="outlined"
        label="Email"
        InputLabelProps={{
          sx: {
            color: "white",
            [`&.${inputLabelClasses.shrink}`]: {
              color: "white",
            },
          },
        }}
      />
      <TextField
        {...register("password", {
          required: "Обязательное поле",
          minLength: { value: 8, message: "Не менее 8 символов" },
        })}
        error={!!errors.password}
        helperText={errors?.password?.message}
        type="password"
        margin="normal"
        fullWidth
        name="password"
        variant="outlined"
        label="Password"
        InputLabelProps={{
          sx: {
            color: "white",
            [`&.${inputLabelClasses.shrink}`]: {
              color: "white",
            },
          },
        }}
      />
      <Button
        className={classes.btn}
        type="submit"
        variant="contained"
        margin="normal"
      >
        Регистрация
      </Button>
      <Typography fontFamily={"Poppins"} variant="h4" className={classes.text}>
        у вас есть аккаунт?
        <Box component="span" className={classes.link}>
          <Link className={styles.link} to={"/login"}>
            {" "}
            Войти
          </Link>
        </Box>
      </Typography>
    </Box>
  );
}

export default Register;
