import React, { useState } from "react";
// import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import BookingModal from "../BookingModa/BookingModal";

const SingleAvailableComponent = ({ appointment, date }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const { title, time, avalable } = appointment;
  return (
    <>
      <Grid item xs={4} sm={4} md={4}>
        <Card sx={{ padding: "20px 0px" }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color='text.secondary'
              gutterBottom>
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
                variant='contained'
                onClick={handleOpen}>
                Book Appointment
              </Button>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      {open && (
        <BookingModal
          appointment={appointment}
          open={open}
          setOpen={setOpen}
          date={date}></BookingModal>
      )}
    </>
  );
};

export default SingleAvailableComponent;
