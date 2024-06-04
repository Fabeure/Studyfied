import { Box, Grid } from "@mui/material";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import "./RegisterPage.css";

export default function Login() {
  return (
    <Box component="div" className="page-content" width={"100%"}>
      <Grid item container direction={"column"} alignItems={"center"} xs={12}>
        <Grid paddingTop={3} item xs={3}>
          <h1 className="loginPage-header">Sign Up Today</h1>
        </Grid>
        <Grid
          item
          container
          direction={"row"}
          justifyContent={"center"}
          xs={0}
          columnSpacing={6}
        >
          <Grid item xs={5.5}>
            <RegisterForm />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
