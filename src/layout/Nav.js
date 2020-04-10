import React from "react";
import { NavLink } from "react-router-dom";
import GlobalStyle from "../theme/GlobalStyle";

const Nav = () => {
  return (
    <nav className="menu">
      <GlobalStyle />
      <ul>
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/button">Button</NavLink>
        </li>
        <li>
          <NavLink exact to="/typography">
            Typography
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
