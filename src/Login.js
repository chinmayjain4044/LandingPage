import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import logoImage from './assets/download-Photoroom (1).jpg';

function Login() {
  const [rollNo, setRollNo] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');
  const navigate = useNavigate();

  const handleRollNoChange = (e) => {
    // Allow only numbers
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setRollNo(value);
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.rollNo === rollNo && user.password === password);

    if (user) {
      navigate('/landing');
    } else {
      setErrorMessage('Invalid roll number or password');
    }
  };

  return (
    <div className="login-container">
      <div className="background-overlay"></div>
      <div className="navbar">
        <img src={logoImage} alt="KIIT Logo" className="logo" />
        <div className="institute-name">Kalinga Institute Of Industrial Technology</div>
        <Link to="/signup" className="signup-link">Sign up</Link>
      </div>
      <div className="login-box">
        <div className="login-heading">LOGIN</div>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="dropdown-container">
            <select className="dropdown">
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </select>
          </div>
          <input 
            type="text" 
            placeholder="Roll NO" 
            className="input-field" 
            value={rollNo} 
            onChange={handleRollNoChange} 
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="input-field" 
            value={password} 
            onChange={handlePasswordChange} 
          />
          <button type="submit" className="login-button"><span>LOGIN</span></button>
        </form>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <div className="signup-redirect">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </div>
      </div>
      <div className="copyright">
        &copy; Copyright — All Rights Reserved kiit.ac.in
      </div>
    </div>
  );
}

export default Login;
