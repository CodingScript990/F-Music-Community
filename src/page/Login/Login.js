// AddEdit.js
import React, { useState } from "react";
import "./Login.css";

function Login() {
  // login id
  const [id, setId] = useState("");
  // login password
  const [pwd, setPwd] = useState("");
  // login API
  if (id === "" || pwd === "") {
    window.alert("Please enter your ID and password.");
    return;
  }
  // check id
  if (!emailCheck(id)) {
    window.alert("The email format is not correct.");
  }
  dispatch(userAction.loginDB(id, pwd));
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
                <Input
                  onChange={(e) => {
                    setId(e.target.value);
                  }}
                  type="email"
                  placeholder="email"
                />
              </div>
              <div className="login-password">
                <Input
                  onChange={(e) => {
                    setId(e.target.value);
                  }}
                  type="password"
                  placeholder="password"
                />
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
