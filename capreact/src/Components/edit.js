import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import PersonIcon from '@mui/icons-material/Person';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Alert, Container, Stack } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/firebase.config";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router';

function Edit() {
    const user1 = localStorage.getItem("user");
    const user = JSON.parse(user1);
    const navigate = useNavigate();
  
    const handleBack = () => {
      navigate('/home')
    }
  
    const Save = () => {
      navigate('/edit')
    }


    return (
      <div>
        <Box
          sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100vh',
              backgroundImage: 'url(https://www.pixelstalk.net/wp-content/uploads/images1/Beautiful-singapore-hd-wallpapers.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
          }}
          >
          <Container maxWidth="xs">
              <Paper elevation={3} sx={{ padding: 3 }}>
                  <Stack sx={{ justifyContent: 'center', alignItems: 'center', }}>
                      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                          <PersonIcon />
                      </Avatar>
                  </Stack>
                  <Typography variant="h4" align="center" gutterBottom>
                      Edit User Profile
                  </Typography>
                  <Typography variant="h6" align="center" gutterBottom>
                    <p>Email: {user.email}</p>
                    <p>Password: {user.password}</p>
                    <p>First Name: {user.firstName}</p>
                    <p>Last Name: {user.lastName}</p>
                    <p>Address: {user.address}</p>
                    <p>Contact Number: {user.contactNum}</p>
                    <p>NRIC: {user.nric}</p>
                    <p>Date of Birth: {user.dateOfBirth}</p>
                  </Typography>
                  <Button variant="contained" fullWidth color="primary" onClick={edit}>
                      Update Profile
                  </Button>
                  <Button variant="contained" fullWidth color="primary" onClick={handleBack}>
                      Back to User Profile
                  </Button>
                  <ToastContainer/>
              </Paper>
          </Container>
          </Box>
      </div>
      
    );
  }
  export default Edit;