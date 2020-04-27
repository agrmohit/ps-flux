import React from "react";

function Header() {
  return (
    <nav className="navbar">
      <a href="/" className="nav-item">
        Home
      </a>
      <a href="/courses" className="nav-item">
        Courses
      </a>
      <a href="/about" className="nav-item">
        About
      </a>
    </nav>
  );
}

export default Header;
