import React from "react";

import Registration from "./registration";


const users = [{id:'',email:'', password:'', fname:'', lname:'', address:'', contactno:'', nric:'', dob:''}]

function printProfile(){

    users.filter((user) => {
        return user.id === user.id;
    })

    return(
         <div>
            <h1>User Profile</h1>
            <table>
                <tr>
                    <td>Email: </td>
                    <td>{users.email}</td>
                </tr>
                <tr>
                    <td>Password: </td>
                    <td>{users.password}</td>
                </tr>
                <tr>
                    <td>First Name: </td>
                    <td>{users.fname}</td>
                </tr>
                <tr>
                    <td>Last Name:</td>
                    <td>{users.lname}</td>
                </tr>
                <tr>
                    <td>Address:</td>
                    <td>{users.address}</td>
                </tr>
                <tr>
                    <td>Contact Number: </td>
                    <td>{users.contactno}</td>
                </tr>
                <tr>
                    <td>NRIC: </td>
                    <td>{users.nric}</td>
                </tr>
                <tr>
                    <td>Date of Birth: </td>
                    <td>{users.dob}</td>
                </tr>
            </table>
        </div>
    )
}