"use client";

import React from "react";
import { useGlobalContext } from "../contexts/GlobalContext";
import { Box, Container } from "@mui/material";

const HomeComponent = () => {
  const { accessToken } = useGlobalContext();
  return (
    <React.Fragment>
      <Box sx={{mx:'4.42rem'}}>
      <Container sx={{height: "50vh"}}>
        {accessToken !== "" && <Box sx={{/* mx:'12rem' */}}>User logged in! here is the access token ${accessToken}</Box>}
        {accessToken === "" && <Box>User is not logged in.</Box>}
      </Container>
      </Box>
      
    </React.Fragment>
  );
};

export default HomeComponent;