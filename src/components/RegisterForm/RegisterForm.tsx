import { Box, Button, Grid, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRegisterValidation } from "../validators";
import MarkunreadRoundedIcon from "@mui/icons-material/MarkunreadRounded";
import VpnKeyRoundedIcon from "@mui/icons-material/VpnKeyRounded";
import BadgeRoundedIcon from "@mui/icons-material/BadgeRounded";
import DriveFileRenameOutlineRoundedIcon from "@mui/icons-material/DriveFileRenameOutlineRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";

const registerEndpoint = `${process.env.VITE_BACKEND_API}/api/v1/authenticate/register`;

function RegisterForm() {
  // input states
  const [regEmail, setRegEmail] = useState("");
  const [regUsername, setRegUsername] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regFullName, setRegFullName] = useState("");
  const [regConfirmPass, setRegConfirmPass] = useState("");
  const [errorMessages, setErrorMessages] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    fullName: "",
    username: "",
  });
  const [disableRegister, setDisableRegister] = useState(true);
  const [registerDenied, setRegisterDenied] = useState(false);

  //  custom hook
  useRegisterValidation(
    {
      email: regEmail,
      password: regPassword,
      confirmPassword: regConfirmPass,
      username: regUsername,
      fullName: regFullName,
      errorMessages: errorMessages,
    },
    {
      email: setRegEmail,
      password: setRegPassword,
      confirmPassword: setRegConfirmPass,
      fullName: setRegFullName,
      username: setRegUsername,
      errorMessages: setErrorMessages,
    },
  );

  useEffect(() => {
    let invalid = false;
    Object.keys(errorMessages).forEach((key) => {
      if (
        errorMessages[
          key as
            | "email"
            | "password"
            | "fullName"
            | "username"
            | "confirmPassword"
        ] != ""
      ) {
        invalid = invalid || true;
        // break;
      }
    });
    setDisableRegister(invalid);
    console.log(errorMessages);
    console.log("form is valid " + !invalid);
  }, [errorMessages]);

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
        alert("account created");
      })
      .catch((err) => {
        console.log(err);
        alert("check console");
        setRegisterDenied(true);
      });
  };

  return (
    <Box
      paddingBottom={"2rem"}
      paddingTop={"1rem"}
      paddingX={"2rem"}
      minWidth={"fit-content"}
    >
      <Grid container direction={"column"} rowGap={3}>
        <Grid
          item
          xs
          container
          columnGap={1}
          alignItems={"center"}
          direction={"row"}
        >
          <AutoAwesomeRoundedIcon
            sx={{ color: "secondary.main" }}
            fontSize="large"
          />
          <h1 className="registerForm-title">New here</h1>
        </Grid>

        {registerDenied && (
          <Grid
            item
            xs
            container
            columnGap={1}
            alignItems={"center"}
            direction={"row"}
          >
            <h2 style={{ color: "red" }}>
              Registration error, try again... :/
            </h2>
          </Grid>
        )}

        <Grid item container xs columnGap={5}>
          <Grid
            item
            container
            xs
            direction={"row"}
            alignItems={"center"}
            columnGap={1}
          >
            <BadgeRoundedIcon sx={{ color: "primary.dark" }} />
            <TextField
              type="text"
              label="Full Name"
              name="regname"
              error={errorMessages.fullName != ""}
              helperText={errorMessages.fullName}
              value={regFullName}
              onChange={handleInputChange}
              sx={{
                flexGrow: 1,
                [`& fieldset`]: {
                  borderRadius: 1,
                  borderTopStyle: "none",
                  borderLeftStyle: "none",
                  borderRightStyle: "none",
                  borderBottomColor: "secondary.light",
                },
              }}
            />
          </Grid>
          <Grid
            item
            container
            xs
            direction={"row"}
            alignItems={"center"}
            columnGap={1}
          >
            <DriveFileRenameOutlineRoundedIcon sx={{ color: "primary.dark" }} />
            <TextField
              type="text"
              name="reguser"
              label="Username"
              error={errorMessages.username != ""}
              helperText={errorMessages.username}
              value={regUsername}
              onChange={handleInputChange}
              sx={{
                flexGrow: 1,
                [`& fieldset`]: {
                  borderRadius: 1,
                  borderTopStyle: "none",
                  borderLeftStyle: "none",
                  borderRightStyle: "none",
                  borderBottomColor: "secondary.light",
                },
              }}
            />
          </Grid>
        </Grid>

        <Grid item container xs columnGap={5}>
          <Grid
            item
            container
            xs
            direction={"row"}
            alignItems={"center"}
            columnGap={1}
          >
            <MarkunreadRoundedIcon sx={{ color: "primary.dark" }} />
            <TextField
              type="text"
              name="regemail"
              label="Email"
              color="primary"
              error={errorMessages.email != ""}
              helperText={errorMessages.email}
              value={regEmail}
              onChange={handleInputChange}
              sx={{
                [`& fieldset`]: {
                  borderRadius: 1,
                  borderTopStyle: "none",
                  borderLeftStyle: "none",
                  borderRightStyle: "none",
                  borderBottomColor: "secondary.light",
                },
                flexGrow: 1,
              }}
            />
          </Grid>
          <Grid
            item
            container
            xs
            direction={"row"}
            alignItems={"center"}
            columnGap={1}
          >
            <VpnKeyRoundedIcon sx={{ color: "primary.dark" }} />

            <TextField
              type="password"
              name="regpass"
              label="Password"
              error={errorMessages.password != ""}
              helperText={errorMessages.password}
              value={regPassword}
              onChange={handleInputChange}
              sx={{
                [`& fieldset`]: {
                  borderRadius: 1,
                  borderTopStyle: "none",
                  borderLeftStyle: "none",
                  borderRightStyle: "none",
                  borderBottomColor: "secondary.light",
                },
                flexGrow: 1,
              }}
            />
          </Grid>
        </Grid>

        <Grid item container xs columnGap={5}>
          <Grid
            item
            container
            xs={5.6}
            direction={"row"}
            alignItems={"center"}
            columnGap={1}
          >
            <CheckRoundedIcon sx={{ color: "primary.dark" }} />

            <TextField
              type="password"
              name="confirmpass"
              label="Confirm Password"
              error={errorMessages.confirmPassword != ""}
              helperText={errorMessages.confirmPassword}
              value={regConfirmPass}
              onChange={handleInputChange}
              sx={{
                [`& fieldset`]: {
                  borderRadius: 1,
                  borderTopStyle: "none",
                  borderLeftStyle: "none",
                  borderRightStyle: "none",
                  borderBottomColor: "secondary.light",
                },
                flexGrow: 1,
              }}
            />
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Button
            variant="contained"
            disabled={disableRegister}
            color="primary"
            sx={{
              fontSize: "1.1rem",
              width: "100%",
              paddingY: "0.7rem",
              borderRadius: 3,
              boxShadow: 0,
              textTransform: "none",
              ["&:hover"]: {
                color: "primary.dark",
                boxShadow: 0,
                backgroundColor: "secondary.main",
              },
            }}
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
