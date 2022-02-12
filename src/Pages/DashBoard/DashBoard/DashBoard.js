import React from "react";

import { Link, Route, Switch } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import DashboardComponents from "../DahsboeardComponents/DashboardComponents";
import NestingTry from "../NestingTry/NestingTry";
import NestingTry2 from "../NestingTry/NestingTry2";

const drawerWidth = 240;

const DashBoard = (props) => {
  let { path, url } = useRouteMatch();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <ListItem button>
          <Link
            style={{
              width: "100%",
              color: "black",
              textDecoration: "none",
              fontWeight: "500",
              fontSize: "20px",
            }}
            to={`/`}>
            Home
          </Link>
        </ListItem>
        <ListItem button>
          <Link
            style={{
              width: "100%",
              color: "black",
              textDecoration: "none",
              fontWeight: "500",
              fontSize: "20px",
            }}
            to={`${url}/nest1`}>
            nest1
          </Link>
        </ListItem>
        <ListItem button>
          <Link
            style={{
              width: "100%",
              color: "black",
              textDecoration: "none",
              fontWeight: "500",
              fontSize: "20px",
            }}
            to={`${url}/nest2`}>
            nest2
          </Link>
        </ListItem>
        <ListItem button>
          <Link
            style={{
              width: "100%",
              color: "black",
              textDecoration: "none",
              fontWeight: "500",
              fontSize: "20px",
            }}
            to={`${url}/nest3`}>
            nest3
          </Link>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <LogoutIcon sx={{ color: "red" }} />
          </ListItemIcon>
          <ListItemText primary='logout' />
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position='fixed'
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}>
          <Toolbar>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              edge='start'
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}>
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' noWrap component='div'>
              DASHBOARD
            </Typography>
          </Toolbar>
        </AppBar>
        <Box
          component='nav'
          sx={{
            width: { sm: drawerWidth },
            flexShrink: { sm: 0 },
          }}
          aria-label='mailbox folders'>
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant='temporary'
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}>
            {drawer}
          </Drawer>
          <Drawer
            variant='permanent'
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open>
            {drawer}
          </Drawer>
        </Box>
        <Box
          component='main'
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}>
          <Toolbar />

          <div>
            <Switch>
              <Route exact path={`${path}`}>
                <NestingTry></NestingTry>
              </Route>
              <Route exact path={`${path}/nest1`}>
                <NestingTry></NestingTry>
              </Route>
              <Route exact path={`${path}/nest2`}>
                <NestingTry2></NestingTry2>
              </Route>
              <Route exact path={`${path}/nest3`}>
                <DashboardComponents></DashboardComponents>
              </Route>
            </Switch>
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default DashBoard;
