import { Box, Button, List, Tooltip, Typography } from "@mui/material";
import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link } from "react-router-dom";
import banket from "../../assets/bucket.svg";
import { useDispatch, useSelector } from "react-redux";
import { removeItems } from "./Delivery/ProductSlice";

import Footer from "../Footer";

const TrackOrderList = () => {
  const dispatch = useDispatch();

  const { items } = useSelector((state) => state.products);

  console.log(items, "items");
  return (
    <Box className="h-screen bg-gray-100">
      <Box className="container flex pt-12 space-x-5 mb-12">
        <Box className="hidden lg:block w-1/4 bg-white p-4 shadow-lg shadow-gray-200 self-start">
          <List>Current Orders</List>
          <List>Pending Orders</List>
          <List>Review Pending</List>
          <List>Older Orders</List>
          <List>Refund Orders</List>
        </Box>

        <Box className="w-full">
          <Box className="flex items-center p-3 bg-white shadow-lg shadow-gray-300 w-full">
            <ArrowBackIosIcon />
            <Link to="/account">
              <Typography variant="h6">Order History</Typography>
            </Link>
          </Box>

          <Box
            className="bg-white w-full mt-2 overflow-y-auto"
            style={{
              height: "400px",
              padding: "0",
            }}
          >
            {!items?.length ? (
              <Box className="flex flex-col justify-center items-center h-full">
                <img src={banket} alt="No Orders" />
                <Typography className="mt-5" variant="h6">
                  There are no orders placed yet
                </Typography>
              </Box>
            ) : (
              items?.map((itemList) => {
                return (
                  <Box className="p-8" key={itemList.id}>
                    <Box className="flex justify-between">
                      <Box>
                        <Box className="flex">
                          <Typography variant="body2" className="!ms-4">
                            Order No
                          </Typography>
                          <Typography
                            variant="body2"
                            className="text-sky-500 !ms-7"
                          >
                            1524717
                          </Typography>
                        </Box>
                        <Box className="flex">
                          <Typography variant="body2" className="!ms-4">
                            Placed On
                          </Typography>
                          <Typography
                            variant="body2"
                            className="text-sky-500 !ms-5"
                          >
                            12 Dec 2024
                          </Typography>
                        </Box>
                      </Box>
                      <Box>
                        <Button
                          className="!text-green-400 !bg-gray-100 !rounded-lg !text-sm"
                          variant="contained"
                        >
                          Order Placed
                        </Button>
                      </Box>
                    </Box>
                    <Box className="mt-6 flex justify-between items-end">
                      <Box className="flex items-center space-x-4">
                        <Box>
                          <img
                            width={"100px"}
                            src={itemList?.Image}
                            className="shadow-sm"
                            alt="Product Image"
                          />
                        </Box>
                        <Box>
                          <span className="text-gray-800 font-bold text-lg flex items-center">
                            {itemList?.reviews} Reviews
                          </span>
                          <Typography>Quantity:{itemList?.quantity}</Typography>
                          <Typography
                            variant="h5"
                            className="flex items-center"
                          >
                            Rs
                            <span
                              style={{
                                marginTop: "10px",
                                marginLeft: "3px",
                                display: "inline-block",
                              }}
                            >
                              {itemList?.price}
                            </span>
                          </Typography>
                        </Box>
                      </Box>

                      <Box>
                        <Tooltip title="Remove Item">
                          <Button
                            variant="contained"
                            className="bg-gradient-to-r from-red-400 self-start to-red-500 hover:from-red-500 hover:to-red-600 text-white font-medium px-4 py-2 rounded-lg shadow-md transition-transform duration-200 hover:scale-105"
                            onClick={() => dispatch(removeItems(itemList))}
                          >
                            Remove
                          </Button>
                        </Tooltip>
                      </Box>
                    </Box>
                  </Box>
                );
              })
            )}
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default TrackOrderList;
