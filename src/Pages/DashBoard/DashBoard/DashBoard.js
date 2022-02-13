import React from "react";
import GridViewIcon from "@mui/icons-material/GridView";
import { Link, Route, Switch } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import HomeIcon from "@mui/icons-material/Home";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";
import GroupIcon from "@mui/icons-material/Group";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PostAddIcon from "@mui/icons-material/PostAdd";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import DashboardComponents from "../DahsboeardComponents/DashboardComponents";
import SettingsIcon from "@mui/icons-material/Settings";
import Appointments from "../Appointments/Appointments";
import Patients from "../Patients/Patients";
import Prescriptions from "../Prescripttions/Prescriptions";
import Setting from "../Setting/Setting";

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
              display: "flex",
              alignItmes: "center",
            }}
            to={`/`}>
            <HomeIcon></HomeIcon>
            <span style={{ marginLeft: "10px" }}>Home</span>
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
              display: "flex",
              alignItmes: "center",
            }}
            to={`${url}/dashoardCompenents`}>
            <GridViewIcon></GridViewIcon>
            <span style={{ marginLeft: "10px" }}>Dashboard</span>
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
              display: "flex",
              alignItmes: "center",
            }}
            to={`${url}/appointment`}>
            <ContactPageIcon></ContactPageIcon>
            <span style={{ marginLeft: "10px" }}>Appointment</span>
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
              display: "flex",
              alignItmes: "center",
            }}
            to={`${url}/patient`}>
            <GroupIcon></GroupIcon>
            <span style={{ marginLeft: "10px" }}>Patient</span>
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
              display: "flex",
              alignItmes: "center",
            }}
            to={`${url}/prescription`}>
            <PostAddIcon></PostAddIcon>
            <span style={{ marginLeft: "10px" }}> Prescription</span>
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
              display: "flex",
              alignItmes: "center",
            }}
            to={`${url}/setting`}>
            <SettingsIcon></SettingsIcon>
            <span style={{ marginLeft: "10px" }}> Setting</span>
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
                <DashboardComponents></DashboardComponents>
              </Route>
              <Route exact path={`${path}/dashoardCompenents`}>
                <DashboardComponents></DashboardComponents>
              </Route>
              <Route exact path={`${path}/appointment`}>
                <Appointments></Appointments>
              </Route>
              <Route exact path={`${path}/patient`}>
                <Patients></Patients>
              </Route>
              <Route exact path={`${path}/prescription`}>
                <Prescriptions></Prescriptions>
              </Route>
              <Route exact path={`${path}/setting`}>
                <Setting></Setting>
              </Route>
            </Switch>
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default DashBoard;
