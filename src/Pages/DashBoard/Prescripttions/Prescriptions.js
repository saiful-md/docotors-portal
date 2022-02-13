import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, FormControl, Grid, MenuItem, Select } from "@mui/material";

const Prescriptions = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
    // console.log(event.target.value);
  };

  return (
    <Grid sx={{ marginTop: "20px" }} xs={12}>
      <h1 style={{ textAlign: "left" }}>All Prescription</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Sr.No.</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Contact</TableCell>
              <TableCell>Prescription</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell>1</TableCell>
              <TableCell>20-20-2020</TableCell>
              <TableCell>md saiful islam</TableCell>
              <TableCell>+8801720293802</TableCell>
              <TableCell>
                {" "}
                <Box>
                  <FormControl fullWidth sx={{ Width: "50px" }}>
                    <Select
                      labelId='demo-simple-select-label'
                      id='demo-simple-select'
                      value={age}
                      defaultValue='viwed'
                      sx={{
                        background: `${
                          age === 10 ? " cyan" : "rgba(0,0,0,0.5)"
                        }`,
                      }}
                      onChange={handleChange}>
                      <MenuItem value={10}>Viwed</MenuItem>
                      <MenuItem value={20}>Not Visited</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};

export default Prescriptions;
