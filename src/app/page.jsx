"use client";

import {
  AppBar,
  Avatar,
  Box,
  Button,
  Chip,
  Container,
  CssBaseline,
  Drawer,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Toolbar,
  Typography,
  Paper,
  Pagination,
} from "@mui/material";

import DownloadIcon from "@mui/icons-material/Download";
import SearchIcon from "@mui/icons-material/Search";
import EditIcon from "@mui/icons-material/Edit";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { rooms } from "@/data/rooms";

import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function Home() {
  const [open, setOpen] = useState(false);

  const getStatusChip = (status) => {
    switch (status) {
      case "Booked":
        return <Chip label="Booked" color="warning" />;
      case "Paid":
        return <Chip label="Paid" color="success" />;
      case "Cancel":
        return <Chip label="Cancel" color="error" />;
      default:
        return <Chip label={status} />;
    }
  };

  return (
    <>
      <CssBaseline />
      {/* Header */}
      <AppBar position="static" color="transparent" elevation={1}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Report
          </Typography>
          <Box display="flex" alignItems="center" gap={1}>
            <Typography variant="body2">Angelina</Typography>
            <Avatar alt="Angelina" src="/avatar.png" />
          </Box>
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <Box p={2} width={200}>
          <Typography variant="h6">Menu</Typography>
          {/* Tambah list menu di sini */}
        </Box>
      </Drawer>

      <Container sx={{ mt: 4 }}>
        {/* Filter */}
        <Box
          display="flex"
          gap={2}
          mb={5}
          flexWrap="wrap"
          alignItems={"center"}
        >
          <TextField
            label="Start Date"
            type="date"
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            label="End Date"
            type="date"
            InputLabelProps={{ shrink: true }}
          />
          <Box>
            <InputLabel>Room Type</InputLabel>
            <Select defaultValue="" displayEmpty sx={{ minWidth: 150 }}>
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Small">Small</MenuItem>
              <MenuItem value="Large">Large</MenuItem>
            </Select>
          </Box>
          <Box>
            <InputLabel>Status</InputLabel>
            <Select defaultValue="" displayEmpty sx={{ minWidth: 150 }}>
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Booked">Booked</MenuItem>
              <MenuItem value="Paid">Paid</MenuItem>
              <MenuItem value="Cancel">Cancel</MenuItem>
            </Select>
          </Box>
          <Button
            variant="contained"
            color="warning"
            startIcon={<SearchIcon />}
          >
            Search
          </Button>
          <IconButton color="warning">
            <DownloadIcon />
          </IconButton>
        </Box>

        {/* Table */}
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Date Reservation</TableCell>
                <TableCell>Room Name</TableCell>
                <TableCell>Room Type</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rooms.map((row, i) => (
                <TableRow key={i}>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.roomName}</TableCell>
                  <TableCell>{row.roomType}</TableCell>
                  <TableCell>{getStatusChip(row.status)}</TableCell>
                  <TableCell>
                    <IconButton color="warning">
                      <EditIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Pagination */}
        <Box display="flex" justifyContent="flex-end" mt={2}>
          <Pagination count={3} color="warning" />
        </Box>
      </Container>
    </>
  );
}
