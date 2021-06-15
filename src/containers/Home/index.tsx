/* eslint-disable import/order */
import { Pagination } from "@material-ui/lab";
import React from "react";
import PopularMovies from "../../components/PopularMovies";
import { useStores } from "../../stores";
import "./style.scss";

export function Home() {
  const {
    apiStore: { movies, currentPage, totalPages, handleChange },
  } = useStores();

  return (
    <div className="container">
      <div className="home">
        <div className="movies">
          {movies.map(movie => (
            <PopularMovies key={movie.id} movie={movie} />
          ))}
        </div>
        <Pagination
          className="pagination"
          count={totalPages}
          page={currentPage}
          onChange={handleChange}
          variant="outlined"
          shape="rounded"
        />
      </div>
    </div>
  );
}
