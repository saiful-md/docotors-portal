import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import people1 from "../../../images/people-1.png";
import people2 from "../../../images/people-2.png";
import people3 from "../../../images/people-3.png";
import SingleTestimonial from "../SingleTestimonial/SingleTestimonial";

const Testimonials = () => {
  const testimonialData = [
    {
      id: "1",
      name: "Winston Herry",
      city: "california ,USA",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, reiciendis nobis. Odit, reiciendis nobis libero beatae quaerat, consequuntur accusamus numquam blanditiis dolorum ut deleniti laborum.",
      img: `${people1}`,
    },
    {
      id: "2",
      name: "Komola Kanto",
      city: "Dhaka, Bangladesh",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, reiciendis nobis. Odit, reiciendis nobis libero beatae quaerat, consequuntur accusamus numquam blanditiis dolorum ut deleniti laborum.",
      img: `${people2}`,
    },
    {
      id: "3",
      name: "Devid Echarthi",
      city: "London, UK",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, reiciendis nobis. Odit, reiciendis nobis libero beatae quaerat, consequuntur accusamus numquam blanditiis dolorum ut deleniti laborum.",
      img: `${people3}`,
    },
  ];
  return (
    <Box sx={{ flexGrow: 1, textAlign: "left", margin: "100px 0px" }}>
      <Container>
        <Grid>
          <h2 style={{ color: "cyan" }}>Testimonial</h2>
          <h1>
            What's Our Patient <br /> Says
          </h1>
        </Grid>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}>
          {testimonialData.map((data) => (
            <SingleTestimonial
              key={data.id}
              testimonial={data}></SingleTestimonial>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonials;
