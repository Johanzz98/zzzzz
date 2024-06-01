"use client";
import React, { useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import AddReactionIcon from "@mui/icons-material/AddReaction";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import  axios  from '@/api/axios';
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import FormHelperText from "@mui/material/FormHelperText";
import IconButton from '@mui/material/IconButton';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

const REGISTER_URL = '/user'

const paperStyle = {
  padding:4,
  height: "72vh",
  width: 294,
  margin: "0 7px 32px",
  boxShadow: "none",
  borderRadius: "24px",
  alignItems: "center",
  justifyContent: "center",
};

const SmallpaperStyle = {
  padding: 16,
  maxHeight: "72vh",
  width: 294,
  margin: "0 auto 64px",
  boxShadow: "none",
  borderRadius: "24px",
};

const headerStyle = {

  alignItems: "center",
  justifyContent: "center",

  fontSize: "24px",
  color: "#111",
  border: "none",

  textAlign: "center",
  fontFamily: " 'Helvetica', sans-serif",
};

const marginTop = {
  marginTop: 5,
};

const SignUp = () => {
  const theme = useTheme();

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const initialValues = {
  
    email: "",
    gender: "",
    password: "",
    phoneNumber: "",
    confirmPassword: "",
    termsAndConditions: false,
    person: {
      fullName: "",
      country: "Venezuela",
      codePostal: "6160",
    },
  };
  const onSubmit = async (values, props) => {
    console.log(values); // Esto imprimirá todos los valores del formulario en la consola antes de enviarlos.
    try {
      const response = await axios.post(
        REGISTER_URL,
        {
          email: values.email,
          password: values.password,
          person: {
            fullName: values.person.fullName,
            codePostal: values.person.codePostal,
            country: values.person.country,
          },
        },
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      );
      console.log("Response from server:", response.data);
      console.log(response.data);
      console.log(response.data.accessToken);
      console.log(JSON.stringify(response.data));
      props.resetForm();
    } catch (err) {
      if (!err.response) {
        console.error('No Server Response');
      } else if (err.response.status === 409) {
        console.error('Username Taken');
      } else {
        console.error('Registration Failed');
      }
      props.setSubmitting(false);
    }
  };
  

  const validationSchema = Yup.object().shape({
    person: Yup.object().shape({
      fullName: Yup.string()
       .matches(/^[a-zA-Z\s]+$/, "Name should contain only letters")
       .min(3, "It's too short")
       .required("Required"),
    
    }),
    email: Yup.string()
      .email("Enter a valid email")
      .required("Required")
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
        "Invalid email format"
      )
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com)$/i,
        "Only .com domains are allowed"
      ),

    gender: Yup.string()
      .oneOf(["male", "female", "other"], "Required")
      .required("Required"),
    phoneNumber: Yup.number()
      .typeError("Enter valid Phone Numer")
      .required("Required"),
    password: Yup.string()
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .min(8, "Password must be at least 8 characters long")
    .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Password not matched")
      .required("Required"),
    termsAndConditions: Yup.string().oneOf(
      ["true"],
      "Accept terms & conditions"
    ),
  });

  return (
    <Grid>
      <Paper style={isSmallScreen ? SmallpaperStyle : paperStyle}>
        <Grid align="center">
        <Box >
            <img
              src="https://nikeclprod.vtexassets.com/assets/vtex/assets-builder/nikeclprod.store/3.0.10/icons/Assets_for_off%20platform/swoosh___33f7ffaf2fc124733c2c4a60a12a1160.svg"
              alt="Nike Logo"
              style={{
                width: "60px",
                aspectRatio: "auto 60 / 28.8",
                height: "24px",
                
                cursor: "pointer",
             
              }} // Ajusta el tamaño según sea necesario
            />
          </Box>
          <Grid item>
            <Typography variant="h4" style={headerStyle}>
              Create Account
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="caption"
              gutterBottom
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",

                fontSize: "12px",
                color: "#757575",
                border: "none",

                textAlign: "center",
                fontFamily: " 'Helvetica', sans-serif",
              }}
            >
              Please fill this form to create an account
            </Typography>
          </Grid>
          <Formik
  initialValues={initialValues}
  validationSchema={validationSchema}
  onSubmit={onSubmit}
