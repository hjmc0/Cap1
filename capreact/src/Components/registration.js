import React, { useState } from "react";


function Registration() {
    const person = {
        email:``,
        password:``,
        firstName:``,
        lastName:``, 
        address:``,
        contactNum:``,
        nric:``,
        dateOfBirth:``
    }

    const [inputData, setInputData] = useState(person);
    const [submittedData, setSubmittedData] = useState(null); // Store submit data

    const handleSubmit = (e) => 
    {
        e.preventDefault();
        setSubmittedData(inputData); // Save submitted data
        setInputData(person)
    }

    const handleData = (e) =>
    {
        setInputData({...inputData, [e.target.name]:e.target.value})
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Registration:</h1>
                <table>
                    <tr>
                        <td><label>Name: </label></td>
                        <td><input type="text" name="firstName" value={inputData.firstName} onChange={handleData} placeholder="First Name"></input></td>
                        <td><input type="text" name="lastName" value={inputData.lastName} onChange={handleData} placeholder="Last Name"></input></td>
                    </tr>
                    <tr>
                        <td><label>Enter email: </label></td>
                        <td><input type="email" name="email" value={inputData.email} onChange={handleData} placeholder="example@email.com"></input></td>
                    </tr>
                    <tr>
                        <td><label>Enter password: </label></td>
                        <td><input type="password" name="password" value={inputData.password} onChange={handleData}></input></td>
                    </tr>
                    <tr>
                        <td><label>Confirm password: </label></td>
                        <td><input type="password"  value={''} onChange={handleData}></input></td>
                    </tr>
                    <tr>
                        <td><label>Address: </label></td>
                        <td><input type="text" name="address" value={inputData.address} onChange={handleData}></input></td>
                    </tr>
                    <tr>
                        <td><label>Contact Number: </label></td>
                        <td><input type="text" name="contactNum" value={inputData.contactNum} onChange={handleData}></input></td>
                    </tr>
                    <tr>
                        <td><label>NIRC: </label></td>
                        <td><input type="text" name="nric" value={inputData.nric} onChange={handleData}></input></td>
                    </tr>
                    <tr>
                        <td><label>Date of Birth: </label></td>
                        <td><input type="date" name="dateOfBirth" value={inputData.dateOfBirth} onChange={handleData}></input></td>
                    </tr>
                    <button type="Submit">Submit</button>
                </table> 
            </form>
        <button>Back to Login</button>

            {submittedData && (
                <div>
                    <h2>Submitted Data:</h2>
                    <p>Welcome {submittedData.firstName} {submittedData.lastName}, you have successfully created an account with {submittedData.email} </p>
                    <p>Address: {submittedData.address}</p>
                    <p>Contact Number: {submittedData.contactNum}</p>
                    <p>Date of Birth: {submittedData.dateOfBirth}</p>
                    <p>NRIC: {submittedData.nric}</p>
                    
                    
                </div>
            )}
        </div>
    )
}

export default Registration;


            /* <h1>Registration</h1>
            <label>Enter email: </label>
            <input type="email" name="email" value={inputData.email} onChange={handleData}></input>
            <br></br>
            <label>Enter password: </label>
            <input type="text" name="password" value={inputData.password} onChange={handleData}></input>
            <br></br>
            <label>First Name: </label>
            <input type="text" name="firstName" value={inputData.firstName} onChange={handleData}></input>
            <br></br>
            <label>Last Name: </label>
            <input type="text" name="lastName" value={inputData.lastName} onChange={handleData}></input>
            <br></br>
            <button onClick={handleSubmit}>Submit</button> */