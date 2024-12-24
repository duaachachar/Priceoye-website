import React from "react";
import Banner from "../../assets/banner-2-pink.png";
import { Box, Button, Card, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import productData from "../../data/Productdata.json";


import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import "./firstsection.css";

import { EffectCreative, Grid } from "swiper/modules";
import { useNavigate } from "react-router-dom";

const FirstSection = () => {
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/card-detail/${id}`);
  };
 
  return (
    <Box className="relative">
      <Box className="w-full mt-7 relative">
        <img
          src={Banner}
          alt="Banner"
          className="w-full h-[65vh] object-cover tablet-height"
        />
      </Box>

      <Box className="container mx-auto px-0 sm:px-4 md:px-6 lg:px-8 xl:px-12">
        <Box className="container mx-auto absolute top-16 z-10">
          <Box className="flex justify-between mx-5">
            <Typography variant="h6" className="text-white font-bold">
              Latest Wireless Earbuds
            </Typography>
            <Button
              variant="contained"
              className="!bg-white !text-black !font-bold hover:!bg-gray-200 transition"
            >
              View All
            </Button>
          </Box>
          <Box className="py-5">
            <Swiper
              slidesPerView={2}
              spaceBetween={12}
              grid={{ rows: 2, fill: "row" }}
              grabCursor={true}
              breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
              }}
              modules={[Grid, EffectCreative]}
              className="mySwiper"
            >
              {productData.map((item, index) => (
                <SwiperSlide key={index}>
                  <Card
                    className="shadow-lg shadow-slate-300 relative w-full"
                    onClick={() => handleNavigate(item.id)}
                  >
                    <Box className="w-full pt-4">
                      <img
                        className="mx-auto object-contain"
                        src={item?.Image}
                        alt="img"
                        style={{ maxWidth: "8rem", height: "auto" }}
                    
                      />
                    </Box>

                    <Box className="absolute top-4 right-4">
                      <img
                        style={{ width: "4rem", height: "auto" }}
                        className="object-contain"
                        src={item?.SaleImg}
                        alt="Sale"
                      />
                    </Box>

                    <Box
                      className="p-4 cursor-pointer">
                      <Typography
                        variant="body2"
                        className="text-sm font-bold truncate my-2"
                      >
                        {item?.reviews}
                      </Typography>

                      <Typography variant="h6" className="text-lg font-bold text-black">
                        RS {item.price}
                      </Typography>

                      <Box className="flex justify-between items-center space-x-2 mt-1">
                        <span className="text-gray-500 line-through">
                          Rs {item?.oldPrice}
                        </span>
                        <Box className="bg-gray-100 px-2 py-1 rounded-lg">
                          <span className="text-green-500 text-sm">
                            {item?.percent}
                          </span>
                        </Box>
                      </Box>
                    </Box>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FirstSection;
