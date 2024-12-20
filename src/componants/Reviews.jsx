import { Box, Typography } from "@mui/material";
import React from "react";
import firstImg from "../assets/1st.jpeg";
import SEcImg from "../assets/2snd.jpg";
import thirdImg from "../assets/3rd.jpg";
import fourthImg from "../assets/4th.jpg";
import fifthImg from "../assets/5th.jpg";
import sixImg from "../assets/6th.jpg";
import sevenImg from "../assets/7th.jpg";
import eightImg from "../assets/8th.jpg";
import nineImg from "../assets/9th.jpeg";
import tenImg from "../assets/10th.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./video.css";

const Reviews = () => {
  return (
    <Box className="container mx-auto mt-14">
      <Box className="text-center my-5">
        <Typography variant="h6" className="font-bold">
          Customer Reviews
        </Typography>
        <Typography variant="body2" className="text-sm text-gray-800">
          What our Customers say about Priceoye.pk
        </Typography>
      </Box>
      <Box className="flex flex-wrap gap-2">
        <Swiper
          slidesPerView={9}
          centeredSlides={false}
          spaceBetween={10}
          grabCursor={true}
          breakpoints={{
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 6,
            },
            1024: {
              slidesPerView: 9,
            },
          }}
          modules={[EffectCreative]}
          className="mySwiper"
        >
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
            <SwiperSlide key={index}>
              <Box className="flex justify-center items-center">
                <img
                  src={imgSrc}
                  alt=""
                  className="object-contain rounded-md"
                />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default Reviews;
