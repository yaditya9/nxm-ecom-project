"use client";

import { Box } from "@mui/material";
import React from "react";
import Login from "../components/Login";
import ProjAppBar from "../components/ProjAppBar";
import Footer from "../components/Footer";

const page = () => {
  return (
    <React.Fragment>
      <ProjAppBar></ProjAppBar>
      <Login></Login>
      <Footer></Footer>
    </React.Fragment>
  );
};

export default page;