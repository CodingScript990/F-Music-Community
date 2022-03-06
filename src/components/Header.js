// Header.js
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  // nav item(home)
  const [activeTab, setActiveTab] = "Home";
  return (
    <div className="header">
      <p className="logo">User Management System</p>
      <div className="header-right">
        {/* Header(Home) */}
        <Link to="/">
          <p
            className={`${activeTab === "Home" ? "active" : ""}`}
            onClick={() => setActiveTab("Home")}
          >
            Home
          </p>
        </Link>
        {/* Header(Adduser) */}
        <Link to="/add">
          <p
            className={`${activeTab === "Adduser" ? "active" : ""}`}
            onClick={() => setActiveTab("Adduser")}
          >
            Adduser
          </p>
        </Link>
        {/* Header(About) */}
        <Link to="/about">
          <p
            className={`${activeTab === "About" ? "active" : ""}`}
            onClick={() => setActiveTab("About")}
          >
            About
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
