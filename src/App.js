import React, { useState } from 'react';
import './App.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    if (email === '' || password === '' || username === '') {
      setErrorMessage('Please fill in all fields.');
      return;
    }

    // Perform login logic here
    // You can redirect the user to a new page or show a success message
    // For now, let's just show an alert
    alert(`Welcome! ${username}`);
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={errorMessage && username === '' ? 'error-input' : ''}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={errorMessage && email === '' ? 'error-input' : ''}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={errorMessage && password === '' ? 'error-input' : ''}
        />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default LoginPage;

