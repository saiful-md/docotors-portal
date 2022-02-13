import React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
// import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Slide from "@mui/material/Slide";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const Navigation = () => {
  return (
    // <Box sx={{ flexGrow: 1 }}>
    //   <AppBar sx={{ backgroundColor: "tomato" }} position='static'>
    //     <Toolbar>
    // <IconButton
    //   size='large'
    //   edge='start'
    //   color='inherit'
    //   aria-label='menu'
    //   sx={{ mr: 2 }}>
    //   <MenuIcon />
    // </IconButton>
    //       <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
    //         News
    //       </Typography>
    //       <Button color='inherit'>Login</Button>
    //     </Toolbar>
    //   </AppBar>
    // </Box>
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll>
        <AppBar>
          <Toolbar sx={{}}>
            <IconButton
              size='large'
              edge='start'
              color='inherit'
              aria-label='menu'
              sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Box>
              <Link
                style={{
                  fontSize: "18px",
                  color: "white",
                  textDecoration: "none",
                  marginRight: "20px",
                }}
                to='/'>
                Home
              </Link>
              <Link
                style={{
                  fontSize: "18px",
                  color: "white",
                  textDecoration: "none",
                  marginRight: "20px",
                }}
                to='/Dashboard'>
                Dashboard
              </Link>
              <Link
                style={{
                  fontSize: "18px",
                  color: "white",
                  textDecoration: "none",
                  marginRight: "20px",
                }}
                to='/appointment'>
                Appointment
              </Link>
              <Link
                style={{
                  fontSize: "18px",
                  color: "white",
                  textDecoration: "none",
                  // marginRight: "20px",
                }}
                to='/Login'>
                Login
              </Link>
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <Container>{/* <Box sx={{ my: 2 }}></Box> */}</Container>
    </React.Fragment>
  );
};
//{...props}
export default Navigation;
