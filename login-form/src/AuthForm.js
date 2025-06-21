import React from 'react';
import './AuthForm.css';
import loginImage from './im.png'; 

const AuthForm = () => {
  return (
    <div className="page-background">
      <div className="container-wrapper">
        <div className="login-left">
         
<div className="logo">
  <span className="logo-box">U</span><span className="logo-text">Tech</span>
</div>

          <h2>Welcome to UTech<br />Sign into your account</h2>
          <input type="text" placeholder="Phone or Email address" />
          <input type="password" placeholder="Password" />
          <button className="login-button">Log In</button>
          <a href="#" className="forgot-password">Forgot password?</a>
        </div>

        <div className="login-right">
          <img src={loginImage} alt="Login Visual" />
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
