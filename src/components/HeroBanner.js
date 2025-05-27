import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography } from '@mui/material';
import HeroBannerImage from '../assets/images/muscle-man.jpg';

const HeroBanner = () => {
  const imageRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Para que la animación se active al entrar en viewport
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (imageRef.current) observer.observe(imageRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      className="hero-banner"
      id="hero"
      sx={{
        pt: '140px',
        pl: { xs: '20px', sm: '40px' },
        pr: { xs: '20px', sm: '40px' },
        pb: '60px',
        position: 'relative',
        backgroundColor: '#0d0d0d',
        color: '#fff',
        minHeight: '90vh',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: { md: 'space-between' },
        alignItems: { md: 'center' },
      }}
    >
      <Box sx={{ maxWidth: { xs: '100%', md: '55%' } }}>
        <Typography color="#ff0040" fontWeight="600" fontSize={{ xs: 20, sm: 26 }}>
          Fitness Society
        </Typography>

        <Typography
          variant="h1"
          sx={{ fontSize: { lg: '48px', xs: '36px' }, fontWeight: 700, mt: 2 }}
        >
          TU CAMINO <br />
          HACIA TU MEJOR VERSIÓN
        </Typography>

        <Typography
          variant="h2"
          sx={{
            fontSize: { lg: '22px', xs: '18px' },
            mt: 2,
            color: '#ddd',
            maxWidth: { xs: '100%', sm: '480px' },
          }}
        >
          Aquí encontrarás los ejercicios más efectivos para ti
        </Typography>

        <a href="#exercises" className="cta-button" style={{ marginTop: '40px' }}>
          Explora más ejercicios
        </a>
      </Box>

      <Box
        ref={imageRef}
        className={`hero-image-container ${visible ? 'visible' : ''}`}
        sx={{
          mt: { xs: 6, md: 0 },
          width: { xs: '100%', md: '40%' },
          maxWidth: '600px',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateX(0)' : 'translateX(100px)',
          transition: 'opacity 1s ease-out, transform 1s ease-out',
          mx: { xs: 'auto', md: 0 },
        }}
      >
        <img
          src={HeroBannerImage}
          alt="hero-banner"
          style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 12 }}
        />
      </Box>

      <Typography
        className="floating-text"
        sx={{
          position: 'absolute',
          bottom: 20,
          left: 40,
          fontSize: { xs: '80px', sm: '160px' },
          fontWeight: 900,
          color: '#ff0040',
          opacity: 0.08,
          userSelect: 'none',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        STAY STRONG
      </Typography>
    </Box>
  );
};

export default HeroBanner;
