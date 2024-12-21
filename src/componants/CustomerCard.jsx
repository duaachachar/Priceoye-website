import { Box, Card, Typography } from "@mui/material";
import React from "react";

const CardData = [
  {
    name: "SA",
    title: "Shaheer Ashfaq",
    date: "18 December 2024",
    detail: `Original Product Brand New 100% Satisfy`,
  },
  {
    name: "FS",
    title: "Faris Sajjad",
    date: "17 December 2024",
    detail: `I'm extremely satisfied with my purchase of the Apple charger! The delivery was incredibly fast, and I received the product within a few days of...`,
  },

  {
    name: "SK",
    title: "Saim Khan",
    date: "18 December 2024",
    detail: `Its my 6th order from pricoye ever Time i find them up to the mark phone was amazing Fastest delivery time best online platform for mobile...`,
  },
];

const CustomerCard = () => {
  return (
    <Box className="container mx-auto my-10">
      <Box className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {CardData?.map((item, index) => (
          <Card key={index} className="w-full h-full p-5">
            <Box className="flex justify-between">
              <Box className="flex">
                <Box>
                  <Typography
                    variant="h5"
                    className="bg-gray-300 p-4 rounded-full text-gray-500"
                  >
                    {item?.name}
                  </Typography>
                </Box>
                <Box className="m-3 ms-7">
                  <Typography variant="body2" className="text-sm text-sky-500">
                    {item?.title}
                  </Typography>
                  <Box className="flex space-x-1 text-xl">
                    <span className="text-yellow-500">★</span>
                    <span className="text-yellow-500">★</span>
                    <span className="text-yellow-500">★</span>
                    <span className="text-yellow-500">★</span>
                    <span className="text-yellow-500">★</span>
                  </Box>
                  <Typography variant="body2">{item?.date}</Typography>
                </Box>
              </Box>
              <Box>
                <Box className="flex items-center mt-2">
                  <Box className="w-full">
                    <img
                      src={"https://static.priceoye.pk/icons/verified-user.svg"}
                      alt=""
                    />
                  </Box>
                  <Typography variant="body2" className="text-green-600">
                    Verified
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Typography variant="body2" className="text-gray-600">
              {item?.detail}
            </Typography>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default CustomerCard;
