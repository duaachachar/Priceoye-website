import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";

const useLogin = () => {
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
    // Reset form logic
    toast.success("Successfully logged in!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    // Navigate logic
    navigate("/");
  };
  return {
    LoginHandler,
    control,
    handleSubmit,
    reset,
    errors,
    signInValue,
    schema,
    showPassword,
    setShowPassword,
  };
};

export default useLogin;
