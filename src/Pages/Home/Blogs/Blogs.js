import React from "react";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import people1 from "../../../images/people-1.png";
import people2 from "../../../images/people-2.png";
import people3 from "../../../images/people-3.png";
import SingleBlog from "../SingleBlog/SingleBlog";

const Blogs = () => {
  const blogs = [
    {
      id: "1",
      name: "Winston Herry",
      title: "Two times of brush in a day can keep you health.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, reiciendis nobis. Odit, reiciendis nobis libero beatae quaerat, consequuntur accusamus numquam blanditiis dolorum ut deleniti laborum.",
      img: `${people1}`,
    },
    {
      id: "2",
      name: "Komola Kanto",
      title: "Two times of brush in a day can keep you health.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, reiciendis nobis. Odit, reiciendis nobis libero beatae quaerat, consequuntur accusamus numquam blanditiis dolorum ut deleniti laborum.",
      img: `${people2}`,
    },
    {
      id: "3",
      name: "Devid Echarthi",
      title: "Two times of brush in a day can keep you health.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, reiciendis nobis. Odit, reiciendis nobis libero beatae quaerat, consequuntur accusamus numquam blanditiis dolorum ut deleniti laborum.",
      img: `${people3}`,
    },
  ];
  return (
    <Box sx={{ flexGrow: 1, textAlign: "left", marginBottom: "50px" }}>
      <Container>
        <Grid sx={{ textAlign: "center" }}>
          <h3 style={{ color: "cyan" }}>Our Blog</h3>
          <h1>From Our Blog News</h1>
        </Grid>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}>
          {blogs.map((blog) => (
            <SingleBlog key={blog.id} blog={blog}></SingleBlog>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Blogs;
