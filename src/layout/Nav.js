import React from "react";
import { NavLink } from "react-router-dom";
import GlobalStyle from "../theme/GlobalStyle";

const Nav = () => {
  return (
    <nav className="menu">
      <GlobalStyle />
      <h3>Navegação</h3>
      <ul>
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
      </ul>

      <div className="containerSubmenu">
        <span className="openSubmenu">Content</span>
        <ul className="submenu">
          <li>
            <NavLink exact to="/typography">
              Typography
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/code">
              Code
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="containerSubmenu">
        <span className="openSubmenu">Components</span>
        <ul className="submenu">
          <li>
            <NavLink exact to="/button">
              Button
            </NavLink>
          </li>
        </ul>
      </div>

      <ul>
        <li>
          <NavLink exact to="/">
            Mais um
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
