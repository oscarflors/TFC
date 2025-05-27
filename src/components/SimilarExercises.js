import React from 'react';
import { Typography, Box, Stack } from '@mui/material';

import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => (
  <Box
    sx={{
      mt: { lg: '100px', xs: '60px' },
      px: '20px',
      backgroundColor: '#121212',
      borderRadius: '16px',
      py: '40px',
      boxShadow: '0 6px 30px rgba(0,0,0,0.4)',
    }}
  >
    {/* Grupo Muscular */}
    <Typography
      sx={{
        fontSize: { lg: '36px', xs: '24px' },
        fontWeight: 800,
        color: '#fff',
        mb: '30px',
        textAlign: 'center',
      }}
    >
      Ejercicios similares por{' '}
      <span style={{ color: '#ff0040', textTransform: 'capitalize' }}>Grupo Muscular</span>
    </Typography>
    <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
      {targetMuscleExercises.length !== 0 ? <HorizontalScrollbar data={targetMuscleExercises} /> : <Loader />}
    </Stack>

    {/* Espaciado entre secciones */}
    <Box height="60px" />

    {/* Equipo Utilizado */}
    <Typography
      sx={{
        fontSize: { lg: '36px', xs: '24px' },
        fontWeight: 800,
        color: '#fff',
        mb: '30px',
        textAlign: 'center',
      }}
    >
      Ejercicios similares por{' '}
      <span style={{ color: '#ff0040', textTransform: 'capitalize' }}>Equipo Utilizado</span>
    </Typography>
    <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
      {equipmentExercises.length !== 0 ? <HorizontalScrollbar data={equipmentExercises} /> : <Loader />}
    </Stack>
  </Box>
);

export default SimilarExercises;

