import { Box, Typography } from "@mui/material";
import React from "react";
import logo from "../assets/header-logo.svg";

const Footer = () => {
  return (
   <Box className='bg-color'>
     <Box className="container mx-auto">
      <Box className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        <Box>
          <img src={logo} alt="" srcset="" />
          <ul>
            <li>About Us</li>
            <li>FAQs</li>
            <li>Contact Us</li>
            <li>Careers</li>
            <li>Press & Blog</li>
            <li>Terms & Condition</li>
          </ul>
        </Box>
        <Box>
            <Typography variant='h6'>Customer Service</Typography>
          <ul>
            <li>Help Center</li>
            <li>Privacy Policy</li>
            <li>Instalment plan</li>
            <li>E-Warranty Activation</li>
            <li>Sell On Priceoye</li>
          </ul>
        </Box>
        <Box></Box>
      </Box>
    </Box>
   </Box>
  );
};

export default Footer;
