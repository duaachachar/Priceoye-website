import React from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import productData from "../../data/Productdata.json";
import Footer from "../Footer";
import official from "../../assets/officail.svg";

const CardDetailPage = () => {
  const { id } = useParams();
  const card = productData.find((item) => item.id === parseInt(id));

  if (!card) {
    return <Typography variant="h6">Card not found</Typography>;
  }

  return (
    <>
      <Box className="container mx-auto p-4">
        <Box className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {/* Image Section */}
          <div className="flex flex-col items-center border-2 border-gray-300 bg-transparent w-4/5 h-auto rounded-lg">
            <img
              src={card.Image}
              alt={card.reviews}
              className="h-full w-full object-contain rounded-md"
            />
          </div>

          {/* Text Section */}
          <Box className="my-2">
            <Typography variant="h4" className="font-bold">
              {card.reviews}
            </Typography>
            <Box className="flex justify-between my-2">
              <Box className="flex items-center bg-yellow-50 px-2 py-1 rounded-full text-yellow-500 space-x-1">
                {/* Stars Section */}
                <Box className="flex space-x-0.5 text-sm">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span className="text-gray-400">★</span>
                </Box>

                {/* Rating and Review Section */}
                <Typography
                  variant="body2"
                  className="text-black font-medium text-xs"
                >
                  4.8
                </Typography>
                <Typography variant="body2" className="text-gray-500 text-xs">
                  | 538 Reviews
                </Typography>
              </Box>

              <img src={official} alt="official" />
            </Box>
            <Box className="flex justify-between my-2">
              <Box>
                <Typography variant="body2" className="text-gray-500">
                  Priceoye Price
                </Typography>
                <Typography variant="h6">Rs{card.price}</Typography>
                <Box className='flex'>
                  <Typography className="text-gray-500 line-through">
                    Rs {card.oldPrice}
                  </Typography>
                  <Box className="bg-gray-100 px-2 py-1 rounded-lg">
                    <span className="text-green-500 text-sm">
                      {card?.percent}
                    </span>
                  </Box>
                </Box>
              </Box>
              <Box>
                <Typography variant="body2" className="text-gray-500">
                  Availability
                </Typography>
                <Typography variant="h6">In Stock</Typography>
              </Box>
            </Box>
            
            <Button variant="contained">Add To Cart</Button>
          </Box>
        </Box>

        {/* <img src={card.details.highlightImage} alt={card.reviews}/> */}
      </Box>
      <Footer />
    </>
  );
};

export default CardDetailPage;
