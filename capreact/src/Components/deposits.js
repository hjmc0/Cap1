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

    const compareDates = (a, b) => {
        var [day, month, year] = a.date.split("/")
        var a = new Date(year, month - 1, day)
  
        var [day, month, year] = b.date.split("/")
        var b = new Date(year, month - 1, day)
  
        return new Date(a) - new Date(b);
      };
      const sortedDate = user.transactionDetails.sort(compareDates).reverse();

  return (
    <React.Fragment>
      <Title>Current Balance:</Title>
      <br></br>
      <Typography component="p" variant="h4">
      {`S$${sortedDate[0].newBalance}`}
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