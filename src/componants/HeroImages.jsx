import React from "react";
import FirstImage from "../assets/credit-hero.jpg";
import SecImage from "../assets/samsung-price-hero.jpg";
import thirdImage from "../assets/pakistan-price-hero.jpg";
import FourthImage from "../assets/frre-repairs-hero.jpg";
import FifthImage from "../assets/vaaada-hero.jpg";
import sixthImage from "../assets/order-hero.jpg";
import SevenImage from "../assets/bike-hero.jpg";
import SubHeroImage from '../assets/sale-campaign-banner-p8vzf.gif'
import { Box } from "@mui/material";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

const HeroImages = () => {
  return (
    <>
      <Box className="my-12">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          autoplay={{
            enabled: true,
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={FirstImage} alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={SecImage} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={thirdImage} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={FourthImage} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={FifthImage} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={sixthImage} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={SevenImage} alt="" />
          </SwiperSlide>
        </Swiper>
      </Box>
      <Box>
        <img src={SubHeroImage} alt="" />
      </Box>
    </>
  );
};

export default HeroImages;
