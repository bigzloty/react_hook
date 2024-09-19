// src/App.js
import React, { useState } from "react";
import MovieList from "./MovieList";
import Filter from "./Filter";

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A mind-bending thriller",
      posterURL: "https://via.placeholder.com/200",
      rating: 5,
    },
    {
      title: "Interstellar",
      description: "Exploration of space and time",
      posterURL: "https://via.placeholder.com/200",
      rating: 4,
    },

  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleFilter = (title, rating) => {
    const filtered = movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(title.toLowerCase()) &&
        movie.rating >= rating
    );
    setFilteredMovies(filtered);
  };

  const addMovie = () => {
    const newMovie = {
      title: prompt("Enter movie title:"),
      description: prompt("Enter movie description:"),
      posterURL: prompt("Enter movie poster URL:"),
      rating: Number(prompt("Enter movie rating (0-5):")),
    };
    setMovies([...movies, newMovie]);
    setFilteredMovies([...movies, newMovie]);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>My Movie App</h1>
      <button onClick={addMovie}>Add New Movie</button>
      <Filter onFilter={handleFilter} />
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;