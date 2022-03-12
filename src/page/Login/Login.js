// AddEdit.js
import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login-container">
      <div className="login-left">
        <div className="login-left-container">
          <div className="left-title">
            <div className="left-logo"></div>
          </div>
          <div className="login-frm">
            <form className="frm-container">
              <div className="login-email">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email"
                />
              </div>
              <div className="login-password">
                <input type="password" name="password" placeholder="password" />
              </div>
              <div className="login-button">
                <input className="login-btn" type="button" value="Login" />
              </div>
              <div className="login-others">
                <span>Forgot password?</span>
                <span>Sign Up</span>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="login-right">
        <div className="right-container">
          <div className="login-right-title">
            <h2>Wrap up your day listening to your favorite artist's song.</h2>
          </div>
          <div className="right-img">
            <div className="img-top">
              <div className="img-left"></div>
              <div className="img-right"></div>
            </div>
            <div className="img-bottom"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
