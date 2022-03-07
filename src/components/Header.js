// Header.js
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        {/* Header(Home) */}
        <img className="logo" alt="logo" src="img/F_Music.png"></img>
      </Link>
      <div className="header-right">
        {/* Header(Login) */}
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
