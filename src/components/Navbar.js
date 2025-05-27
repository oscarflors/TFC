import React, { useEffect, useState } from 'react';
import { Stack, Button } from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Logo from '../assets/images/Logo.png';

const Navbar = () => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    if (location.pathname === '/profile') {
      setActiveLink('profile');
    } else if (location.pathname === '/') {
      setActiveLink('home');
    } else {
      setActiveLink('');
    }
  }, [location]);

  const handleLogoClick = () => {
    navigate('/');
    setActiveLink('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleHomeClick = () => {
    navigate('/');
    setActiveLink('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExercisesClick = () => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: 'exercises' } });
    } else {
      const exercisesSection = document.getElementById('exercises');
      if (exercisesSection) {
        exercisesSection.scrollIntoView({ behavior: 'smooth' });
        setActiveLink('exercises');
      }
    }
  };

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      px="40px"
      py="20px"
      sx={{
        position: 'fixed',
        top: 0,
        width: '100%',
        background: '#0d0d0d',
        zIndex: 1000,
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',
      }}
    >
      <span onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
        <img
          src={Logo}
          alt="logo"
          style={{ width: '50px', height: '50px', filter: 'brightness(150%)' }}
        />
      </span>

      <Stack direction="row" spacing={5} alignItems="center" className="nav-links">
        <span
          className={`nav-link ${activeLink === 'home' && location.pathname === '/' ? 'active' : ''}`}
          onClick={handleHomeClick}
          style={{ cursor: 'pointer' }}
        >
          Home
        </span>

        <span
          className={`nav-link ${activeLink === 'exercises' && location.pathname === '/' ? 'active' : ''}`}
          onClick={handleExercisesClick}
          style={{ cursor: 'pointer' }}
        >
          Ejercicios
        </span>

        <Link
          to="/profile"
          className={`nav-link ${location.pathname === '/profile' ? 'active' : ''}`}
          onClick={() => setActiveLink('profile')}
          style={{ cursor: 'pointer' }}
        >
          Mi Perfil
        </Link>

        {user && (
          <Button
            variant="outlined"
            color="error"
            onClick={logout}
            sx={{ textTransform: 'none' }}
          >
            Cerrar sesión
          </Button>
        )}
      </Stack>
    </Stack>
  );
};

export default Navbar;
