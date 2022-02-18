import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import SingleAvailableComponent from "../SingleAvailableAppointment/SingleAvailableComponent";
import { Container } from "@mui/material";

const AvaiablbeAppointments = ({ date }) => {
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
              key={appoionment.id}
              appointment={appoionment}></SingleAvailableComponent>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AvaiablbeAppointments;
