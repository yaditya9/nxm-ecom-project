"use client";

import { Box } from "@mui/material";
import React from "react";
import Register from "../components/Register";
import ProjAppBar from "../components/ProjAppBar";
import Footer from "../components/Footer";
const page = () => {
  return (
    <React.Fragment>
      <ProjAppBar></ProjAppBar>
      <Register></Register>
      <Footer></Footer>
    </React.Fragment>
  );
};

export default page;