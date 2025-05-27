import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';
import Loader from './Loader';

import { useAuth } from '../context/AuthContext';

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);
  const { favorites, addFavorite, removeFavorite } = useAuth();

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === 'all') {
        exercisesData = await fetchData(
          'https://exercisedb.p.rapidapi.com/exercises',
          exerciseOptions
        );
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        );
      }

      setExercises(exercisesData);
      setCurrentPage(1);
    };

    fetchExercisesData();
  }, [bodyPart, setExercises]);

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate = (event, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };

  if (!currentExercises.length) return <Loader />;

  return (
    <Box
      id="exercises"
      sx={{
        mt: { xs: 12, md: 16, lg: 20 },
        mb: { xs: 12, md: 20 },
        px: 3,
      }}
    >
      <Typography
        variant="h4"
        fontWeight={700}
        textAlign="center"
        mb={{ xs: 6, md: 8 }}
        sx={{
          fontSize: { xs: '28px', sm: '36px', md: '44px' },
          fontFamily: 'Chakra Petch, sans-serif',
          color: '#fff',
        }}
      >
        Tipos de ejercicios
      </Typography>

      <Stack
        direction="row"
        flexWrap="wrap"
        justifyContent="center"
        gap={{ xs: 4, sm: 5, lg: 8 }}
      >
        {currentExercises.map((exercise, idx) => (
          <ExerciseCard
            key={idx}
            exercise={exercise}
            isFavorite={favorites.some(fav => fav.id === exercise.id)}
            addFavorite={addFavorite}
            removeFavorite={removeFavorite}
          />
        ))}
      </Stack>

      <Stack alignItems="center" mt={{ xs: 10, md: 14 }}>
        {exercises.length > 9 && (
          <Pagination
            color="primary"
            shape="rounded"
            size="large"
            defaultPage={1}
            page={currentPage}
            onChange={paginate}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            sx={{
              '& .MuiPaginationItem-root': {
                color: '#fff',
                borderColor: '#ff0040',
                backgroundColor: '#1a1a1a',
                '&.Mui-selected': {
                  backgroundColor: '#ff0040',
                  color: '#fff',
                },
                '&:hover': {
                  backgroundColor: '#ff0040',
                  color: '#fff',
                },
              },
            }}
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
