import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}   

const rows = [
  createData('01/10/2024', 'Aster Room', 'Small', '', 4.0),
  createData('01/10/2024', 'Aster Room','Small', '', 4.0),
  createData('01/10/2024', 'Aster Room','Small', '', 4.0),
  createData('01/10/2024', 'Aster Room','Small', '', 4.0),
  createData('01/10/2024', 'Aster Room','Small', '', 4.0),
  createData('01/10/2024', 'Aster Room','Small', '', 4.0),
  createData('01/10/2024', 'Aster Room','Small', '', 4.0),
  createData('01/10/2024', 'Aster Room','Small', '', 4.0),
  createData('01/10/2024', 'Aster Room','Small', '', 4.0),
  createData('01/10/2024', 'Aster Room','Small', '', 4.0),
  createData('01/10/2024', 'Aster Room','Small', '', 4.0),
//   createData('Eclair', 262, 16.0, 24, 6.0),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Date Reservation</TableCell>
            <TableCell align="right">Room Name</TableCell>
            <TableCell align="right">Room Type</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
