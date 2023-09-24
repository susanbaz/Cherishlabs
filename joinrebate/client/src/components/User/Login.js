import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SignupForm from './SignupForm';


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showSignupForm, setShowSignupForm] = useState(false);// State to control when to show the SignupForm
  const [user,setUser]=useState(); 

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    console.log("handleLogin called");

    // Make a POST request to your login API endpoint
    try {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const userData=await response.json();
        setUser(userData.user);
      } else {
        // Handle login error, e.g., display an error message to the user.
        const errorData = await response.json();
        console.error('Login failed:', errorData.message);
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
  <div class="hb_custom_popup hb_login">
	<div class="hb_popup_inner">
		<div class="hb_popup_img">
			<img src="/images/pics/loginbackground.png" class="img-responsive" alt="" ></img>
			<div class="hb_popup_overlay">
				<img src="images/popup_logo.png" class="img-responsive" alt=""></img>
			</div>
		</div>
    
    <div className="hb_popup_content">
    <Link to="/login"> 
      <button className="hb_close_btn"><i className="fa fa-times"></i></button>
    </Link>
      <h3>Login</h3>
      <div className="hb_popup_form">
        <form className="form-inline" onSubmit={handleLogin}>
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-addon"><i className="fa fa-user"></i></div>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your User Name"
                value={username}
                onChange={handleUsernameChange}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-addon"><i className="fa fa-lock"></i></div>
              <input
                type="password"
                className="form-control"
                placeholder="Enter Your Password"
                value={password}
                onChange={handlePasswordChange}
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
                    value={rememberMe}
                    onChange={handleRememberMeChange}
                  />
                  <label htmlFor="check">Remember me</label>
                </p>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <a href="#">Forgot password?</a>
              </div>
            </div>
          </div>
          <button type="submit" className="hb_btn"> Login</button>
        </form>
      </div>
      <p>
        Don't have an account?{' '}
        <a href="#" onClick={() => setShowSignupForm(true)}>Sign up</a> {/* Toggle the SignupForm */}
      </p>
      {showSignupForm && <SignupForm />} {/* Conditionally render SignupForm */}
    </div>
  </div>
</div>

  );
}

export default Login;
