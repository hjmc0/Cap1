import React, { Fragment } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Alert, Container, Stack, InputLabel } from '@mui/material'
import Paper from '@mui/material/Paper';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers';
import MuiPhoneNumber from 'material-ui-phone-number-2';


export default function Particulars() {
    return (

        // <Box sx={{
        //     display: 'flex',
        //     justifyContent: 'center',
        //     alignItems: 'center',
        //     height: '100vh',
        //     backgroundImage: 'url(https://www.pixelstalk.net/wp-content/uploads/images1/Beautiful-singapore-hd-wallpapers.jpg)',
        //     backgroundSize: 'cover',
        //     backgroundPosition: 'center',
        // }}>

        //     <Container maxWidth="md">
                <React.Fragment>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                required
                                type="email"
                                id="email"
                                name="email"
                                label="Email"
                                placeholder="example@gmail.com"
                                fullWidth
                                variant="outlined"
                                InputLabelProps={{ shrink: true }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                type="password"
                                id="password"
                                name="password"
                                label="Password"
                                fullWidth
                                variant="outlined"
                                InputLabelProps={{ shrink: true }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                type="password"
                                id="cpassword"
                                name="cpassword"
                                label="Re-enter Password"
                                fullWidth
                                variant="outlined"
                                InputLabelProps={{ shrink: true }}
                            />
                            <h3>Personal Details (Optional)</h3>
                            <hr />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="firstName"
                                name="firstName"
                                label="First name"
                                placeholder="Optional"
                                fullWidth
                                variant="outlined"
                                InputLabelProps={{ shrink: true }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="lastName"
                                name="lastName"
                                label="Last name"
                                placeholder="Optional"
                                fullWidth
                                variant="outlined"
                                InputLabelProps={{ shrink: true }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="nric"
                                name="nric"
                                label="NRIC/Passport"
                                placeholder="Optional"
                                fullWidth
                                variant="outlined"
                                InputLabelProps={{ shrink: true }}
                            />
                        </Grid>
                        
                        <Grid item xs={12} sm={6}>
                            
                            <MuiPhoneNumber
                                id="phone"
                                name="phone"
                                defaultCountry={'sg'}
                                variant='outlined'
                                placeholder="Optional"
                                fullWidth
                                label='Your Phone number'
                                InputLabelProps={{ shrink: true }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    label={"Date of Birth"}
                                    slotProps={{ textField: { fullWidth:true, InputLabelProps: { shrink: true } } }}
                                />
                            </LocalizationProvider>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="address"
                                name="address"
                                label="Address"
                                fullWidth
                                placeholder="Optional"
                                variant="outlined"
                                InputLabelProps={{ shrink: true }}
                            />
                        </Grid>

                    </Grid>
                 </React.Fragment>
        //     </Container>
        // </Box>
    );
}