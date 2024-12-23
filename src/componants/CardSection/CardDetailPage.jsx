import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Typography, Button, CircularProgress } from "@mui/material";
import { setSelectedCard } from "../../Slices/cardSlice"; 

const CardDetail = () => {
  const { id } = useParams();  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectedCard = useSelector((state) => state.card.selectedCard);

 
  useEffect(() => {
    
    if (id && !selectedCard) {
      
      dispatch(setSelectedCard(id)); 
    }
  }, [id, dispatch, selectedCard]);

  if (!selectedCard) {
    return (
      <Box className="container mx-auto p-4 text-center">
        <CircularProgress />
        <Typography variant="h6">Loading Card Details...</Typography>
      </Box>
    ); 
  }

  return (
    <Box className="container mx-auto p-4">
        <Typography variant="h4" className="font-bold">
          {selectedCard.reviews}
        </Typography>
      <Box className="flex justify-between items-center">
        
        <img
          src={selectedCard.Image}
          alt={selectedCard.reviews}
          className="mx-auto my-4"
          style={{ width: "300px", height: "auto" }}
        />
       <Box>
       <Typography variant="h6" className="font-semibold">
          Price: Rs {selectedCard.price}
        </Typography>
        <Typography variant="body1" className="my-2">
          {selectedCard.reviews}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {selectedCard.percent} off
        </Typography>
        <Box className="mt-4">
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/")} 
          >
            Back to Products
          </Button>
        </Box>
       </Box>
      </Box>
    </Box>
  );
};

export default CardDetail;
