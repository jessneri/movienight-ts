import { Box, CircularProgress } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useStores } from "../../stores";
import "./style.scss";

interface Movie {
  movie: Props;
}

interface Props {
  id: number;
  first_air_date: string;
  release_date: string;
  name: string;
  title: string;
  poster_path: string;
  backdrop_path: string;
  media_type: string;
  vote_average: number;
  genre_ids?: number[];
}

interface ProductGenre {
  id: number;
  name: string;
}

function PopularMovies({ movie }: Movie) {
  const {
    apiStore: { genreTv, genreMovie },
  } = useStores();

  const urlImage = `https://image.tmdb.org/t/p/w500${
    movie.poster_path || movie.backdrop_path
  }`;

  const date = movie.release_date || movie.first_air_date;

  function formatyear(newDate: string) {
    return newDate.slice(0, 4);
  }

  function getGenreTv(idTv: number, tv: ProductGenre) {
    return (
      idTv === tv.id && (
        <span className="genre" key={tv.id}>
          {tv.name}
        </span>
      )
    );
  }

  function getGenreMovie(idMovie: number, mv: ProductGenre) {
    return (
      idMovie === mv.id && (
        <span className="genre" key={mv.id}>
          {mv.name}
        </span>
      )
    );
  }

  function handleFormat(format: string) {
    return format === "tv" ? "Série" : "Filme";
  }

  return (
    <Link
      to={`/${movie.media_type}/${movie.id}`}
      className="container-movie"
      style={{
        backgroundImage: `url(${
          movie.poster_path
            ? urlImage
            : "https://www.brdtex.com/wp-content/uploads/2019/09/no-image-480x480.png"
        })`,
      }}
    >
      <div className="info">
        {movie.vote_average > 0 && (
          <div className="box">
            {
              <Box position="relative" display="inline-flex">
                <CircularProgress
                  className="progress"
                  variant="determinate"
                  value={100}
                />
                <CircularProgress
                  className="progressBg"
                  variant="determinate"
                  value={movie.vote_average * 10}
                />
                <Box className="boxWrapper">
                  <span>{movie.vote_average}</span>
                </Box>
              </Box>
            }
          </div>
        )}
        <div className="mainInfo">
          <span className="title">{movie.name || movie.title}</span>
          <div className="genres">
            {movie.media_type === "tv"
              ? movie.genre_ids
                  ?.map((idTv) => genreTv.map((tv) => getGenreTv(idTv, tv)))
                  .slice(0, 2)
              : movie.genre_ids
                  ?.map((idMovie) =>
                    genreMovie.map((mv) => getGenreMovie(idMovie, mv))
                  )
                  .slice(0, 2)}
          </div>
        </div>
        <div className="infoHoverWrapper">
          <div className="infoHover">
            {<span>{date && formatyear(date)}</span>}
          </div>
          <div className="infoHover">
            {<span>{handleFormat(movie.media_type)}</span>}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PopularMovies;
