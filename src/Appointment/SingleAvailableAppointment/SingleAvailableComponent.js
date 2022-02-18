import React from "react";
// import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

const SingleAvailableComponent = ({ appointment }) => {
  const { title, time, avalable } = appointment;
  return (
    <Grid item xs={4} sm={4} md={4}>
      <Card sx={{ padding: "20px 0px" }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
            {title}
          </Typography>
          <Typography variant='h5' component='div'>
            {time}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color='text.secondary'>
            {avalable}
          </Typography>
          <Typography variant='body2'>
            <Button
              sx={{ textDecoration: "uppercase", fontWeight: 600 }}
              variant='contained'>
              Book Appointment
            </Button>
          </Typography>
        </CardContent>
        {/* <CardActions sx={{ textAlign: "center" }}>
          
        </CardActions> */}
      </Card>
      {/* <Box
        sx={{
          border: 1,
          borderColor: "grey",
          boxShadow: 3,

          bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "#101010" : "#fff",
          color: (theme) =>
            theme.palette.mode === "dark" ? "grey.300" : "grey.800",
          p: 1,
          m: 1,
          borderRadius: 2,
        }}>
        <h1>{title}</h1>
        <h1>{time}</h1>
        <h1>{avalable}</h1>
      </Box> */}
    </Grid>
  );
};

export default SingleAvailableComponent;
