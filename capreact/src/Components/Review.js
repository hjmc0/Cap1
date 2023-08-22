import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Container, FormControlLabel, Checkbox } from '@mui/material'
import Paper from '@mui/material/Paper';


export default function Review() {
    const user = JSON.parse(localStorage.getItem("user"));

    return (
        <React.Fragment>
            <Paper elevation={24} sx={{ padding: 3}}>
                <Typography variant="h4" gutterBottom>
                    Summary
                </Typography>
                <br />
                <Grid container spacing={2} sx={{ pt: 3, pb: 10 }}>
                    <Grid item xs={4} >
                        <Typography style={{ fontSize: '20px', fontWeight: 'bold', textAlign: 'right' }}>Email: </Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography style={{ fontSize: '20px', textAlign: 'left' }}>{user.email}</Typography>
                    </Grid>

                    <Grid item xs={4}>
                        <Typography style={{ textAlign: 'right', fontSize: '20px', fontWeight: 'bold', textAlign: 'right' }}>Name: </Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography style={{ fontSize: '20px', textAlign: 'left' }}>{user.firstName} {user.lastName}</Typography>
                    </Grid>

                    <Grid item xs={4}>
                        <Typography style={{ textAlign: 'right', fontSize: '20px', fontWeight: 'bold', textAlign: 'right' }}>NRIC: </Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography style={{ fontSize: '20px', textAlign: 'left' }}>{user.nric}</Typography>
                    </Grid>

                    <Grid item xs={4}>
                        <Typography style={{ textAlign: 'right', fontSize: '20px',  fontWeight: 'bold', textAlign: 'right' }}>Contact: </Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography style={{ fontSize: '20px', textAlign: 'left' }}>{user.contactNum}</Typography>
                    </Grid>

                    <Grid item xs={4}>
                        <Typography style={{ textAlign: 'right', fontSize: '20px', fontWeight: 'bold', textAlign: 'right' }}>DOB: </Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography style={{ fontSize: '20px', textAlign: 'left' }}>{user.dateOfBirth}</Typography>
                    </Grid>

                    <Grid item xs={4}>
                        <Typography style={{ textAlign: 'right', fontSize: '20px', fontWeight: 'bold', textAlign: 'right' }}>Address: </Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography style={{ fontSize: '20px', textAlign: 'left' }}>{user.address}</Typography>
                    </Grid>
                    <Grid item xs={12} >
                        <br /><br />
                        <FormControlLabel
                            control={<Checkbox name="agreeTerm" value="yes" />}
                            label={
                                <Typography style={{ fontSize: '18px' }}>
                                    <span>I Agree to <a href="../login" target="_blank">Terms and Conditions</a></span>
                                </Typography>}
                                />
                    </Grid>
                </Grid>
            </Paper>
        </React.Fragment>

    );
}