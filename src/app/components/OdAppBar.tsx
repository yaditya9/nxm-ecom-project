import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
  TextField,
  InputAdornment,
  Grid,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import InfoIcon from "@mui/icons-material/Info";
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
const OdAppBar = () => {
  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          elevation={0}
          sx={{
            bgcolor: "white",
            color: "black",
            borderBottom: 2,
            borderColor: "grey.300",
          }}
        >
          <Toolbar>
            <Grid container alignItems="center">
              {/* Texts */}
              <Grid item xs={4} sx={{ display: "flex", alignItems: "center" }}>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{ mr: 4, fontWeight: "medium" }}
                >
                  Payments
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <HelpOutlineOutlinedIcon sx={{ fontSize: 20, mr: 0.5, color: "#4C4C4C" }} />{" "}
                  {/* Adjust icon size and margin as needed */}
                  <Typography
                    variant="subtitle1"
                    color={"#4C4C4C"}
                    sx={{ fontWeight: "light" }}
                  >
                    How it works
                  </Typography>
                </Box>
              </Grid>

              {/* Search Bar */}
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  variant="outlined"
                  size="small"
                  placeholder="Search..."
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              {/* Icon Buttons */}
              <Grid
                item
                xs={4}
                sx={{ display: "flex", justifyContent: "flex-end" }}
              >
                <IconButton
                  color="inherit"
                  sx={{
                    color: "inherit",
                    backgroundColor: "#E6E6E6", // Light grey background
                    borderRadius: "50%", // Circular shape
                    "&:hover": {
                      backgroundColor: "rgba(0, 0, 0, 0.08)", // Darker grey on hover
                    },
                  }}
                >
                  <ShoppingCartOutlinedIcon />
                </IconButton>
                <IconButton
                  color="inherit"
                  sx={{
                    color: "inherit",
                    ml: 2,
                    backgroundColor: "#E6E6E6", // Light grey background
                    borderRadius: "50%", // Circular shape
                    "&:hover": {
                      backgroundColor: "rgba(0, 0, 0, 0.08)", // Darker grey on hover
                    },
                  }}
                >
                  <PersonOutlineOutlinedIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
    </React.Fragment>
  );
};

export default OdAppBar;
