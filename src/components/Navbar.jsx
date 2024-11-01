import React, { useState } from "react";
import logo from "../assets/Vector.png";
import { HiOutlineBars3 } from "react-icons/hi2";
import {
  Drawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ServicesIcon from "@mui/icons-material/Build";
import AboutIcon from "@mui/icons-material/Info";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const menuOptions = [
    { text: "Home", icon: <HomeIcon sx={{ color: "white" }} /> },
    { text: "Services", icon: <ServicesIcon sx={{ color: "white" }} /> },
    { text: "About", icon: <AboutIcon sx={{ color: "white" }} /> },
  ];
  return (
    <>
      <nav>
        <div className="nav-logo-container">
          <img src={logo} alt="Logo" />
        </div>
        <div className="navbar-links-container">
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">About</a>
          <button className="primary-button">Sign Up</button>
        </div>
        <div className="navbar-menu-container">
          <HiOutlineBars3
            style={{ color: "white" }}
            onClick={() => setOpenMenu(true)}
          />
        </div>
      </nav>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{
            width: 250,
            height: "100vh",
            backgroundColor: "black",
            color: "white",
          }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
