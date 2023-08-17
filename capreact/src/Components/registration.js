import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebase.config";

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate password confirmation
    if (inputData.password !== inputData.cpassword) {
      console.error("Passwords do not match");
      return;
    }

    try {
      await addDoc(collectionRef, {
        userdata: inputData,
      });
      setInputData(person);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const handleData = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleBackToLogin = () => {
    // Add your navigation logic here
    // For example, use react-router to navigate to the login page
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Registration:</h1>
        <table>
          <tbody>
            <tr>
              <td>
                <label>Name: </label>
              </td>
              <td>
                <input
                  type="text"
                  name="firstName"
                  value={inputData.firstName}
                  onChange={handleData}
                  placeholder="First Name"
                />
              </td>
              <td>
                <input
                  type="text"
                  name="lastName"
                  value={inputData.lastName}
                  onChange={handleData}
                  placeholder="Last Name"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Enter email: </label>
              </td>
              <td>
                <input
                  type="email"
                  name="email"
                  value={inputData.email}
                  onChange={handleData}
                  placeholder="example@email.com"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Enter password: </label>
              </td>
              <td>
                <input
                  type="password"
                  name="password"
                  value={inputData.password}
                  onChange={handleData}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Confirm password: </label>
              </td>
              <td>
                <input
                  type="password"
                  name="cpassword"
                  value={inputData.cpassword}
                  onChange={handleData}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Address: </label>
              </td>
              <td>
                <input
                  type="text"
                  name="address"
                  value={inputData.address}
                  onChange={handleData}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Contact Number: </label>
              </td>
              <td>
                <input
                  type="number"
                  name="contactNum"
                  value={inputData.contactNum}
                  onChange={handleData}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>NRIC: </label>
              </td>
              <td>
                <input
                  type="text"
                  name="nric"
                  value={inputData.nric}
                  onChange={handleData}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Date of Birth: </label>
              </td>
              <td>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={inputData.dateOfBirth}
                  onChange={handleData}
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <button type="submit">Submit</button>
                <button onClick={handleBackToLogin}>Back to Login</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default Registration;
