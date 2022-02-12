import React from "react";
import { Container, Grid } from "@mui/material";
import isWeekend from "date-fns/isWeekend";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import CalendarPicker from "@mui/lab/CalendarPicker";
import MonthPicker from "@mui/lab/MonthPicker";

import StaticDatePicker from "@mui/lab/StaticDatePicker";
import { Box } from "@mui/system";
import chair from "../../images/chair.png";
// import chair from '../../images'
import bg from "../../images/bg.png";

const AppointmentHeader = () => {
  const [date, setDate] = React.useState(new Date());
  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(
          rgba(0, 30, 90, 0.4),
          rgba(10, 20, 30, 0.692)), url(${bg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        textAlign: "left",
        height: "550px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 12, sm: 8, md: 12 }}>
            <Grid item xs={12} sm={6} md={5}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Box>
                  <h1>Appointment</h1>
                  {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Grid item xs={12} md={6}>
                      <CalendarPicker
                        date={date}
                        onChange={(newDate) => setDate(newDate)}
                      />
                    </Grid>
                    
                  </LocalizationProvider> */}
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={7}>
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}>
                  <img width='80%' src={chair} alt='chair' />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default AppointmentHeader;
