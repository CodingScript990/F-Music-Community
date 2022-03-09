// Join.js
import React from "react";
import "./Join.css";

function Join() {
  // register value

  return (
    <div className="join-container">
      <div className="join-left">
        <div className="left-container">
          <div className="left-title">
            <h1>Create your account</h1>
          </div>
          <form className="frm-join">
            <div className="join-email">
              <input type="email" name="email" id="email" placeholder="eamil" />
            </div>
            <div className="join-password">
              <input type="password" name="password" placeholder="password" />
            </div>
            <div className="join-password2">
              <input type="password" name="password2" placeholder="password2" />
            </div>
            <div className="join-name">
              <input type="text" name="name" placeholder="name" />
            </div>
            <div className="join-btn">
              <input type="button" value="Cancel" />
              <input type="submit" value="Create" />
            </div>
          </form>
        </div>
      </div>
      <div className="join-right">
        <div className="right-container">
          <div className="right-title">
            <h2>Share the joy of the day with music.</h2>
          </div>
          <div className="right-icon">
            <div className="img"></div>
            <div className="img2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Join;
