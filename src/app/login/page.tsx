"use client";

import { Box } from "@mui/material";
import React from "react";
import Login from "../components/Login";
import ProjAppBar from "../components/ProjAppBar";
import Footer from "../components/Footer";
import LoginComponent from "../components/Login";

const page = () => {
  return (
    <React.Fragment>
      <ProjAppBar></ProjAppBar>
      <LoginComponent></LoginComponent>
      <Footer></Footer>
    </React.Fragment>
  );
};

export default page;