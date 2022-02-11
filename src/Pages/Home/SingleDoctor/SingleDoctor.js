import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
const SingleDoctor = ({ doctor }) => {
  const { name, img, phon } = doctor;
  return (
    <Grid item xs={12} md={4} sm={6}>
      <Grid>
        <Box>
          <img width='70%' src={img} alt={name} />
        </Box>
        <Box>
          <h1>{name}</h1>
          <p>{phon}</p>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SingleDoctor;
