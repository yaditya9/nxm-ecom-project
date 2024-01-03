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
/* import { useRouter } from "next/router"; */
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  /* const router = useRouter(); */

  const handleSubmit = async () => {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      setErrorMessage(data.message);
    } else {
      /* router.push("/home"); */ // Redirect to home page
    }
  };

  return (
    <React.Fragment>
      <Container>
        <Grid container spacing={2} pt={2} px={25}>
          <Grid item xs={12}>
            <Typography variant="h4">Login</Typography>
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="outlined-basic"
              type="password"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              variant="outlined"
            />
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" onClick={handleSubmit} fullWidth>
              Login
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={2} pt={2} px={25}>
          <Grid item xs={2.75}>
            <Typography>Don't have an account?</Typography>
          </Grid>
          <Grid item xs={6}>
            <Link href="/register" underline="hover">
              {"Register"}
            </Link>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Login;
