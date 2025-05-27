import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png';

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={{
      width: '260px',
      height: '260px',
      borderRadius: '24px',
      cursor: 'pointer',
      gap: '32px',
      backgroundColor: bodyPart === item ? '#1a1a1a' : '#f2f2f2',
      border: bodyPart === item ? '2px solid #ff0040' : '2px solid transparent',
      boxShadow: bodyPart === item
        ? '0 0 20px rgba(255, 0, 64, 0.4)'
        : '0 2px 12px rgba(0,0,0,0.1)',
      transition: 'all 0.3s ease-in-out',
      '&:hover': {
        transform: 'scale(1.03)',
        boxShadow: '0 4px 20px rgba(255, 0, 64, 0.4)',
      },
    }}
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}
  >
    <img
      src={Icon}
      alt="body part icon"
      style={{
        width: '150px',
        height: '150px',
        objectFit: 'contain',
        filter: bodyPart === item ? 'brightness(1.2)' : 'none',
        transition: 'all 0.3s ease',
      }}
    />
    <Typography
      fontSize="22px"
      fontWeight="600"
      fontFamily="Chakra Petch, sans-serif"
      color={bodyPart === item ? '#fff' : '#1a1a1a'}
      textTransform="capitalize"
    >
      {item}
    </Typography>
  </Stack>
);

export default BodyPart;
