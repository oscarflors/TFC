import React, { useEffect, useRef, useState } from 'react';
import { Typography, Stack, Button, Fade } from '@mui/material';

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    { icon: BodyPartImage, name: bodyPart },
    { icon: TargetImage, name: target },
    { icon: EquipmentImage, name: equipment },
  ];

  const [visible, setVisible] = useState(false);
  const sectionRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Fade in={visible} timeout={1000}>
      <Stack
        ref={sectionRef}
        direction={{ xs: 'column', lg: 'row' }}
        alignItems="center"
        justifyContent="center"
        gap={{ xs: '40px', lg: '80px' }}
        p={{ xs: '20px', md: '40px' }}
        sx={{
          backgroundColor: '#121212',
          borderRadius: '16px',
        }}
      >
        {/* Imagen del ejercicio */}
        <img
          src={gifUrl}
          alt={name}
          loading="lazy"
          style={{
            width: '100%',
            maxWidth: '480px',
            borderRadius: '16px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
            objectFit: 'cover',
            transition: 'all 0.8s ease-out',
          }}
        />

        {/* Detalles */}
        <Stack
          gap={{ xs: '24px', md: '28px' }}
          maxWidth="600px"
          alignItems="flex-start"
        >
          {/* TÍTULO PRINCIPAL */}
          <Typography
            fontSize={{ xs: '32px', sm: '40px', lg: '48px' }}
            fontWeight={800}
            lineHeight={1.3}
            textTransform="capitalize"
            color="#fff"
            sx={{
              textShadow: '2px 2px 6px rgba(0,0,0,0.6)',
              transition: 'transform 0.4s ease',
              '&:hover': {
                transform: 'scale(1.015)',
                color: '#ff0040',
              },
            }}
          >
            {name}
          </Typography>

          {/* DESCRIPCIÓN */}
          <Typography
            fontSize={{ xs: '16px', md: '18px' }}
            color="#ccc"
            lineHeight={1.7}
            sx={{ maxWidth: '100%' }}
          >
            Este ejercicio mejora tu fuerza y rendimiento.{' '}
            <strong style={{ color: '#ff0040', textTransform: 'capitalize' }}>{name}</strong> se enfoca en
            <strong> "{target}"</strong>, ayudando a mejorar tu condición física y mental.
          </Typography>

          {/* DETALLE CON ICONOS */}
          <Stack gap="20px">
            {extraDetail.map((item) => (
              <Stack
                key={item.name}
                direction="row"
                alignItems="center"
                gap="16px"
              >
                <Button
                  sx={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    backgroundColor: '#1a1a1a',
                    border: '2px solid #ff0040',
                    boxShadow: '0 4px 14px rgba(255, 0, 64, 0.3)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: '#ff0040',
                      transform: 'scale(1.05)',
                    },
                  }}
                >
                  <img
                    src={item.icon}
                    alt={item.name}
                    style={{ width: '36px', height: '36px' }}
                  />
                </Button>
                <Typography
                  fontSize="20px"
                  fontWeight={600}
                  color="#fff"
                  textTransform="capitalize"
                  sx={{
                    transition: 'color 0.3s ease',
                    '&:hover': {
                      color: '#ff0040',
                    },
                  }}
                >
                  {item.name}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Fade>
  );
};

export default Detail;
