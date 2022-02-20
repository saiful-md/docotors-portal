import React, { useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";
// import CircularProgress from '@mui/material/CircularProgress';

import { Button, CardActions, CardContent, Grid } from "@mui/material";
import image from "../../../images/login.png";
import Card from "@mui/material/Card";
import Alert from "@mui/material/Alert";
import { Link } from "react-router-dom";

const Register = () => {
  const { registerUser } = useAuth();
  const [name, setName] = useState({});
  const [email, setEmail] = useState({});
  const [phone, setPhone] = useState({});
  const [password, setPassword] = useState({});
  const [rePassword, setRePassword] = useState({});
  const [passwordError, setPasswordErro] = useState(false);

  const handleLogin = () => {
    if (password === rePassword) {
      setPasswordErro(false);
      registerUser(email, password);
    } else {
      setPasswordErro(true);
    }
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
              marginTop: "60px",
              justifyContent: "center",
            }}
            item
            xs={12}
            sm={6}
            md={6}>
            <Grid>
              <Card sx={{ minWidth: 275, padding: "20px" }}>
                <CardContent sx={{ width: "300px" }}>
                  <h3>Login</h3>
                  <TextField
                    required
                    onChange={(e) => setName(e.target.value)}
                    type='text'
                    sx={{ width: "300px" }}
                    id='standard-basic'
                    label='Name'
                    variant='standard'
                  />{" "}
                  <br />
                  <TextField
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    type='email'
                    sx={{ width: "300px" }}
                    id='standard-basic'
                    label='Email'
                    variant='standard'
                  />{" "}
                  <br />
                  <TextField
                    required
                    onChange={(e) => setPhone(e.target.value)}
                    type='tel'
                    sx={{ width: "300px" }}
                    id='standard-basic'
                    label='Phone Number'
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
                  <TextField
                    required
                    onChange={(e) => setRePassword(e.target.value)}
                    type='password'
                    sx={{ width: "300px" }}
                    id='standard-basic'
                    label='Re - Type Password'
                    variant='standard'
                  />
                  <br />
                  {passwordError && (
                    <Alert severity='error'>
                      This is an error alert — check it out!
                    </Alert>
                  )}
                  <h4>
                    If you Already have an Account Please <br /> Go to Login!
                    <Link to='/login'>Here</Link>
                  </h4>
                </CardContent>
                <CardActions
                  sx={{
                    textAlign: "center",
                    display: "block",
                    // marginTop: "20px",
                  }}>
                  <Button
                    onClick={handleLogin}
                    sx={{ width: "50%" }}
                    variant='contained'>
                    Register
                  </Button>
                </CardActions>
              </Card>
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

export default Register;
