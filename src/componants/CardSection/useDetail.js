import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { setSelectedItem } from "./cartSlice";
import { Typography } from "@mui/material";
import productData from "../../data/Productdata.json";

const useDetail = () => {
  const [expanded, setExpanded] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const navigate = useNavigate();
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const dispatch = useDispatch();
  
  const { reviews } = useParams();

  console.log("Product Data:", productData);
  console.log("Reviews from Params:", reviews);

  const card = productData.find((item) => item.reviews === reviews);

  if (!card) {
    return { error: "Card not found" };
  }

  const handleAddToCart = () => {
    dispatch(setSelectedItem(card));
    navigate("/delivery-page");
  };

  return { expanded, thumbsSwiper, handleChange, handleAddToCart, card };
};

export default useDetail;
