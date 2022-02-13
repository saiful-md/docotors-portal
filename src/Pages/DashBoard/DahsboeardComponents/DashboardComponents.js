import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const DashboardComponents = () => {
  return (
    <Box>
      <Box>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={12} sm={6} md={3}>
              <Box
                sx={{
                  border: 1,
                  margin: "5px",
                  borderRadius: 1,
                  display: "flex",
                  padding: "20px",
                  justifyContent: "space-between ",
                  alignItems: "center",
                  backgroundColor: "cyan",
                }}>
                <Typography
                  sx={{ textAlign: "center" }}
                  variant='h4'
                  gutterBottom
                  component='div'>
                  20{" "}
                </Typography>
                <Typography variant='p' gutterBottom component='div'>
                  Pending Appointments
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box
                sx={{
                  border: 1,
                  margin: "5px",
                  borderRadius: 1,
                  display: "flex",
                  padding: "20px",
                  justifyContent: "space-between ",
                  alignItems: "center",
                  backgroundColor: "cyan",
                }}>
                <Typography
                  sx={{ textAlign: "center" }}
                  variant='h4'
                  gutterBottom
                  component='div'>
                  20{" "}
                </Typography>
                <Typography variant='p' gutterBottom component='div'>
                  Pending Appointments
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box
                sx={{
                  border: 1,
                  margin: "5px",
                  borderRadius: 1,
                  display: "flex",
                  padding: "20px",
                  justifyContent: "space-between ",
                  alignItems: "center",
                  backgroundColor: "cyan",
                }}>
                <Typography
                  sx={{ textAlign: "center" }}
                  variant='h4'
                  gutterBottom
                  component='div'>
                  20{" "}
                </Typography>
                <Typography variant='p' gutterBottom component='div'>
                  Pending Appointments
                </Typography>
              </Box>{" "}
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box
                sx={{
                  border: 1,
                  margin: "5px",
                  borderRadius: 1,
                  display: "flex",
                  padding: "20px",
                  justifyContent: "space-between ",
                  alignItems: "center",
                  backgroundColor: "cyan",
                }}>
                <Typography
                  sx={{ textAlign: "center" }}
                  variant='h4'
                  gutterBottom
                  component='div'>
                  20{" "}
                </Typography>
                <Typography variant='p' gutterBottom component='div'>
                  Pending Appointments
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box>
        <Grid sx={{ marginTop: "20px" }} xs={12}>
          <h1 style={{ textAlign: "left", color: "tomato" }}>
            Recent Appointments
          </h1>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell>Sr.No.</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Time</TableCell>
                  <TableCell>name</TableCell>
                  <TableCell>Contact</TableCell>
                  <TableCell>Prescription</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell>1</TableCell>
                  <TableCell>md Saiful Islam</TableCell>
                  <TableCell>Male</TableCell>
                  <TableCell>18</TableCell>
                  <TableCell>56kg</TableCell>
                  <TableCell>+88017202394802</TableCell>
                  <TableCell>Gazipur, Dhaka, Bangladesh</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Box>
    </Box>
  );
};

export default DashboardComponents;
