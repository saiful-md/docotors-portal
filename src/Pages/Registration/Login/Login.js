import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";
import { Button, CardActions, CardContent, Grid } from "@mui/material";
import image from "../../../images/login.png";
import Card from "@mui/material/Card";
import Alert from "@mui/material/Alert";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState({});
  const [password, setPassword] = useState({});
  const [error, setError] = useState(false);

  const handleLogin = () => {
    console.log({ email, password });
    setError(true);
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
                  {error && (
                    <Alert severity='error'>
                      This is an error alert — check it out!
                    </Alert>
                  )}
                  <h4>
                    If you dont't have any Account Please <br /> First Register!{" "}
                    <Link to='/register'>Here</Link>
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

export default Login;
