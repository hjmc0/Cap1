import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepIcon from '@mui/material/StepIcon';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import Review from './Review';
import Particulars from './particulars';

const steps = ['Particulars', 'Confirmation'];


export default function Confirmation() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        cpassword: "",
        firstName: "",
        lastName: "",
        address: "",
        contactNum: "",
        nric: "",
        dateOfBirth: "",
      })

      function getStepContent(step) {
        switch (step) {
            case 0:
                return <Particulars {...user}/>
            case 1:
                return <Review />;
            default:
                throw new Error('Unknown step');
        }
    }

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        const newUser = JSON.parse(localStorage.getItem("user"))
        setUser(newUser)
        setActiveStep(activeStep - 1);
    };

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '120vh',
            backgroundImage: 'url(https://www.pixelstalk.net/wp-content/uploads/images1/Beautiful-singapore-hd-wallpapers.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>

            <React.Fragment >
                <Container component="main" maxWidth="md" >
                    <Paper variant="outlined" sx={{
                        pl: 5, pr: 5, justifyContent: 'center',
                        alignItems: 'center',
                        height: '110vh',
                    }} style={{ backgroundColor: 'lightgrey' }}>

                        <Stepper activeStep={activeStep} sx={{ pt: 5, pb: 6 }} style={{ scale: '160%', marginLeft: '200px', marginRight: '200px' }}>
                            {steps.map((label) => (
                                <Step key={label} >
                                    <StepLabel style={{ fontSize: '20px' }}>
                                        {label}
                                    </StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                        {activeStep === steps.length ? (
                            <React.Fragment>
                                <Typography variant="h5" gutterBottom>
                                    Thank you for registering.
                                </Typography>
                                <Typography variant="subtitle1">
                                    Your account has been recorded. You may login using your credentials.
                                </Typography>
                                <br/>
                                <Button href="/login" variant="contained">
                                    Go to Login
                                </Button>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                {getStepContent(activeStep)}
                                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                    {activeStep !== 0 && (
                                        <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                                            Back
                                        </Button>
                                    )}

                                    <Button
                                        variant="contained"
                                        onClick={handleNext}
                                        sx={{ mt: 3, ml: 1 }}
                                    >
                                        {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                                    </Button>
                                </Box>
                            </React.Fragment>
                        )}
                    </Paper>

                </Container>
                {/* </Paper> */}
            </React.Fragment>
        </Box >
    );
}