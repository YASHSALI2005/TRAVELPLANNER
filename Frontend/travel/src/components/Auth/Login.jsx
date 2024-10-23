import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext'; // Import AuthContext
import './auth.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const { login } = useContext(AuthContext); // Access login function from context
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    axios.post('http://localhost:2000/login', { email, password })
      .then(result => {
        if (result.data === "success") {
          login(); // Update context to indicate user is authenticated
          navigate('/'); // Redirect to home page after successful login
        } else {
          setMessage(result.data);
        }
      })
      .catch(err => {
        console.log(err);
        setMessage("Error during login");
      });
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      {message && <p className="error-message">{message}</p>}
      <form onSubmit={handleLogin}>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <a href="/signup">Sign up here</a></p>
    </div>
  );
};

export default Login;
