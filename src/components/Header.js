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
