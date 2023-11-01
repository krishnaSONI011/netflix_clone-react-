import React, { useState, useContext, createContext,useEffect } from 'react';
import axios from 'axios'
const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {children}
    </MovieContext.Provider>
  );
}

const useMovie = () => useContext(MovieContext);

export { useMovie, MovieProvider };
