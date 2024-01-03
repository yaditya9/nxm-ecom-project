import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import ProjAppBar from "./ProjAppBar";
import { useState } from "react";


const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [name, setName] = useState("")
  const [nameError, setNameError] = useState("");
  const [successMessage, setSuccessMessage] = useState('');
  const validate = () => {
    let isValid = true;

    if (!email) {
      setEmailError("Please enter email");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!password) {
      setPasswordError("Please enter password");
      isValid = false;
    } else {
      setPasswordError("");
    }
    if (!name) {
        setNameError("Please enter your name");
        isValid = false;
      } else {
        setNameError("");
      }

    return isValid;
  };
  const [errorMessage, setErrorMessage] = useState('');
  const handleSubmit = async () => {
    if (!validate()) return;
    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await response.json();
    if (!response.ok) {
        setErrorMessage(data.message); // Set error message from API response
        setSuccessMessage('');
      } else {
        console.log(data); // handle the response
        setSuccessMessage('Registration successful');
        setErrorMessage('');
      }
    
  };

  return (
    <React.Fragment>
      <Container>
        <Grid container spacing={2}  sx={{ pt: 2, px: { xs: 2, sm: 10, md: 25 } }}/* pt={2} px={25} */>
          <Grid item xs={12}>
            <Typography variant="h4">Register</Typography>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              /*  id="outlined-basic" */
              label="Enter Name "
              error={!!nameError}
              helperText={nameError}
              variant="outlined"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              type="email"
              /* id="outlined-basic" */
              label="Enter email "
              error={!!emailError}
              helperText={emailError}
              value={email}
              variant="outlined"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              type="password"
              /* id="outlined-basic" */
              error={!!passwordError}
              helperText={passwordError}
              value={password}
              label="Enter Password "
              variant="outlined"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              /* id="outlined-basic" */
              label="Confirm Password "
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" fullWidth onClick={handleSubmit}>
              Register
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ pt: 2, px: { xs: 2, sm: 10, md: 25 } }}/* pt={2} px={25} */>
          <Grid item xs={2.75}>
            <Typography>Already have an account?</Typography>
          </Grid>
          <Grid item xs={6}>
            <Link href="/login" underline="hover">
              {"Login"}
            </Link>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Register;
