import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import firstImg from "../assets/mobile-head.svg";
import SecImg from "../assets/wireless-earbuds-head.svg";
import ThirdImg from "../assets/smart-watches-head.svg";
import fourthImg from "../assets/trimmers-shaver-head.svg";
import fifthImg from "../assets/power-banks-head.svg";
import sixImg from "../assets/mobile-chargers-head.svg";
import SevenImg from "../assets/bluetooth-speakers-head.svg";
import EightImg from "../assets/tablets-head.svg";




const HeroSection = () => {
  return (
    <Box className='bg-white border-b shadow-lg py-2'>
     
      <Box className="container mx-auto">

        <Box className="flex justify-center items-center">
       
    <Box className="flex flex-col items-center cursor-pointer w-full sm:w-1/3 md:w-1/8 lg:w-1/10 xl:w-1/12 hover:bg-gray-100 hover:border-b-2 hover:border-blue-500 transition-all duration-300">
            <img
              src={firstImg}
              alt="Mobiles"
              className="w-10 h-10 object-cover mb-2"
            />
            <Typography variant="body2" className="text-center text-xs">
              Mobiles
            </Typography>
          </Box>
       
          <Box className="flex flex-col items-center cursor-pointer w-full sm:w-1/6 md:w-1/8 lg:w-1/10 xl:w-1/12 hover:bg-gray-100 hover:border-b-2 hover:border-blue-500 transition-all duration-300">
            <img
              src={SecImg}
              alt="Wireless Earbuds"
              className="w-10 h-10 object-cover mb-2"
            />
            <Typography variant="body2" className="text-center text-xs">
              Wireless Earbuds
            </Typography>
          </Box>
          <Box className="flex flex-col items-center cursor-pointer w-full sm:w-1/6 md:w-1/8 lg:w-1/10 xl:w-1/12 hover:bg-gray-100 hover:border-b-2 hover:border-blue-500 transition-all duration-300">
            <img
              src={ThirdImg}
              alt="Smart Watches"
              className="w-10 h-10 object-cover mb-2"
            />
            <Typography variant="body2" className="text-center text-xs">
              Smart Watches
            </Typography>
          </Box>
          <Box className="flex flex-col items-center cursor-pointer w-full sm:w-1/6 md:w-1/8 lg:w-1/10 xl:w-1/12 hover:bg-gray-100 hover:border-b-2 hover:border-blue-500 transition-all duration-300">
            <img
              src={fourthImg}
              alt="Trimmers Shaver"
              className="w-10 h-10 object-cover mb-2"
            />
            <Typography variant="body2" className="text-center text-xs">
              Trimmers Shaver
            </Typography>
          </Box>
          <Box className="flex flex-col items-center cursor-pointer w-full sm:w-1/6 md:w-1/8 lg:w-1/10 xl:w-1/12 hover:bg-gray-100 hover:border-b-2 hover:border-blue-500 transition-all duration-300">
            <img
              src={fifthImg}
              alt="Power Banks"
              className="w-10 h-10 object-cover mb-2"
            />
            <Typography variant="body2" className="text-center text-xs">
              Power Banks
            </Typography>
          </Box>
          <Box className="flex flex-col items-center cursor-pointer w-full sm:w-1/6 md:w-1/8 lg:w-1/10 xl:w-1/12 hover:bg-gray-100 hover:border-b-2 hover:border-blue-500 transition-all duration-300">
            <img
              src={sixImg}
              alt="Wall charges"
              className="w-10 h-10 object-cover mb-2"
            />
            <Typography variant="body2" className="text-center text-xs">
              Wall charges
            </Typography>
          </Box>
          <Box className="flex flex-col items-center cursor-pointer w-full sm:w-1/6 md:w-1/8 lg:w-1/10 xl:w-1/12 hover:bg-gray-100 hover:border-b-2 hover:border-blue-500 transition-all duration-300">
            <img
              src={SevenImg}
              alt="Bluetooth speakers"
              className="w-10 h-10 object-cover mb-2"
            />
            <Typography variant="body2" className="text-center text-xs">
              Bluetooth speakers
            </Typography>
          </Box>
          <Box className="flex flex-col items-center cursor-pointer w-full sm:w-1/6 md:w-1/8 lg:w-1/10 xl:w-1/12 hover:bg-gray-100 hover:border-b-2 hover:border-blue-500 transition-all duration-300">
            <img
              src={EightImg}
              alt="Tablets"
              className="w-10 h-10 object-cover mb-2"
            />
            <Typography variant="body2" className="text-center text-xs">
              Tablets
            </Typography>
          </Box>
         
        </Box>
    
      </Box>
    </Box>
  );
};

export default HeroSection;
