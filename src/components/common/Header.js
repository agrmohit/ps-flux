import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const idleStyle = {
    backgroundColor: "hsl(210, 100%, 98%)",
    borderRadius: 5,
    border: "solid 1px",
    borderColor: "hsl(210, 100%, 90%)",
  };
  const activeStyle = {
    backgroundColor: "hsl(0, 0%, 94%)",
    borderColor: "hsl(0, 0%, 90%)",
  };
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        className="nav-link"
        style={idleStyle}
        activeStyle={activeStyle}
        exact
      >
        Home
      </NavLink>
      <NavLink
        to="/courses"
        className="nav-link"
        style={idleStyle}
        activeStyle={activeStyle}
      >
        Courses
      </NavLink>
      <NavLink
        to="/about"
        className="nav-link"
        style={idleStyle}
        activeStyle={activeStyle}
      >
        About
      </NavLink>
    </nav>
  );
}

export default Header;
