// src/components/Filter.js
import React, { useState } from "react";

const Filter = ({ onFilter }) => {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(0);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    onFilter(e.target.value, rating);
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
    onFilter(title, e.target.value);
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Search by title"
        value={title}
        onChange={handleTitleChange}
      />
      <input
        type="number"
        placeholder="Search by rating"
        min="0"
        max="5"
        value={rating}
        onChange={handleRatingChange}
        style={{ marginLeft: "10px" }}
      />
    </div>
  );
};

export default Filter;