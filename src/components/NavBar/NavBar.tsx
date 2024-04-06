import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import logo from "../../assets/studyfast.svg";
import { Button, Grid } from "@mui/material";
import useAuth from "../../hooks/useAuth";

interface LinkType {
  name: string; // Name of the link
  path: string; // Path associated with the link
  element: ReactNode; // Type of the React component to render
}
interface NavBarProps {
  links: LinkType[];
}

const NavBar: React.FC<NavBarProps> = ({ links }) => {
  const loginPath = links.find(({ name }) => name == "Login")?.path;
  const { user, setUser } = useAuth();

  return (
    <>
      <nav className="navbar">
        <ul className="linkGroup">
          <div className="logo routeName ">
            <img className="logoImage" src={logo} alt="My Photo" />
          </div>
          {links
            .filter((route) => route.name != "Login")
            .map((route, key) => (
              <li className="linkWrapper" key={key}>
                <NavLink
                  to={route.path}
                  end
                  className={({ isActive }) =>
                    `routeName ${isActive ? "active" : "inactive"}`
                  }
                >
                  {route.name}
                </NavLink>
              </li>
            ))}
        </ul>

        {user.accessToken != "" && (
          <Grid
            container
            // bgcolor={"red"}
            direction={"row"}
            justifyContent={"end"}
            alignItems={"center"}
            columnGap={3}
          >
            <Grid item>Hello : {user.email}</Grid>
            <Grid item>
              <NavLink to="/Studyfied">
                <Button
                  variant="contained"
                  onClick={() => {
                    setUser({ accessToken: "", email: "", userId: "" });
                  }}
                  sx={{
                    // width: "100%",
                    fontSize: "1rem",
                    padding: "0.7rem",
                    borderRadius: "1.5rem",
                    width:"7rem",
                    boxShadow: 0,
                    backgroundColor: "black",
                    color: "secondary.light",
                    textTransform: "none",
                    ["&:hover"]: {
                      color: "secondary.light",
                      boxShadow: 0,
                      backgroundColor: "#3a3a3a",
                    },
                  }}
                >
                  Log out
                </Button>
              </NavLink>
            </Grid>
          </Grid>
        )}
        {loginPath && user.accessToken == "" && (
          <NavLink
            to={loginPath}
            className={({ isActive }) =>
              `loginLink ${isActive ? "active" : "inactive"}`
            }
          >
            Login
          </NavLink>
        )}
      </nav>
      <div className="separator"></div>
    </>
  );
};

export default NavBar;
