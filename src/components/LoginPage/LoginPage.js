import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import MenuIcon from '@mui/icons-material/Menu';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { blue, blueGrey } from '@mui/material/colors';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    // Send email and password to backend for authentication
    const response = await fetch('http://localhost:5000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();

    // Handle success or failure
    if (data.success) {
      navigate('/dashboard');  // Redirect to dashboard if login is successful
    } else {
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="main-container">
      <div className="left-section">
        <div className="left-panel-content">
          <Typography variant="h4" className="welcome-title">Welcome to EOV</Typography>
          <Typography variant="body1" className="welcome-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit luctus pretium ut mauris, cursus enim.
          </Typography>
        </div>
      </div>

      <div className="right-section">
        <div className="content-container">
          <div className="logo-container">
            <img src="EOV-ORIGINAL.webp" alt="EOV Logo" className="logo" />
          </div>

          <Typography variant="h5" className="portal-title">Employee Portal</Typography>
        </div>

        <Paper elevation={3} className="login-form">
          <TextField
            fullWidth
            margin="normal"
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className="login-button"
            onClick={handleLogin}
          >
            Log In
          </Button>
        </Paper>
      </div>
    </div>
  );
};

export default LoginPage;
