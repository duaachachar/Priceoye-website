import React from "react";
import FirstImage from "../assets/credit-hero.jpg";
import SecImage from "../assets/samsung-price-hero.jpg";
import thirdImage from "../assets/pakistan-price-hero.jpg";
import FourthImage from "../assets/frre-repairs-hero.jpg";
import FifthImage from "../assets/vaaada-hero.jpg";
import sixthImage from "../assets/order-hero.jpg";
import SevenImage from "../assets/bike-hero.jpg";
import SubHeroImage from "../assets/sale-campaign-banner-p8vzf.gif";
import { Box } from "@mui/material";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// Material-UI Icons
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

const HeroImages = () => {
  return (
    <div className="relative w-full">
      {/* Hero Section */}
      <Box className="my-8 relative">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          autoplay={{
            enabled: true,
            delay: 3000,
          }}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          {/* Swiper Slides */}
          {[
            FirstImage,
            SecImage,
            thirdImage,
            FourthImage,
            FifthImage,
            sixthImage,
            SevenImage,
          ].map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full object-cover rounded-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="custom-prev bg-gray-600 absolute top-1/2 left-4 transform -translate-y-1/2 z-10 cursor-pointer text-white hover:text-gray-900">
          <ArrowBackIcon className="text-4xl" />
        </div>
        <div className="custom-next bg-gray-600 absolute top-1/2 right-4 transform -translate-y-1/2 z-10 cursor-pointer text-white hover:text-gray-900">
          <ArrowForwardIcon className="text-4xl" />
        </div>
      </Box>

      {/* Sub Hero Section */}
      <Box className="mt-8">
        <img
          src={SubHeroImage}
          alt="Sub Hero"
          className="w-full object-cover rounded-lg shadow-lg"
        />
      </Box>
    </div>
  );
};

export default HeroImages;
