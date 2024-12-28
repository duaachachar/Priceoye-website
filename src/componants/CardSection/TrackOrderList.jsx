import {
  Box,
  Button,
  ButtonGroup,
  List,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link } from "react-router-dom";
import banket from "../../assets/bucket.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeItems,
} from "./Delivery/ProductSlice";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import Footer from "../Footer";
import StarIcon from "@mui/icons-material/Star";

const TrackOrderList = () => {
  const dispatch = useDispatch();

  const { items } = useSelector((state) => state.products);

  // Calculate total price for all items
  const totalPrice =
    items.length &&
    items.reduce((sum, curr) => sum + curr.totalPrice, 0); // Use totalPrice per item here

  return (
    <Box className="h-screen bg-gray-100">
      <Box className="container flex pt-12 space-x-5 mb-12">
        <Box className="w-1/4 bg-white p-4 shadow-lg shadow-gray-200 self-start">
          <List>Current Orders</List>
          <List>Pending Orders</List>
          <List>Review Pending</List>
          <List>Older Orders</List>
          <List>Refund Orders</List>
        </Box>

        <Box className="w-full">
          <Box className="flex items-center p-3 bg-white shadow-lg shadow-gray-300">
            <ArrowBackIosIcon />
            <Link to="/account">
              <Typography variant="h6">Order History</Typography>
            </Link>
          </Box>

          <Box
            className="bg-white w-full mt-2 overflow-y-auto"
            style={{
              height: "400px", // Container ki maximum height
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
                  <Box className="p-4" key={itemList.id}>
                    <Box className="flex justify-between items-center border py-2 px-4 bg-gradient-to-r from-blue-400 via-teal-300 to-indigo-400 rounded-lg shadow-md border-gray-300 hover:shadow-lg transition-shadow duration-300 ease-in-out">
                      {/* Product Image and Reviews */}
                      <Box className="flex items-center space-x-4">
                        <img
                          width={"70px"}
                          src={itemList?.Image}
                          className="rounded-full border-2 border-blue-200 shadow-sm"
                          alt="Product Image"
                        />
                        <Box>
                          <span className="text-gray-800 font-medium flex items-center">
                            <StarIcon className="text-yellow-400 mr-1" />
                            {itemList?.reviews} Reviews
                          </span>
                        </Box>
                      </Box>

                      {/* Quantity Controls */}
                      <ButtonGroup
                        size="small"
                        variant="outlined"
                        aria-label="Quantity Controls"
                      >
                        <Button
                          className="hover:bg-red-100 text-gray-700 hover:text-red-500 transition-colors duration-200"
                          onClick={() => dispatch(decreaseQuantity(itemList))}
                        >
                          <RemoveCircleOutlineIcon />
                        </Button>
                        <Button className="text-gray-800 font-semibold bg-gray-50">
                          {itemList?.quantity}
                        </Button>
                        <Button
                          className="hover:bg-green-100 text-gray-700 hover:text-green-500 transition-colors duration-200"
                          onClick={() => dispatch(increaseQuantity(itemList))}
                        >
                          <AddCircleOutlineIcon />
                        </Button>
                      </ButtonGroup>

                      {/* Price */}
                      <span className="text-lg font-semibold text-gray-800 bg-yellow-100 px-3 py-1 rounded-md shadow-sm">
                        ${itemList?.totalPrice.toFixed(2)} {/* Use totalPrice here */}
                      </span>

                      {/* Remove Button */}
                      <Tooltip title="Remove Item">
                        <Button
                          variant="contained"
                          className="bg-gradient-to-r from-red-400 to-red-500 hover:from-red-500 hover:to-red-600 text-white font-medium px-4 py-2 rounded-lg shadow-md transition-transform duration-200 hover:scale-105"
                          onClick={() => dispatch(removeItems(itemList))}
                        >
                          Remove
                        </Button>
                      </Tooltip>
                    </Box>
                  </Box>
                );
              })
            )}
          </Box>

          {/* Total Price of all items */}
          {items.length > 0 && (
            <Box className="bg-gradient-to-r from-indigo-100 via-blue-100 to-teal-100 p-6 mt-6 rounded-lg shadow-lg border border-gray-300">
              <Box className="flex justify-between items-center">
                <Typography
                  variant="h6"
                  className="font-semibold text-gray-800 tracking-wide font-sans"
                >
                  Total Price of All Items:
                </Typography>
                <Typography
                  variant="h6"
                  className="font-bold text-xl text-gray-900 font-sans"
                >
                  ${totalPrice.toFixed(2)} {/* Display total price correctly */}
                </Typography>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default TrackOrderList;
