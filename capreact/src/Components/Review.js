import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Container } from '@mui/material'
import Paper from '@mui/material/Paper';


export default function Review() {
    const user = {
        address: 'sam',
        contactNum: '',
        cpassword: '',
        dateOfBirth: '',
        email: '',
        firstName: 'f',
        id: '',
        lastName: 'hello',
        nric: '',
        password: ''
    }

    return (
            <React.Fragment>
                    <Typography variant="h4" gutterBottom>
                        Review
                    </Typography>
                    <br/>
                    <Grid container sx={{pt:3, pb:10}}>
                        <Grid item xs={6}>
                            <Typography gutterBottom>Email: </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography gutterBottom>{user.email}</Typography>
                        </Grid>

                        <Grid item xs={6}>
                            <Typography gutterBottom>Name: </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography gutterBottom>{user.firstName} {user.lastName}</Typography>
                        </Grid>

                        <Grid item xs={6}>
                            <Typography gutterBottom>NRIC: </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography gutterBottom>{user.nric}</Typography>
                        </Grid>

                        <Grid item xs={6}>
                            <Typography gutterBottom>Contact Number: </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography gutterBottom>{user.contactNum}</Typography>
                        </Grid>

                        <Grid item xs={6}>
                            <Typography gutterBottom>Address: </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography gutterBottom>{user.address}</Typography>
                        </Grid>
                    </Grid>

                </React.Fragment>

    );
}