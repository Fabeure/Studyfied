import { NavLink } from "react-router-dom";
import { Button, Grid } from "@mui/material";
import logo from "../../assets/studyfast.svg";
import "./NavBar.css";
import useAuth from "../../hooks/useAuth";
import LoginPopup from "../LoginPopup/LoginPopUp";
import { useState } from "react";

interface LinkType {
  name: string;
  path: string;
  element: React.ReactNode;
}

interface NavBarProps {
  links: LinkType[];
}

const NavBar: React.FC<NavBarProps> = ({links}) => {
  const loginPath = links.find(({ name }) => name === "Login")?.path;
  const { user, setUser } = useAuth();
  
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  const handleLoginClick = () => {
    setShowLoginPopup(true);
  };

  const handleCloseLoginPopup = () => {
    setShowLoginPopup(false);
  };
  return (
    <>
      <nav className="navbar">
        <ul className="linkGroup">
          <div className="logo routeName">
            <img className="logoImage" src={logo} alt="My Photo" />
          </div>
          {links
            .filter((route) => route.name !== "Login")
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

        {user.accessToken !== "" && (
          <Grid
            container
            direction="row"
            justifyContent="end"
            alignItems="center"
            columnGap={3}
          >
            <Grid item>Hello : {user.email}</Grid>
            <Grid item>
              <Button
                variant="contained"
                onClick={() => {
                  setUser({ accessToken: "", email: "", userId: "" });
                }}
                sx={{
                  fontSize: "1rem",
                  padding: "0.7rem",
                  borderRadius: "1.5rem",
                  width: "7rem",
                  boxShadow: 0,
                  backgroundColor: "black",
                  color: "secondary.light",
                  textTransform: "none",
                  "&:hover": {
                    color: "secondary.light",
                    boxShadow: 0,
                    backgroundColor: "#3a3a3a",
                  },
                }}
              >
                Log out
              </Button>
            </Grid>
          </Grid>
        )}

        {loginPath && user.accessToken === "" && (
          <Button variant="contained" onClick={handleLoginClick}
          sx={{
            background: 'linear-gradient(90deg, rgba(55,8,114,1) 2%, rgba(55,8,114,1) 6%, rgba(84,11,131,1) 27%, rgba(108,13,145,1) 35%, rgba(113,13,148,1) 52%, rgba(119,14,151,1) 61%, rgba(74,31,144,1) 81%, rgba(44,42,139,1) 90%, rgba(19,51,135,1) 100%)'
          }}
          >
          Login
          </Button>
        )}

      {showLoginPopup && <LoginPopup onClose={handleCloseLoginPopup} />}
      {showLoginPopup && <div className="blur-background"></div>}      
      </nav>
    </>
  );
};

export default NavBar;
