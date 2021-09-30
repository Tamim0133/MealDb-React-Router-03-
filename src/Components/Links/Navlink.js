import React from "react";
import { NavLink } from "react-router-dom";

const Navlink = () => {
  const linkStyle = {
    fontWeight: "bold",

    borderBottom: "2px solid ",
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/home" activeStyle={linkStyle}>
            Home
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto my-auto">
              <li className="nav-item">
                <NavLink
                  className="nav-link active ms-2"
                  aria-current="page"
                  to="/header"
                  activeStyle={linkStyle}
                >
                  Meals
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link active ms-2"
                  activeClassName="selected"
                  aria-current="page"
                  to="/about"
                  activeStyle={linkStyle}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeStyle={linkStyle}
                  className="nav-link active ms-2 my-auto"
                  aria-current="page"
                  to="contact"
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navlink;
