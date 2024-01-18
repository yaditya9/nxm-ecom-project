import React, { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "react-material-ui-carousel";
import { CardMedia, Box } from "@mui/material";
import HomeProducts from "./HomeProducts";

interface CarouselImage {
  id: number;
  attributes: {
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
    url: string;
  };
}

const CarousalComp = () => {
  const [carouselImages, setCarouselImages] = useState<CarouselImage[]>([]);

  useEffect(() => {
    const fetchCarouselData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:1337/api/carousel-images"
        );
        setCarouselImages(response.data.data);
      } catch (error) {
        console.error("Error fetching carousel data:", error);
      }
    };

    fetchCarouselData();
  }, []);

  return (
    <Box
      sx={{
        paddingTop: '2rem', // Top padding
        paddingX: '6rem', // Horizontal padding
        height: '80vh', // Adjust height as needed
        overflow: 'hidden' // To handle any overflow caused by carousel content
      }}
    >

    
    <Carousel
      animation="fade"
      stopAutoPlayOnHover
      swipe
      indicators
      navButtonsAlwaysVisible
      
      sx={{
        height: '100%', // Ensures Carousel takes the full height of the Box
      }}
    >
      {carouselImages.map((image) => (
        <Box
          key={image.id}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "end",
            height: "100%",
            /* backgroundImage: `url(${image.attributes.url})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center', */
            width: '100%',
             
          }} /* Add any other needed props */
        >
          <CardMedia
            component="img"
            image={image.attributes.url}
            alt="Carousel Image"
            sx={{
                width: '100%', // Ensure the image takes the full width of the Carousel
                /* maxHeight: '100%', */ // Ensures the image does not exceed the height of the Carousel
                objectFit: 'cover',
                height: '75vh',
                objectPosition: 'center',
                
              }}
            
          >
            
          </CardMedia>
          {/* Any other content */}
        </Box>
      ))}
    </Carousel>
    
    
    </Box>
    
  );
};

export default CarousalComp;
