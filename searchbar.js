/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const SearchBar = ({ searchMovies }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    searchMovies(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Search for movies..." 
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
