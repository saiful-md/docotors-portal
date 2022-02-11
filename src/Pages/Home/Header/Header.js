import React from "react";
import { Button, Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import chair from "../../../images/chair.png";
import bg from "../../../images/bg.png";

const Header = () => {
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
            columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={12} sm={6} md={5}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Box>
                  <h1>
                    Your New Smile <br /> Starts Here
                  </h1>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Accusantium cum, sapiente modi magni quod molestiae?
                  </p>
                </Box>
              </Box>
              <Button variant='contained'>Get Appointment</Button>
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

export default Header;
