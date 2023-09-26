import React, { useState } from 'react';

function SignupForm() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
  });

  const [signupError, setSignupError] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSignup = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle successful signup, e.g., redirect to a welcome page or login page.
        console.log('Signup successful');
      } else {
        // Handle signup error, e.g., display an error message to the user.
        const errorData = await response.json();
        setSignupError(errorData.message);
        console.error('Signup failed:', errorData.message);
      }
    } catch (error) {
      console.error('Signup error:', error);
    }
  };

  return (
    <div className="signup-form">
      <h3>Sign Up</h3>
      <form onSubmit={handleSignup}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleSignup}>
          Sign Up
        </button>
        {signupError && <p className="error">{signupError}</p>}
      </form>
    </div>
  );
}

export default SignupForm;
