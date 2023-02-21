import React, { useState, createContext } from "react";

import MovieCard from "../components/MovieCard";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  const getMovies = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();

      setMovies(data.results);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const getMovieDetails = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();

      setMovieDetails(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const cards = movies.map((movie) => (
    <MovieCard key={movie.id} movie={movie} />
  ));

  return (
    <GlobalContext.Provider
      value={{
        getMovies,
        movieDetails,
        getMovieDetails,
        loading,
        cards
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
