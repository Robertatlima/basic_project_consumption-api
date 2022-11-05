import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import api from "../../services/api";
import "./movie.css";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadMovieInfo() {
      await api
        .get(`/movie/${id}`, {
          params: {
            api_key: "a2f1f532bea0e86dac96f874f1fa6033",
            language: "pt-BR",
          },
        })
        .then((response) => {
          setMovie(response.data);
          setLoading(false);
        })
        .catch(() => {
          navigate("/", { replace: true });
          return;
        });
    }
    loadMovieInfo();
  }, [navigate, id]);

  function saveMovie() {
    const myList = localStorage.getItem("@megaflix");

    let moviesSave = JSON.parse(myList) || [];

    const hasMovie = moviesSave.some((movieSave) => movieSave.id === movie.id);

    if (hasMovie) {
      toast.warn("Sua lista já possui esse filme");
      return;
    }

    moviesSave.push(movie);
    localStorage.setItem("@megaflix", JSON.stringify(moviesSave));
    toast.success("Filme adicionado a sua lista");
  }

  if (loading) {
    return (
      <div className="loading-details">
        <h2>loading movie details... </h2>
      </div>
    );
  }

  return (
    <div className="container-details">
      <h1>{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt={movie.title}
      />
      <Link to="/">+ Mais filmes</Link>
      <h3>Sinopse</h3>
      <span>{movie.overview}</span>

      <strong>Avaliação: {movie.vote_average} / 10</strong>

      <div className="field-buttons">
        <button onClick={saveMovie}>Salvar</button>
        <button>
          <a
            href={`https://youtube.com/results?search_query=${movie.title} trailer`}
            target="blank"
            rel="external"
          >
            Trailer
          </a>
        </button>
      </div>
    </div>
  );
}

export default Movie;
