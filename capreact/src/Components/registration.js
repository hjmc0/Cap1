import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebase.config";
import { useNavigate } from "react-router-dom";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
// import CssBaseline from '@mui/material/CssBaseline';
import TextField from "@mui/material/TextField";
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
// import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Alert, Container, Stack } from "@mui/material";

//Toastify imports---------------------------------------------------
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const collectionRef = collection(db, "userdata");

function Registration() {
  const person = {
    email: "",
    password: "",
    cpassword: "",
    firstName: "",
    lastName: "",
    address: "",
    contactNum: "",
    nric: "",
    dateOfBirth: "",
  };

  const [inputData, setInputData] = useState(person);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate password confirmation
    if (inputData.password !== inputData.cpassword) {
      toast.error("Check your password again!", {
        position: toast.POSITION.TOP_CENTER,
      });
    } else if (inputData.email === "" || !isValidEmail) {
      toast.error("Invalid Email!", {
        position: toast.POSITION.TOP_CENTER,
      });
    } else if (inputData.password === "") {
      toast.error("Invalid Password", {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      try {
        await addDoc(collectionRef, inputData);
        setInputData(person);
        toast.success("Registration Success! Loading Login Page in ...", {
          position: toast.POSITION.TOP_CENTER,
        });
        // navigate("/login")
      } catch (error) {
        console.error("Error adding document: ", error);
      }
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    }
  };

  const handleData = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  // const handleBackToLogin = () => {
  //   navigate("/login");
  // };

  const isValidEmail = inputData.email.includes("@");

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage:
          "url(https://www.pixelstalk.net/wp-content/uploads/images1/Beautiful-singapore-hd-wallpapers.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container maxWidth="xs">
        <Paper elevation={3} sx={{ padding: 3 }}>
          <Stack sx={{ justifyContent: "center", alignItems: "center" }}>
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
          </Stack>
          <Typography variant="h4" align="center" gutterBottom>
            Registration
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="First Name"
                type="text"
                name="firstName"
                value={inputData.firstName}
                fullWidth
                margin="normal"
                onChange={handleData}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Last Name"
                type="text"
                name="lastName"
                value={inputData.lastNameName}
                fullWidth
                margin="normal"
                onChange={handleData}
              />
            </Grid>
          </Grid>

          <TextField
            required
            label="Email"
            type="email"
            name="email"
            value={inputData.email}
            fullWidth
            margin="normal"
            onChange={handleData}
            error={!isValidEmail && inputData.email.length > 0}
            helperText={
              !isValidEmail && inputData.email.length > 0
                ? "Email must contain @"
                : ""
            }
          />
          <TextField
            required
            label="Password"
            type="password"
            name="password"
            value={inputData.password}
            fullWidth
            margin="normal"
            onChange={handleData}
          />
          <TextField
            required
            label="Confirm Password"
            type="password"
            name="cpassword"
            value={inputData.cpassword}
            fullWidth
            margin="normal"
            onChange={handleData}
          />
          <TextField
            label="Address"
            type="text"
            name="address"
            value={inputData.address}
            fullWidth
            margin="normal"
            onChange={handleData}
          />

          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Contact No."
                type="text"
                name="contactNum"
                value={inputData.contactNum}
                fullEmailWidth
                margin="normal"
                onChange={handleData}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="NRIC"
                type="text"
                name="nric"
                value={inputData.nric}
                fullEmailWidth
                margin="normal"
                onChange={handleData}
              />
            </Grid>
          </Grid>

          <br></br>
          <span>Date of Birth: </span>
          <input
            type="date"
            name="dateOfBirth"
            value={inputData.dateOfBirth}
            onChange={handleData}
          />
          <br></br>
          <br></br>

          <Button
            variant="contained"
            fullWidth
            color="primary"
            type="submit"
            onClick={handleSubmit}
          >
            Submit to Register
          </Button>

          <Grid item>
            <Link href="login" variant="body2">
              {"Login Page"}
            </Link>
          </Grid>

          <ToastContainer />
        </Paper>
      </Container>
    </Box>
  );
}

export default Registration;

// <div>
//   <form onSubmit={handleSubmit}>
//     <h1>Registration:</h1>
//     <table>
//       <tbody>
//         <tr>
//           <td>
//             <label>Name: </label>
//           </td>
//           <td>
//             <input
//               type="text"
//               name="firstName"
//               value={inputData.firstName}
//               onChange={handleData}
//               placeholder="First Name"
//             />
//           </td>
//           <td>
//             <input
//               type="text"
//               name="lastName"
//               value={inputData.lastName}
//               onChange={handleData}
//               placeholder="Last Name"
//             />
//           </td>
//         </tr>
//         <tr>
//           <td>
//             <label>Enter email: </label>
//           </td>
//           <td>
//             <input
//               type="email"
//               name="email"
//               value={inputData.email}
//               onChange={handleData}
//               placeholder="example@email.com"
//               required
//             />
//           </td>
//         </tr>
//         <tr>
//           <td>
//             <label>Enter password: </label>
//           </td>
//           <td>
//             <input
//               type="password"
//               name="password"
//               value={inputData.password}
//               onChange={handleData}
//               required
//             />
//           </td>
//         </tr>
//         <tr>
//           <td>
//             <label>Confirm password: </label>
//           </td>
//           <td>
//             <input
//               type="password"
//               name="cpassword"
//               value={inputData.cpassword}
//               onChange={handleData}
//               required
//             />
//           </td>
//         </tr>
//         <tr>
//           <td>
//             <label>Address: </label>
//           </td>
//           <td>
//             <input
//               type="text"
//               name="address"
//               value={inputData.address}
//               onChange={handleData}
//             />
//           </td>
//         </tr>
//         <tr>
//           <td>
//             <label>Contact Number: </label>
//           </td>
//           <td>
//             <input
//               type="number"
//               name="contactNum"
//               value={inputData.contactNum}
//               onChange={handleData}
//             />
//           </td>
//         </tr>
//         <tr>
//           <td>
//             <label>NRIC: </label>
//           </td>
//           <td>
//             <input
//               type="text"
//               name="nric"
//               value={inputData.nric}
//               onChange={handleData}
//             />
//           </td>
//         </tr>
//         <tr>
//           <td>
//             <label>Date of Birth: </label>
//           </td>
//           <td>
//             <input
//               type="date"
//               name="dateOfBirth"
//               value={inputData.dateOfBirth}
//               onChange={handleData}
//             />
//           </td>
//         </tr>
//         <tr>
//           <td colSpan="2">
//             <button type="submit">Submit</button>
//           </td>
//         </tr>
//       </tbody>
//     </table>
//   </form>
//   <button onClick={handleBackToLogin}>Back to Login</button>
// </div>
