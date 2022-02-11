import { Box, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "cyan", padding: " 30px" }}>
      <Box>
        <Grid
          container
          rowSpacing={1}
          sx={{ textAlign: "left" }}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} sm={6} md={3}>
            <br /> <br /> <br />
            <Link
              style={{
                color: "black",
                fontWeight: "700",
                textDecoration: "none",
                display: "block",
                marginBottom: "3px",
              }}>
              Emargency dental care
            </Link>
            <Link
              style={{
                color: "black",
                fontWeight: "700",
                textDecoration: "none",
                display: "block",
                marginBottom: "3px",
              }}>
              Check Up
            </Link>
            <Link
              style={{
                color: "black",
                fontWeight: "700",
                textDecoration: "none",
                display: "block",
                marginBottom: "3px",
              }}>
              Treatment of Personal Diseases
            </Link>
            <Link
              style={{
                color: "black",
                fontWeight: "700",
                textDecoration: "none",
                display: "block",
                marginBottom: "3px",
              }}>
              Tooth Extraction
            </Link>
            <Link
              style={{
                color: "black",
                fontWeight: "700",
                textDecoration: "none",
                display: "block",
                marginBottom: "3px",
              }}>
              Chech Up
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <h3 style={{ color: "red" }}>Services</h3>
            <Link
              style={{
                color: "black",
                fontWeight: "700",
                textDecoration: "none",
                display: "block",
                marginBottom: "3px",
              }}>
              Emargency dental care
            </Link>
            <Link
              style={{
                color: "black",
                fontWeight: "700",
                textDecoration: "none",
                display: "block",
                marginBottom: "3px",
              }}>
              Check Up
            </Link>
            <Link
              style={{
                color: "black",
                fontWeight: "700",
                textDecoration: "none",
                display: "block",
                marginBottom: "3px",
              }}>
              Treatment of Personal Diseases
            </Link>
            <Link
              style={{
                color: "black",
                fontWeight: "700",
                textDecoration: "none",
                display: "block",
                marginBottom: "3px",
              }}>
              Tooth Extraction
            </Link>
            <Link
              style={{
                color: "black",
                fontWeight: "700",
                textDecoration: "none",
                display: "block",
                marginBottom: "3px",
              }}>
              Chech Up
            </Link>
            <Link
              style={{
                color: "black",
                fontWeight: "700",
                textDecoration: "none",
                display: "block",
                marginBottom: "3px",
              }}>
              Chech Up
            </Link>
            <Link
              style={{
                color: "black",
                fontWeight: "700",
                textDecoration: "none",
                display: "block",
                marginBottom: "3px",
              }}>
              Chech Up
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <h3 style={{ color: "red" }}>Oral Health</h3>
            <Link
              style={{
                color: "black",
                fontWeight: "700",
                textDecoration: "none",
                display: "block",
                marginBottom: "3px",
              }}>
              Emargency dental care
            </Link>
            <Link
              style={{
                color: "black",
                fontWeight: "700",
                textDecoration: "none",
                display: "block",
                marginBottom: "3px",
              }}>
              Check Up
            </Link>
            <Link
              style={{
                color: "black",
                fontWeight: "700",
                textDecoration: "none",
                display: "block",
                marginBottom: "3px",
              }}>
              Treatment of Personal Diseases
            </Link>
            <Link
              style={{
                color: "black",
                fontWeight: "700",
                textDecoration: "none",
                display: "block",
                marginBottom: "3px",
              }}>
              Tooth Extraction
            </Link>
            <Link
              style={{
                color: "black",
                fontWeight: "700",
                textDecoration: "none",
                display: "block",
                marginBottom: "3px",
              }}>
              Chech Up
            </Link>
            <Link
              style={{
                color: "black",
                fontWeight: "700",
                textDecoration: "none",
                display: "block",
                marginBottom: "3px",
              }}>
              Chech Up
            </Link>
            <Link
              style={{
                color: "black",
                fontWeight: "700",
                textDecoration: "none",
                display: "block",
              }}>
              Chech Up
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <h3 style={{ color: "red" }}>Our Address</h3>
            <h4>New york, USA</h4>
          </Grid>
        </Grid>
        <Box>
          <h5>Copyright 2020 All rights reserved.</h5>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
