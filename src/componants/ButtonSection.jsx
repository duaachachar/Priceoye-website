import { Box, Button, Typography } from "@mui/material";
import React from "react";
import firstImg from "../assets/samsung-logo.svg";
import SEcImg from "../assets/infinix.svg";
import thirdImg from "../assets/oppo.svg";
import fourthImg from "../assets/xiaomi.svg";
import fifthImg from "../assets/vivo.svg";
import sixImg from "../assets/tecno.svg";
import sevenImg from "../assets/realme.svg";
import eightImg from "../assets/itel.svg";
import nineImg from "../assets/apple.svg";
import tenImg from "../assets/nokia.svg";

const ButtonSection = () => {
  return (
    <Box className="container mx-auto mt-[200px]">
      <Box className="flex justify-between mx-5 my-5">
        <Typography variant="h6" className="font-bold">
        Shop by Price
        </Typography>
        <Button
          variant="outlined"
          className="!bg-white !text-black !font-bold border"
        >
          View All
        </Button>
      </Box>
      <Box className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
        <Box>
          <Button
            variant="contained"
            className="w-full h-full !bg-yellow-300 !text-black relative overflow-hidden group"
          >
            <span className="absolute inset-0 bg-blue-400 scale-y-0 group-hover:scale-y-100 transform origin-bottom transition-transform duration-300 ease-in-out"></span>
            <span className="relative z-10"> Below RS 15000</span>
          </Button>
        </Box>
        <Box>
          <Button
            variant="contained"
            className="w-full h-full !bg-yellow-300 !text-black relative overflow-hidden group"
          >
            <span className="absolute inset-0 bg-blue-400 scale-y-0 group-hover:scale-y-100 transform origin-bottom transition-transform duration-300 ease-in-out"></span>
            <span className="relative z-10"> Rs, 15000- Rs 25000</span>
          </Button>
        </Box>
        <Box>
          <Button
            variant="contained"
            className="w-full h-full !bg-yellow-300 !text-black relative overflow-hidden group"
          >
            <span className="absolute inset-0 bg-blue-400 scale-y-0 group-hover:scale-y-100 transform origin-bottom transition-transform duration-300 ease-in-out"></span>
            <span className="relative z-10"> Rs 25000- Rs 40000</span>
          </Button>
        </Box>
        <Box>
          <Button
            variant="contained"
            className="w-full h-full !bg-yellow-300 !text-black relative overflow-hidden group"
          >
            <span className="absolute inset-0 bg-blue-400 scale-y-0 group-hover:scale-y-100 transform origin-bottom transition-transform duration-300 ease-in-out"></span>
            <span className="relative z-10"> Rs 40000- Rs 60000</span>
          </Button>
        </Box>
        <Box>
          <Button
            variant="contained"
            className="w-full h-full !bg-yellow-300 !text-black relative overflow-hidden group"
          >
            <span className="absolute inset-0 bg-blue-400 scale-y-0 group-hover:scale-y-100 transform origin-bottom transition-transform duration-300 ease-in-out"></span>
            <span className="relative z-10"> Rs 60000- Rs 80000</span>
          </Button>
        </Box>
        <Box>
          <Button
            variant="contained"
            className="w-full h-full !bg-yellow-300 !text-black relative overflow-hidden group"
          >
            <span className="absolute inset-0 bg-blue-400 scale-y-0 group-hover:scale-y-100 transform origin-bottom transition-transform duration-300 ease-in-out"></span>
            <span className="relative z-10"> Rs 80000- Rs 100000</span>
          </Button>
        </Box>
        <Box>
          <Button
            variant="contained"
            className="w-full h-full !bg-yellow-300 !text-black relative overflow-hidden group"
          >
            <span className="absolute inset-0 bg-blue-400 scale-y-0 group-hover:scale-y-100 transform origin-bottom transition-transform duration-300 ease-in-out"></span>
            <span className="relative z-10"> Rs 100000- Rs 1500000</span>
          </Button>
        </Box>
        <Box>
          <Button
            variant="contained"
            className="w-full h-full !bg-yellow-300 !text-black relative overflow-hidden group"
          >
            <span className="absolute inset-0 bg-blue-400 scale-y-0 group-hover:scale-y-100 transform origin-bottom transition-transform duration-300 ease-in-out"></span>
            <span className="relative z-10">Above Rs 1500000</span>
          </Button>
        </Box>
      </Box>
      <Box className="flex justify-between mx-5 my-12">
        <Typography variant="h6" className="font-bold ">
        Shop by Brand
        </Typography>
        <Button
          variant="outlined"
          className="!bg-white !text-black !font-bold border"
        >
          View All
        </Button>
      </Box>
      <Box className="flex justify-between flex-wrap gap-2">
        {[
          firstImg,
          SEcImg,
          thirdImg,
          fourthImg,
          fifthImg,
          sixImg,
          sevenImg,
          eightImg,
          nineImg,
          tenImg,
        ].map((imgSrc, index) => (
          <Box
            key={index}
            className="w-20 h-20 flex justify-between items-center"
          >
            <img src={imgSrc} alt="" className="w-full h-full object-cover" />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ButtonSection;
