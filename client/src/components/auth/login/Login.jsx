import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useStyles } from "./style";
import { inputLabelClasses } from "@mui/material/InputLabel";
import LoadingButton from "@mui/lab/LoadingButton";

function Login(props) {
  const { register, errors, isLoading } = props;
  const classes = useStyles();

  return (
    <Box component="div" className={classes.root}>
      <Typography className={classes.title} variant="h4" margin="normal">
        Авторизация
      </Typography>

      <TextField
        InputLabelProps={{
          sx: {
            color: "white",
            [`&.${inputLabelClasses.shrink}`]: {
              color: "white",
            },
          },
        }}
        {...register("email")}
        error={!!errors?.email}
        type="email"
        margin="normal"
        helperText={errors?.email?.message}
        fullWidth
        variant="outlined"
        label="Email"
      />
      <TextField
        {...register("password")}
        InputLabelProps={{
          sx: {
            color: "white",
            [`&.${inputLabelClasses.shrink}`]: {
              color: "white",
            },
          },
        }}
        error={!!errors.password}
        helperText={errors?.password?.message}
        type="password"
        margin="normal"
        fullWidth
        variant="outlined"
        label="Password"
      />
      {/* <Button
        className={classes.btn}
        type="submit"
        variant="contained"
        margin="normal"
      >
        Войти
      </Button> */}

      <LoadingButton
        className={classes.btn}
        type="submit"
        variant="contained"
        loading={isLoading}
      >
        Войти
      </LoadingButton>
      <Typography fontFamily={"Poppins"} variant="h4" className={classes.text}>
        у вас нет аккаунта?
        <Box component="span" className={classes.link}>
          <Link className={classes.link} to={"/register"}>
            регистрироваться
          </Link>
        </Box>
      </Typography>
    </Box>
  );
}

export default Login;
