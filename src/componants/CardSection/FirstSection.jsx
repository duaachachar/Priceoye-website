import React from "react";
import Banner from "../../assets/banner-2-pink.png";
import { Box, Card } from "@mui/material";
// import { Swiper, SwiperSlide } from "swiper/react";
// import Img1 from "../../assets/redmi-card-1.webp";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/grid";
// import "swiper/css/pagination";

// // import required modules
// import { Grid, Pagination } from "swiper/modules";

const FirstSection = () => {
  return (
    <>
      <Box className="w-full mt-7 ">
        <img src={Banner} alt="" srcset="" className="w-full" />
      </Box>
      {/* <Swiper
        slidesPerView={4}
        grid={{
          rows: 2,
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className="mySwiper"
      >
        <Box className="container mx-auto">
          <Box className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5 py-5">
            <SwiperSlide>
              <Card className="bg-gray-300 shadow-lg shadow-slate-300">
                <img src={Img1} alt="" srcset="" />
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card className="bg-gray-300 shadow-lg shadow-slate-300">
                <img src={Img1} alt="" srcset="" />
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card className="bg-gray-300 shadow-lg shadow-slate-300">
                <img src={Img1} alt="" srcset="" />
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card className="bg-gray-300 shadow-lg shadow-slate-300">
                <img src={Img1} alt="" srcset="" />
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card className="bg-gray-300 shadow-lg shadow-slate-300">
                <img src={Img1} alt="" srcset="" />
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card className="bg-gray-300 shadow-lg shadow-slate-300">
                <img src={Img1} alt="" srcset="" />
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card className="bg-gray-300 shadow-lg shadow-slate-300">
                <img src={Img1} alt="" srcset="" />
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card className="bg-gray-300 shadow-lg shadow-slate-300">
                <img src={Img1} alt="" srcset="" />
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card className="bg-gray-300 shadow-lg shadow-slate-300">
                <img src={Img1} alt="" srcset="" />
              </Card>
            </SwiperSlide>
          </Box>
        </Box>
      </Swiper> */}
    </>
  );
};

export default FirstSection;
