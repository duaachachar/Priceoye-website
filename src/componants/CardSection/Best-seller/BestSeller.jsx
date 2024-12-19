import { Box, Card, Typography } from "@mui/material";
import React from "react";
import Img1 from "../../../assets/anker-soundcore-card-2-section.webp";
import Img2 from "../../../assets/xiaomi-smart-band-card-2-section.webp";
import Img3 from "../../../assets/samsung-galaxy-buds-2-card-2.webp";
import Img4 from "../../../assets/Poco-pad-card-2.webp";
import Img5 from "../../../assets/zeblaze-btalk-2-calling-watch-card-2.webp";
import saleImg from "../../../assets/12.12-sale.png";

const AllProducts = [
  {
    Image: Img2,
    SaleImg: saleImg,
    title: "Xiaomi Smart Band8 Active",
    reviews: "5.3 reviews",
    price: 5599,
    oldPrice: 24000,
    percent: "34% off",
  },
  {
    Image: Img3,
    SaleImg: saleImg,
    title: "Samsung GalaxyBuds 2 Pro",
    reviews: "9.7 reviews",
    price: 26999,
    oldPrice: 39000,
    percent: "34% off",
  },
  {
    Image: Img4,
    SaleImg: saleImg,
    title: "Anker Soundcore Liberty 4 NC Earbuds",
    reviews: "9.7 reviews",
    price: 73999,
    oldPrice: 110000,
    percent: "12% off",
  },
  {
    Image: Img5,
    SaleImg: saleImg,
    title: "Zeblaze Btalk 2Calling Watch",
    reviews: "9.7 reviews",
    price: 7899,
    oldPrice: 8999,
    percent: "23% off",
  },
];

const BestSeller = () => {
  return (
    <Box className="my-5">
      <Box className="text-center my-5">
        <Typography variant="h6" className="!font-bold">Best Seller</Typography>
        <Typography variant="body1">Get the best prices in town</Typography>
      </Box>
      <Box className="container mx-auto">
        <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
          <Box className="">
            <Card className="shadow-lg shadow-slate-300 relative w-full h-full p-4">
              <Typography variant="body2" className="!font-bold">
                Anker Soundcore Liberty 4 NC Earbuds
              </Typography>
              <Box className="w-2/3 pt-4 mx-auto">
                <img
                  style={{ width: "w-full", height: "auto" }}
                  className=" object-contain"
                  src={Img1}
                  alt="Main Image"
                />
              </Box>

              <Box className="absolute top-4 right-4">
                <img
                  style={{ width: "6rem", height: "auto" }}
                  className="object-contain"
                  src={saleImg}
                  alt="Sale"
                />
              </Box>

              <Box className='flex justify-center'>
                <Box className="flex items-center bg-orange-100 px-2 rounded-lg w-1/3 ms-4 mt-0">
                  <span className="text-yellow-500 text-lg">★</span>
                  <Typography variant="body2" className="ml-1 font-bold">
                    9.7 reviews
                  </Typography>
                </Box>
              </Box>

              <Box className="p-4 mt-9">
        

                <Typography
                  variant="h6"
                  className="text-lg font-bold text-black"
                >
                  RS 15799
                </Typography>

                <Box className="flex justify-between items-center space-x-2 mt-1">
                  <span className="text-gray-500 line-through">Rs 24000</span>
                  <Box className="bg-gray-100 px-2 py-1 rounded-lg">
                    <span className="text-green-500 text-sm">34% off</span>
                  </Box>
                </Box>
              </Box>
            </Card>
          </Box>
          <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
            {AllProducts?.map((items) => {
              return (
                <Card className="shadow-lg shadow-slate-300 relative w-full p-4">
                  <Box className="w-full pt-4 flex space-between">
                    <Typography
                      variant="body2"
                      className="text-sm !font-bold truncate my-2 "
                    >
                      {items?.title}
                    </Typography>
                    <img
                      style={{ width: "8rem", height: "auto" }}
                      className="mx-auto object-contain"
                      src={items?.Image}
                      alt="Main Image"
                    />
                  </Box>

                  <Box className="absolute top-4 right-4">
                    <img
                      style={{ width: "4rem", height: "auto" }}
                      className="object-contain"
                      src={items?.SaleImg}
                      alt="Sale"
                    />
                  </Box>

                  <Box className="flex justify-end">
                    <Box className="flex  items-center bg-orange-100 px-2 rounded-lg w-1/2 mt-0">
                      <span className="text-yellow-500 text-sm">★</span>
                      <Typography variant="body2" className="ml-1 font-bold">
                        {items?.reviews}
                      </Typography>
                    </Box>
                  </Box>

                  <Box className="p-4">
                    <Typography
                      variant="h6"
                      className="text-lg font-bold text-black"
                    >
                      RS {items?.price}
                    </Typography>

                    <Box className="flex justify-between items-center space-x-2 mt-1">
                      <span className="text-gray-500 line-through">
                        Rs {items?.oldPrice}
                      </span>
                      <Box className="bg-gray-100 px-2 py-1 rounded-lg">
                        <span className="text-green-500 text-sm">
                          {items?.percent}
                        </span>
                      </Box>
                    </Box>
                  </Box>
                </Card>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BestSeller;
