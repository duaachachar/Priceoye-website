import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
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
import { Link, useNavigate } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const EditProfile = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [userData, setUserData] = useState();

  const schema = yup.object({
    firstName: yup
      .string()
      .min(3, "First Name must be at least 3 characters")
      .required("First Name is Required"),
    email: yup
      .string()
      .email("Enter a valid email")
      .required("Your Email is Required"),
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

  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem("user"));
     if (storedUserData) {
       setUserData(storedUserData);
       reset(storedUserData); 
     }
   }, [reset]);
 

  const signUpHandler = (data) => {
    localStorage.setItem("user", JSON.stringify(data));

    navigate("/")
  };

 


  return (
    <Box className="h-screen bg-gray-200">
      <Box className="pt-10">
        <Box className="container mx-auto flex justify-center ">
         
         <Box className="flex items-center p-3 bg-white shadow-lg shadow-gray-400 w-2/3 ">
            <ArrowBackIosIcon />
            <Link to='/account'>
            <Typography variant="h6">Edit Profile</Typography>
            </Link>
          </Box>
       
        </Box>
        <Box className="container mx-auto flex justify-center my-5 scale-2 py-3">
          <form
            onSubmit={handleSubmit(signUpHandler)}
            className=" bg-white shadow-lg shadow-gray-400 w-2/3 p-10"
          >
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
                      error={!!errors.firstName}
                      helperText={errors.firstName?.message}
                      {...field}
                    />
                  )}
                />
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
                      error={!!errors.email}
                      helperText={errors.email?.message}
                      {...field}
                    />
                  )}
                />
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
                      error={!!errors.password}
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
                <Typography className="text-red-500 text-bold mt-2">
                  {errors.password?.message}
                </Typography>
              </Grid>

              <Box className="ms-5 mt-3">
                <Button
                  type="submit"
                 
                  variant="contained"
                   className="bg-gray-400 ms-5"
                >
                  Submit
                </Button>
              </Box>
            </Grid>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default EditProfile;
