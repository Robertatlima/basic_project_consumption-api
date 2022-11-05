import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import "./favorites.css";

function Favorites() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const myMoviesList = localStorage.getItem("@megaflix");
    setMovies(JSON.parse(myMoviesList) || []);
  }, []);

  function removeMovie(id) {
    let filterMovies = movies.filter((movie) => {
      return movie.id !== id;
    });
    setMovies(filterMovies);
    localStorage.setItem("@megaflix", JSON.stringify(filterMovies));
    toast.success(`Filme removido com sucesso`);
  }

  return (
    <div className="my-movies">
      <h1>Meus filmes</h1>
      {movies.length === 0 && (
        <div className="my-movies-empty">
          <span>Sua lista está vazia! :(</span>
          <Link to="/">+ filmes</Link>
        </div>
      )}
      <ul>
        {movies.map((movie, key) => {
          return (
            <li key={key}>
              <span>{movie.title}</span>
              <div>
                <Link to={`/movie/${movie.id}`}>Ver detalhes</Link>
                <button onClick={() => removeMovie(movie.id)}>Remover</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Favorites;
