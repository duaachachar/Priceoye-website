import { Box, Typography } from "@mui/material";
import React from "react";
import error from '../assets/404-image.svg';
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
   <>
   <Navbar/>
    <Box className="container mx-auto pt-12">
      <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <Box>
          <Typography variant="h5" className="text-sky-500 my-2">
            PAGE NOT FOUND
          </Typography>
          <Typography variant="h6" className="text-gray-500 my-2">
            Possible Reasons
          </Typography>
          {/* Apply tailwind class for unordered list with bullets */}
          <ul className="list-disc pl-5  my-2">
            <li>Internet Connection Error.</li>
            <li>The address may have been typed incorrectly.</li>
            <li>It may be a broken or outdated link.</li>
          </ul>
          <Typography variant="h6" className="text-sky-500"><Link to='/'>GO BACK</Link></Typography>
        </Box>
        <Box>
          <img src={error} alt="Error 404" />
        </Box>
      </Box>
    </Box>
   </>
  );
};

export default ErrorPage;
