/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";

import './login.css'

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);

  const validateEmail = (inputEmail) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(inputEmail);
    setIsValidEmail(isValid);
    return isValid;
  };

  const handleEmailChange = (e) => {
    const inputValue = e.target.value;
    setEmail(inputValue);
    validateEmail(inputValue);
  };

  const validatePassword = (inputPassword) => {
    const passwordRegex =/^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;
    const isValid = passwordRegex.test(inputPassword);
    setIsValidPassword(isValid);
    return isValid;
  };

  const handlePasswordChange = (e) => {
    const inputValue = e.target.value;
    setPassword(inputValue);
    validatePassword(inputValue);
  };

  const handleLogin = () => {
    if (isValidEmail && isValidPassword) {
      alert('LogIn successfully!');
    } else {
       alert('Invalid email or password');
    }
  };

  return (
    <div className="container">
      <h2 className="title">Login Page</h2>
      <form className="form">
      
          <label className="label">
            Email:
            <input
              className="input"
              type="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
         
          {!isValidEmail && <p style={{ color: 'red' }}>Invalid email address</p>}
        </label>

     
          <label className="label">
            Password:
            <input
              className="input"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
         
          {!isValidPassword && (
        <p style={{ color: 'red' }}>
        Password must contain both letters and numbers.
        </p>
      )}
        </label>

        {isValidEmail && isValidPassword ? (
        <Link to='/Table'>
          <button onClick={handleLogin} className='button'>LogIn</button>
        </Link>
      ) : (
        <button className='button' disabled>LogIn</button>
      )}
      </form>
    </div>
  );
};

export default LoginForm;
