import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"; 
import { addProducts, increaseQuantity } from "./ProductSlice";

const useDelivery = () => {
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
      toast.error(
        "Please select a payment method before proceeding to checkout.",
        {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
    } else {
      // Dispatch product to track order list or any other action
      dispatch(addProducts(selectedItem));
      dispatch(increaseQuantity(selectedItem));
      setOpenModal(true);
    }
  };

  const handleNavigateToTrackOrder = () => {
    setOpenModal(false);
    navigate("/track-order");
  };

  return {
    dispatch,
    handleNavigateToTrackOrder,
    handleCheckout,
    selectedItem,
    activeStep,
    handlePaymentMethodChange,
    handleDeliveryTypeChange,
    handleSaveAddress,
    handleEditAddress,
    handleSaveContact,
    handleEditContact,
    selectedDeliveryType,
    selectedPaymentMethod,
    address,
    email,
    isEditingAddress,
    name,
    isEditingContact,
    userData,
    openModal,
    setName,
    setEmail,
    setAddress,
    setOpenModal
  };
};

export default useDelivery;
