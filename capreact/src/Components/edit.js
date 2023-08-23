import React, { useState } from "react";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebase.config";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import PersonIcon from "@mui/icons-material/Person";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Alert, Container, Stack } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import { getDocs, query, where } from "firebase/firestore";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "./navbar";

// const collectionRef = collection(db, "userdata",user.id);

function Edit() {
  const user1 = localStorage.getItem("user");
  const user = JSON.parse(user1);
  const userId = localStorage.getItem("userid");
  const userID = userId;
  const userIDone = `${userId}/userdata`;
  console.log(userIDone);
  const navigate = useNavigate();
  const docRef = doc(db, "userdata", userID);

  console.log(docRef);

  const [inputData, setInputData] = useState(user);

  const handleBack = () => {
    navigate("/user",{ replace: true });
  };

  const handleSubmitChanges = async (e) => {
    e.preventDefault();

    // Validate password confirmation
    if (inputData.password !== inputData.cpassword) {
      toast.error("Check your password again!", {
        position: toast.POSITION.TOP_CENTER,
      });
    } else if (inputData.password === "") {
      toast.error("Invalid Password", {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      console.log(inputData);
      try {
        await updateDoc(docRef, inputData).then(console.log({ inputData }));
        setInputData({ userdata: user });
        localStorage.setItem("user", JSON.stringify(inputData));
        navigate("/Cap1", { replace: true });
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    }
    navigate("/user" , { replace: true });
  };

  const handleData = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <NavBar />
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
                <PersonIcon />
              </Avatar>
            </Stack>
            <Typography variant="h4" align="center" gutterBottom>
              Edit User Profile
            </Typography>
            <Grid>
              Email: {user.email}
            </Grid>
            <Grid>
              <Grid>
                <TextField
                  label="New Password"
                  type="password"
                  name="password"
                  value={inputData.password}
                  fullWidth
                  margin="normal"
                  onChange={handleData}
                />
              </Grid>
            </Grid>
            <Grid>
              <Grid>
                <TextField
                  label="Confirm Password"
                  type="password"
                  name="cpassword"
                  value={inputData.cpassword}
                  fullWidth
                  margin="normal"
                  onChange={handleData}
                />
              </Grid>
            </Grid>
            <Grid>
              <Grid>
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
            </Grid>
            <Grid>
              <Grid>
                <TextField
                  label="Last Name"
                  type="text"
                  name="lastName"
                  value={inputData.lastName}
                  fullWidth
                  margin="normal"
                  onChange={handleData}
                />
              </Grid>
            </Grid>
            <Grid>
              <Grid>
                <TextField
                  label="Address"
                  type="text"
                  name="address"
                  value={inputData.address}
                  fullWidth
                  margin="normal"
                  onChange={handleData}
                />
              </Grid>
            </Grid>
            <Grid>
              <Grid>
                <TextField
                  label="Contact Number"
                  type="text"
                  name="contactNum"
                  value={inputData.contactNum}
                  fullWidth
                  margin="normal"
                  onChange={handleData}
                />
              </Grid>
            </Grid>
            <Grid>
              <Grid>
                <TextField
                  label="NRIC"
                  type="text"
                  name="nric"
                  value={inputData.nric}
                  fullWidth
                  margin="normal"
                  onChange={handleData}
                />
              </Grid>
            </Grid>
            <Grid>
              <Grid>
                <TextField
                  label="Date of Birth"
                  type="text"
                  name="dateOfBirth"
                  value={inputData.dateOfBirth}
                  fullWidth
                  margin="normal"
                  onChange={handleData}
                />
              </Grid>
            </Grid>
            <Grid>
              <Grid>
                <Button
                  variant="contained"
                  fullWidth
                  color="primary"
                  onClick={handleSubmitChanges}
                >
                  Save Changes
                </Button>
              </Grid>
              <Grid>
                <Button
                  variant="contained"
                  fullWidth
                  color="primary"
                  onClick={handleBack}
                >
                  Back to User Profile
                </Button>
              </Grid>
            </Grid>
            <ToastContainer />
          </Paper>
        </Container>
      </Box>
    </div>
  );
}
export default Edit;
