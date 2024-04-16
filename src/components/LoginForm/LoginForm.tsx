import { Box, Button, Grid, TextField } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import Groups2RoundedIcon from "@mui/icons-material/Groups2Rounded";
import MarkunreadRoundedIcon from "@mui/icons-material/MarkunreadRounded";
import VpnKeyRoundedIcon from "@mui/icons-material/VpnKeyRounded";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const loginEndpoint = `${
  process.env.VITE_BACKEND_API
}/api/v1/authenticate/login`;

interface LoginPopupProps {
  onClose: () => void;
}

function LoginForm({onClose}: LoginPopupProps) {
  const [logEmail, setLogEmail] = useState("");
  const [logPassword, setLogPassword] = useState("");
  const [loginDenied, setLoginDenied] = useState(false);
  const { setUser } = useAuth();

  const navigate = useNavigate(); 

  const routeChange = () =>{ 
    onClose();
    const path = '/Studyfied/login'; 
    navigate(path);
  }

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
        alert("welcome");
        const accessToken = res.data?.accessToken;
        const email = res.data?.email;
        const userId = res.data?.userId;
        setUser({ accessToken, email, userId });
        window.location.href = "/Studyfied/profile";
      })
      .catch((err) => {
        console.log(err);
        alert(" | check console");
        setLoginDenied(true);
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
      minWidth={"fit-content"}
    >
      <Grid container direction={"column"} rowGap={3}>
        <Grid item container xs alignItems={"center"} columnGap={1}>
          <Groups2RoundedIcon
            fontSize="large"
            sx={{ color: "secondary.main" }}
          />
          <h1 className="loginForm-title">Login To Your Account</h1>
        </Grid>
        {loginDenied && (
          <Grid item xs>
            <h2 style={{ color: "red" }}>
              Email and/or password don't correspond to an account
            </h2>
          </Grid>
        )}
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
            label="Email"
            color="primary"
            name="logEmail"
            error={loginDenied}
            value={logEmail}
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
          <VpnKeyRoundedIcon sx={{ color: "primary.dark" }} />
          <TextField
            label="Password"
            type="password"
            color="primary"
            name="logPassword"
            error={loginDenied}
            value={logPassword}
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
        <Grid item xs>
          <Button
            variant="contained"
            color="primary"
            sx={{
              width: "100%",
              fontSize: "1.1rem",
              paddingY: "0.7rem",
              borderRadius: 3,
              boxShadow: 0,
              textTransform:"none",
              ["&:hover"]: {
                color: "primary.dark",
                boxShadow: 0,
                backgroundColor: "secondary.main",
              },
            }}
            onClick={handleLogin}
          >
            Log in
          </Button>
          <p onClick={routeChange}>dont have an account? Register here</p>
        </Grid>
      </Grid>
    </Box>
  );
}

export default LoginForm;
