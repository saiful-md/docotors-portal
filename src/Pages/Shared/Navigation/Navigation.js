import React from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import useAuth from "../../../Hooks/useAuth";
import Slide from "@mui/material/Slide";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

function HideOnScroll(props) {
  const { children, window } = props;

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
  const { user, logOut } = useAuth();

  return (
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
              {user?.email ? (
                <Button
                  onClick={logOut}
                  sx={{ color: "white", fontSize: "18px", fontWeight: 500 }}
                  variant='text'>
                  Logout
                </Button>
              ) : (
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
              )}
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      {/* <Container><Box sx={{ my: 2 }}></Box></Container> */}
    </React.Fragment>
  );
};
//{...props}
export default Navigation;
