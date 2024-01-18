'use client'
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { useRouter } from "next/navigation";
import { useGlobalContext } from "../contexts/GlobalContext";
const ProjAppBar = () => {
  const router = useRouter();
  const { username } = useGlobalContext();
  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1, padding: 0}}>
        <AppBar position="static">
          <Toolbar>
            <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" onClick={() => router.push("/")} sx={{ flexGrow: 1 }}>
              Zonama
            </Typography>
            <Button variant="text" startIcon={<ShoppingCartOutlinedIcon />} sx={{ color: "#FFFFFF" }}>
              Cart
            </Button>
            <Box px={1.5}></Box>
            <Button variant="text" startIcon={<PersonOutlineOutlinedIcon />} onClick={() => router.push("/login")} sx={{ color: "#FFFFFF" }}>
            {username !== "" ? username : "Login"}
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </React.Fragment>
  );
};

export default ProjAppBar;