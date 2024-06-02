import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar">
      <div className="header-logo">
        <h1 className="logo">SimplyRecipes</h1>
        <button className="btn toggle" onClick={toggleNavbar}>
          <FontAwesomeIcon icon={faBars} size="lg" />
        </button>
      </div>
      <div
        className={`navbar-second ${isNavOpen ? "show" : ""}`}
        id="navbar-second"
      >
        <div className="navlinks">
          <a href="/home" className="navlink">
            Home
          </a>
          <a href="/about" className="navlink">
            About
          </a>
          <a href="/recipes" className="navlink">
            Recipes
          </a>
        </div>
        <div className="navlink">
          <a href="/contact" className="btn">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
