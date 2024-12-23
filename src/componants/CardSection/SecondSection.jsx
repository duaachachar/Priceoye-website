import React from "react";
import Banner from "../../assets/banner-4.png";
import { Box, Button, Card, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import Img1 from "../../assets/yolo-ultron-smart-watch-card-3-section.webp";
import Img2 from "../../assets/samsung-galaxy-fit-3-with-card-3-section.webp";
import Img3 from "../../assets/g-tide-r1-smart-watch-pakistan-card-3-section.webp";
import Img4 from "../../assets/card-3.webp";
import Img5 from "../../assets/ultra-smart-watch-7-in-card-3-section.webp";
import Img6 from "../../assets/samsung-galaxy-watch-6-bluetooth-card-3-section.webp";
import Img7 from "../../assets/huawei-band-9-card-3-section.webp";
import Img8 from "../../assets/hk9-pro-max-plus-smartwatch-card-3-section.webp";
import Img9 from "../../assets/mibro-watch-lite-3-card-3-section.webp";
import Img10 from "../../assets/xiaomi-redmi-watch-5-card-3-section.webp";
import Img11 from "../../assets/realme-watch-pakistan-card-3-section.webp";
import Img12 from "../../assets/card-3-6.webp";
import saleImg from "../../assets/12.12-sale.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import "./firstsection.css";

// import required modules
import { EffectCreative, Grid } from "swiper/modules";

const AllProducts = [
  {
    Image: Img1,
    SaleImg: saleImg,
    reviews: "Ultra Smart Watch With 7 Straps",
    price: 1679,
    oldPrice: 60000,
    percent: "30% off",
  },
  {
    Image: Img2,
    SaleImg: saleImg,
    reviews: "HK9 PRO Max Plus Smartwatch",
    price: 5799,
    oldPrice: 7399,
    percent: "30% off",
  },
  {
    Image: Img3,
    SaleImg: saleImg,
    reviews: "yOLO Ultron Smart Watch",
    price: 7999,
    oldPrice: 20000,
    percent: "33% off",
  },
  {
    Image: Img4,
    SaleImg: saleImg,
    reviews: "Realme smart watches",
    price: 4611,
    oldPrice: 7199,
    percent: "36% off",
  },
  {
    Image: Img5,
    SaleImg: saleImg,
    reviews: "G-TiDE R1 Smart Watch",
    price: 4899,
    oldPrice: 14000,
    percent: "36% off",
  },
  {
    Image: Img6,
    SaleImg: saleImg,
    reviews: "Samsung Galaxy Buds 3 Pro",
    price: 49799,
    oldPrice: 6999,
    percent: "29% off",
  },
  {
    Image: Img7,
    SaleImg: saleImg,
    reviews: "Samsung Galaxy Fit 3 With OneYear Brand Warranty",
    price: 13499,
    oldPrice: 6999,
    percent: "16% off",
  },
  {
    Image: Img8,
    SaleImg: saleImg,
    reviews: "Mibro Watch Lite 3 With Dual",
    price: 14999,
    oldPrice: 6000,
    percent: "8% off",
  },
  {
    Image: Img9,
    SaleImg: saleImg,
    reviews: "Mibro Watch Lite 3 With Dual Strap",
    price: 11999,
    oldPrice: 10500,
    percent: "50% off",
  },
  {
    Image: Img10,
    SaleImg: saleImg,
    reviews: "HUAWEI Band 9",
    price: 7899,
    oldPrice: 9999,
    percent: "62% off",
  },
  {
    Image: Img11,
    SaleImg: saleImg,
    reviews: "Xiaomi Redmi Watch 5 Active",
    price: 8699,
    oldPrice: 6999,
    percent: "44% off",
  },
  {
    Image: Img12,
    SaleImg: saleImg,
    reviews: "Apple AirPods 4 Active Noise Cancellation",
    price: 56999,
    oldPrice: 95999,
    percent: "41% off",
  },
];

const SecondSection = () => {
  return (
    <Box className="relative">
      <Box className="w-full mt-7 relative">
        <img
          src={Banner}
          alt=""
          srcSet=""
          className="w-full h-[65vh] object-cover tablet-height"
        />
      </Box>

      <Box className="container mx-auto px-0 sm:px-4 md:px-6 lg:px-8 xl:px-12">
        <Box className="container mx-auto absolute top-16 z-10">
          <Box className="flex justify-between mx-5">
            <Typography variant="h6" className="text-white font-bold">
              Latest Smart Watches
            </Typography>
            <Button
              variant="contained"
              className="!bg-white !text-black !font-bold"
            >
              View All
            </Button>
          </Box>
          <Box className="py-5">
            <Swiper
              slidesPerView={2}
              spaceBetween={12}
              grid={{
                rows: 2,
                fill: "row",
              }}
              grabCursor={true}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
              modules={[Grid, EffectCreative]}
              className="mySwiper"
            >
              {AllProducts?.map((item, index) => (
                <SwiperSlide key={index}>
                  <Card className="shadow-lg shadow-slate-300 relative w-full">
                    <Box className="w-full pt-4">
                      <img
                        style={{ width: "8rem", height: "auto" }}
                        className="mx-auto object-contain"
                        src={item?.Image}
                        alt="Main Image"
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

                    <Box className="flex ms-5">
                      <Box className="flex items-center bg-orange-100 px-2 rounded-lg w-1/2 mt-0">
                        <span className="text-yellow-500 text-sm">★</span>
                        <Typography variant="body2" className="ml-1 font-bold">
                         4.8 reviews
                        </Typography>
                      </Box>
                    </Box>

                    <Box className="p-4">
                      <Typography
                        variant="body2"
                        className="text-sm font-bold truncate my-2"
                      >
                        {item?.reviews}
                      </Typography>

                      <Typography
                        variant="h6"
                        className="text-lg font-bold text-black"
                      >
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

export default SecondSection;

