import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button, Container } from "@mui/material";
import treatment from "../../../images/treatment.png";

const ExectioalDental = () => {
  //   console.log(treatment);
  return (
    <Box sx={{ margin: "100px 0px" }}>
      <Container>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={12} md={5} sm={6}>
              <Box sx={{ padding: "5px", textAlign: "center" }}>
                <img width='80%' height='470px' src={treatment} alt='img' />
              </Box>
            </Grid>
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              item
              xs={12}
              md={7}
              sm={6}>
              <Grid>
                <h1>
                  Exceptional Dentel care,
                  <br /> on your terms.
                </h1>
                <p style={{ fontSize: 15, textAlign: "justify" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  doloribus, totam aliquam similique alias cupiditate mollitia
                  quidem debitis accusamus, autem rem facere nihil ipsam,
                  incidunt dolor odio ipsum. Quidem, numquam?Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Magni doloribus, totam
                  aliquam similique alias cupiditate mollitia quidem debitis
                  accusamus, autem rem facere nihil ipsam, incidunt dolor odio
                  ipsum. Quidem, numquam?pisicing elit. Magni doloribus, totam
                  aliquam similique alias cupiditate mollitia quidem debitis
                  accusamus, autem rem facere nihil ipsam, incidunt dolor odio
                  ipsum. Quidem, numquam?Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Magni doloribus, totam aliquam similique
                  alias cupiditate mollitia quidem debitis accusamus, autem rem
                  facere nihil ipsam, incidunt dolor odio ipsum. Quidem,
                  numquam?
                </p>
                <Button variant='contained'>Learn more</Button>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default ExectioalDental;
