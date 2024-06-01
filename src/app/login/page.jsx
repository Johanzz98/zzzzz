  "use client";
  import React, { useState, useRef, useContext, useEffect, useLayoutEffect } from 'react'; 
  import {
    Avatar,
    Box,
    Button,
    Checkbox,
    CircularProgress,
    Divider,
    FormControlLabel,
    Grid,
    Link,
    Paper,
    Typography,
  } from "@mui/material";
  import { useDispatch } from "react-redux";
  import TextField from "@mui/material/TextField";
  import { Formik, Form, Field, ErrorMessage } from "formik";
  import * as Yup from "yup";
  import useMediaQuery from "@mui/material/useMediaQuery";
  import { useTheme } from "@mui/material/styles";
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  // Importaciones locales
  import { useAuth  } from "@/context/AuthProvider";
  import axios from '@/api/axios';
  
  // Constantes y configuraciones
  const LOGIN_URL = '/auth/login';
  
  const paperStyle = {
    padding: 12,
    height: "72vh",
    width: 300,
    margin: "0 auto 32px",
    boxShadow: "none",
    borderRadius: "24px",
  };
  
  const SmallSpaperStyle = {
    padding: 4,
    height: "72vh",
    margin: "0 7px 64px",
    boxShadow: "none",
    borderRadius: "24px",
  };
  
  const btnStyle = {
    margin: "8px 0",
  };
  
  const login = ({ handleChange }) => {
    const theme = useTheme();
    const { dispatch } = useAuth();
  
    
    const [loading, setLoading] = useState(false);
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const [errorMessage, setErrorMessage] = useState("");
    const errorMessageRef = useRef(null);

    const notServer = () => {
      toast.error('No server response', {
        position: "bottom-right",
        autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "colored",

      });
    }
   
        const Unauthorized = () => {
          toast.error('Contraseña Incorrecta', {
            position: "bottom-right",
            autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "colored",

          });
        }

        const notFound = () => {
          toast.error('Email Incorrecto', {
            position: "bottom-right",
            autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "colored",

          });
        }
    const initialValues = {
      email: "",
      password: "",
      remember: false,
    };
  
    const validationSchema = Yup.object().shape({
      email: Yup.string()
        .email("Please enter a valid email")
        .required("Required"),
      password: Yup.string().required("Required"),
    });
  
    const onSubmit = async (values, props) => {
      setLoading(true);
      try {
        const response = await axios.post(LOGIN_URL, values, {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true 
        });
        const token = response?.data?.data?.token;
        const roles = response?.data?.data?.role;
        console.log(response)
         // Guarda el token en localStorage
         if (values.remember) {
          localStorage.setItem('token', token); // Guarda el token en localStorage
        } else {
          sessionStorage.setItem('token', token); // Guarda el token en sessionStorage
        }

    // Despacha la acción de inicio de sesión con los datos recibidos
  
        
        // Opcionalmente, puedes redirigir al usuario después de despachar la acción
        setTimeout(() => {
          props.resetForm();
          props.setSubmitting(false);
         window.location.href = "/";
        }, 3000);
      } catch (err) {
        setLoading(false);
        if (!err?.response) {
          notServer();
        } else if (err.response?.status === 404) {
          // Manejo específico para 404, asegúrate de que esto sea adecuado
          console.log("Error 404: Recurso no encontrado");
          notFound();
        } else if (err.response?.status === 401) {
          // Manejo específico para 401
          console.log("Error 401: No autorizado");
          Unauthorized();
        } else {
          setErrorMessage('Login failed');
        }
        if (errorMessageRef.current) {
          errorMessageRef.current.focus();
        }
      }
    };

  
    return (
      <Grid>
       <ToastContainer
  position="bottom-right"
  autoClose={5000}
  hideProgressBar={false}
  closeOnClick
  pauseOnHover
  draggable
  progress={undefined}
  theme="colored"
  style={{ fontSize: '12px', maxWidth: '446px',right:5,  }} // Establece el tamaño y estilo del ToastContainer
/>
        {loading && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 9999,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <CircularProgress color="primary" />
          </div>
        )}
        <Paper elevation={12} style={isSmallScreen ? SmallSpaperStyle : paperStyle}>
          
          <Grid align="center">
          <Box>
              <img
                src="https://nikeclprod.vtexassets.com/assets/vtex/assets-builder/nikeclprod.store/3.0.10/icons/Assets_for_off%20platform/swoosh___33f7ffaf2fc124733c2c4a60a12a1160.svg"
                alt="Nike Logo"
                style={{
                  width: "60px",
                  aspectRatio: "auto 60 / 28.8",
                  height: "32px",

                  cursor: "pointer",
                }} // Ajusta el tamaño según sea necesario
              />
            </Box>

            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "6px 0 6px",
                fontSize: "24px",
                color: "#111",
                border: "none",

                textAlign: "center",
                fontFamily: " 'Helvetica', sans-serif",
              }}
            >
              Welcome Back
            </Typography>
          </Grid>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            {(props) => (
              <Form>
                <Field
                  as={TextField}
                  label="Email"
                  name="email"
                  placeholder="Enter email"
                  fullWidth
                  required
                  helperText={<ErrorMessage name="email" />}
                  style={{ marginBottom: "4px" }}
                  FormHelperTextProps={{ sx: { color: "#f44336" } }} // Aquí aplicamos el estilo al componente FormHelperText
                />

                <Field
                  as={TextField}
                  label="Password"
                  name="password"
                  placeholder="Enter Password"
                  type="password"
                  fullWidth
                  required
                  helperText={<ErrorMessage name="password" />}
                  FormHelperTextProps={{ sx: { color: "#f44336" } }} // Aquí aplicamos el estilo al componente FormHelperText
                />
                <Field
                  as={FormControlLabel}
                  name="remember"
                  control={<Checkbox color="primary" />}
                  label="Remember me"
                />

                <Button
                  type="submit"
                  color="primary"
                  variant="contained"
                  disabled={props.isSubmitting}
                  style={btnStyle}
                  fullWidth
                >
                  {props.isSubmitting ? "Loading" : "Sign in"}{" "}
                </Button>
                {console.log(props)}
                {errorMessage && <p ref={errorMessageRef}>{errorMessage}</p>}
              </Form>
            )}
          </Formik>
          <Box>
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "6px 0 6px",
                fontSize: "14px",
                color: "#111",
                border: "none",

                textAlign: "center",
                fontFamily: " 'Helvetica', sans-serif",
              }}
            >
              Or sign in using
            </Typography>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={`../../assets/googleLogo.svg`}
                alt="Google Logo"
                style={{
                  cursor: "pointer",

                  height: "20px",

                  border: "1px solid blue",
                  borderRadius: "6px",
                  padding: "2px 24px 2px 24px",
                }}
              />

              <img
                src={`../../assets/facebookLogo.svg`}
                alt="Facebook Logo"
                style={{
                  cursor: "pointer",

                  height: "20px",
                  margin: "8px",
                  border: "1px solid blue",
                  borderRadius: "6px",
                  padding: "2px 24px 2px 24px",
                }}
              />

              <img
                src={`../../assets/appleLogo.svg`}
                alt="Apple Logo"
                style={{
                  cursor: "pointer",

                  height: "20px",

                  border: "1px solid blue",
                  borderRadius: "6px",

                  padding: "2px 24px 2px 24px",
                }}
              />
            </Box>
            <Divider sx={{ borderColor: "#9e9e9e", margin: "8px 0" }} />
          </Box>
          <Box
            sx={{
              alignItems: "center",
              justifyContent: "center",

              fontSize: "12px",
              color: "#111",
              border: "none",

              textAlign: "center",
              fontFamily: " 'Helvetica', sans-serif",
            }}
          >
            <Typography>
              <Link href="#">Forgot password ?</Link>
            </Typography>
            <Typography sx={{
                alignItems: "center",
                justifyContent: "center",
                // Eliminé el margen inferior y añadí solo el margen vertical
                fontSize: "14px",
                color: "grey",
                border: "none",
                textAlign: "center",
                fontFamily: "'Helvetica', sans-serif",
                marginTop:'2px'
              }}>
              {"\u00A0"} Do you have an account?{" "}
              <Link href="#" onClick={() => handleChange( 1)}>
                Sign Up
              </Link>
            </Typography>
          </Box>
          <Divider sx={{ borderColor: "#9e9e9e", margin: "8px 0" }} />
          <Box>
            <Typography
              sx={{
                alignItems: "center",
                justifyContent: "center",
                // Eliminé el margen inferior y añadí solo el margen vertical
                fontSize: "11px",
                color: "grey",
                border: "none",
                textAlign: "center",
                fontFamily: "'Helvetica', sans-serif",
              }}
            >
              Click "Sign In" to agree to Parrella{"\u00A0"}{" "}
              <Link href="#" underline="always">
                {" "}
                Terms of Service{"\u00A0"}{" "}
              </Link>{" "}
              and acknowledge that
            </Typography>
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "8px 0 12px",
                fontSize: "12px",
                color: "grey",
                border: "none",

                textAlign: "center",
                fontFamily: " 'Helvetica', sans-serif",
              }}
            >
              {" "}
              Parrella{"\u00A0"}{" "}
              <Link href="#" underline="always">
                Privacy Policy{"\u00A0"}{" "}
              </Link>{" "}
              applies to you.
            </Typography>
          </Box>
        </Paper>
      </Grid>
    );
  };

  export default login;
