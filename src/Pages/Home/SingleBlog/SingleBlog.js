import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

const SingleBlog = ({ blog }) => {
  const { name, title, description, img } = blog;
  return (
    <Grid item xs={4} sm={4} md={4}>
      <Card sx={{ minWidth: 100 }}>
        <CardContent>
          <Typography sx={{ margin: "10px 0px" }} color='text.secondary'>
            <Box
              sx={{
                display: "flex",
                //   justifyContent: "space-evenly",
                //   marginLeft: "40px",
                alignItems: "center",
              }}>
              <Avatar alt='Travis Howard' src={img} />
              <Box sx={{ marginLeft: "20px", lineHeight: "0.5" }}>
                <h4>{name}</h4>
                <h4>10 April 2021</h4>
              </Box>
            </Box>
          </Typography>
          <Typography
            //   sx={{ margin: "20px 0px" }}
            variant='h5'
            component='div'>
            {title}
          </Typography>
          <Typography
            //   sx={{ margin: "20px 0px" }}
            variant='p'
            component='div'>
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default SingleBlog;
