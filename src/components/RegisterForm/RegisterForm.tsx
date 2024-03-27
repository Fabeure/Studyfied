import { Box, Button, Grid, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { isEmail, isPassword } from "../../pages/Login/validators";

const registerEndpoint = `${
  import.meta.env.VITE_BACKEND_API
}/api/v1/authenticate/register`;

function RegisterForm() {
  // input states
  const [regEmail, setRegEmail] = useState("");
  const [regUsername, setRegUsername] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regFullName, setRegFullName] = useState("");
  const [regConfirmPass, setRegConfirmPass] = useState("");

  // input handler
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    // setChangedField(name);
    switch (name) {
      case "regemail":
        setRegEmail(value);
        break;
      case "reguser":
        setRegUsername(value);
        break;
      case "regname":
        setRegFullName(value);
        break;
      case "regpass":
        setRegPassword(value);
        break;
      case "confirmpass":
        setRegConfirmPass(value);
        break;

      default:
        break;
    }
  };

  // register button handler
  const handleRegister = () => {
    const registerData = {
      Email: regEmail,
      Username: regUsername,
      FullName: regFullName,
      Password: regPassword,
      ConfirmPassword: regConfirmPass,
    };
    console.log(registerData);
    axios
      .post(registerEndpoint, registerData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert(err + " | check console");
      });
  };

  return (
    <Box
      border={"1px solid"}
      borderRadius={"6px"}
      borderColor={"var(--tc-light)"}
      paddingBottom={"2rem"}
      paddingTop={"1rem"}
      paddingX={"2rem"}
      bgcolor={"white"}
      //   height={"100%"}
      //   width={"30rem"}
      minWidth={"fit-content"}
    >
      <Grid container xs={12} direction={"column"} rowGap={2}>
        <Grid item xs>
          <h1 className="registerForm-title">New here</h1>
        </Grid>
        <Grid item container xs columnGap={1}>
          <Grid item xs>
            <TextField
              type="text"
              label="Full Name"
              name="regname"
              value={regFullName}
              onChange={handleInputChange}
              sx={{
                width: "100%",
                [`& fieldset`]: {
                  borderRadius: 3,
                },
              }}
            />
          </Grid>
          <Grid item xs>
            <TextField
              type="text"
              name="reguser"
              label="Username"
              value={regUsername}
              onChange={handleInputChange}
              sx={{
                width: "100%",
                [`& fieldset`]: {
                  borderRadius: 3,
                },
              }}
            />
          </Grid>
        </Grid>

        <Grid item container xs columnGap={1}>
          <Grid item xs>
            <TextField
              type="text"
              name="regemail"
              label="Email"
              color="primary"
              error={!isEmail(regEmail) && regEmail != ""}
              value={regEmail}
              onChange={handleInputChange}
              sx={{
                [`& fieldset`]: {
                  borderRadius: 3,
                },
                width: "100%",
              }}
            />
          </Grid>
          <Grid item xs>
            <TextField
              type="password"
              name="regpass"
              label="Password"
              error={!isPassword(regPassword) && regPassword != ""}
              value={regPassword}
              onChange={handleInputChange}
              sx={{
                [`& fieldset`]: {
                  borderRadius: 3,
                },
                width: "100%",
              }}
            />
          </Grid>
        </Grid>

        <Grid item container xs columnGap={1}>
          <Grid item xs={5.9}>
            <TextField
              type="password"
              name="confirmpass"
              label="Confirm Password"
              error={regConfirmPass != regPassword && regConfirmPass != ""}
              value={regConfirmPass}
              onChange={handleInputChange}
              sx={{
                [`& fieldset`]: {
                  borderRadius: 3,
                },
                width: "100%",
              }}
            />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            sx={{ width: "100%", paddingY: "0.7rem", borderRadius: 3 }}
            onClick={handleRegister}
          >
            Register
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default RegisterForm;
