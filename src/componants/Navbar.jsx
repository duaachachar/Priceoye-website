import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import { Icon } from "@iconify/react";
import Paper from "@mui/material/Paper";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import logo from "../assets/header-logo.svg";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import OpenDrawer from "./Drawer/OpenDrawer";
import { Hidden } from "@mui/material";

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
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
                mx:'4px',
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
          </Toolbar>
        </AppBar>
      </Box>
      <OpenDrawer open={open} toggleDrawer={toggleDrawer} />
    </>
  );
}
