import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import maleIcon from "../../assets/user-icon.svg";
import PoIcon from "../../assets/po-logo.svg";
import setting from "../../assets/settings.svg";
import PayIcon from "../../assets/pay-icon.svg";
import RecieveIcon from "../../assets/recieve-icon.svg";
import ReviewIcon from "../../assets/review-icon.svg";
import RefundIcon from "../../assets/refund-icon.svg";
import complaintIcon from "../../assets/complaints-icon.svg";
import AddonIcon from "../../assets/e-warranty-icon.svg";
import FaqIcon from "../../assets/faqs-icon.svg";
import ParcelIcon from "../../assets/open-parcel-icon.svg";
import ContactIcon from "../../assets/contact-icon.svg";
import EmiIcon from "../../assets/emi-icon.svg";
import LocationOIcon from "../../assets/location-icon.svg";
import Support from "../../assets/support-icon.svg";
import Warranty from "../../assets/e-warranty-icon.svg";
import BNPL from "../../assets/bnpl-icon.svg";
import address from "../../assets/address-book.svg";
import Edit from "../../assets/complaints.svg";
import { Link } from "react-router-dom";

const MyAccount = () => {
  return (
    <>
      <Box className="relative my-5 bg-color h-48 md:h-64">
        <Box className="flex items-center justify-between">
          <Box className="flex items-center space-x-3 p-4 md:p-20">
            <img
              src={maleIcon}
              alt="User Icon"
              className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-full"
            />

            <Box>
              <Typography className="text-white font-semibold text-sm md:text-base mb-2">
                Duaa Chachar
              </Typography>
              <span className="bg-yellow-300 text-black px-2 py-1 rounded-3xl text-xs md:text-sm font-medium ">
                Priceoye club member
              </span>
            </Box>
          </Box>

          <img
            src={setting}
            alt="Settings"
            className="w-6 h-6 cursor-pointer mb-2 md:mb-4"
          />
        </Box>

        <img
          src={PoIcon}
          alt="Footer Icon"
          className="absolute top-62 md:top-32 right-0 w-40 h-62 md:w-32 md:h-62 object-contain p-0 mt-6"
        />
      </Box>
      {/* // Cards section */}
      <Box className=" mt-10">
        <Grid container spacing={2} className="w-full p-5 ">
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            className="bg-white shadow-md shadow-slate-400 p-5 my-4"
          >
            <Typography variant="h5">My orders</Typography>
            <Grid container spacing={2} className="py-5">
              <Grid item xs={4} md={2}>
                <img src={PayIcon} alt="" className="w-7" />
                <Typography variant="body2"> Pay</Typography>
              </Grid>
              <Grid item xs={4} md={2}>
                <img src={RecieveIcon} alt="" className="w-7" />
                <Typography variant="body2"> Recieve</Typography>
              </Grid>
              <Grid item xs={4} md={2}>
                <img src={ReviewIcon} alt="" className="w-7" />
                <Typography variant="body2"> Review</Typography>
              </Grid>
              <Grid item xs={4} md={2}>
                <img src={RefundIcon} alt="" className="w-7" />
                <Typography variant="body2"> Refund</Typography>
              </Grid>
              <Grid item xs={4} md={2}>
                <img src={complaintIcon} alt="" className="w-7" />
                <Typography variant="body2"> Complaints</Typography>
              </Grid>
              <Grid item xs={4} md={2}>
                <img src={AddonIcon} alt="" className="w-7" />
                <Typography variant="body2"> Addons</Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            className="bg-white shadow-md shadow-slate-400 p-5 my-4"
          >
            <Typography variant="h5">Help</Typography>
            <Grid
              container
              spacing={2}
              className="py-4 grid grid-cols-5 py-5"
            >
              <Grid item xs={12} sm={4} md={2}>
                <img src={FaqIcon} alt="" className="w-7" />
                <Typography variant="body2"> FAQs</Typography>
              </Grid>
              <Grid item xs={12} sm={4} md={2}>
                <img src={ParcelIcon} alt="" className="w-7" />
                <Typography variant="body2"> Open Parcel</Typography>
              </Grid>
              <Grid item xs={12} sm={4} md={2}>
                <img src={ContactIcon} alt="" className="w-7" />
                <Typography variant="body2"> Contact</Typography>
              </Grid>
              <Grid item xs={12} sm={4} md={2}>
                <img src={LocationOIcon} alt="" className="w-7" />
                <Typography variant="body2"> Locations</Typography>
              </Grid>
              <Grid item xs={12} sm={4} md={2}>
                <img src={EmiIcon} alt="" className="w-7" />
                <Typography variant="body2"> EMI</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      {/* Second cards section */}
      <Box className="bg-white shadow-lg shadow-gray-400 my-5">
        <Typography variant="h5" className="p-5 ps-72">Services</Typography>
        <Box className='flex justify-around py-5'>
          <Box>
            <img src={Support} alt="" srcset="" />
            <Typography variant="body1">Support</Typography>
          </Box>
          <Box>
            <img src={Warranty} alt="" srcset="" />
            <Typography variant="body1">Warranty</Typography>
          </Box>
          <Box>
            <img src={BNPL} alt="" srcset="" />
            <Typography variant="body1">BNPL</Typography>
          </Box>
        </Box>
      </Box>
      {/* Third cards section */}
      <Box className="bg-white shadow-lg shadow-gray-400 my-5">
        <Typography variant="h5" className="p-5 ps-72">Profile</Typography>
        <Box className='flex justify-around py-5'>
          <Box>
            <img src={address} alt="" srcset="" />
            <Typography variant="body1">Address Book</Typography>
          </Box>
          <Link to='/edit-profile'> <Box>
            <img src={Edit} alt="" srcset="" />
            <Typography variant="body1">Edit Profile</Typography>
          </Box>
          </Link>
          <Box>

          </Box>
        </Box>
      </Box>
    </>
  );
};

export default MyAccount;
