// Header.js
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="header-left">
        <div className="logo-img"></div>
      </Link>
      {/* Header(Community) */}
      <div className="header-middle">
        <ul className="middle-items">
          <li className="item-community">Community</li>
          <li className="item-event">Event</li>
          <li className="item-Notice">Notice</li>
        </ul>
      </div>
      {/* Header(Login) */}
      <div className="header-right">
        <div className="login">
          <Link to="/login">LOGIN</Link>
        </div>
        {/* Header(Join) */}
        <div className="join">
          <Link to="/join">JOIN</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
