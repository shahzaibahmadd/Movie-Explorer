/* eslint-disable no-unused-vars */
import React from "react";
import MovieItem from "./movieitem";

const MovieList = ({ movies }) => (
  <div className="movie-list">
    {movies.map(movie => (
      <MovieItem key={movie.id} movie={movie} />
    ))}
  </div>
);

export default MovieList;
