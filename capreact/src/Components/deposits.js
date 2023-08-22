import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './title';
// import { useNavigate } from "react-router";

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
    const user1 = localStorage.getItem("user");
    const user = JSON.parse(user1);
    // const navigate = useNavigate();
    const timeDate= new Date().toDateString()

  return (
    <React.Fragment>
      <Title>Current Balance:</Title>
      <br></br>
      <Typography component="p" variant="h4">
      {`S$${user.transactionDetails[0].newBalance}`}
      </Typography>
      <br></br>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
      {timeDate}
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div>
    </React.Fragment>
  );
}