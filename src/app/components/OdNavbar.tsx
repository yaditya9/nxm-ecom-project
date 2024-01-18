// components/SimpleNavbar.tsx
import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home'; // Import other icons similarly
import Paper from '@mui/material/Paper';
import { Box, Typography } from '@mui/material';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

// Define your navbar items here
const navbarItems = [
  { text: 'Home', icon: <HomeIcon /> }, 
  { text: 'Orders', icon: <HomeIcon /> },
  { text: 'Products', icon: <HomeIcon /> },
  { text: 'Delivery', icon: <HomeIcon /> },
  { text: 'Marketing', icon: <HomeIcon /> },
  { text: 'Delivery', icon: <HomeIcon /> },
  { text: 'Analytics', icon: <HomeIcon /> },
  { text: 'Payments', icon: <HomeIcon /> },
  { text: 'Tools', icon: <HomeIcon /> },
  { text: 'Discounts', icon: <HomeIcon /> },
  { text: 'Audience', icon: <HomeIcon /> },
  { text: 'Appearance', icon: <HomeIcon /> },
  { text: 'Plugins', icon: <HomeIcon /> },
  // Add other items here
];

const SimpleNavbar = () => {
  return (
    <React.Fragment>

   
    <Box
      sx={{
        width: 200, // Set your desired width
        height: '100vh', // Set to full height
        backgroundColor: '#1E2640', // Use theme's primary dark color
        color: 'white', // Set your desired text color
      }}
    >
        <Box sx={{ display: 'flex', alignItems: 'center', p: 2 }}>
        <img src="\Image.png" alt="Image" style={{ width: 39, height: 39, marginRight: 10 }} />
        <Box>
          <Typography variant="subtitle1">Nishyan</Typography>
          <Typography variant="subtitle2">Visit Store</Typography>
        </Box>
      </Box>
      <List component="nav">
        {navbarItems.map((item, index) => (
          <ListItem
            button
            key={index}
            sx={{
              '&:hover': {
                backgroundColor: 'primary.main', // Color for hover effect
              }, 
            }}
          >
            <ListItemIcon sx={{ color: 'inherit' }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
      
    </Box>
    </React.Fragment>
  );
};

export default SimpleNavbar;
