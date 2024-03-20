// import React from "react";
import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

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
    <nav className="navbar">
      <ul>
        {links
          .filter((route) => route.name != "Login")
          .map((route) => (
            <li>
              <NavLink
                to={route.path}
                end
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                {route.name}
              </NavLink>
            </li>
          ))}
      </ul>
      {loginPath && (
        <NavLink
          to={loginPath}
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          Login
        </NavLink>
      )}
    </nav>
  );
};

export default NavBar;
