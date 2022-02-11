import React from "react";
import Grid from "@mui/material/Grid";

import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";

const SingleService = ({ service }) => {
  const { title, img, description } = service;
  return (
    <Grid sx={{ border: 0 }} item xs={4} sm={4} md={4}>
      <Card sx={{ minWidth: 275, boxShadow: 0 }}>
        <CardContent>
          <img width='80px' height='85px' src={img} alt={title} />
          <Typography sx={{ margin: "20px 0px" }} variant='h5' component='div'>
            {title}
          </Typography>
          <Typography sx={{ margin: "20px 0px" }} color='text.secondary'>
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default SingleService;
