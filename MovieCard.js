// src/components/MovieCard.js
import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div style={cardStyle}>
      <img src={movie.posterURL} alt={movie.title} style={{ width: "200px" }} />
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <p><strong>Rating:</strong> {movie.rating}</p>
    </div>
  );
};

const cardStyle = {
  border: "1px solid #ccc",
  padding: "10px",
  margin: "10px",
  textAlign: "center",
  width: "220px",
};

export default MovieCard;