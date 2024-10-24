// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
// eslint-disable-next-line no-unused-vars
import MovieDetails from "./pages/moviedetail";
import Favorites from "./pages/favorites";
import { FavoritesProvider } from "./context/favoritescontext";
import './app.css';

const App = () => (
  <FavoritesProvider>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<movieDetails />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </FavoritesProvider>
);

export default App;
