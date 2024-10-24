/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieList from "../components/movielist";
import SearchBar from "../components/searchbar";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const searchMovies = async (query) => {
    setIsLoading(true);
    const results = await axios.get(`https://api.example.com/search?query=${query}`);
    setMovies(results.data.results);
    setIsLoading(false);
  };

  useEffect(() => {
    if (query) {
      searchMovies(query);
    }
  }, [query]);

  return (
    <div>
      <SearchBar searchMovies={setQuery} />
      {isLoading ? <p>Loading...</p> : <MovieList movies={movies} />}
    </div>
  );
};

export default Home;
