import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import { Icon } from "@iconify/react";
import Paper from "@mui/material/Paper";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import logo from "../assets/header-logo.svg";
import { Button, Hidden, Menu, MenuItem, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import OpenDrawer from "./Drawer/OpenDrawer";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function Navbar() {
  const navigate = useNavigate();
  let [userData, setUserData] = useState({});
  let [open, setOpen] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const Open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  useEffect(() => {
    const dataItems = localStorage.getItem("user");
    const items = JSON.parse(dataItems) || {};
    setUserData(items);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUserData({});
    alert("You have successfully logged out!");
    navigate("/register");
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar className="bg-color">
            <Icon
              icon="bitcoin-icons:menu-filled"
              className="text-4xl"
              onClick={toggleDrawer(true)}
            />

            <Link to="/">
              <Box className="w-32 ml-3">
                <img src={logo} alt="Logo" />
              </Box>
            </Link>

            <Box sx={{ margin: "auto" }} />

            <Paper
              component="form"
              sx={{
                mx: "4px",
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 400,
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search..."
                inputProps={{ "aria-label": "Search..." }}
              />
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <KeyboardVoiceIcon className="text-sky-400" />
              </IconButton>
            </Paper>

            <Box sx={{ margin: "auto" }} />

            {!userData.email || !userData.password ? (
              <Hidden smDown>
                <Button
                  variant="contained"
                  class="bg-white border-2 text-sky-400 border-transparent hover:bg-none hover:border-2 hover:text-white hover:border-white hover:bg-transparent px-6 py-2 rounded mx-3"
                >
                  <Link to="/login">Login</Link>
                </Button>

                <Button
                  variant="contained"
                  class="bg-transparent border-2 text-white border-white hover:bg-none hover:border-2 hover:text-sky-400 hover:border-transparent hover:bg-white px-6 py-2 rounded"
                >
                  <Link to="/register">Register</Link>
                </Button>
              </Hidden>
            ) : (
              <Hidden smDown>
                <Box className="flex items-center">
                  <AccountCircleIcon
                    fontSize="large"
                    className="text-white ms-3"
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                  />
                  <Typography variant="body1">{userData?.firstName}</Typography>
                </Box>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={Open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={handleClose}>
                    <Link to="/account">My account</Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Link to="/order-list">Track my Order</Link>
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </Hidden>
            )}
          </Toolbar>
        </AppBar>
      </Box>
      <OpenDrawer open={open} toggleDrawer={toggleDrawer} />
    </>
  );
}
