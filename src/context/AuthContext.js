// src/context/AuthContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem('user');
    return stored ? JSON.parse(stored) : null;
  });

  const [favorites, setFavorites] = useState([]);

  // Cargar favoritos cuando cambia el usuario
  useEffect(() => {
    if (user) {
      const favs = localStorage.getItem(`favorites_${user.email}`);
      setFavorites(favs ? JSON.parse(favs) : []);
    } else {
      setFavorites([]);
    }
  }, [user]);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    setFavorites([]);
    localStorage.removeItem('user');
  };

  const addFavorite = (exercise) => {
    if (!favorites.find(fav => fav.id === exercise.id)) {
      const newFavs = [...favorites, exercise];
      setFavorites(newFavs);
      localStorage.setItem(`favorites_${user.email}`, JSON.stringify(newFavs));
    }
  };

  const removeFavorite = (exerciseId) => {
    const newFavs = favorites.filter(fav => fav.id !== exerciseId);
    setFavorites(newFavs);
    localStorage.setItem(`favorites_${user.email}`, JSON.stringify(newFavs));
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        favorites,
        addFavorite,
        removeFavorite,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

// Hook personalizado para consumir AuthContext fácilmente
export const useAuth = () => useContext(AuthContext);
