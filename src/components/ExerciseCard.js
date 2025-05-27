import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Stack, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const ExerciseCard = ({ exercise, isFavorite, addFavorite, removeFavorite, isInProfile }) => {
  const handleFavoriteClick = (e) => {
    e.preventDefault(); // evita que el link se active al clickear favorito
    if (isFavorite) {
      removeFavorite(exercise.id);
    } else {
      addFavorite(exercise);
    }
  };

  return (
    <Link
      className="exercise-card"
      to={`/exercise/${exercise.id}`}
      style={{
        display: 'block',
        overflow: 'hidden',
        borderRadius: '16px',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
        transition: 'transform 0.3s ease',
        position: 'relative',
        textDecoration: 'none',
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '320px',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <img
          src={exercise.gifUrl}
          alt={exercise.name}
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.4s ease',
          }}
          className="exercise-img"
        />

        {/* Mostrar botón favorito SOLO si NO estamos en perfil */}
        {!isInProfile && (
          <IconButton
            onClick={handleFavoriteClick}
            aria-label={isFavorite ? 'Quitar de favoritos' : 'Añadir a favoritos'}
            sx={{
              position: 'absolute',
              top: 12,
              right: 12,
              color: isFavorite ? '#ff0040' : '#fff',
              backgroundColor: 'rgba(0,0,0,0.4)',
              '&:hover': {
                backgroundColor: 'rgba(0,0,0,0.7)',
              },
              zIndex: 10,
            }}
            size="large"
          >
            {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
        )}

        {/* Etiquetas bodyPart y target */}
        <Stack
          direction="row"
          spacing={1}
          sx={{
            position: 'absolute',
            bottom: 12,
            left: 12,
            background: 'rgba(0, 0, 0, 0.6)',
            borderRadius: '12px',
            px: 1.5,
            py: 0.5,
          }}
        >
          <Typography
            variant="caption"
            sx={{ color: '#fff', textTransform: 'capitalize', fontSize: '12px' }}
          >
            {exercise.bodyPart}
          </Typography>
          <Typography
            variant="caption"
            sx={{ color: '#ff0040', textTransform: 'capitalize', fontSize: '12px' }}
          >
            {exercise.target}
          </Typography>
        </Stack>
      </Box>
    </Link>
  );
};

export default ExerciseCard;
