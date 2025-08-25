import * as React from "react";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

import { rooms } from "@/data/rooms";
import ChipCustom from "@/components/ChipCustom";
import FilterTable from "@/components/FilterTable";


export default function BasicTable() {
  return (
    <div>
    <FilterTable/>
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
          {rooms.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.date}
              </TableCell>
              <TableCell align="right">{row.roomName}</TableCell>
              <TableCell align="right">{row.roomType}</TableCell>
              <TableCell align="right">
                <ChipCustom data={ row } />
              </TableCell>
              <TableCell align="right">Tulisan Pake Icon</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