>
            {(props) => (
              <Form>
           <Field
        as={TextField}
        fullWidth
        name="person.fullName" // Asegúrate de que esté configurado así
        label="Name"
        placeholder="Enter your Name"
        helperText={<ErrorMessage name="person.fullName" />} // También aquí
  FormHelperTextProps={{ sx: { fontSize: '0.6rem', color: '#f44336' } }}
  sx={{
    '& .MuiInputLabel-root': { fontSize: '0.8rem' }, // Reducir tamaño del label
    '& .MuiInputBase-root': { fontSize: '0.8rem' }, // Reducir tamaño del input
    '& .MuiInputBase-root.MuiOutlinedInput-root': { height: '43px' }, // Ajustar altura del TextField
  }}
/>
              
                <Field
                  as={TextField}
                  fullWidth
                  name="email"
                  label="Email"
                  placeholder="Enter your Email"
                  helperText={<ErrorMessage name="email" />}
                  FormHelperTextProps={{ sx: { fontSize: '0.6rem', color: '#f44336' } }}
                  sx={{
                    '& .MuiInputLabel-root': { fontSize: '0.8rem' }, // Reducir tamaño del label
                    '& .MuiInputBase-root': { fontSize: '0.8rem'}, // Reducir tamaño del input
                    '& .MuiInputBase-root.MuiOutlinedInput-root': { height: '43px' }, // Ajustar altura del TextField
                    marginTop:'8px'
                  }}
                
                />

                <FormControl style={marginTop}>
              
                  <Field
                    as={RadioGroup}
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="gender"
                    name="gender"
                    style={{ display: "initial" }}
                  >
                    <FormControlLabel
                      value="female"
                      name="gender"
                      control={<Radio />}
                      label="Female"
                      sx={{ transform: "scale(0.8)", marginTop: '-8px',marginBottom:'-14px' }}
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                      sx={{ transform: "scale(0.8)", marginTop: '-8px',marginBottom:'-14px'  }}
                    />
                    {/*<FormControlLabel value="other" control={<Radio />} label="Other" /> 3*/}
                  </Field>
                  <FormHelperText
                    sx={{
                      fontSize: '0.6rem',
                      color: "#f44336",
                      
                      
                    }}
                  >
                    <ErrorMessage name="gender" />
                  </FormHelperText>
                </FormControl>

                <Field
                  as={TextField}
                  fullWidth
                  name="phoneNumber"
                  label="Phone Number"
                  helperText={<ErrorMessage name="phoneNumber" />}
                  FormHelperTextProps={{ sx: { fontSize: '0.6rem', color: '#f44336' } }}
                  sx={{
                    '& .MuiInputLabel-root': { fontSize: '0.8rem' }, // Reducir tamaño del label
                    '& .MuiInputBase-root': { fontSize: '0.8rem' }, // Reducir tamaño del input
                    '& .MuiInputBase-root.MuiOutlinedInput-root': { height: '43px' }, // Ajustar altura del TextField
                    marginTop:'8px'
                  }}
                />
              <div style={{ position: 'relative', width: '100%' }}>
  <Field
    as={TextField}
    fullWidth
    name="password"
    label="Password"
    type={showPassword ? 'text' : 'password'}
    helperText={<ErrorMessage name="password" />}
    FormHelperTextProps={{ sx: { fontSize: '0.6rem', color: '#f44336' } }}
    sx={{
      '& .MuiInputLabel-root': { fontSize: '0.8rem' },
      '& .MuiInputBase-root': { fontSize: '0.8rem' },
      '& .MuiInputBase-root.MuiOutlinedInput-root': { height: '43px' },
      marginTop:'8px'
    }}
  />
  <IconButton
    onClick={() => setShowPassword(!showPassword)}
    size="small"
    style={{
      position: 'absolute',
      right: '10px',
      top: '50%',
      transform: 'translateY(-50%)',
    }}
  >
    {showPassword ? (
      <VisibilityOutlinedIcon />
    ) : (
      <VisibilityOffOutlinedIcon />
    )}
  </IconButton>
</div>
<div style={{ position: 'relative', width: '100%' }}>
  <Field
    as={TextField}
    fullWidth
    name="confirmPassword"
    label="Confirm Password"
    type={showConfirmPassword ? 'text' : 'password'}
    helperText={<ErrorMessage name="confirmPassword" />}
    FormHelperTextProps={{ sx: { fontSize: '0.6rem', color: '#f44336' } }}
    sx={{
      '& .MuiInputLabel-root': { fontSize: '0.8rem' },
      '& .MuiInputBase-root': { fontSize: '0.8rem' },
      '& .MuiInputBase-root.MuiOutlinedInput-root': { height: '43px' },
      marginTop:'8px'
    }}
  />
  <IconButton
    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
    size="small"
    style={{
      position: 'absolute',
      right: '10px',
      top: '50%',
      transform: 'translateY(-50%)',
    }}
  >
    {showConfirmPassword ? (
      <VisibilityOutlinedIcon />
    ) : (
      <VisibilityOffOutlinedIcon />
    )}
  </IconButton>
</div>

<FormControlLabel
  control={
    <Field
      as={Checkbox}
      name="termsAndConditions"
      sx={{ transform: "scale(0.8)",marginBottom:'-14px' }} // Reducir escala del checkbox
      color="primary"
    />
  }
  label={
    <Typography variant="body1" sx={{ fontSize: "0.8rem",marginBottom:'-14px' }}>
      I accept the terms and conditions
    </Typography> // Reducir tamaño del texto
  }
/>
<FormHelperText
  sx={{ fontSize: "0.6rem", color: "#f44336",marginBottom:'-4px'}} // Reducir tamaño y cambiar color del texto de ayuda
>
  <ErrorMessage name="termsAndConditions" />
</FormHelperText>
                <Button
  type="submit"
  variant="contained"
  disabled={props.isSubmitting} 
  sx={{marginTop:'4px'}}
>
  {props.isSubmitting ? "Loading" : "Sign Up"}
</Button>
              </Form>
            )}
          </Formik>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default SignUp;
