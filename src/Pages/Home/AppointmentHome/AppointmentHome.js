import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button, Container } from "@mui/material";
import doctor from "../../../images/doctor.png";
import backgroud from "../../../images/appointment-bg.png";

const AppointmentHome = () => {
  return (
    <Box
      sx={{
        margin: "100px 0px",

        backgroundImage: `linear-gradient(
          rgba(0, 30, 90, 0.4),
      rgba(10, 20, 30, 0.692)),url(${backgroud})`,
        backgroundRepeat: "no-repeat",

        backgroundPosition: "center",
      }}>
      <Container>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={12} md={6} sm={6}>
              <Box
                sx={{
                  marginTop: "-115px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "end",
                }}>
                <img width='80%' height='460px' src={doctor} alt='img' />
              </Box>
            </Grid>
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              item
              xs={12}
              md={6}
              sm={6}>
              <Grid sx={{ color: "white" }}>
                <h3 style={{ color: "cyan" }}>Appointment</h3>
                <h1>
                  Make an appointment <br /> today
                </h1>
                <p style={{ fontSize: 14, textAlign: "justify" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  doloribus, totam aliquam similique alias cupiditate mollitia
                  quidem debitis accusamus, autem rem facere nihil ipsa numquam?
                </p>
                <Button variant='contained'>Learn More</Button>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default AppointmentHome;
