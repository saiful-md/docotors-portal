import React from "react";
import { Container, Grid } from "@mui/material";

import { Box } from "@mui/system";
import chair from "../../images/chair.png";

import bg from "../../images/bg.png";
import Calender from "../../Pages/Shared/Calender/Calender";

const AppointmentHeader = ({ date, setDate }) => {
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
            <Grid sx={{ padding: "5px" }} item xs={12} sm={6} md={5}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Box sx={{ width: "300px" }}>
                  <Calender date={date} setDate={setDate}></Calender>
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
