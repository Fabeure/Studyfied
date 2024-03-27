import LoginForm from "../../components/LoginForm/LoginForm";
import { Box, Divider, Grid } from "@mui/material";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import "./LoginPage.css";

export default function Login() {
  return (
    <Box className="page-content" bgcolor={"#fffbf5"} width={"100%"}>
      <Grid
        item
        container
        direction={"column"}
        alignItems={"center"}
        // justifyContent={"center"}
        xs={12}
        // rowSpacing={9}
      >
        <Grid paddingTop={3} item xs={3} >
          <h1 className="loginPage-header">
            Don't have an account ? <span>Sign up</span>
          </h1>
        </Grid>
        <Grid
          item
          container
          direction={"row"}
          justifyContent={"center"}
          // alignItems={"center"}
          xs={0}
          // rowSpacing={8}
          columnSpacing={6}
          // bgcolor={"pink"}
          // paddingTop={6}
        >
          {/* ///////////// Register */}
          <Grid item xs={5.5}>
            <RegisterForm />
          </Grid>
          {/* ////////// divider */}
          <Grid item xs={0.1}>
            <Divider orientation="vertical" sx={{ backgroundColor: "gold" }} />
          </Grid>
          {/* /////// Login */}
          <Grid
            item
            container
            xs={4}
            // bgcolor={"white"}
            flexDirection={"column"}
            justifyContent={"center"}
            // alignItems={"center"}
          >
            <LoginForm />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
