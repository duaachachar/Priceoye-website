import React, { useState } from "react";
import register from "../../assets/login-header-img.svg";
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
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const schema = yup.object({
    firstName: yup.string().min(3).required("First Name is Required"),
    email: yup.string().required("Your Email is Required"),
    password: yup
      .string()
      .required("Password is Required")
      .min(8, "Password must be 8 characters long")
      .matches(/[0-9]/, "Password requires a number")
      .matches(/[a-z]/, "Password requires a lowercase letter")
      .matches(/[A-Z]/, "Password requires an uppercase letter")
      .matches(/[^\w]/, "Password requires a symbol"),
  });

  const signUpValue = {
    firstName: "",
    email: "",
    password: "",
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: signUpValue,
    resolver: yupResolver(schema),
  });

  const signUpHandler = (data) => {
    console.log(data, "data");
    localStorage.setItem("user", JSON.stringify(data));
    reset();

    navigate("/login");
  };
  return (
    <Box className=" flex items-center justify-center">
      <Card className="w-full sm:w-1/2 lg:w-1/2 max-w-lg mx-auto mt-12 ">
        <img className="w-full" src={register} alt="" />
        <Box className="py-2 px-7">
          <Typography variant="h5" className="my-2">
            Register
          </Typography>
          <Typography variant="body2">
            Enter your name, email, and password to personalize your experience,
            receive updates, and secure your account.
          </Typography>
          <form className="my-3" onSubmit={handleSubmit(signUpHandler)}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={12}>
                <Controller
                  name="firstName"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      fullWidth
                      placeholder="First Name"
                      size="small"
                      {...field}
                    />
                  )}
                />
                <p className="text-red-500 text-bold mt-2">
                  {errors.firstName?.message}
                </p>
              </Grid>
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
                  Register
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Card>
    </Box>
  );
};

export default Register;
