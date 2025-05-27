import React from 'react';
import { Box } from '@mui/material';

import ExerciseCard from './ExerciseCard';
import BodyPart from './BodyPart';

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => {
  return (
    <Box
      sx={{
        maxWidth: '100%',
        overflowX: 'auto',
        scrollBehavior: 'smooth',
        gap: '32px',
        px: 2,
        py: 3,
        WebkitOverflowScrolling: 'touch',
        display: 'flex',
        flexWrap: 'nowrap',
        scrollbarWidth: 'none', // Firefox
        '&::-webkit-scrollbar': {
          display: 'none', // Chrome, Safari
        },
      }}
    >
      {data.map((item) => (
        <Box
          key={item.id || item}
          sx={{
            flex: '0 0 auto',
            scrollSnapAlign: 'start',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            '&:hover': {
              transform: 'scale(1.03)',
              boxShadow: '0 0 12px rgba(255, 0, 85, 0.4)',
              borderRadius: '12px',
            },
          }}
        >
          {bodyParts ? (
            <BodyPart
              item={item}
              setBodyPart={setBodyPart}
              bodyPart={bodyPart}
            />
          ) : (
            <ExerciseCard exercise={item} />
          )}
        </Box>
      ))}
    </Box>
  );
};

export default HorizontalScrollbar;
