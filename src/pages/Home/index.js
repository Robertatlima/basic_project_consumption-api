import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";

import "./home.css";

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMovies() {
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: "a2f1f532bea0e86dac96f874f1fa6033",
          language: "pt-BR",
          page: 1,
        },
      });
      setMovies(response.data.results.slice(0, 10));
    }

    loadMovies();
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <h2>loading movie list... </h2>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="list-movies">
        {movies.map((movie, key) => {
          return (
            <article className="movie" key={key}>
              <strong>{movie.title}</strong>
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={movie.title}
              />
              <Link to={`/movie/${movie.id}`}>Acessar</Link>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
