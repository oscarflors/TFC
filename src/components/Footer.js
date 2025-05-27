import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';

const Footer = () => (
  <Box
    mt="80px"
    sx={{
      bgcolor: 'linear-gradient(135deg, #222222 0%, #2e2e2e 100%)',
      py: { xs: 6, md: 8 },
      px: { xs: 3, md: 6 },
      boxShadow: '0 -4px 15px rgba(0, 0, 0, 0.4)',
      position: 'relative',
      zIndex: 1,
    }}
  >
    <Stack
      gap="40px"
      sx={{ alignItems: 'center', flexWrap: 'wrap', position: 'relative', zIndex: 3 }}
      direction="column"
    >
      <Box
        sx={{
          position: 'relative',
          display: 'inline-block',
          borderRadius: '12px',
          padding: '8px 16px',
          backgroundColor: 'rgba(255, 0, 64, 0.15)',
          filter: 'brightness(1.3)',
          transition: 'transform 0.3s ease',
          '&:hover': {
            transform: 'scale(1.05)',
          },
        }}
      >
        <Box
          component="img"
          src={Logo}
          alt="logo"
          sx={{
            width: { xs: 180, md: 240 },
            height: 'auto',
          }}
        />
      </Box>

      <Typography
        variant="h5"
        sx={{
          fontSize: { xs: '20px', md: '28px' },
          fontWeight: 700,
          fontFamily: "'Chakra Petch', sans-serif",
          color: '#eee',
          textAlign: 'center',
          userSelect: 'none',
          mb: 0.5,
        }}
      >
        ÓSCAR LLOPIS FLORS
      </Typography>

      <Typography
        variant="body2"
        sx={{
          color: '#fff',
          fontStyle: 'italic',
          fontWeight: 500,
          userSelect: 'none',
          textAlign: 'center',
          mt: 0,
          cursor: 'default',
          fontSize: '14px',
        }}
      >
        <Box
          component="span"
          sx={{
            color: '#fff',
            transition: 'color 0.3s ease, text-shadow 0.3s ease',
            '&:hover': {
              color: '#ff0040',
              textShadow: 'inset 0 0 8px #ff0040',
            },
            mr: 0.5,
          }}
        >
          ©
        </Box>
        2025 Todos los derechos reservados.
      </Typography>
    </Stack>
  </Box>
);

export default Footer;
