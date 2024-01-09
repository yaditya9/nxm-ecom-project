"use client";

import { Box } from "@mui/material";
import React from "react";
import Register from "../components/Register";
import ProjAppBar from "../components/ProjAppBar";
import Footer from "../components/Footer";
import OrderDetails from "../components/OrderDetails";
import SimpleNavbar from "../components/OdNavbar";
const page = () => (
    <React.Fragment>
       {/*  <ProjAppBar></ProjAppBar> */}
        {/* <SimpleNavbar></SimpleNavbar> */}
        <OrderDetails></OrderDetails>
        {/* <Footer></Footer> */}
    </React.Fragment>
);

export default page;