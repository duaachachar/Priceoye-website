import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
} from "@mui/material";
import productData from "../../data/Productdata.json";
import Footer from "../Footer";
import official from "../../assets/officail.svg";
import wararnty from "../../assets/approved-feature-1.svg";
import two from "../../assets/warranty-feature-2.svg";
import three from "../../assets/video-shooting-camera-3.svg";
import four from "../../assets/shipping-feature-4.svg";
import Img1 from "../../assets/1.svg";
import Img2 from "../../assets/2.svg";
import Img3 from "../../assets/3.svg";
import Img4 from "../../assets/4.svg";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const CardDetailPage = () => {
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const { id } = useParams();
  const card = productData.find((item) => item.id === parseInt(id));

  if (!card) {
    return <Typography variant="h6">Card not found</Typography>;
  }

  return (
    <Box>
      <Box className="container mx-auto p-5">
        <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
          {/* Image Section */}
          <Box>
            <div className="flex flex-col justify-center items-center border-2 border-gray-300 bg-transparent w-4/5 h-auto rounded-lg">
              <img
                src={card.Image}
                alt={card.reviews}
                className="h-full w-full object-contain rounded-md"
              />
            </div>
            <div className="flex ml-12 space-x-4 my-5">
              {card?.details?.carouselImages?.map((image, index) => (
                <div
                  key={index}
                  className="w-20 h-20 bg-gray-100 rounded-md flex items-center justify-center border-2 border-gray-300"
                >
                  <img
                    src={image}
                    alt={`Carousel Image ${index + 1}`}
                    className="h-full w-full object-cover rounded-md"
                  />
                </div>
              ))}
            </div>
          </Box>

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
            <Box className="flex justify-between my-4">
              <Box>
                <Typography variant="body2" className="text-gray-500">
                  Priceoye Price
                </Typography>
                <Typography
                  variant="h5"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  Rs
                  <span
                    style={{
                      marginTop: "10px",
                      marginLeft: "3px",
                      display: "inline-block",
                    }}
                  >
                    {card.price}
                  </span>
                </Typography>
                <Box className="flex">
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
                <Typography variant="h5">In Stock</Typography>
              </Box>
            </Box>
            <Typography variant="h6">Colors</Typography>
            <div class="flex space-x-4 my-5">
              <div class="w-20 h-20 bg-white rounded-md flex items-center justify-center border">
                <img
                  src={card?.Image}
                  alt="Product"
                  class="w-full h-full object-cover mix-blend-multiply rounded-md"
                />
              </div>

              <div class="w-20 h-20 bg-sky-400 rounded-md flex items-center justify-center">
                <img
                  src={card?.Image}
                  alt="Product"
                  class="w-full h-full object-cover mix-blend-multiply rounded-md"
                />
              </div>

              <div class="w-20 h-20 bg-pink-400 rounded-md flex items-center justify-center">
                <img
                  src={card?.Image}
                  alt="Product"
                  class="w-full h-full object-cover mix-blend-multiply rounded-md"
                />
              </div>

              <div class="w-20 h-20 bg-red-800 rounded-md flex items-center justify-center">
                <img
                  src={card?.Image}
                  alt="Product"
                  class="w-full h-full object-cover mix-blend-multiply rounded-md"
                />
              </div>
            </div>

            <div className="flex items-center space-x-5">
              <Button variant="contained" className="!bg-yellow-600 w-1/3">
               <Link to='/delivery-page'> Add To Cart</Link>
              </Button>
              <Button variant="contained" className="!bg-sky-600 w-1/3">
                Compare
              </Button>
            </div>
          </Box>
        </Box>
      </Box>
      <Box className="bg-white my-5 ">
        <Box className="container mx-auto   py-5">
          <Box className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4  py-5">
            <Box className="flex flex-col items-center justify-center text-center">
              <img src={wararnty} alt="" className="mb-2" />
              <Typography variant="h6">PTA Approved</Typography>
              <Typography variant="body2">Mobile Phone</Typography>
            </Box>

            <Box className="flex flex-col items-center justify-center text-center">
              <img src={two} alt="" className="mb-2" />
              <Typography variant="h6">1 Year</Typography>
              <Typography variant="body2">Brand Warranty</Typography>
            </Box>

            <Box className="flex flex-col items-center justify-center text-center">
              <img src={three} alt="" className="mb-2" />
              <Typography variant="h6">Packaging Video</Typography>
              <Typography variant="body2">See Your Product</Typography>
            </Box>

            <Box className="flex flex-col items-center justify-center text-center">
              <img src={four} alt="" className="mb-2" />
              <Typography variant="h6">Fast Delivery</Typography>
              <Typography variant="body2">All Over Pakistan</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="bg-white">
        <Box className="container mx-auto flex space-x-6 py-5">
          <Typography variant="body1">Highlights</Typography>
          <Typography variant="body1">Specifications</Typography>
          <Typography variant="body1">What’s In The Box</Typography>
          <Typography variant="body1">Connect Your Accessories</Typography>
          <Typography variant="body1">Reviews</Typography>
          <Typography variant="body1">FAQs</Typography>
        </Box>
      </Box>
      <Box className=" bg-white ">
        <Box className="container mx-auto  my-5 py-3">
          <Typography variant="h6">Highlights</Typography>
        </Box>
      </Box>

      <Box className="container mx-auto">
        <Box className="flex justify-center mt-5">
          <img src={card.details.highlightImages} alt={card.reviews} />
        </Box>
      </Box>
      <Box className="bg-white my-4 py-3">
        <Box className="container mx-auto">
          <Typography variant="h6">Specifications</Typography>
        </Box>
      </Box>
      <Box className="bg-white my-5 ">
        <Box className="container mx-auto   py-5">
          <Box className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4  py-5">
            <Box className="flex flex-col items-center justify-center text-center">
              <img src={Img1} alt="" className="mb-2" />
              <Typography variant="body2">30 mAh</Typography>
              <Typography variant="body2" className="text-sm text-gray-400">
                Battery Capacity for buds
              </Typography>
            </Box>

            <Box className="flex flex-col items-center justify-center text-center">
              <img src={Img2} alt="" className="mb-2" />
              <Typography variant="body2">480 mAh</Typography>
              <Typography variant="body2" className="text-sm text-gray-400">
                Battery Capacity for Case
              </Typography>
            </Box>

            <Box className="flex flex-col items-center justify-center text-center">
              <img src={Img3} alt="" className="mb-2" />
              <Typography variant="body2">ENC</Typography>
              <Typography variant="body2" className="text-sm text-gray-400">
                Active Noise Cancellation
              </Typography>
            </Box>

            <Box className="flex flex-col items-center justify-center text-center">
              <img src={Img4} alt="" className="mb-2" />
              <Typography variant="body2">Up to 6 hours</Typography>
              <Typography variant="body2" className="text-sm text-gray-400">
                Playtime
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="bg-white my-4 py-3">
        <Box className="container mx-auto">
          <Typography variant="h6">
            ***Questions and answers about items***
          </Typography>
        </Box>
      </Box>
      <Box className="container my-5">
        {card.details.questionsAndAnswers?.map((item, index) => (
          <Accordion
            key={index}
            expanded={expanded === `panel${index + 1}`}
            onChange={handleChange(`panel${index + 1}`)}
            sx={{
              mb: 2, // Adds margin-bottom to each Accordion
              border: "1px solid #D1D5DB", // Border gray-300 (equivalent to tailwind's border-gray-300)
              borderRadius: "8px", // Optional: Adds border-radius for rounded corners
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index + 1}bh-content`}
              id={`panel${index + 1}bh-header`}
            >
              <Typography sx={{ color: "text.secondary" }}>
                {item?.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{item?.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
      <Box className="container mx-auto">
        <Typography variant="h6">Ask a question</Typography>
        <TextField fullWidth multiline rows={4} />
       <Box  className="mt-4">
       <Button variant="contained" className="!bg-sky-500">Ask Question</Button>
       </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default CardDetailPage;
