import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../images/logo.PNG"; // Import the image


const Header = () => {
  const location = useLocation(); // Get the current path

  return (
    <header>
      <div className="wrapper">
        <div className="header">
          <h1>
            <Link to="/">
              <img src={logo} id="logo" alt="logo" />
            </Link>
          </h1>
          <nav>
            <ul>
              <li>
                <Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link>
              </li>
              <li>
                <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>About Us</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
