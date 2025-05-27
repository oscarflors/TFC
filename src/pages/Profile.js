import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Box, Typography, Button, TextField, Stack, IconButton, Divider } from '@mui/material';
import users from '../data/users.json';
import DeleteIcon from '@mui/icons-material/Delete';
import ExerciseCard from '../components/ExerciseCard'; // <-- ruta corregida

const Profile = () => {
  const { user, login, logout, favorites, addFavorite, removeFavorite } = useContext(AuthContext);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    setError('');
    if (!email.trim() || !password.trim()) {
      setError('Por favor, completa todos los campos');
      return;
    }

    const foundUser = users.find(
      (u) => u.email === email && u.password === password
    );

    if (foundUser) {
      const userData = { name: foundUser.name, email: foundUser.email, favorites: foundUser.favorites || [] };
      login(userData);
      setShowLoginForm(false);
      setEmail('');
      setPassword('');
      setError('');
    } else {
      setError('Credenciales incorrectas');
    }
  };

  if (!user) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          minHeight: 'calc(100vh - 100px)',
          paddingTop: '140px',
          paddingBottom: '60px',
        }}
      >
        <Box
          sx={{
            backgroundColor: '#121212',
            borderRadius: '16px',
            maxWidth: '480px',
            width: '90%',
            padding: '30px 20px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.7)',
            color: '#fff',
            textAlign: 'center',
          }}
        >
          <Typography variant="h4" color="#ff0040" mb={3} fontWeight="800">
            No has iniciado sesión
          </Typography>

          {!showLoginForm ? (
            <Button
              fullWidth
              variant="contained"
              color="secondary"
              onClick={() => setShowLoginForm(true)}
              sx={{
                fontWeight: '700',
                fontSize: '18px',
                padding: '12px',
              }}
            >
              Iniciar sesión
            </Button>
          ) : (
            <Stack spacing={3}>
              <TextField
                label="Email"
                type="email"
                variant="filled"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                InputProps={{
                  style: {
                    color: '#fff',
                    backgroundColor: '#1a1a1a',
                    borderRadius: 8,
                  },
                }}
                InputLabelProps={{ style: { color: '#aaa' } }}
              />
              <TextField
                label="Contraseña"
                type="password"
                variant="filled"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                InputProps={{
                  style: {
                    color: '#fff',
                    backgroundColor: '#1a1a1a',
                    borderRadius: 8,
                  },
                }}
                InputLabelProps={{ style: { color: '#aaa' } }}
              />
              {error && (
                <Typography color="#ff0040" variant="body2">
                  {error}
                </Typography>
              )}
              <Button
                variant="contained"
                color="secondary"
                fullWidth
                onClick={handleLogin}
                sx={{ fontWeight: '700', fontSize: '18px', padding: '12px' }}
              >
                Entrar
              </Button>
              <Button
                variant="text"
                color="inherit"
                fullWidth
                onClick={() => {
                  setShowLoginForm(false);
                  setError('');
                  setEmail('');
                  setPassword('');
                }}
                sx={{ fontWeight: '600' }}
              >
                Cancelar
              </Button>
            </Stack>
          )}
        </Box>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        minHeight: 'calc(100vh - 100px)',
        paddingTop: '140px',
        paddingBottom: '60px',
      }}
    >
      <Box
        sx={{
          backgroundColor: '#121212',
          borderRadius: '16px',
          maxWidth: '480px',
          width: '90%',
          padding: '30px 20px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.7)',
          color: '#fff',
          textAlign: 'center',
        }}
      >
        <Typography variant="h4" color="#ff0040" mb={3} fontWeight="800">
          Mi perfil
        </Typography>
        <Typography variant="h6" sx={{ mb: 1 }}>
          Nombre: <strong>{user.name}</strong>
        </Typography>
        <Typography variant="h6" sx={{ mb: 3 }}>
          Email: <strong>{user.email}</strong>
        </Typography>

        <Divider sx={{ bgcolor: '#ff0040', mb: 3 }} />

        <Typography variant="h5" sx={{ mb: 2, textAlign: 'left' }}>
          Ejercicios favoritos:
        </Typography>

        {favorites.length === 0 ? (
          <Typography variant="body1" sx={{ mb: 2 }}>
            No tienes ejercicios favoritos aún.
          </Typography>
        ) : (
          favorites.map((ex) => (
            <Box key={ex.id} sx={{ mb: 3, position: 'relative' }}>
              <ExerciseCard
                exercise={ex}
                isFavorite={true}
                addFavorite={addFavorite}
                removeFavorite={removeFavorite}
                isInProfile={true} // oculta botón favorito
              />
              <IconButton
                aria-label="Eliminar favorito"
                onClick={() => removeFavorite(ex.id)}
                sx={{
                  position: 'absolute',
                  top: 8,
                  right: 8,
                  color: '#ff0040',
                  backgroundColor: 'rgba(0,0,0,0.6)',
                  '&:hover': {
                    backgroundColor: 'rgba(0,0,0,0.8)',
                  },
                  borderRadius: '50%',
                }}
                size="large"
              >
                <DeleteIcon />
              </IconButton>
            </Box>
          ))
        )}

        <Button
          variant="contained"
          color="secondary"
          fullWidth
          onClick={logout}
          sx={{ fontWeight: '700', fontSize: '18px', padding: '12px', mt: 4 }}
        >
          Cerrar sesión
        </Button>
      </Box>
    </Box>
  );
};

export default Profile;
