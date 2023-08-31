import styled from "@emotion/styled";
import { Animation } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import "../../styles/Navbar.css";
import { restPoint, scrollActive } from "../../styles/muiStyles";

const Navbar = () => {
  // Menu on and off fucntion..........................

  const [open, setOpen] = useState(false);

  // OnScrolll functions.......................

  const [navbar, setNavbar] = useState(false);

  const changeNavbar = () => {
    if (window.scrollY >= 30) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeNavbar);

  // Styled MUI items ...........................................
  const StyledToolbar = styled(Toolbar)({
    // display: "flex",
    // justifyContent: "space-around",
  });

  const Menubox = styled(Box)({
    display: "flex",
    gap: 30,
  });

  const MenuItems = [
    { Name: "Home", Link: "./" },
    { Name: "Layouts", Link: "#" },
    { Name: "Apps", Link: "#" },
    { Name: "Customization", Link: "#" },
    { Name: "Features", Link: "#" },
    { Name: "Documents", Link: "#" },
  ];

  return (
    <AppBar
      component={"nav"}
      // className={navbar ? "scroll-active" : "rest-point"}
      sx={navbar ? scrollActive : restPoint}
    >
      <StyledToolbar
        sx={{
          display: "flex",
          justifyContent: { xs: "space-between", md: "space-around" },
        }}
      >
        <Box sx={{ display: "flex", gap: 1 }}>
          <Animation sx={{ fontSize: "2.5rem" }} />
          <Typography variant="h4">Chema</Typography>
        </Box>
        <Menubox sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
          {MenuItems.map((item) => (
            <Typography
              sx={{
                cursor: "pointer",
                "&:hover": { color: "#EDCD37" },
                fontSize: "13px",
              }}
            >
              {item.Name}
            </Typography>
          ))}
        </Menubox>
        <IconButton
          sx={{ display: { xs: "block", sm: "block", md: "none" } }}
          color="inherit"
          onClick={() => setOpen(!open)}
        >
          <MenuIcon />
        </IconButton>
      </StyledToolbar>
      <Drawer
        sx={{ display: { xs: "block", sm: "block", md: "none" } }}
        open={open}
        onClose={() => setOpen(!open)}
        anchor="left"
      >
        <Box sx={{ width: 300, height: "90vh" }}>
          {MenuItems.map((item) => (
            <MenuItem
              sx={{
                cursor: "pointer",
                "&:hover": { color: "#EDCD37" },
                fontSize: "13px",
              }}
            >
              {item.Name}
            </MenuItem>
          ))}
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
