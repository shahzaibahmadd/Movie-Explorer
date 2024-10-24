/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { FavoritesContext } from "../context/favoritescontext";
import MovieList from "../components/movielist";

const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div>
      <h2>Favorites</h2>
      <MovieList movies={favorites} />
    </div>
  );
};

export default Favorites;
