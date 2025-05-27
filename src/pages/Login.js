import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, TextField, Typography, Stack } from '@mui/material';
import { AuthContext } from '../context/AuthContext';
import usersData from '../data/users.json'; 

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const foundUser = usersData.find(
      (user) => user.email === form.email && user.password === form.password
    );
    if (foundUser) {
      login(foundUser);
      navigate('/profile');
    } else {
      setError('Correo o contraseña incorrectos.');
    }
  };

  return (
    <Box
      maxWidth="400px"
      margin="auto"
      mt={8}
      p={4}
      borderRadius="12px"
      boxShadow="0 0 20px rgba(255, 0, 64, 0.3)"
      bgcolor="#1e1e1e"
    >
      <Typography variant="h4" fontWeight={700} color="#fff" mb={3}>
        Iniciar sesión
      </Typography>
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            label="Correo"
            name="email"
            value={form.email}
            onChange={handleChange}
            fullWidth
            required
            variant="outlined"
            InputLabelProps={{ style: { color: '#fff' } }}
            InputProps={{ style: { color: '#fff' } }}
          />
          <TextField
            label="Contraseña"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            fullWidth
            required
            variant="outlined"
            InputLabelProps={{ style: { color: '#fff' } }}
            InputProps={{ style: { color: '#fff' } }}
          />
          {error && <Typography color="error">{error}</Typography>}
          <Button type="submit" variant="contained" color="error">
            Entrar
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default Login;
