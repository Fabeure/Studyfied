import { Box, Button, Grid, SxProps, TextField, Theme } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRegisterValidation } from "../../hooks/useRegisterValidation";
import MarkunreadRoundedIcon from "@mui/icons-material/MarkunreadRounded";
import VpnKeyRoundedIcon from "@mui/icons-material/VpnKeyRounded";
import BadgeRoundedIcon from "@mui/icons-material/BadgeRounded";
import DriveFileRenameOutlineRoundedIcon from "@mui/icons-material/DriveFileRenameOutlineRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";

const registerEndpoint = `${process.env.VITE_BACKEND_API}/api/v1/authenticate/register`;

interface RegisterFormProps {
  onLogin?: () => void;
}

const inputSx: SxProps<Theme> = {
  flexGrow: 1,
  [`& fieldset`]: {
    borderRadius: "2em",
    borderColor: "#A693CD",
    borderWidth: "0px",
    backgroundColor: "rgba(66, 11, 67, 0.4)",
  },
  [`& label`]: {
    color: "rgba(255,255,255,0.7)",
  },
  [`& input`]: {
    color: "white",
    backdropFilter: "blur(4px)",
    borderRadius: "2em",
  },
};

const buttonSx: SxProps<Theme> = {
  width: "100%",
  fontSize: "1.1rem",
  paddingY: "0.7rem",
  borderRadius: "3em",
  boxShadow: 0,
  textTransform: "none",
  backgroundColor: "#A693CD",
  fontWeight: "bold",
  color: "white",
  ["&:hover"]: {
    boxShadow: 0,
    backgroundColor: "#AA4DB2",
  },
};

function RegisterForm({ onLogin }: RegisterFormProps) {
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
    }
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
      }
    });
    setDisableRegister(invalid);
  }, [errorMessages]);

  // input handler
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
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

  const handleAlreadyMember = () => {
    if (onLogin) onLogin();
  };

  return (
    <Box component="div">
      <Grid container direction={"column"} rowGap={3} minWidth={"600px"}>
        <Grid
          item
          xs
          container
          columnGap={1}
          alignItems={"center"}
          justifyContent={"center"}
          direction={"row"}
        >
          <h1 className="registerForm-title">I'm new here</h1>
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
            <h2
              style={{
                color: "rgb(255, 152, 210)",
                fontStyle: "italic",
                fontWeight: "bolder",
              }}
            >
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
            <BadgeRoundedIcon sx={{ color: "rgba(166, 147, 205, 1)" }} />
            <TextField
              type="text"
              label="Full Name"
              name="regname"
              error={errorMessages.fullName != ""}
              helperText={errorMessages.fullName}
              value={regFullName}
              onChange={handleInputChange}
              sx={inputSx}
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
            <DriveFileRenameOutlineRoundedIcon
              sx={{ color: "rgba(166, 147, 205, 1)" }}
            />
            <TextField
              type="text"
              name="reguser"
              label="Username"
              error={errorMessages.username != ""}
              helperText={errorMessages.username}
              value={regUsername}
              onChange={handleInputChange}
              sx={inputSx}
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
            <MarkunreadRoundedIcon sx={{ color: "rgba(166, 147, 205, 1)" }} />
            <TextField
              type="text"
              name="regemail"
              label="Email"
              color="primary"
              error={errorMessages.email != ""}
              helperText={errorMessages.email}
              value={regEmail}
              onChange={handleInputChange}
              sx={inputSx}
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
            <VpnKeyRoundedIcon sx={{ color: "rgba(166, 147, 205, 1)" }} />

            <TextField
              type="password"
              name="regpass"
              label="Password"
              error={errorMessages.password != ""}
              helperText={errorMessages.password}
              value={regPassword}
              onChange={handleInputChange}
              sx={inputSx}
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
            <CheckRoundedIcon sx={{ color: "rgba(166, 147, 205, 1)" }} />

            <TextField
              type="password"
              name="confirmpass"
              label="Confirm Password"
              error={errorMessages.confirmPassword != ""}
              helperText={errorMessages.confirmPassword}
              value={regConfirmPass}
              onChange={handleInputChange}
              sx={inputSx}
            />
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Button
            variant="contained"
            disabled={disableRegister}
            color="primary"
            sx={buttonSx}
            onClick={handleRegister}
          >
            Register
          </Button>
        </Grid>
        <Grid item xs sx={{ color: "white" }}>
          Already a regular?{" "}
          <span
            style={{ fontWeight: "bold", cursor: "pointer" }}
            onClick={handleAlreadyMember}
          >
            Login
          </span>
        </Grid>
      </Grid>
    </Box>
  );
}

export default RegisterForm;
