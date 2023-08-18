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
import { toast, ToastContainer } from 'react-toastify';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/firebase.config";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router';

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const isValidEmail = email.includes('@')
    const navigate = useNavigate();
    var isAuthorized = false;

    const handleLogin = async () => {

        const q = query(collection(db, "userdata"))
        const userDoc = await getDocs(q);
        

        userDoc.forEach(user => {
            if(user.data().userdata.email == email && user.data().userdata.password == password){
                isAuthorized = true
                localStorage.setItem("user", JSON.stringify(user.data().userdata))
                return
            }
        })
        
        if(isAuthorized){
            navigate('/home')
            
        }else{
            toast.error("Your Email or Password is incorrect. Please try again.", {
                position: toast.POSITION.TOP_CENTER
              });
        
        }
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
                            Welcome
                        </Typography>

                        <TextField label="Email" type="email" value={email} fullWidth margin="normal" onChange={(e) => { setEmail(e.target.value) }}
                            error={!isValidEmail && email.length > 0} helperText= {!isValidEmail && email.length > 0?'Email must contain @': '' }/>


                        <TextField label="Password" type="password" fullWidth margin="normal" onChange={(e) => { setPassword(String(e.target.value)) }}/>

                        <Button variant="contained" fullWidth color="primary" onClick={handleLogin}>
                            LOGIN
                        </Button>

                        <Grid item>
                            <span>Don't have an account? </span>
                            <Link href="register" variant="body2">
                                {"Register Now!"}
                            </Link>
                        </Grid>

                        <ToastContainer/>

                    </Paper>
                </Container>
            </Box>
        );
    };


export default Login;