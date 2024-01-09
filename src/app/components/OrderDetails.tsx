// pages/index.tsx
import React from "react";
import {
  Container,
  Table,
  Grid,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Typography,
  Pagination,
  Button,
  TextField,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SimpleNavbar from "./OdNavbar";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ProjAppBar from "./ProjAppBar";
import Divider from "@mui/material/Divider";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import OdAppBar from "./OdAppBar";

// Define the type for your data
type Transaction = {
  orderId: string;
  orderDate: string;
  orderAmount: string;
  transactionFees: string;
};

// Mock data for the sake of the example
const mockTransactions: Transaction[] = Array.from(
  { length: 10 },
  (_, index) => ({
    orderId: `#281209`,
    orderDate: "7 July, 2023",
    orderAmount: "₹1,728.23",
    transactionFees: "₹22",
  })
);

const OrderDetails: React.FC = () => {
  return (
    <Box sx={{ display: "flex", /* height: "100vh", */ /* width: "100vw", */ m: 0 }}>
       <Box sx={{ width: 200, bgcolor: '#1E2640', minHeight: '100vh' }}> {/* Adjust the width as needed */}
        <SimpleNavbar />
      </Box>
      <Box sx={{ flexGrow: 1, overflow: "auto", p: 0, bgcolor: "#FAFAFA" }}>
        {" "}
        {/* Added flexGrow and overflow */}
        <OdAppBar />
        <Box sx={{ flexGrow: 1, overflow: "auto", p: 3 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 4,
            }}
          >
            <Typography variant="h5" component="h1" gutterBottom sx={{fontWeight: "medium"}}>
              Overview
            </Typography>
            <Button
              variant="outlined"
              endIcon={<ArrowDropDownIcon />}
              sx={{ textTransform: "none", color:"#4C4C4C", borderColor: '#D9D9D9', bgcolor:'white' }} // Prevents uppercase transformation commonly applied to buttons
            >
              {" "}
              Last Month
            </Button>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
            <Typography variant="h5" gutterBottom sx={{ mr: 4 , fontWeight:"light"}}>
              RazorPay
            </Typography>
            <Typography variant="h5" gutterBottom sx={{ fontWeight:"light"}}>
              CashFree
            </Typography>
          </Box>
          <Divider
            orientation="horizontal"
            variant="fullWidth"
            sx={{ borderBottomWidth: 3, borderColor: "#D9D9D9" }}
          ></Divider>
          <Grid container spacing={2} sx={{ mt: 2, mb: 5 }}>
            {/* First box */}
            <Grid item xs={6}>
              <Paper sx={{ p: 2, backgroundColor: "white" }}>
                <Typography color="#4C4C4C" variant="h6" sx={{ mb: 2, fontWeight:'medium' }}>
                  Total orders
                </Typography>
                <Typography variant="h4" sx={{fontWeight:"bold"}}>231</Typography>
              </Paper>
            </Grid>

            {/* Second box */}
            <Grid item xs={6}>
              <Paper sx={{ p: 2, backgroundColor: "white" }}>
                <Typography variant="h6" color="#4C4C4C" sx={{ mb: 2, fontWeight:'medium' }}>
                  Amount received
                </Typography>
                <Typography variant="h4" sx={{fontWeight:"bold"}}>₹23,493,344</Typography>
              </Paper>
            </Grid>
          </Grid>
          <Box>
            <Typography variant="h5" marginTop={3} marginBottom={3}>
              Transactions | This Month
            </Typography>
            <Box>
              <Paper sx={{ overflow: "hidden" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    pt: 2,
                    px: 2,
                  }}
                >
                  {/* Search Bar */}
                  <TextField
                    label="Search"
                    variant="outlined"
                    size="small"
                    placeholder="Search order by ID..."
                    InputProps={{
                      startAdornment: <SearchIcon />,
                    }}
                  />

                  {/* Buttons */}
                  <Box>
                    <Button
                      variant="outlined"
                      color="primary"
                      
                      startIcon={<SwapVertIcon />}
                      sx={{ mr: 1, color:"#4C4C4C",  borderColor: '#D9D9D9' }}
                    >
                      Sort
                    </Button>
                    <Button variant="outlined"  sx={{ borderColor: '#D9D9D9', color:"#4C4C4C"}}>
                      <FileDownloadIcon />
                    </Button>
                  </Box>
                </Box>
                <TableContainer /*  component={Paper} */ sx={{ px: 2, py: 2 }}>
                  <Table sx={{ minWidth: 650 }} aria-label="transaction table">
                    <TableHead>
                      <TableRow sx={{ bgcolor: "#F2F2F2",  }}>
                        <TableCell sx={{ borderBottom: 'none' }}>Order ID</TableCell>
                        <TableCell sx={{ borderBottom: 'none' }} align="center">Order date</TableCell>
                        <TableCell sx={{ borderBottom: 'none' }} align="right">Order amount</TableCell>
                        <TableCell sx={{ borderBottom: 'none' }} align="right">Transaction Fees</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {mockTransactions.map((row, index) => (
                        <TableRow key={index}>
                          <TableCell>{row.orderId}</TableCell>
                          <TableCell align="center">{row.orderDate}</TableCell>
                          <TableCell align="right">{row.orderAmount}</TableCell>
                          <TableCell align="right">
                            {row.transactionFees}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                <Box my={2} display="flex" justifyContent="center">
                  <Pagination count={10} color="primary" />
                </Box>
              </Paper>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

/* const OrderDetails: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', height: '100vh', margin: 0 }}>
    <SimpleNavbar />
    
    <Box  sx={{ mt: 0, padding: 0 }}>
        <ProjAppBar></ProjAppBar>
      <Typography variant="h5" component="h1" gutterBottom>
        Overview
      </Typography>
      <Typography variant="h6" gutterBottom>
        Payments | Last Month
      </Typography>
      <Typography variant="h3" gutterBottom sx={{ my: 4 }}>
        ₹23,92,312.19
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="transaction table">
          <TableHead>
            <TableRow>
              <TableCell>Order ID</TableCell>
              <TableCell>Order date</TableCell>
              <TableCell>Order amount</TableCell>
              <TableCell>Transaction Fees</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mockTransactions.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.orderId}</TableCell>
                <TableCell>{row.orderDate}</TableCell>
                <TableCell>{row.orderAmount}</TableCell>
                <TableCell>{row.transactionFees}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box my={2} display="flex" justifyContent="center">
        <Pagination count={10} color="primary" />
      </Box>
    </Box>
    </Box>
  );
};
 */
export default OrderDetails;
