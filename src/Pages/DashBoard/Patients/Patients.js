import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";

const Patients = () => {
  // const [value, setValue] = React.useState(new Date());

  return (
    <>
      {/* <Grid sx={{ textAlign: "right" }} xs={12}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            disableFuture
            label='Responsive'
            openTo='year'
            views={["year", "month", "day"]}
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </Grid> */}
      <Grid sx={{ marginTop: "20px" }} xs={12}>
        <h1 style={{ textAlign: "left" }}>All Patients</h1>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>Sr.No.</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Gender</TableCell>
                <TableCell>Age</TableCell>
                <TableCell>Weight</TableCell>
                <TableCell>Contact</TableCell>
                <TableCell>Address</TableCell>
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
    </>
  );
};

export default Patients;
