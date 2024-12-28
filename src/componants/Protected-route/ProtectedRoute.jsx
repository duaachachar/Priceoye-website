import React, { useEffect, useState } from "react";
import { Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";  // for navigation to login page

const ProtectedRoute = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();  // Using useNavigate hook to redirect to login page

  useEffect(() => {
    const inform = localStorage.getItem("user");
    const userObj = JSON.parse(inform);
    setUser(userObj);
  }, []);

  // If the user is not logged in, show the login prompt.
  if (!user) {
    return (
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        textAlign="center"
        p={2}
        bgcolor="#f5f5f5"
      >
        <Typography variant="h4" color="error" fontWeight="bold">
          Access Denied
        </Typography>
        <Typography variant="h6" color="textSecondary" mb={4}>
          You must be logged in to view this page.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/register")}  // Navigate to the login page
          size="large"
        >
          Login
        </Button>
      </Box>
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;

