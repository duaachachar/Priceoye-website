import {
  Box,
  Button,
  Card,
  Grid,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import login from "../../assets/login-header-img.svg";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const schema = yup.object({
    email: yup.string().required("Your Email is Required"),
    password: yup.string().required("Password is Required"),
  });

  const signInValue = {
    email: "",
    password: "",
  };

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: signInValue,
    resolver: yupResolver(schema),
  });

  const LoginHandler = (data) => {
    reset();
    alert("Login successfull");
    navigate("/");
  };

  return (
    <Box className="flex items-center justify-center">
      <Card className="w-full sm:w-1/2 lg:w-1/2 max-w-lg mx-auto mt-12 ">
        <img className="w-full" src={login} alt="Login" />
        <Box className="py-2 px-7">
          <Typography variant="h5" className="my-2">
            Login
          </Typography>
          <Typography variant="body2">
            Enter your email and password to personalize your experience,
            receive updates, and secure your account.
          </Typography>
          <form className="my-4" onSubmit={handleSubmit(LoginHandler)}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      type="email"
                      fullWidth
                      placeholder="Enter Email"
                      size="small"
                      {...field}
                    />
                  )}
                />
                <p className="text-red-500 text-bold mt-2">
                  {errors.email?.message}
                </p>
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="password"
                  control={control}
                  render={({ field }) => (
                    <OutlinedInput
                      fullWidth
                      size="small"
                      {...field}
                      type={showPassword ? "text" : "password"}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label={
                              showPassword ? "hide password" : "show password"
                            }
                            onClick={() => setShowPassword(!showPassword)}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  )}
                />
                <p className="text-red-500 text-bold mt-2">
                  {errors.password?.message}
                </p>
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  className="bg-success"
                  variant="contained"
                  fullWidth
                >
                  Log In
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Card>
    </Box>
  );
};

export default Login;
