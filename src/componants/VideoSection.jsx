import React from "react";
import Video1 from "../assets/influencer-thumbnail-video-3uenz.mp4";
import Video2 from "../assets/video-2.mp4";
import Video3 from "../assets/video-3.mp4";
import Video4 from "../assets/video-4.mp4";
import Video5 from "../assets/video-5.mp4";
import Video6 from "../assets/video-6.mp4";
import Video7 from "../assets/video-7.mp4";
import Video8 from "../assets/video-8.mp4";
import Video9 from "../assets/video-9.mp4";
import Video10 from "../assets/video-10.mp4";
import image1 from "../assets/video-1-image.jpeg";
import image2 from "../assets/video-image-2.jpg";
import image3 from "../assets/video-3-image.jpg";
import image4 from "../assets/video-4-image.jpg";
import image5 from "../assets/video-5-image.jpg";
import image6 from "../assets/video-6-image.jpg";
import image7 from "../assets/video-7-image.jpg";
import image8 from "../assets/video-8-image.jpg";
import image9 from "../assets/video-9-image.jpeg";
import image10 from "../assets/video-10-image.jpg";
import { Box, Card, Typography } from "@mui/material";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./video.css";

const Products = [
  {
    video: Video1,
    Img: image1,
    title: "Redmi Watch 5 Lite",
    price: 12339,
    OldPrice: 15999,
    Reviews: "4.8 reviews",
    percent: "23% off",
  },
  {
    video: Video2,
    Img: image2,
    title: "   Anker A30i ANC Wireless Bluetooth Earbuds A3958H21",
    price: 7243,
    OldPrice: 9000,
    Reviews: "5.0 reviews",
    percent: "20% off",
  },
  {
    video: Video3,
    Img: image3,
    title: "JS Watch 6 Classic SmartWatch",
    price: 4799,
    OldPrice: 6500,
    Reviews: "5.0 reviews",
    percent: "26% off",
  },
  {
    video: Video4,
    Img: image4,
    title: " Lenovo Thinkplus Livepods XT81",
    price: 2999,
    OldPrice: 3750,
    Reviews: "4.7 reviews",
    percent: "20% off",
  },
  {
    video: Video5,
    Img: image5,
    title: "Zero Royale SmartWatch",
    price: 11999,
    OldPrice: 31999,
    Reviews: "4.8 reviews",
    percent: "63% off",
  },
  {
    video: Video6,
    Img: image6,
    title: "HUWAEI Band 9",
    price: 9399,
    OldPrice: 20000,
    Reviews: "5.0 reviews",
    percent: "53% off",
  },
  {
    video: Video7,
    Img: image7,
    title: "Anker R50i Earbuds",
    price: 4611,
    OldPrice: 7199,
    Reviews: "4.7 reviews",
    percent: "36% off",
  },
  {
    video: Video8,
    Img: image8,
    title: "Itel S24",
    price: 25299,
    OldPrice: 33999,
    Reviews: "4.8 reviews",
    percent: "26% off",
  },
  {
    video: Video9,
    Img: image9,
    title: "Apple AirPods 4 Active NoiseCancellation I",
    price: 56999,
    OldPrice: 95999,
    Reviews: "5.0 reviews",
    percent: "41% off",
  },
  {
    video: Video10,
    Img: image10,
    title: "Audionic Airbud 590",
    price: 3811,
    OldPrice: 9990,
    Reviews: "4.8 reviews",
    percent: "62% off",
  },
];

const VideoSection = () => {
  return (
    <Box className="container mx-auto my-7 mt-[230px]">
      <Box className="text-center my-5">
        <Typography variant="h6">Loved and Recommended</Typography>
        <Typography variant="body1">
          Influencers talk about priceoye as a trusted brand
        </Typography>
      </Box>
      <Swiper
        slidesPerView={2} // Default value for mobile
        centeredSlides={false}
        spaceBetween={20}
        grabCursor={true}
        breakpoints={{
          640: {
            slidesPerView: 2, // Mobile screens
          },
          768: {
            slidesPerView: 3, // Tablet screens
          },
          1024: {
            slidesPerView: 5, // Laptop/Desktop screens
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper"
      >
        {Products?.map((items, index) => {
          return (
            <SwiperSlide key={index}>
              <Card className="w-full max-w-md h-96 shadow-lg rounded-lg relative">
                <video
                  className="w-full h-48 object-cover rounded-t-lg"
                  autoPlay
                  muted
                  loop
                >
                  <source src={items?.video} type="video/mp4" />
                </video>

                <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-t-lg shadow-lg flex items-center justify-center">
                  <img
                    src={items?.Img}
                    alt="Overlay"
                    className="w-full h-full object-contain rounded-t-lg"
                  />
                </Box>

                <Box className="p-4 mt-8">
                  <Typography
                    variant="body2"
                    className="text-sm font-bold truncate my-2"
                  >
                    {items?.title}
                  </Typography>

                  <Box>
                    <Typography
                      variant="h6"
                      className="text-lg font-bold text-black"
                    >
                      Rs {items?.price}
                    </Typography>
                    <span className="text-gray-500 line-through">
                      Rs {items?.OldPrice}
                    </span>
                  </Box>

                  <Box className="flex justify-between items-center space-x-2 mt-4">
                    <Box className="flex items-center bg-yellow-100 px-2 py-1 rounded-lg">
                      <span className="text-yellow-500 text-lg">★</span>
                      <Typography variant="body2" className="ml-1 font-bold">
                        {items?.Reviews}
                      </Typography>
                    </Box>
                    <Box className="bg-gray-100 px-2 py-1 rounded-lg">
                      <span className="text-green-500 text-sm">
                        {items?.percent}
                      </span>
                    </Box>
                  </Box>
                </Box>
              </Card>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};

export default VideoSection;
