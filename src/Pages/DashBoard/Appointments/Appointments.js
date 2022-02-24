import React, { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";

import { StaticDatePicker } from "@mui/lab";

const Appointments = () => {
  const { user } = useAuth();
  const [value, setValue] = React.useState(new Date());
  // const [age, setAge] = React.useState("");
  const [appointments, setAppointments] = useState([]);
  const localDate = value.toLocaleDateString();

  useEffect(() => {
    fetch(
      `http://localhost:5000/appointments?email=${user.email}&date=${localDate}`
    )
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, [user.email, localDate]);

  // const handleChange = (event) => {
  //   setAge(event.target.value);
  //   console.log(event.target.value);
  // };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid
          sx={{ display: "flex", justifyContent: "center" }}
          item
          xs={12}
          sm={6}
          md={5}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "left",
            }}>
            <LocalizationProvider
              sx={{ width: "50%" }}
              dateAdapter={AdapterDateFns}>
              <StaticDatePicker
                orientation='portrait'
                openTo='day'
                value={value}
                // shouldDisableDate={isWeekend}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Box>
        </Grid>
        <Grid
          sx={{
            boxShadow: 2,
            borderRadius: 1,
            marginTop: "20px",
          }}
          item
          xs={12}
          sm={6}
          md={7}>
          <Box
            sx={{
              // boxShadow: 2,
              // borderRadius: 1,
              paddingRight: "20px",
            }}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <h3>Appointment</h3>

              <h3>date</h3>
            </Box>
            <TableContainer component={Paper}>
              <Table sx={{ Width: "90%" }} aria-label='simple table'>
                <TableHead>
                  <TableRow>
                    {/* <TableCell>Dessert (100g serving)</TableCell> */}
                    <TableCell align='left'>Name</TableCell>
                    <TableCell align='left'>Schedule</TableCell>
                    <TableCell align='left'>Action</TableCell>
                    {/* <TableCell align='right'>Protein&nbsp;(g)</TableCell> */}
                  </TableRow>
                </TableHead>
                {appointments.map((appointment) => (
                  <TableBody key={appointment._id}>
                    <TableRow
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}>
                      {/* <TableCell component='th' scope='row'>
                      name
                    </TableCell> */}
                      <TableCell align='left'>
                        {appointment.displayName}
                      </TableCell>
                      <TableCell align='left'>{appointment.time}</TableCell>
                      <TableCell align='left'>
                        {/* <Box>
                          <FormControl fullWidth sx={{ Width: "50px" }}>
                            <Select
                              labelId='demo-simple-select-label'
                              id='demo-simple-select'
                              value={age}
                              sx={{
                                background: `${
                                  age === 10 ? " cyan" : "rgba(0,0,0,0.5)"
                                }`,
                              }}
                              onChange={handleChange}>
                              <MenuItem value={10}>Visited</MenuItem>
                              <MenuItem value={20}>Not Visited</MenuItem>
                            </Select>
                          </FormControl>
                        </Box> */}
                      </TableCell>
                      {/* <TableCell align='right'>name</TableCell> */}
                    </TableRow>
                  </TableBody>
                ))}
              </Table>
            </TableContainer>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Appointments;
