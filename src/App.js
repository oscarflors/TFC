// src/App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login';       
import Profile from './pages/Profile';   
import ScrollToTop from './components/ScrollToTop';

const App = () => (
  <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
    <Navbar />
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exercise/:id" element={<ExerciseDetail />} />
      <Route path="/login" element={<Login />} />        
      <Route path="/profile" element={<Profile />} />    
    </Routes>
    <Footer />
  </Box>
);

export default App;
