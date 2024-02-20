import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../LoginContext.jsx'; // Make sure the path is correct

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
    const { isLoggedIn, login } = useLogin();

  // Hardcoded credentials
  const hardcodedUsername = 'admin';
  const hardcodedPassword = 'password';

  
  
  const handleLogin = (e) => {
    e.preventDefault();
    if (username === hardcodedUsername && password === hardcodedPassword) {
      login();

      navigate('/');
      
      
    } else {
      alert('Incorrect username or password');
    }
  };

  return (
    <div style={{ paddingTop: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <h1 style={{ fontSize: '30px', fontWeight: 'bold' }}>Login</h1>
      <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: '300px' }}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ margin: '10px 0', padding: '10px', width: '100%' }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ margin: '10px 0', padding: '10px', width: '100%' }}
        />
        <button type="submit" style={{ background: 'lightblue', padding: '10px 20px', marginTop: '20px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>Login</button>
      </form>
    </div>
  );
};

export default Login;
