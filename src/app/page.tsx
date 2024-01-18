"use client";
import Image from "next/image";
import styles from "./page.module.css";
import React from "react";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Link,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ProjAppBar from "./components/ProjAppBar";
import Footer from "./components/Footer";
import HomeComponent from "./components/Home";

import { GlobalContextProvider } from "./contexts/GlobalContext";
import CarousalComp from "./components/Carousel";
import HomeProducts from "./components/HomeProducts";

export default function Home() {
  return (
    <React.Fragment>
      <ProjAppBar></ProjAppBar>
      
        <CarousalComp></CarousalComp>

        
      
      <HomeProducts></HomeProducts>

      <Footer></Footer>
    </React.Fragment>
  );
}
