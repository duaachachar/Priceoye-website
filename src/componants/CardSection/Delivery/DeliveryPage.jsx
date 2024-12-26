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
} from "@mui/material";
import estimate from "../../../assets/estimate-icon.svg";
import { Radio } from "@mui/material";

const steps = ["OTP Verification", "Contact Info", "Delivery", "Payment"];

const DeliveryPage = () => {
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

  const activeStep = 3;
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
          <Box
            sx={{
              bgcolor: "white",
              p: 3,
              my: 3, // Increased margin between sections
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

          <Box className="bg-white p-4 my-3">
            <Box className="flex justify-between my-3">
              <Typography variant="body2" className="font-bold">
                3b. Delivery Types
              </Typography>
            </Box>

            {/* Delivery Type Selection */}
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

            {/* Display Payment Methods if "Standard Shipping" is selected */}
            {selectedDeliveryType === "Standard Shipping" && (
              <Box className="bg-white p-4 my-3">
                <Box className="flex justify-between my-3">
                  <Typography variant="body2" className="font-bold">
                    4. Choose Payment Method
                  </Typography>
                </Box>
                <Box className="flex items-center  p-2">
                  <Box className="flex items-center justify-center w-10 h-10 bg-white  mr-4">
                    <img
                      src="https://priceoye.pk/assets/images/cod-icon.svg"
                      alt=""
                    />
                  </Box>
                  <Box className="flex-grow">
                    <p className="text-gray-700">Bank Transfer</p>
                  </Box>
                  <Radio
                    className="text-orange-500"
                    checked={selectedPaymentMethod === "Bank Transfer"}
                    onChange={() => handlePaymentMethodChange("Bank Transfer")}
                    sx={{
                      "&.Mui-checked": {
                        color: "rgb(249 115 22)", // Tailwind's orange-500 color
                      },
                    }}
                  />
                </Box>
                <Box className="flex items-center  p-2">
                  <Box className="flex items-center justify-center w-10 h-10 bg-white  mr-4">
                    <img
                      src="https://priceoye.pk/assets/images/cod-icon.svg"
                      alt=""
                    />
                  </Box>
                  <Box className="flex-grow">
                    <p className="text-gray-700">Cash on Delivery</p>
                  </Box>
                  <Radio
                    className="text-orange-500"
                    checked={selectedPaymentMethod === "Cash on Delivery"}
                    onChange={() =>
                      handlePaymentMethodChange("Cash on Delivery")
                    }
                    sx={{
                      "&.Mui-checked": {
                        color: "rgb(249 115 22)", // Tailwind's orange-500 color
                      },
                    }}
                  />
                </Box>
                <Box className="flex items-center  p-2">
                  <Box className="flex items-center justify-center w-10 h-10 bg-white  mr-4">
                    <img
                      src="https://priceoye.pk/assets/images/cod-icon.svg"
                      alt=""
                    />
                  </Box>
                  <Box className="flex-grow">
                    <p className="text-gray-700">JazzCash</p>
                  </Box>
                  <Radio
                    className="text-orange-500"
                    checked={selectedPaymentMethod === "JazzCash"}
                    onChange={() => handlePaymentMethodChange("JazzCash")}
                    sx={{
                      "&.Mui-checked": {
                        color: "rgb(249 115 22)", // Tailwind's orange-500 color
                      },
                    }}
                  />
                </Box>
                <Box className="flex items-center  p-2">
                  <Box className="flex items-center justify-center w-10 h-10 bg-white  mr-4">
                    <img
                      src="https://priceoye.pk/assets/images/credit-icon.svg"
                      alt=""
                    />
                  </Box>
                  <Box className="flex-grow">
                    <p className="text-gray-700">Credit / Debit Card</p>
                  </Box>
                  <Radio
                    className="text-orange-500"
                    checked={selectedPaymentMethod === "Credit / Debit Card"}
                    onChange={() =>
                      handlePaymentMethodChange("Credit / Debit Card")
                    }
                    sx={{
                      "&.Mui-checked": {
                        color: "rgb(249 115 22)", // Tailwind's orange-500 color
                      },
                    }}
                  />
                </Box>
                <Button variant="contained">Checkout</Button>
              </Box>
            )}
          </Box>
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
          <Box className="bg-white p-4 my-4">
            <Box className="flex justify-between items-center ">
              <Box>
                <Typography variant="body1">Price Detail</Typography>
                <Typography variant="body2" className="text-gray-500 mt-2">
                  Sale Price
                </Typography>
                <Typography variant="body2" className="text-gray-500">
                  Delivery Charges
                </Typography>
              </Box>
              <Box>
                <Typography variant="body1">قیمت کی تفصیل</Typography>
                <Typography variant="body2" className="text-gray-500 mt-2">
                  Rs 0
                </Typography>
                <Typography variant="body2" className="text-gray-500">
                  Rs 0
                </Typography>
              </Box>
            </Box>
            <Box className="bg-gray-100 py-2 text-center my-5">
              <Typography variant="body2" className="text-green-400">
                You're saving Rs 0 on this order
              </Typography>
            </Box>
            <Box className="flex justify-between items-center">
              <Typography variant="body2" className="mx-5">
                Total Price
              </Typography>
              <Typography variant="body2" className="mx-5">
                Rs 0
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DeliveryPage;
