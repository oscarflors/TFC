import React from 'react';
import { Typography, Box, Stack } from '@mui/material';
import Loader from './Loader';

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return <Loader />;

  return (
    <Box
      sx={{
        backgroundColor: '#121212',
        borderRadius: '16px',
        padding: { xs: '24px', md: '40px' },
        marginTop: { lg: '120px', xs: '40px' },
        boxShadow: '0 6px 30px rgba(0,0,0,0.4)',
      }}
    >
      <Typography
        sx={{
          fontSize: { lg: '38px', xs: '26px' },
          fontWeight: 800,
          marginBottom: '30px',
          color: '#fff',
          textAlign: 'center',
        }}
      >
        Mira en acción <span style={{ color: '#ff0040', textTransform: 'capitalize' }}>{name}</span> en video
      </Typography>

      <Stack
        direction={{ xs: 'column', lg: 'row' }}
        justifyContent="center"
        alignItems="center"
        spacing={{ xs: 4, lg: 6 }}
        flexWrap="wrap"
      >
        {exerciseVideos.slice(0, 3).map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
            style={{
              width: '100%',
              maxWidth: '340px',
              backgroundColor: '#1e1e1e',
              borderRadius: '16px',
              overflow: 'hidden',
              textDecoration: 'none',
              color: 'inherit',
              boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.03)';
              e.currentTarget.style.boxShadow = '0 6px 30px rgba(255, 0, 64, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
            }}
          >
            <img
              src={item.video.thumbnails[0].url}
              alt={item.video.title}
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover',
                borderTopLeftRadius: '16px',
                borderTopRightRadius: '16px',
              }}
            />
            <Box p="16px">
              <Typography
                variant="h6"
                fontSize="18px"
                fontWeight={600}
                color="#fff"
                mb="6px"
                sx={{
                  textOverflow: 'ellipsis',
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                }}
              >
                {item.video.title}
              </Typography>
              <Typography fontSize="14px" color="#ccc">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;

