import React, { useState } from 'react';
import { Modal, Box, Button, TextField, IconButton } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import ClearIcon from '@mui/icons-material/Clear';

const FullNameModal = ({ open, handleClose }) => {
  const [showPassword, setShowPassword] = useState(false);

  // Define los valores iniciales y el esquema de validación con Yup
  const initialValues = {
    person: {
      fullName: '',
      email: '',
      gender: '',
      phoneNumber: '',
      password: '',
      confirmPassword: '' // Nuevo campo para la confirmación de contraseña
    }
  };

  const validationSchema = Yup.object({
    person: Yup.object().shape({
      fullName: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      gender: Yup.string().required('Required'),
      phoneNumber: Yup.string().required('Required'),
      password: Yup.string().required('Required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('person.password'), null], 'Passwords must match') // Valida que coincida con la contraseña
        .required('Required')
    })
  });

  const onSubmit = (values, { setSubmitting }) => {
    // Aquí maneja la lógica de envío del formulario
    console.log(values);
    setSubmitting(false);
  };

  return (
    <Modal open={open} onClose={handleClose} sx={{ '& .MuiPaper-root': { border: 'none' }}}>
      
      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '500px', height: '500px', bgcolor: 'background.paper',border: 'none' , p: 4 }}>
      <IconButton
          onClick={handleClose}
          style={{
            position: 'absolute',
            top: '-15px',
            right: '-16px',
            backgroundColor:"white",border:'1px solid black',
            borderRadius:'0'
          }}
        >
          <ClearIcon sx={{fontSize:'1rem', color:'black'}} />
        </IconButton>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ values, handleChange, handleSubmit, isSubmitting }) => (
            <Form>
              <Field
                as={TextField}
                fullWidth
                name="person.fullName"
                label="Name"
                placeholder="Enter your Name"
                helperText={<ErrorMessage name="person.fullName" />}
              />
             
              <Field
                as={TextField}
                fullWidth
                name="person.email"
                label="Apellido"
                placeholder="Enter your Email"
                helperText={<ErrorMessage name="person.email" />}
              />
                <Field
                as={TextField}
                fullWidth
                name="person.fullName"
                label=" Correo Electronico"
                placeholder="Enter your Correo Electronico"
                helperText={<ErrorMessage name="person.fullName" />}
              />
              {/* Otros campos de formulario similares */}
              <Field
                as={TextField}
                fullWidth
                name="person.password"
                label="Vieja contraseña"
                type={showPassword ? 'text' : 'password'}
                helperText={<ErrorMessage name="person.password" />}
              />
              <Field
                as={TextField}
                fullWidth
                name="person.confirmPassword"
                label="Nueva contraseña"
                type={showPassword ? 'text' : 'password'}
                helperText={<ErrorMessage name="person.confirmPassword" />}
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
                {/* Ícono para alternar la visibilidad de la contraseña */}
              </IconButton>
              {/* Botón de envío */}
              <Button type="submit" variant="contained" color="primary" disabled={isSubmitting} sx={{width:"100%"}}>
                Actualizar Datos
              </Button>
              <Button type="button" variant="contained" color="secondary" onClick={handleClose} sx={{ marginTop:'12px', width:"100%" }}>
                Cancelar
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Modal>
  );
};

export default FullNameModal;
