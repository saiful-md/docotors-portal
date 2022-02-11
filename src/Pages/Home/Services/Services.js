import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import services from "../../../fakeDbj";
import SingleService from "../SingleService/SingleService";

const Services = () => {
  return (
    <Box sx={{ flexGrow: 1, marginTop: "100px" }}>
      <Container>
        <Box sx={{ lineHeight: "0.5", marginBottom: "50px" }}>
          <h3 style={{ color: "cyan" }}>Our Service</h3>
          <h1>Services we provide</h1>
        </Box>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}>
          {services.map((service) => (
            <SingleService
              key={service.title}
              service={service}></SingleService>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
