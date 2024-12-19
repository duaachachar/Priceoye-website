import React, { useEffect, useState } from "react";
import {  Typography } from "@mui/material";

const ProtectedRoute = ({ children }) => {
  const [user, setUser] = useState({});

  console.log(user, "user");

  useEffect(() => {
    const inform = localStorage.getItem("user");

    const userObj = JSON.parse(inform);

    setUser(userObj);
  }, []);

  if (!user) {
    return (
      <Typography variant='h1' className="text-red-500 font-bold">
        Please log in to access this page.
      </Typography>
    );
  }

  return <div>{children}</div>;
};

export default ProtectedRoute;
