import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Card, CardContent, Container, Typography } from "@mui/material";
// import img

const Location = () => {
  return (
    <Box sx={{ flexGrow: 1, textAlign: "left", marginTop: "-80px" }}>
      <Container>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275, background: "cyan" }}>
              <CardContent
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                <Typography
                  sx={{ marginRight: "20px" }}
                  variant='h5'
                  component='div'>
                  <span>BR</span>
                </Typography>
                <Box sx={{ lineHeight: "1.5" }}>
                  <getTypographyUtilityClass color='text.secondary'>
                    Opening Hours
                  </getTypographyUtilityClass>
                  <Typography color='text.secondary'>
                    Lorem ipsum dolor sit amet
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275, background: "tomato" }}>
              <CardContent
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                <Typography
                  sx={{ marginRight: "20px" }}
                  variant='h5'
                  component='div'>
                  <span>BR</span>
                </Typography>
                <Box>
                  <Typography color='text.secondary'>
                    Visit Our Location
                  </Typography>
                  <Typography color='text.secondary'>
                    banglatown, london, Uk
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275, background: "cyan" }}>
              <CardContent
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                <Typography
                  sx={{ marginRight: "20px" }}
                  variant='h5'
                  component='div'>
                  <span>BR</span>
                </Typography>
                <Box>
                  <getTypographyUtilityClass color='text.secondary'>
                    Contact Us Now
                  </getTypographyUtilityClass>
                  <Typography color='text.secondary'>+8801883734</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Location;
