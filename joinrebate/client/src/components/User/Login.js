import React, { useState, useEffect } from "react";
import SignupForm from "./SignupForm";

const Login = ({ isShowLogin }) => {
  // State to manage login form input fields
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // State to manage signup form visibility
  const [showSignupForm, setShowSignupForm] = useState(false);
  // State for remembering the user
  const [rememberMe, setRememberMe] = useState(false);

  // Function to toggle signup form visibility
  const toggleSignupForm = () => {
    setShowSignupForm(!showSignupForm);
  };

  // Function to handle form submission
  const handleLogin = async (e) => {
    e.preventDefault();
    // Make an API call to login with the username and password
    try {
      
      const response = await fetch("/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
    
        }),
      });

      if (response.ok) {
        // Handle successful login here (e.g., redirect)
        console.log("Login successful");
      } else {
        // Handle login error here
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className={`${isShowLogin ? "active" : ""} show`}>
      <div className="login-form">
        <div className="form-box solid">
          <form className="form-inline" onSubmit={handleLogin}>
            <div className="form-group">
              <div className="input-group">
                <div className="input-group-addon">
                  <i className="fa fa-user"></i>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your User Name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="input-group">
                <div className="input-group-addon">
                  <i className="fa fa-lock"></i>
                </div>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter Your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <p>
                    <input
                      type="checkbox"
                      id="check"
                      name="remember"
                      value=""
                      checked={rememberMe}
                      onChange={() => setRememberMe(!rememberMe)}
                    />{" "}
                    <label htmlFor="check">Remember me</label>
                  </p>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <button type="button" onClick={() => { /* Handle the "Forgot password?" action here */ }}>
                    Forgot password ?
                  </button>
                </div>
              </div>
            </div>
            <button className="hb_btn" onClick={handleLogin}>Login</button>
          </form>
        </div>
        <p>
          Don't have an account?{" "}
          <button type="button" onClick={toggleSignupForm}>
            Sign up
          </button>
        </p>
      </div>
      {/* Conditionally render the SignupForm */}
      {showSignupForm && <SignupForm />}
    </div>
  );
};

export default Login;
