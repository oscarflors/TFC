// src/pages/Home.js
import React, { useEffect, useRef, useState } from 'react';
import { Box } from '@mui/material';
import { useLocation } from 'react-router-dom';

import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';
import HeroBanner from '../components/HeroBanner';

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');
  const location = useLocation();
  const exercisesRef = useRef(null);

  useEffect(() => {
    if (location.state?.scrollTo === 'exercises' && exercisesRef.current) {
      exercisesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <div id="exercises" ref={exercisesRef}>
        <Exercises
          setExercises={setExercises}
          exercises={exercises}
          bodyPart={bodyPart}
        />
      </div>
    </Box>
  );
};

export default Home;
