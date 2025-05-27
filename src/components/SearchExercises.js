import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
        exerciseOptions
      );
      setBodyParts(['all', ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises',
        exerciseOptions
      );

      const searchedExercises = exercisesData.filter(
        (item) =>
          item.name.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search) ||
          item.bodyPart.toLowerCase().includes(search)
      );

      setSearch('');
      setExercises(searchedExercises);
      window.scrollTo({ top: 1800, behavior: 'smooth' });
    }
  };

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      p={2}
      mt={{ xs: 12, md: 20, lg: 24 }}  // ✅ Más espacio arriba
      mb={{ xs: 14, md: 20, lg: 28 }}  // ✅ Más espacio abajo
    >
      <Typography
        fontWeight={700}
        textAlign="center"
        sx={{
          fontSize: { xs: '28px', sm: '36px', md: '44px' },
          mb: { xs: 4, md: 6 },
          fontFamily: 'Chakra Petch, sans-serif',
          color: '#fff',
        }}
      >
        Ejercicios que <br /> deberías conocer
      </Typography>

      <Box
        sx={{
          position: 'relative',
          width: { xs: '100%', sm: '80%', md: '70%' },
          maxWidth: '1000px',
          mb: 6,
        }}
      >
        <TextField
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Buscar ejercicios"
          type="text"
          fullWidth
          sx={{
            backgroundColor: '#1a1a1a',
            input: {
              color: '#fff',
              padding: '16px 20px',
              fontWeight: 500,
              fontSize: '18px',
              fontFamily: 'Outfit, sans-serif',
            },
            borderRadius: '40px',
            boxShadow: '0 0 12px rgba(255, 0, 85, 0.3)',
            '& fieldset': { border: 'none' },
          }}
        />
        <Button
          onClick={handleSearch}
          sx={{
            position: 'absolute',
            right: 8,
            top: '50%',
            transform: 'translateY(-50%)',
            height: '48px',
            px: 3,
            backgroundColor: '#ff0040',
            color: '#fff',
            fontWeight: 600,
            fontSize: { xs: '14px', md: '16px' },
            borderRadius: '24px',
            textTransform: 'none',
            boxShadow: '0 0 12px rgba(255, 0, 85, 0.5)',
            '&:hover': {
              backgroundColor: '#e60036',
              transform: 'translateY(-50%) scale(1.05)',
            },
          }}
        >
          Buscar
        </Button>
      </Box>

      <Box sx={{ width: '100%', maxWidth: '100%', overflow: 'hidden' }}>
        <HorizontalScrollbar
          data={bodyParts}
          bodyParts
          setBodyPart={setBodyPart}
          bodyPart={bodyPart}
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
