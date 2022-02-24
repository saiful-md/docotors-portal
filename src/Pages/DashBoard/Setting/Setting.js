import { TextField, Button } from "@mui/material";
import { Box } from "@mui/system";
import Alert from "@mui/material/Alert";

import React, { useState } from "react";
import useAuth from "../../../Hooks/useAuth";

const Setting = () => {
  const [email, setEmail] = useState();
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);
  const { addmin } = useAuth();
  console.log(addmin);
  const handleMakeAddmin = (e) => {
    const user = { email };
    fetch(`http://localhost:5000/users/addmin`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setSuccess(true);
          setFailure(false);
        } else if (!data.modifiedCount) {
          setFailure(true);
        }
      });
    e.preventDefault();
  };
  return (
    <div>
      <h1>Settings</h1>
      <h2>Make Addmin</h2>

      {/* <h3 style={{ color: "green", fontWeight: "800" }}>
        
      </h3> */}
      <Box>
        <form onSubmit={handleMakeAddmin}>
          <TextField
            sx={{ width: "30%" }}
            onBlur={(e) => setEmail(e.target.value)}
            label='Make Addmin'
            variant='standard'
            placeholder='Enter Email'
            color='warning'
            focused
          />
          <Button type='submit' variant='contained'>
            Make Addmin
          </Button>
        </form>
        {success && <Alert severity='success'>Addmin make Successfully!</Alert>}
        {failure && (
          <Alert severity='error'>Does not Exist or already addmin!</Alert>
        )}
      </Box>
    </div>
  );
};

export default Setting;
