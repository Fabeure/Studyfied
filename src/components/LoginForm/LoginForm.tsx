import { Box, Button, Grid, TextField } from "@mui/material";
import { useState } from "react";
import { isEmail, isPassword } from "../validators";
import axios from "axios";

const loginEndpoint = `${
  import.meta.env.VITE_BACKEND_API
}/api/v1/authenticate/login`;

function LoginForm() {
  const [logEmail, setLogEmail] = useState("");
  const [logPassword, setLogPassword] = useState("");

  // input handler
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    switch (name) {
      case "logEmail":
        setLogEmail(value);
        break;
      case "logPassword":
        setLogPassword(value);
        break;

      default:
        break;
    }
  };
  // login button handler
  const handleLogin = () => {
    const loginData = {
      Email: logEmail,
      Password: logPassword,
    };
    axios
      .post(loginEndpoint, loginData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert(err.response.data + " | check console");
      });
  };

  return (
    <Box
      border={"1px solid"}
      borderRadius={"6px"}
      borderColor="var(--tc-light)"
      paddingBottom={"2rem"}
      paddingTop={"1rem"}
      paddingX={"2rem"}
      bgcolor={"white"}
      //   height={"100%"}
      //   width={"30rem"}
      minWidth={"fit-content"}
    >
      <Grid container direction={"column"} rowGap={2}>
        <Grid
          item
          xs
          alignItems={"center"}
          justifyContent={"center"}
          //   bgcolor={"yellow"}
        >
          <h1 className="loginForm-title">Already a member</h1>
        </Grid>
        <Grid item xs>
          <TextField
            label="Email"
            sx={{
              [`& fieldset`]: {
                borderRadius: 3,
              },
              width: "100%",
            }}
            color="primary"
            name="logEmail"
            error={!isEmail(logEmail) && logEmail != ""}
            value={logEmail}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs>
          <TextField
            label="Password"
            sx={{
              [`& fieldset`]: {
                borderRadius: 3,
              },
              width: "100%",
            }}
            color="primary"
            name="logPassword"
            error={!isPassword(logPassword) && logPassword != ""}
            value={logPassword}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs>
          <Button
            variant="contained"
            color="primary"
            sx={{
              width: "100%",
              paddingY: "0.7rem",
              borderRadius: 3,
              boxShadow: 0,
            }}
            onClick={handleLogin}
          >
            Log in
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default LoginForm;
