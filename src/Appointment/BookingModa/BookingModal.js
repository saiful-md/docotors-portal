import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  textAlign: "center",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

const BookingModal = ({ open, setOpen, appointment, date }) => {
  const { title, time, avalable } = appointment;
  const handleClose = () => setOpen(false);

  const handleBookingModal = (e) => {
    alert("submitted");

    handleClose();
    e.preventDefault();
  };

  return (
    <div>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}>
        <Fade in={open}>
          <Box sx={style}>
            <Typography id='transition-modal-title' variant='h6' component='h2'>
              {title}
            </Typography>

            <Box>
              <form onSubmit={handleBookingModal}>
                <TextField
                  disabled
                  sx={{ width: "90%", m: 1 }}
                  id='outlined-size-small'
                  defaultValue={time}
                  size='small'
                />
                <TextField
                  sx={{ width: "90%", m: 1 }}
                  id='outlined-size-small'
                  placeholder='Your Name'
                  size='small'
                />
                <TextField
                  sx={{ width: "90%", m: 1 }}
                  id='outlined-size-small'
                  placeholder='Email'
                  size='small'
                />
                <TextField
                  sx={{ width: "90%", m: 1 }}
                  id='outlined-size-small'
                  placeholder='Phone Number'
                  size='small'
                />
                <TextField
                  disabled
                  sx={{ width: "90%" }}
                  id='outlined-size-small'
                  defaultValue={date.toDateString()}
                  size='small'
                />
                <Button
                  sx={{ width: "90%", m: 1 }}
                  type='submit'
                  variant='contained'>
                  Submit
                </Button>
              </form>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default BookingModal;
