import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

const ProjAppBar = () => {
  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1, padding: 0}}>
        <AppBar position="static">
          <Toolbar>
            <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Zonama
            </Typography>
            <Button variant="text" startIcon={<ShoppingCartOutlinedIcon />} sx={{ color: "#FFFFFF" }}>
              Cart
            </Button>
            <Box px={1.5}></Box>
            <Button variant="text" startIcon={<PersonOutlineOutlinedIcon />} sx={{ color: "#FFFFFF" }}>
              Login
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </React.Fragment>
  );
};

export default ProjAppBar;