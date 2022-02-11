import { Avatar, Card, CardContent, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const SingleTestimonial = ({ testimonial }) => {
  const { name, city, description, img } = testimonial;
  return (
    <Grid item xs={4} sm={4} md={4}>
      <Card sx={{ minWidth: 100 }}>
        <CardContent>
          <Typography sx={{ margin: "20px 0px" }} variant='p' component='div'>
            {description}
          </Typography>
          <Typography sx={{ margin: "10px 0px" }} color='text.secondary'>
            <Box
              sx={{
                display: "flex",
                //   justifyContent: "space-evenly",
                marginLeft: "40px",
                alignItems: "center",
              }}>
              <Avatar alt='Travis Howard' src={img} />
              <Box sx={{ marginLeft: "20px", lineHeight: "0.5" }}>
                <h4>{name}</h4>
                <h4>{city}</h4>
              </Box>
            </Box>
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default SingleTestimonial;
