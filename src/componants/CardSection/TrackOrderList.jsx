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
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";


const TrackOrderList = () => {
  const dispatch = useDispatch();

  const { items } = useSelector((state) => state.products);
  console.log(items, "items");

  const totalPrice =
    items.length &&
    items.reduce((sum, curr) => sum + curr.price * curr.quantity, 0);
  console.log(totalPrice);

  return (
    <Box className="h-screen bg-gray-100">
      <Box className="container flex pt-12 space-x-5">
       
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
            className="bg-white w-full mt-2"
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
                console.log(items, "items");

                return (
                  <Box className='p-4'>
                  
                    <Box
                      key={itemList.id}
                      className="flex justify-around items-center my-3 border py-2 w-full p-4"
                    >
                      <img
                        width={"40px"}
                        src={itemList?.Image}
                        alt="card image"
                      />
                      <span>{itemList?.category}</span>
                      <ButtonGroup
                        size="small"
                        variant="text"
                        aria-label="Basic button group"
                      >
                        <Button>
                          <RemoveIcon
                            className="text-success"
                            onClick={() => dispatch(decreaseQuantity(itemList))}
                          />
                        </Button>
                        <Button>{itemList?.quantity}</Button>
                        <Button>
                          <AddIcon
                            className="text-success"
                            onClick={() => dispatch(increaseQuantity(itemList))}
                          />
                        </Button>
                      </ButtonGroup>
                      <span>{itemList?.price}</span>
                      <Tooltip title={"Remove Item"}>
                        <Button>
                          <DeleteIcon
                            className="text-success"
                            onClick={() => dispatch(removeItems(itemList))}
                          />
                        </Button>
                      </Tooltip>
                    </Box>
                  </Box>
                );
              })
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TrackOrderList;
