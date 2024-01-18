"use client";


import Image from "next/image";
import styles from "./page.module.css";
import React, { useEffect, useState } from "react";
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
import ProjAppBar from "../../components/ProjAppBar";
import Footer from "../../components/Footer";
import HomeComponent from "../../components/Home";
import ProductPage from "../../components/ProductPage"
import { GlobalContextProvider } from "../../contexts/GlobalContext";
import axios from "axios";


export default function Home() {
    const slug = "classic-shirt";
  return (
    <React.Fragment>
      <ProjAppBar></ProjAppBar>
      <ProductPage  slug={slug}></ProductPage>

      <Footer></Footer>
    </React.Fragment>
  );
}

/* import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Grid, Typography, Button, List, ListItem } from '@mui/material';
import Image from 'next/image';

// Define the types for product attributes and data
type ProductAttributes = {
  name: string;
  price: number;
  slug: string;
  url: string;
  Category: string;
  Description: string;
  Brand: string;
  CountInStock: number;
  productImage: {
    data: {
      attributes: {
        url: string;
        formats: {
          thumbnail: { url: string };
          medium: { url: string };
          small: { url: string };
        };
      };
    };
  };
};

type ProductData = {
  id: number;
  attributes: ProductAttributes;
};

type ProductPageProps = {
  slug: string;
};

const ProductPage: React.FC<ProductPageProps> = ({ slug }) => {
  const [product, setProduct] = useState<ProductAttributes | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        console.log('Fetching product with slug:', slug);
        const response = await axios.get(`http://localhost:1337/api/products?filters[slug][$eq]=${slug}&populate=*`);
        const productData: ProductData[] = response.data.data;
        if (productData.length > 0) {
          setProduct(productData[0].attributes);
        } else {
          console.error('Product not found');
        }
      } catch (error) {
        console.error('Error fetching product', error);
      }
    };

    fetchProduct();
  }, [slug]);

  if (!product) {
    return <Typography>Loading...</Typography>;
  }

  // Use medium format image or fallback to the original image URL
  const imageUrl = product.productImage.data.attributes.formats.medium
    ? product.productImage.data.attributes.formats.medium.url
    : product.productImage.data.attributes.url;

  return (
    <Box sx={{ padding: 2 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Image src={imageUrl} alt={product.name} width={640} height={640} layout="responsive" />
        </Grid>
        <Grid item xs={12} md={6}>
          <List>
            <ListItem><Typography variant="h4">{product.name}</Typography></ListItem>
            <ListItem><Typography>Brand: {product.Brand}</Typography></ListItem>
            <ListItem><Typography>Category: {product.Category}</Typography></ListItem>
            <ListItem><Typography>Price: ${product.price}</Typography></ListItem>
            <ListItem><Typography>Description: {product.Description}</Typography></ListItem>
            <ListItem><Typography>In Stock: {product.CountInStock > 0 ? 'Yes' : 'No'}</Typography></ListItem>
          </List>
          <Button variant="contained" color="primary" fullWidth>
            Add to Cart
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductPage;
 */