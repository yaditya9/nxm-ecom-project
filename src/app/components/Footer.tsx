import React from "react";
import { Box, Container, Grid, Link, Typography, Divider } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ height: "80vh", mt: 8, pt: 8, borderTop: "1px solid #ccc", bgcolor: "#203040" }}>
      <Container>
        <Grid container spacing={2} px={5}>
          {/* Three columns of text */}
          <Grid item xs={12} sm={4}>
            <Typography variant="body1" color={"textSecondary"} fontWeight={"600"}>
              Help
              <br />
              </Typography>
              <Typography variant="body1" color={"textSecondary"}>
              Contact
              <br />
              Support
              <br />
              Privacy Notice
              <br />
              Conditions of Use
              
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="body1" color={"textSecondary"} fontWeight={"600"}>
              Help
              <br />
              </Typography>
              <Typography variant="body1" color={"textSecondary"}>
              Contact
              <br />
              Support
              <br />
              Privacy Notice
              <br />
              Conditions of Use
              
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="body1" color={"textSecondary"} fontWeight={"600"}>
              Help
              <br />
              </Typography>
              <Typography variant="body1" color={"textSecondary"}>
              Contact
              <br />
              Support
              <br />
              Privacy Notice
              <br />
              Conditions of Use
              
            </Typography>
          </Grid>

          {/* Divider */}
          <Grid item xs={12} >
            <Divider sx={{ mt: 10, mb: 2 , }} />
          </Grid>
          
          {/* Copyright text */}
          <Grid item xs={12}>
            <Typography variant="body2" color="textSecondary"  align="center" >
              © Zonama All rights reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;