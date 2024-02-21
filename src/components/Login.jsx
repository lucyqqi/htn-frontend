import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../LoginContext.jsx'; 

// login component for user authentication
const Login = () => {
  // state for username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { isLoggedIn, login } = useLogin();

  // hardcoded credentials <3
  const hardcodedUsername = 'htn';
  const hardcodedPassword = 'plsacceptme<3';
  
  // handle login form submission
  const handleLogin = (e) => {
    e.preventDefault(); // prevent default form submission behavior
    // check if username and password match hardcoded values
    if (username === hardcodedUsername && password === hardcodedPassword) {
      login(); // call login function from context
      navigate('/'); // navigate to homepage on successful login
    } else {
      alert('Incorrect username or password'); // show error message on failure
    }
  };

  return (
    <div style={{ paddingTop: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <h1 style={{ fontSize: '40px', fontWeight: 'bold' }}>Login</h1>
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
        <button type="submit" style={{ background: '#008b8b', padding: '10px 20px', marginTop: '20px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>Login</button>
      </form>
    </div>
  );
};

export default Login;
