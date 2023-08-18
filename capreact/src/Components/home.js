import React, { useState, useEffect } from "react";

function Home() {
  const user1 = localStorage.getItem("user");
  const user = JSON.parse(user1);

  return (
    <div>
      <p>Email: {user.email}</p>
      <p>Password: {user.password}</p>
      <p>First Name: {user.firstName}</p>
      <p>Last Name: {user.lastName}</p>
      <p>Address: {user.address}</p>
      <p>Contact Number: {user.contactNum}</p>
      <p>NRIC: {user.nric}</p>
      <p>Date of Birth: {user.dateOfBirth}</p>
    </div>
  );
}
export default Home;
