import React, { useState, useEffect } from "react";
import { Box, Container, Grid, Link, Typography, Divider } from "@mui/material";
import axios from "axios";

// Define types for the API response
type FooterItem = {
  id: number;
  attributes: {
    url: string;
    name: string;
    Category: string;
  };
};

type GroupedFooterItems = {
  [category: string]: FooterItem[];
};

const Footer = () => {
  const [footerData, setFooterData] = useState<FooterItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:1337/api/footer-urls"
        );
        setFooterData(response.data.data);
      } catch (error) {
        console.error("Error fetching footer data", error);
      }
    };

    fetchData();
  }, []);

  // Group items by categories
  const groupedItems = footerData.reduce<GroupedFooterItems>((acc, item) => {
    const category = item.attributes.Category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {});

  return (
    <Box
      sx={{
        height: "80vh",
        mt: 8,
        pt: 8,
        borderTop: "1px solid #ccc",
        bgcolor: "#203040",
      }}
    >
      <Container>
        <Grid container spacing={2} px={5}>
          {/* Dynamically generated columns */}
          {Object.entries(groupedItems).map(([category, items], index) => (
            <Grid
              item
              xs={12}
              sm={4}
              key={
                category
              } /* sx={{ textAlign: index === 0 ? 'left' : index === 1 ? 'center' : 'right' }} */
            >
              <Typography
                variant="body1"
                color={"textSecondary"}
                fontWeight={"600"}
              >
                {category}
              </Typography>
              {items.map((item) => (
                <Link href={item.attributes.url} key={item.id}>
                  <Typography variant="body1" color={"textSecondary"}>
                    {item.attributes.name}
                  </Typography>
                </Link>
              ))}
            </Grid>
          ))}

          {/* Divider */}
          <Grid item xs={12}>
            <Divider sx={{ mt: 10, mb: 2 }} />
          </Grid>

          {/* Copyright text */}
          <Grid item xs={12}>
            <Typography variant="body2" color="textSecondary" align="center">
              © Zonama All rights reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
