// import React from "react";
import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import logo from "../../assets/logo.png";
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

        {loginPath && (
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
