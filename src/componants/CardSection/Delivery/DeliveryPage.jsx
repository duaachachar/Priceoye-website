import React, { useEffect, useState } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Box,
  Typography,
  Button,
  TextField,
  IconButton,
  Grid,
  Modal,
} from "@mui/material";
import estimate from "../../../assets/estimate-icon.svg";
import { Radio } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { addProducts, increaseQuantity } from "./ProductSlice";
import { useNavigate } from "react-router-dom";

const steps = ["OTP Verification", "Contact Info", "Delivery", "Payment"];

const DeliveryPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [userData, setUserData] = useState({});
  const [isEditingContact, setIsEditingContact] = useState(false);
  const [isEditingAddress, setIsEditingAddress] = useState(false);
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john.doe@example.com");
  const [address, setAddress] = useState(
    "Allama, Allama Iqbal Town, Abbottabad, Khyber Pakhtunkhwa"
  );
  const [selectedDeliveryType, setSelectedDeliveryType] = useState(null);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

  const handleEditContact = () => {
    setIsEditingContact(!isEditingContact);
  };

  const handleSaveContact = () => {
    setIsEditingContact(false);
  };

  const handleEditAddress = () => {
    setIsEditingAddress(!isEditingAddress);
  };

  const handleSaveAddress = () => {
    setIsEditingAddress(false);
  };
  const handleDeliveryTypeChange = (deliveryType) => {
    setSelectedDeliveryType(deliveryType);
  };

  const handlePaymentMethodChange = (paymentMethod) => {
    setSelectedPaymentMethod(paymentMethod);
  };

  console.log(userData, "delivery");

  useEffect(() => {
    const dataItems = localStorage.getItem("user");
    const items = JSON.parse(dataItems) || {};
    setUserData(items);
  }, []);
  const selectedItem = useSelector((state) => state.cart.selectedItem);
  console.log(selectedItem, "selectedItem");

  const activeStep = 3;

  const handleCheckout = () => {
    if (!selectedPaymentMethod) {
      alert("Please select a payment method before proceeding to checkout.");
    } else {
      // Dispatch product to track order list or any other action
      dispatch(addProducts(selectedItem));
      dispatch(increaseQuantity(selectedItem))
      setOpenModal(true); // Open success modal
    }
  };

  const handleNavigateToTrackOrder = () => {
    setOpenModal(false); // Close modal
    navigate("/track-order"); // Navigate to the track order page
  };

  return (
    <Box className="container mx-auto mt-5">
      <Box className="grid grid-cols-12 gap-4">
        <Box className="col-span-12 md:col-span-9">
          <Stepper activeStep={activeStep} className="my-6">
            {steps.map((label, index) => (
              <Step key={index} completed={index < activeStep}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <Box className="bg-white  p-4  rounded-md border-2 border-gray-200">
            <Typography variant="body2" className="font-bold">
              1. Mobile Number
            </Typography>
            <Box className="flex my-1">
              <Typography variant="body2">031000002022</Typography>

              <img
                src={"https://static.priceoye.pk/icons/verified-user.svg"}
                alt=""
                className="ms-4"
              />

              <Typography variant="body2" className="text-green-600">
                Verified
              </Typography>
            </Box>
          </Box>

          {/* Contact Information Section */}
          <Box
            sx={{
              bgcolor: "white",
              p: 3,
              my: 2,
              border: "1px solid",
              borderColor: "grey.300",
              borderRadius: "8px",
            }}
          >
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              2. Contact Information
            </Typography>
            {isEditingContact ? (
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    variant="outlined"
                    size="small"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    variant="outlined"
                    size="small"
                    fullWidth
                  />
                </Grid>
              </Grid>
            ) : (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box sx={{ width: "48%" }}>
                  <Typography variant="body2" color="textSecondary">
                    <strong>Full Name</strong>
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    {userData?.firstName}
                  </Typography>
                </Box>
                <Box sx={{ width: "48%" }}>
                  <Typography variant="body2" color="textSecondary">
                    <strong>Email</strong>
                  </Typography>
                  <Typography variant="body1"> {userData?.email}</Typography>
                </Box>
                <IconButton onClick={handleEditContact}>
                  <img
                    src="https://priceoye.pk/assets/images/social-icons/order-edit-icon.svg"
                    alt="Edit Icon"
                    width={24}
                    height={24}
                  />
                </IconButton>
              </Box>
            )}
            {isEditingContact && (
              <Box sx={{ mt: 2 }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSaveContact}
                >
                  Save
                </Button>
              </Box>
            )}
          </Box>

          {/* Delivery Information Section */}
          <Box
            sx={{
              bgcolor: "white",
              p: 3,
              my: 2,
              border: "1px solid",
              borderColor: "grey.300",
              borderRadius: "8px",
            }}
          >
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              3a. Delivery Information
            </Typography>
            {isEditingAddress ? (
              <TextField
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                fullWidth
              />
            ) : (
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <img
                  src="https://priceoye.pk/assets/images/self-icon.svg"
                  alt="Self Icon"
                  width={24}
                  height={24}
                />
                <Typography variant="body1" sx={{ flexGrow: 1, ml: 2 }}>
                  {address}
                </Typography>
                <IconButton onClick={handleEditAddress}>
                  <img
                    src="https://priceoye.pk/assets/images/social-icons/order-edit-icon.svg"
                    alt="Edit Icon"
                    width={24}
                    height={24}
                  />
                </IconButton>
              </Box>
            )}
            {isEditingAddress && (
              <Box sx={{ mt: 2 }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSaveAddress}
                >
                  Save
                </Button>
              </Box>
            )}
          </Box>

          {/* Delivery Type Selection */}
          <Box className="bg-white p-4">
            <Box
              className="flex items-center rounded-lg p-2"
              onClick={() => handleDeliveryTypeChange("Standard Shipping")}
            >
              <Box className="flex items-center justify-center w-10 h-10 bg-white rounded-full mr-4">
                <img
                  src="https://priceoye.pk/assets/images/delivery-icon.svg"
                  alt="Standard Shipping"
                />
              </Box>
              <Box className="flex-grow">
                <p className="text-gray-700">Standard Shipping</p>
              </Box>
              {/* Added Radio Button for Standard Shipping */}
              <Radio
                className="text-orange-500"
                checked={selectedDeliveryType === "Standard Shipping"}
                onChange={() => handleDeliveryTypeChange("Standard Shipping")}
                sx={{
                  "&.Mui-checked": {
                    color: "rgb(249 115 22)", // Tailwind's orange-500 color
                  },
                }}
              />
            </Box>

            <Box
              className="flex items-center rounded-lg p-2"
              onClick={() =>
                handleDeliveryTypeChange("Check Karo open Karo parcel")
              }
            >
              <Box className="flex items-center justify-center w-10 h-10 bg-white rounded-full mr-4">
                <img
                  src="https://priceoye.pk/assets/images/parcel-icon.svg"
                  alt="Check Karo open Karo parcel"
                />
              </Box>
              <Box className="flex-grow">
                <p className="text-gray-700">Check Karo open Karo parcel</p>
              </Box>
            </Box>
          </Box>

          {/* Add spacing between sections */}
          <Box className="my-5"></Box>

          {/* Display Payment Methods if "Standard Shipping" is selected */}
          {selectedDeliveryType === "Standard Shipping" && (
         <Box className="bg-white p-4 my-3">
         <Box className="flex justify-between my-3">
           <Typography
             variant="body2"
             className="font-bold text-[18px] text-[#333] font-[Poppins]"
           >
             4. Choose Payment Method
           </Typography>
         </Box>
       
         {[
           "Bank Transfer",
           "Cash on Delivery",
           "JazzCash",
           "Credit / Debit Card",
         ].map((method, index) => (
           <Box key={index} className="p-2">
             <Box className="flex items-center">
               <Box className="flex items-center justify-center w-10 h-10 bg-white mr-4 border-2 border-[#eee] rounded-full shadow-md">
                 <img
                   src={
                     method === "Credit / Debit Card"
                       ? "https://priceoye.pk/assets/images/credit-icon.svg"
                       : method === "JazzCash"
                       ? "https://priceoye.pk/assets/images/cod-icon.svg"
                       : "https://priceoye.pk/assets/images/bank-icon.svg"
                   }
                   alt={method}
                 />
               </Box>
               <Box className="flex-grow">
                 <p className="text-gray-700 font-[Roboto] text-[#555]">{method}</p>
               </Box>
               <Radio
                 className="text-orange-500"
                 checked={selectedPaymentMethod === method}
                 onChange={() => handlePaymentMethodChange(method)}
                 sx={{
                   "&.Mui-checked": {
                     color: "rgb(249 115 22)",
                   },
                 }}
               />
             </Box>
           </Box>
         ))}
       
         <Button
           variant="contained"
           onClick={handleCheckout}
           className="bg-[#4caf50] text-white font-[Poppins] text-[16px] px-5 py-2 rounded-lg shadow-md"
         >
           Checkout
         </Button>
       
         {/* Success Modal */}
         <Modal
           open={openModal}
           onClose={() => setOpenModal(false)}
           aria-labelledby="success-modal-title"
           aria-describedby="success-modal-description"
         >
           <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[450px] bg-gradient-to-r from-[#f7faff] to-[#e0f7fa] rounded-lg p-10 shadow-lg text-center">
             {/* Animated Tick */}
             <Box className="flex items-center justify-center w-[100px] h-[100px] mx-auto bg-gradient-to-r from-[#e0f7fa] to-[#b2ebf2] rounded-full shadow-md mb-4">
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 52 52"
                 className="w-[60%] h-[60%]"
               >
                 <circle
                   cx="26"
                   cy="26"
                   r="25"
                   fill="none"
                   stroke="#4caf50"
                   strokeWidth="3"
                   className="circle"
                 />
                 <path
                   fill="none"
                   stroke="#4caf50"
                   strokeWidth="4"
                   d="M16 26l8 8 14-14"
                   className="tick"
                 />
               </svg>
             </Box>
             <Typography
               id="success-modal-title"
               variant="h5"
               className="font-[Poppins] text-[20px] text-[#333] mb-2"
             >
               🎉 Order Placed Successfully!
             </Typography>
             <Typography
               id="success-modal-description"
               className="font-[Roboto] text-[16px] text-[#555] mb-5"
             >
               Your product has been added to the track order list.
             </Typography>
             <Button
               variant="contained"
               onClick={handleNavigateToTrackOrder}
               className="bg-green-300 text-white px-6 py-3 rounded-lg font-[Poppins] text-[16px] shadow-md"
             >
               Go to Track Order
             </Button>
           </Box>
         </Modal>
       </Box>
       
          )}
        </Box>

        <Box className="col-span-12 md:col-span-3">
          <Typography variant="body1" className="font-bold">
            Delivery Estimates
          </Typography>
          <Box className="flex items-center bg-white p-2 my-2">
            <img src={estimate} alt="" srcset="" className="mx-3" />
            <Typography variant="body2" className="mx-5">
              30 Dec - 01 Jan
            </Typography>
          </Box>
          <Typography variant="body1" className="font-bold mt-4">
            Order Summary
          </Typography>
          <Box className="bg-white p-4 my-4 ">
            <Box className="flex border-2 border-gray-100 p-2">
              <Box className="w-1/3  mb-5 border-2 border-gray-200 self-start">
                <img src={selectedItem?.Image} alt="" srcset="" />
              </Box>
              <Box className="pb-5 ms-4">
                <Typography variant="body2" className="font-bold">
                  {selectedItem?.reviews}
                </Typography>
                <Typography variant="body2" className="text-gray-500">
                  Rs: {selectedItem?.price}
                </Typography>
                <Typography variant="body2" className="font-bold">
                  Colors
                </Typography>
                <Typography variant="body2" className="text-gray-500">
                  Black
                </Typography>
              </Box>
            </Box>
            <Box className="flex justify-between items-center mt-3">
              <Box>
                <Typography variant="body1">Price Detail</Typography>
                <Typography variant="body2" className="text-gray-500 mt-2">
                  Market Price
                </Typography>
                <Typography variant="body2" className="text-gray-500 mt-2">
                  Sale Price
                </Typography>
                <Typography variant="body2" className="text-gray-500">
                  Delivery Charges
                </Typography>
              </Box>
              <Box>
                <Typography variant="body1">قیمت کی تفصیل</Typography>
                <Typography
                  variant="body2"
                  className="text-gray-500 mt-2 line-through"
                >
                  {selectedItem?.oldPrice}
                </Typography>
                <Typography variant="body2" className="text-gray-500 mt-2">
                  {selectedItem?.price}
                </Typography>
                <Typography variant="body2" className="text-green-400">
                  Rs 0
                </Typography>
              </Box>
            </Box>
            <Box className="bg-gray-100 py-2 text-center my-5">
              <Typography variant="body2" className="text-green-400">
                You're saving Rs {selectedItem?.price} on this order
              </Typography>
            </Box>
            <Box className="flex justify-between items-center">
              <Typography variant="body2" className="mx-5">
                Total Price
              </Typography>
              <Typography variant="body2" className="mx-5">
                Rs {selectedItem?.price}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DeliveryPage;
