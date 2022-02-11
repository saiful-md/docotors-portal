import { Box } from "@mui/system";
import React from "react";
import { useForm } from "react-hook-form";
import bgImage from "../../../images/bg.png";

const ContactUs = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <Box
      sx={{
        padding: "50px 20px",
        backgroundImage: `linear-gradient(
          rgba(0, 30, 90, 0.4),
      rgba(10, 20, 30, 0.692)), url(${bgImage})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}>
      <Box>
        <h3 style={{ color: "cyan" }}>Contact Us</h3>
        <h2>Allawes Contact With Us</h2>
      </Box>
      <Box width='100%'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            style={{
              padding: "9px",
              marginBottom: "15px",
              width: "320px",
              borderRadius: 6,
              border: 0,
            }}
            {...register("email", { required: true })}
          />{" "}
          <br />
          <input
            style={{
              padding: "9px",
              marginBottom: "15px",
              width: "320px",
              borderRadius: 6,
              border: 0,
            }}
            {...register("subject", { required: true })}
          />{" "}
          <br />
          <textarea
            style={{
              padding: "9px",
              marginBottom: "15px",
              width: "320px",
              height: "100px",
              borderRadius: 6,
              border: 0,
            }}
            type='text'
            {...register("subject", { required: true })}
          />{" "}
          <br />
          <input
            style={{
              backgroundColor: "cyan",
              color: "black",
              padding: "10px 30px",
              border: 0,
              borderRadius: 4,
              cursor: "pointer",
            }}
            type='submit'
          />
        </form>
      </Box>
    </Box>
  );
};

export default ContactUs;
