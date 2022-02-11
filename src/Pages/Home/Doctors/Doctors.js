import React from "react";
import Box from "@mui/material/Box";
import { Container, Grid } from "@mui/material";
import doctor from "../../../images/doctor-small.png";
import SingleDoctor from "../SingleDoctor/SingleDoctor";

const Doctors = () => {
  const doctors = [
    {
      id: 1,
      name: "Dr. Coudi",
      img: `${doctor}`,
      phon: "+88017222222",
    },
    {
      id: 2,
      name: "Dr. Coudi",
      img: `${doctor}`,
      phon: "+88017222222",
    },
    {
      id: 3,
      name: "Dr. Coudi",
      img: `${doctor}`,
      phon: "+88017222222",
    },
  ];
  return (
    <Box sx={{ margin: "150px 0px" }}>
      <Container>
        <Box sx={{ marginBottom: "50px" }}>
          <h2 style={{ color: "cyan" }}>Our Doctors</h2>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {doctors.map((doctor) => (
              <SingleDoctor key={doctor.id} doctor={doctor}></SingleDoctor>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Doctors;
