import React, { useState, useEffect } from 'react';
import { Box, Grid, Card, CardActionArea, CardMedia, CardContent, CardActions, Typography, Button } from '@mui/material';
import axios from 'axios';

// Define the type for product attributes
type ProductAttributes = {
  name: string;
  price: number;
  slug: string;
  url: string;
};

// Define the type for the product
type Product = {
  id: number;
  attributes: ProductAttributes;
};

const HomeProducts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:1337/api/products');
        setProducts(response.data.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  // Function to handle adding to cart (placeholder for now)
  const addToCartHandler = (product: ProductAttributes) => {
    console.log('Add to cart:', product);
    // Implement add to cart logic
  };

  return (
    <Box
    sx={{
      paddingTop: '2rem', // Top padding
      paddingX: '6rem', // Horizontal padding
      height: 'auto', // Adjust height as needed
      //overflow: 'auto' // To handle any overflow caused by carousel content
    }}
  >
      <Typography variant="h5" color="text.primary" gutterBottom>
        Popular Products
      </Typography>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item md={4} key={product.id}>
            <Card>
              <a href={`/product/${product.attributes.slug}`} >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={product.attributes.url}
                    title={product.attributes.name}
                  />
                  <CardContent>
                    <Typography>{product.attributes.name}</Typography>
                  </CardContent>
                </CardActionArea>
              </a>
              <CardActions>
                <Typography>${product.attributes.price}</Typography>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => addToCartHandler(product.attributes)}
                >
                  Add to cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HomeProducts;
