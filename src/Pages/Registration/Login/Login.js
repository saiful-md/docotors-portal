import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";
import {
  Button,
  CardActions,
  CardContent,
  CircularProgress,
  Grid,
} from "@mui/material";
import image from "../../../images/login.png";
import Card from "@mui/material/Card";
import Alert from "@mui/material/Alert";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState({});
  const [password, setPassword] = useState({});
  let location = useLocation();
  let history = useHistory();

  const { isLoading, login, errorr, success, googleSighIn } = useAuth();
  console.log(isLoading, errorr, success);
  const handleLogin = () => {
    login(email, password, location, history);
  };
  return (
    <Box>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid
            sx={{
              display: "flex",
              //   alignItems: "center",
              marginTop: "110px",
              justifyContent: "center",
            }}
            item
            xs={12}
            sm={6}
            md={6}>
            <Grid>
              {!isLoading && (
                <Card sx={{ minWidth: 275, padding: "20px" }}>
                  <CardContent>
                    <h3>Login</h3>
                    <TextField
                      required
                      onChange={(e) => setEmail(e.target.value)}
                      type='text'
                      sx={{ width: "300px" }}
                      id='standard-basic'
                      label='Email'
                      variant='standard'
                    />{" "}
                    <br />
                    <TextField
                      required
                      onChange={(e) => setPassword(e.target.value)}
                      type='password'
                      sx={{ width: "300px" }}
                      id='standard-basic'
                      label='Password'
                      variant='standard'
                    />
                    <br />
                    {errorr && <Alert severity='error'>{errorr}</Alert>}
                    {success && (
                      <Alert severity='success'>"login successfully!"</Alert>
                    )}
                    <h4>
                      If you dont't have any Account Please <br /> First
                      Register! <Link to='/register'>Here</Link>
                    </h4>
                  </CardContent>
                  <CardActions
                    sx={{
                      textAlign: "center",
                      display: "block",
                      marginTop: "20px",
                    }}>
                    <Button
                      onClick={handleLogin}
                      sx={{ width: "100%" }}
                      variant='contained'>
                      Sign In
                    </Button>
                    <p>-----------------</p>
                    <Button
                      onClick={() => googleSighIn(location, history)}
                      sx={{ width: "80%" }}
                      variant='contained'>
                      google sign in
                    </Button>
                  </CardActions>
                </Card>
              )}

              {isLoading && (
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <CircularProgress />
                </Box>
              )}
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Grid>
              <img width='100%' height='640px' src={image} alt='login' />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Login;
