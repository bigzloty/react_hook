// src/components/MovieList.js
import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  return (
    <div style={listStyle}>
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </div>
  );
};

const listStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",
};

export default MovieList;