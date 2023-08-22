import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './title';
import { useNavigate } from "react-router";
import { Grid } from '@mui/material';



function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
    const user1 = localStorage.getItem("user");
    const user = JSON.parse(user1);
    const navigate = useNavigate();

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
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Description</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Transaction Amount</TableCell>
            <TableCell align="right">New Balance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedDate.map((row) => (
            
            <TableRow key={row.amount}>
              <TableCell>{row.description}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{`S$${row.amount}`}</TableCell>
              <TableCell align="right">{`S$${row.newBalance}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
        <Grid container spacing={2} justifyContent="flex-end" alignItems="center">
        <Grid item><button>Add</button></Grid>
        <Grid item><button>Delete</button></Grid>
        </Grid>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </React.Fragment>
  );
}


// const rows = [
//   createData(
//     0,
//     '16 Mar, 2019',
//     'Grab to AMK Hub',
//     'VISA ⠀•••• 3719',
//     312.44,
//   ),
//   createData(
//     1,
//     '16 Mar, 2019',
//     'Canteen 3 Cai Fan @ MapleTree',
//     'VISA ⠀•••• 2574',
//     866.99,
//   ),
//   createData(2, '16 Mar, 2019', 'SMRT Transportation', 'MC ⠀•••• 1253', 100.81),
//   createData(
//     3,
//     '16 Mar, 2019',
//     'Coffee House 122',
//     'AMEX ⠀•••• 2000',
//     654.39,
//   ),
//   createData(
//     4,
//     '15 Mar, 2019',
//     'SBS Bus Transportation',
//     'VISA ⠀•••• 5919',
//     212.79,
//   ),
// ];