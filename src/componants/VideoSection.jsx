import React from "react";
import Video1 from "../assets/influencer-thumbnail-video-3uenz.mp4";
import { Box, Card, Typography } from "@mui/material";

const Products = [
  {
    video: Video1,
    title: "Redmi Watch 5 Lite",
    price: 12339,
    OldPrice: 15999,
    Reviews: "4.8 reviews",
    percent:'23% off'
  },
];

const VideoSection = () => {
  return (
    <Box className="container mx-auto">
      <Box className="grid grid-cols-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <Card className="w-full p-0">
          <video className="w-full h-80 object-cover" autoPlay muted loop>
            <source src={Video1} type="video/mp4" />
          </video>
          <Typography variant="body1">Redmi Watch 5 Lite</Typography>
          <span>Rs</span>
          <Typography variant="h6">12,339</Typography>
          <span>Rs</span>
          <Typography variant="h6">12,339</Typography>
          <Box className="flex justify-between">
            <Box className="flex bg-yellow-200">
              <span className="text-yellow-500">★</span>
              <Typography variant="body2 font-bold">4.8 Reviews</Typography>
            </Box>
            <Box className="bg-gray-100 px-2 rounded-lg">
              <span className="text-green-400">23% off</span>
            </Box>
          </Box>
        </Card>

        <Card className="w-full">
          <video className="w-full h-80 object-cover" autoPlay muted loop>
            <source src={Video1} type="video/mp4" />
          </video>
          <Typography variant="body1">
            Anker A30i ANC Wireless Bluetooth Earbuds A3958H21
          </Typography>
        </Card>
        <Card className="w-full">
          <video className="w-full h-80 object-cover" autoPlay muted loop>
            <source src={Video1} type="video/mp4" />
          </video>
          <Typography variant="body1">JS Watch 6 Classic SmartWatch</Typography>
        </Card>
        <Card className="w-full">
          <video className="w-full h-80 object-cover" autoPlay muted loop>
            <source src={Video1} type="video/mp4" />
          </video>
          <Typography variant="body1">
            Lenovo Thinkplus Livepods XT81
          </Typography>
        </Card>
        <Card className="w-full">
          <video className="w-full h-80 object-cover" autoPlay muted loop>
            <source src={Video1} type="video/mp4" />
          </video>
          <Typography variant="body1">Zero Royale SmartWatch</Typography>
        </Card>
      </Box>
    </Box>
  );
};

export default VideoSection;
