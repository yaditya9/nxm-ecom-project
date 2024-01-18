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
import { User } from "../models/user";
import { useRouter } from "next/navigation";

const Register = () => {
  const [result, setResult] = React.useState<string>("");
  const [error, setError] = React.useState<string>("");
  const router = useRouter();
  const register = async (user: User) => {
    const url = "http://localhost:3001/register";
    try {
      const response = await axios.post(url, user);
      console.log(`${JSON.stringify(response.data)}`);
      setResult(response.data.result);
      router.push("/login");
      setError("");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(error.message);
        setResult("");
        console.log(error);
      } else {
        console.log(error);
      }
    }
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Must be 2 characters or more")
        .max(25, "Must be 25 characters or less")
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "password must be 6 characters or more")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .min(6, "password must be 6 characters or more")
        .required("Password is required"),
    }),
    onSubmit: async (values) => {
      // setTimeout(() => {
      //   alert(JSON.stringify(values, null, 2));
      // }, 5000);
      // alert(JSON.stringify(values, null, 2));
      await register(values);
    },
  });

  return (
    <React.Fragment>
      <form onSubmit={formik.handleSubmit}>
        <Container>
          <Grid container
            spacing={2}  sx={{ pt: 2, px: { xs: 2, sm: 10, md: 25 } }}
          >
            <Grid item xs={12}>
              <Typography variant="h4">Register</Typography>
            </Grid>
          
          {result && (
            <Grid item xs={12} color={"green"}>
              <Typography variant="h6">{result}</Typography>
            </Grid>
          )}
          {error && (
            <Grid item xs={12} color={"red"}>
              <Typography variant="h6">{error}</Typography>
            </Grid>
          )}
          <Grid item  xs={12} >
            <TextField
              fullWidth
              id="name"
              name="name"
              label="Name"
              variant="outlined"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={Boolean(formik.errors.name)}
              helperText={formik.errors.name}
            />
          </Grid>
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
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="confirmPassword"
              name="confirmPassword"
              label="Confirm password"
              variant="outlined"
              type="password"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              error={Boolean(formik.errors.confirmPassword)}
              helperText={formik.errors.confirmPassword}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              fullWidth
              type="submit"
              disabled={!formik.isValid || formik.isSubmitting}
            >
              Register
            </Button>
          </Grid>
           </Grid> 
          <Grid
            container
            spacing={2}
            pt={2}
            px={{ sm: 25 }} /* pt={2} px={25} */
          >
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
      </form>
    </React.Fragment>
  );
};

export default Register;
