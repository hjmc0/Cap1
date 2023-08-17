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


const Login = () => {

    const [email, setEmail] = useState('')
    //const [password, setPassword] = useState('')
    const [invalidEmail, setInvalidEmail] = useState(false)

    const handlelogin = () => {
        if (!email.includes('@')) {
            setInvalidEmail(true);
        }
        else {
            setInvalidEmail(false);
        }
    }

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
                    <TextField label="Email" type="email" fullWidth margin="normal" onChange={(e) => { setEmail(e.target.value) }} />
                    <TextField label="Password" type="password" fullWidth margin="normal" />
                    <Button variant="contained" fullWidth color="primary" onClick={handlelogin}>
                        Sign In
                    </Button>
                    <Grid Container>
                        <Grid item>
                            <Link href="register" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                    {invalidEmail && (
                        <Alert severity="error" sx={{ marginTop: 2 }}>
                            Email must contain "@".
                        </Alert>
                    )}
                </Paper>
            </Container>
        </Box>
    );
};

export default Login;