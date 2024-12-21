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

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./video.css";

const items = [
  { img: firstImg, label: "Mobiles" },
  { img: SecImg, label: "Wireless Earbuds" },
  { img: ThirdImg, label: "Smart Watches" },
  { img: fourthImg, label: "Trimmers Shaver" },
  { img: fifthImg, label: "Power Banks" },
  { img: sixImg, label: "Wall Charges" },
  { img: SevenImg, label: "Bluetooth Speakers" },
  { img: EightImg, label: "Tablets" },
];

const HeroSection = () => {
  return (
    <Box className="bg-white">
      <Box className="container mx-auto ">
        <Box className="flex flex-wrap">
          <Swiper
            slidesPerView={3} 
            centeredSlides={false}
            spaceBetween={0}
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
            {items.map((item, index) => (
              <SwiperSlide key={index}>
                <Box
                  className="flex flex-col items-center justify-around cursor-pointer hover:bg-gray-100 hover:border-b-2 hover:border-blue-500 transition-all duration-300 py-2"
                  style={{ minHeight: "90px", maxHeight: "90px" }}
                >
                  <Box
                    sx={{
                      minHeight: "40px",
                      maxHeight: "40px",
                      minWidth: "40px",
                      maxWidth: "40px",
                    }}
                  >
                    <img
                      src={item.img}
                      alt={item.label}
                      className="object-cover rounded-md"
                    />
                  </Box>
                  <Typography variant="body2" className="text-center text-xs">
                    {item.label}
                  </Typography>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;

// // export default HeroSection;

// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectCreative } from "swiper/modules";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

// import "./video.css";

// const HeroSection = () => {
//   return (
//     <Box className="container mx-auto ">
//       <Box className="flex flex-wrap">
//         <Swiper
//           slidesPerView={9}
//           centeredSlides={false}
//           spaceBetween={0}
//           grabCursor={true}
//           breakpoints={{
//             640: {
//               slidesPerView: 3,
//             },
//             768: {
//               slidesPerView: 6,
//             },
//             1024: {
//               slidesPerView: 9,
//             },
//           }}
//           modules={[EffectCreative]}
//           className="mySwiper"
//         >
//           {[
//             firstImg,
//             SecImg,
//             ThirdImg,
//             fourthImg,
//             fifthImg,
//             sixImg,
//             SevenImg,
//             EightImg,

//           ].map((imgSrc, index) => (
//             <SwiperSlide key={index}>
//               <Box className="flex justify-center items-center">
//                 <img
//                   src={imgSrc}
//                   alt=""
//                   className="object-contain rounded-md"
//                 />
//               </Box>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </Box>
//     </Box>
//   );
// };

// export default HeroSection;
