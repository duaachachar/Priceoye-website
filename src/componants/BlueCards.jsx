import { Box, Button, Typography } from "@mui/material";
import React from "react";
import firstImg from "../assets/extended-warranty-card-image-1.svg";
import SecImg from "../assets/order-packaging-card-image-2.svg";
import ThirdImg from "../assets/feature-shipping-card-image-3.svg";
import fourthImg from "../assets/easy_instalment-card-image-4.svg";

const BlueCards = () => {
  return (
    <Box className="container">
      <Box className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <Box className="flex items-center justify-around bg-blue-600 p-5">
          <Box>
            <img src={firstImg} alt="" srcset="" />
          </Box>
          <Box className="text-center">
            <Typography variant="h5" className="text-white">
              Priceoye
              <br />
              Extended Warranty
            </Typography>
            <Button variant="contained" className="!bg-orange-500 text-white">
              Know more
            </Button>
          </Box>
        </Box>
        <Box className="flex items-center justify-around bg-blue-600 p-5">
          <Box>
            <img src={SecImg} alt="" srcset="" />
          </Box>
          <Box className="text-center">
            <Typography variant="h5" className="text-white">
              Packaging
              <br />
              Video
            </Typography>
            <Button variant="contained" className="!bg-orange-500 text-center">
              Know more
            </Button>
          </Box>
        </Box>
        <Box className="flex items-center justify-around bg-blue-600 p-5">
          <Box>
            <img src={ThirdImg} alt="" srcset="" />
          </Box>
          <Box className="text-center">
            <Typography variant="h5" className="text-white">
              Open Parcel
              <br />
              (ISB - LHR - KHI)
            </Typography>
            <Button variant="contained" className="!bg-orange-500 text-center">
              Know more
            </Button>
          </Box>
        </Box>
        <Box className="flex items-center justify-around bg-blue-600 p-5">
          <Box>
            <img src={fourthImg} alt="" srcset="" />
          </Box>
          <Box className="text-center">
            <Typography variant="h5" className="text-white">
              Easy
              <br />
              Installments
            </Typography>
            <Button variant="contained" className="!bg-orange-500 text-white">
              Know more
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BlueCards;
