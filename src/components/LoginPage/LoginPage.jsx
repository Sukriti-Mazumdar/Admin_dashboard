/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaQuestionCircle, FaBell, FaCog, FaChevronDown } from 'react-icons/fa';
import { FaGoogle, FaFacebook, FaApple } from 'react-icons/fa';
import './LoginPage.css';

function LoginPage({ onLogin }) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', { email, password });
    
    // For demo purposes, accept any email/password combination
    if (email && password) {
      onLogin();
    }
  };

  return (
    <div className="login-page">
      {/* Header */}
      <header className="login-header">
        <div className="header-left">
          <div className="logo">
            <span className="logo-text">TAX</span>
            <div className="logo-line"></div>
          </div>
        </div>
        
        <div className="header-center">
          <span className="user-name">Jayeetra Bhattacharjee</span>
          <FaChevronDown className="chevron-icon" />
        </div>
        
        <div className="header-right">
          <div className="help-section">
            <FaQuestionCircle className="help-icon" />
            <span className="help-text">Need help?</span>
          </div>
          <FaBell className="bell-icon" />
          <FaCog className="settings-icon" />
        </div>
      </header>

      {/* Main Content */}
      <div className="login-container">
        {/* Left Side - Login Form */}
        <div className="login-form-section">
          <div className="form-content">
            <h1 className="welcome-text">Welcome Back!</h1>
            
            <form onSubmit={handleSubmit} className="login-form">
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <div className="input-container">
                  <FaEnvelope className="input-icon" />
                  <input
                    type="email"
                    id="email"
                    placeholder="email@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-input"
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="password" className="form-label">Password</label>
                <div className="input-container">
                  <FaLock className="input-icon" />
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-input"
                    required
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>
              
              <div className="forgot-password">
                <a href="#" className="forgot-link">Forgot Password?</a>
              </div>
              
              <button type="submit" className="login-button">
                Login
              </button>
            </form>
            
            <div className="divider">
              <span className="divider-text">- or -</span>
            </div>
            
            <div className="social-login">
              <button className="social-btn google-btn">
                <FaGoogle />
              </button>
              <button className="social-btn facebook-btn">
                <FaFacebook />
              </button>
              <button className="social-btn apple-btn">
                <FaApple />
              </button>
            </div>
            
            <div className="signup-section">
              <span className="signup-text">Don't have an account? </span>
              <a href="#" className="signup-link">Sign up</a>
            </div>
          </div>
        </div>
        
        {/* Right Side */}
        <div className="illustration-section">
          <img src="https://t4.ftcdn.net/jpg/14/39/07/53/360_F_1439075328_RVYpkK9a9y1E24zw0uKCDeHpoXTxUW0J.jpg" alt="Avatar Illustration" className="login-illustration" />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
