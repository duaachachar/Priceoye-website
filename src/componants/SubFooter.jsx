import { Box, Typography } from "@mui/material";
import React from "react";
import wararnty from "../assets/approved-feature-1.svg";
import two from "../assets/warranty-feature-2.svg";
import three from "../assets/video-shooting-camera-3.svg";
import four from "../assets/shipping-feature-4.svg";

const SubFooter = () => {
  return (
    <Box className="bg-white my-5">
      <Box className="container mx-auto mt-[230px]  py-5">
        <Box className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4  py-5">
          <Box className="flex flex-col items-center justify-center text-center">
            <img src={wararnty} alt="" className="mb-2" />
            <Typography variant="h6">PTA Approved</Typography>
            <Typography variant="body2">Mobile Phone</Typography>
          </Box>

          <Box className="flex flex-col items-center justify-center text-center">
            <img src={two} alt="" className="mb-2" />
            <Typography variant="h6">1 Year</Typography>
            <Typography variant="body2">Brand Warranty</Typography>
          </Box>

          <Box className="flex flex-col items-center justify-center text-center">
            <img src={three} alt="" className="mb-2" />
            <Typography variant="h6">Packaging Video</Typography>
            <Typography variant="body2">See Your Product</Typography>
          </Box>

          <Box className="flex flex-col items-center justify-center text-center">
            <img src={four} alt="" className="mb-2" />
            <Typography variant="h6">Fast Delivery</Typography>
            <Typography variant="body2">All Over Pakistan</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SubFooter;
