import React, { useState } from 'react';
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

export default function Particulars (props) {

      const [inputData, setInputData] = useState(props);
      localStorage.setItem("user", JSON.stringify(inputData))
      

      const handleData = (e) => {
        try{
            setInputData({ ...inputData, [e.target.name]: e.target.value });
            
        }
        catch(error){
            try{
                setInputData({...inputData, 'dateOfBirth': e.format('DD/MM/YYYY')})
            }
            catch(error){
                setInputData({...inputData, 'contactNum': e})
            }
            
        }
        localStorage.setItem("user", JSON.stringify(inputData))
      };
    
    
    return (
            <React.Fragment>
                <Paper elevation={8} sx={{ padding: 6 }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                required
                                type="email"
                                id="email"
                                name="email"
                                label="Email"
                                placeholder="Required"
                                onChange={handleData}
                                value = {inputData.email}
                                fullWidth
                                variant="outlined"
                                InputLabelProps={{ shrink: true, style: { color: 'black' } }}

                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                type="password"
                                id="password"
                                name="password"
                                label="Password"
                                placeholder="Required"
                                value = {inputData.password}
                                onChange={handleData}
                                fullWidth
                                variant="outlined"
                                InputLabelProps={{ shrink: true, style: { color: 'black' } }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                type="password"
                                id="cpassword"
                                name="cpassword"
                                value = {inputData.cpassword}
                                onChange={handleData}
                                label="Re-enter Password"
                                placeholder="Required"
                                fullWidth
                                variant="outlined"
                                InputLabelProps={{ shrink: true, style: { color: 'black' } }}
                            />

                        </Grid>
                        <Grid item xs={12}>
                            <h2>Personal Details (Optional)</h2>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="firstName"
                                name="firstName"
                                label="First name"
                                value = {inputData.firstName}
                                placeholder="Optional"
                                onChange={handleData}
                                fullWidth
                                variant="outlined"
                                InputLabelProps={{ shrink: true, style: { color: 'black' } }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="lastName"
                                name="lastName"
                                label="Last name"
                                placeholder="Optional"
                                value = {inputData.lastName}
                                onChange={handleData}
                                fullWidth
                                variant="outlined"
                                InputLabelProps={{ shrink: true, style: { color: 'black' } }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="nric"
                                name="nric"
                                label="NRIC/Passport"
                                placeholder="Optional"
                                value = {inputData.nric}
                                onChange={handleData}
                                fullWidth
                                variant="outlined"
                                InputLabelProps={{ shrink: true, style: { color: 'black' } }}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>

                            <MuiPhoneNumber
                                id="contactNum"
                                name="contactNum"
                                defaultCountry={'sg'}
                                variant='outlined'
                                placeholder="Optional"
                                value = {inputData.contactNum}
                                onChange={handleData}
                                fullWidth
                                label='Contact number'
                                InputLabelProps={{ shrink: true, style: { color: 'black' } }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    label={"Date of Birth"}
                                    name='dateOfBirth'
                                    onChange={handleData}
                                    value = {inputData.dateOfBirth}
                                    format="DD/MM/YYYY"
                                    slotProps={{ textField: { fullWidth: true, InputLabelProps: { shrink: true, style: { color: 'black' } } } }}
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
                                value = {inputData.address}
                                onChange={handleData}
                                variant="outlined"
                                InputLabelProps={{ shrink: true, style: { color: 'black' } }}
                            />
                        </Grid>

                    </Grid>
                </Paper>
            </React.Fragment>
    );
}
