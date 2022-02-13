import React from "react";
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
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { StaticDatePicker } from "@mui/lab";

const Appointments = () => {
  const [value, setValue] = React.useState(new Date());
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
    console.log(event.target.value);
  };

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
          md={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              boxShadow: 2,
              borderRadius: 1,
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
          md={6}>
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
                <TableBody>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                    {/* <TableCell component='th' scope='row'>
                      name
                    </TableCell> */}
                    <TableCell align='left'>Saiful Islam</TableCell>
                    <TableCell align='left'>8.00</TableCell>
                    <TableCell align='left'>
                      <Box>
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
                      </Box>
                    </TableCell>
                    {/* <TableCell align='right'>name</TableCell> */}
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Appointments;
