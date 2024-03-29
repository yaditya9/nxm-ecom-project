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
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useGlobalContext } from "../contexts/GlobalContext";
/* import { useRouter } from "next/router"; */
const LoginComponent = () => {
  const [result, setResult] = React.useState<string>("");
  const [error, setError] = React.useState<string>("");
  const { setUsername, setAccessToken } = useGlobalContext();
  var cookie = require("cookie-cutter");
  const router = useRouter();

  const login = async (user: any) => {
    console.log(`Login function called with values ${JSON.stringify(user)}`);
    const url = "http://localhost:3001/login";
    try {
      const response = await axios.post(url, user);
      console.log(`JWT token: ${JSON.stringify(response.data)}`);
      setResult(/* response.data.result */ "Login Successful!");
      cookie.set("access-token", response.data.result)
      setAccessToken(response.data.token);
      setUsername(response.data.username);
      router.push("/");
      setError("");
      /* console.log(`JWT token: ${response.data.result}`) */
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        // Check for response status code and set a custom error message
        if (error.response.status === 401) {
          setError("Password incorrect");
        } else {
          setError(error.response.data.message || "An error occurred");
        }
      } else {
        setError("Network Error");
      }
      setResult("");
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "password must be 6 characters or more")
        .required("Password is required"),
    }),
    onSubmit: async (values) => {
      // setTimeout(() => {
      //   alert(JSON.stringify(values, null, 2));
      // }, 5000);
      // alert(JSON.stringify(values, null, 2));
      await login(values);
    },
  });
  return (
    <React.Fragment>
      <form onSubmit={formik.handleSubmit}>
        <Container>
          <Grid container spacing={2} pt={2} px={25}>
            <Grid item xs={12}>
              <Typography variant="h4">Login</Typography>
            </Grid>
            {result && (
              <Grid item xs={12} color={"green"}>
                <Typography variant="h6">
                   {result}  {/* Token Generated! */}
                </Typography>
                {/* <Typography variant="body1" sx={{ wordBreak: 'break-all' }}>
                   {result}  
                </Typography> */}

              </Grid>
            )}
            {error && (
              <Grid item xs={12} color={"red"}>
                <Typography variant="h6">{error}</Typography>
              </Grid>
            )}

            <Grid item xs={12}>
              <TextField
                fullWidth
                id="email"
                name="email"
                label="Email"
                variant="outlined"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.email)}
                helperText={formik.errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="password"
                name="password"
                label="Password"
                variant="outlined"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.password)}
                helperText={formik.errors.password}
              />
              {/* {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>} */}
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                fullWidth
                type="submit"
                disabled={!formik.isValid || formik.isSubmitting}
              >
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
      </form>
    </React.Fragment>
  );
};

export default LoginComponent;
