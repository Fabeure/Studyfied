import { Box, Button, Grid, SxProps, TextField, Theme } from "@mui/material";
import { useState } from "react";
import axios from "axios";
// import Groups2RoundedIcon from "@mui/icons-material/Groups2Rounded";
import MarkunreadRoundedIcon from "@mui/icons-material/MarkunreadRounded";
import VpnKeyRoundedIcon from "@mui/icons-material/VpnKeyRounded";
import useAuth from "../../hooks/useAuth";
// import { useNavigate } from "react-router-dom";

const loginEndpoint = `${process.env.VITE_BACKEND_API}/api/v1/authenticate/login`;

interface LoginFormProps {
  // onClose: () => void;
  onRegister: () => void;
}

const inputSx: SxProps<Theme> = {
  flexGrow: 1,
  // [`& fieldset legend`]: {
  //   color: "lime",
  //   borderColor: "white", // Change background color on hover
  //   borderWidth: "3px",
  //   borderStyle: "solid",
  //   [`&:hover`]: {
  //     borderColor: "red",
  //   },
  // },
  [`& fieldset`]: {
    borderRadius: "2em",
    borderColor: "#A693CD",
    borderWidth: "0px",
    backgroundColor: "rgba(66, 11, 67, 0.4)",
  },
  [`& label`]: {
    color: "white",
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
    // color: "primary.dark",
    boxShadow: 0,
    backgroundColor: "#AA4DB2",
  },
};

function LoginForm({ /*onClose,*/ onRegister }: LoginFormProps) {
  const [logEmail, setLogEmail] = useState("");
  const [logPassword, setLogPassword] = useState("");
  const [loginDenied, setLoginDenied] = useState(false);
  const { setUser } = useAuth();

  // const navigate = useNavigate();

  // const routeChange = () => {
  //   onClose();
  //   const path = "/Studyfied/login";
  //   navigate(path);
  // };

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
      // border={"3px solid"}
      borderRadius={"3em"}
      // borderColor="#AA4DB2"
      paddingBottom={"2.5rem"}
      paddingTop={"2.5rem"}
      paddingX={"3rem"}
      bgcolor={"rgba(29, 22, 45, 0.65)"}
      minWidth={"fit-content"}
      sx={{
        backdropFilter: "blur(36px)",
        // background:
        //   "linear-gradient(to right, rgba(29, 22, 45, 0.65) 37%, rgba(31, 18, 61, 0.65))",
        // boxShadow: "0 0 5px 10px rgba(29, 22, 45, 0.65)",
        boxShadow: "0 0 12px 4px rgba(170, 77, 178, 0.3)",
      }}
    >
      <Grid container direction={"column"} rowGap={3} minWidth={"350px"}>
        <Grid
          item
          container
          xs
          alignItems={"center"}
          justifyContent={"center"}
          columnGap={1}
        >
          {/* <Groups2RoundedIcon
            fontSize="large"
            sx={{ color: "rgba(166, 147, 205, 1)" }}
          /> */}
          <h1 className="loginForm-title">Welcome back</h1>
        </Grid>
        {loginDenied && (
          <Grid item xs>
            <h2
              style={{
                color: "rgb(255, 152, 210)",
                fontStyle: "italic",
                fontWeight: "bolder",
              }}
            >
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
          <MarkunreadRoundedIcon sx={{ color: "rgba(166, 147, 205, 1)" }} />
          <TextField
            label="Email"
            color="primary"
            name="logEmail"
            error={loginDenied}
            value={logEmail}
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
            label="Password"
            type="password"
            color="primary"
            name="logPassword"
            error={loginDenied}
            value={logPassword}
            onChange={handleInputChange}
            sx={inputSx}
          />
        </Grid>
        <Grid item xs>
          <Button
            variant="contained"
            color="primary"
            sx={buttonSx}
            onClick={handleLogin}
          >
            Log in
          </Button>
        </Grid>
        <Grid item xs sx={{ color: "white" }}>
          don't have an account?{" "}
          <span
            style={{ fontWeight: "bold", cursor: "pointer" }}
            // onClick={routeChange}
            onClick={onRegister}
          >
            Register here
          </span>{" "}
        </Grid>
      </Grid>
    </Box>
  );
}

export default LoginForm;
