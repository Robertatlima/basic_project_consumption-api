import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Movie from "../pages/movie";
import Favorites from "../pages/favorites";
import Error from "../pages/Error";

import Header from "../components/Header";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/favorites" element={<Favorites />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
