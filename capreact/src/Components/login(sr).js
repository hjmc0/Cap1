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
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Alert, Container, Stack } from '@mui/material';
import {toast} from 'react-toastify';
import { auth } from '../firebase/firebase.config';

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const isValidEmail = email.includes('@')

    const handleLogin = () => {
        toast('Runtime error') //{
            // Set to 15sec
            //position: toast.POSITION.BOTTOM_LEFT, autoClose:15000})
        // try {
        //   await auth.signInWithEmailAndPassword(email, password);
        //   // Sign-in successful, redirect or update state as needed
        // } catch (error) {
        //     toast.error('Runtime error', {
        //         // Set to 15sec
        //         position: toast.POSITION.BOTTOM_LEFT, autoClose:15000})
        // }
      };


    return (
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
                            <LockOutlinedIcon />
                        </Avatar>
                    </Stack>
                    <Typography variant="h4" align="center" gutterBottom>
                        Sign In
                    </Typography>
                    
                    <TextField label="Email" type="email" value = {email} fullWidth margin="normal" onChange={(e) => { setEmail(e.target.value) }}
                        error={!isValidEmail && email.length > 0} />
                    {!isValidEmail && email.length > 0 && (
                        <Alert severity="error" sx={{ marginTop: 2 }}>
                            Email must contain "@".
                        </Alert>
                    )}

                    <TextField label="Password" type="password" fullWidth margin="normal" onChange={(e) => { setPassword(e.target.value)}}/>
                    
                    <Button variant="contained" fullWidth color="primary" onClick={handleLogin}>
                        Sign In
                    </Button>

                    <Grid item>
                        
                        <span>Don't have an account? </span>
                        <Link href="register" variant="body2">
                            {"Sign Up Now!"}
                        </Link>
                    </Grid>

                </Paper>
            </Container>
        </Box>
    );
};

export default Login;