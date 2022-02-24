import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import SingleAvailableComponent from "../SingleAvailableAppointment/SingleAvailableComponent";
import { Alert, Container, Snackbar } from "@mui/material";

const AvaiablbeAppointments = ({ date }) => {
  const [success, setSuccess] = useState(false);

  const avalableComponents = [
    {
      id: 1,
      title: "Teeth Orthodontics",
      time: "8:00 Am - 9:00 Am",
      avalable: 10,
    },
    {
      id: 2,
      title: "cosmetics dentistry",
      time: "7:30 Am - 8:00 Am",
      avalable: 10,
    },
    {
      id: 3,
      title: "teeth cleaning",
      time: "6:00 Am - 7:00 Am",
      avalable: 10,
    },
    {
      id: 4,
      title: "cavity protection",
      time: "7:00 Am - 7:30 Am",
      avalable: 10,
    },
    {
      id: 5,
      title: "Teeth Orthodontics",
      time: "9:00 Am - 10:00 Am",
      avalable: 10,
    },
    {
      id: 6,
      title: "Teeth Orthodontics",
      time: "10:00 Am - 10:30 Am",
      avalable: 10,
    },
  ];
  return (
    <Box sx={{ flexGrow: 1, margin: "150px 0" }}>
      <Container>
        <h1>Availbale Appointments on : {date.toDateString()}</h1>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}>
          {avalableComponents.map((appoionment) => (
            <SingleAvailableComponent
              date={date}
              key={appoionment.id}
              appointment={appoionment}
              setSuccess={setSuccess}></SingleAvailableComponent>
          ))}
        </Grid>
        <Snackbar
          open={success}
          autoHideDuration={6000}
          onClose={() => setSuccess(false)}>
          <Alert
            onClose={() => setSuccess(false)}
            severity='success'
            sx={{
              width: "100%",
              background: "cyan",
              color: "balck",
              fontWeight: 600,
            }}>
            Appointment Booked successfully!
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};

export default AvaiablbeAppointments;
