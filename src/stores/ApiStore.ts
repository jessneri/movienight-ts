/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import dotenv from "dotenv";
import { useCallback, useEffect, useState } from "react";

dotenv.config();

interface Movie {
  results: Product[];
  page: number;
  total_pages: number;
}

interface Genre {
  genres: ProductGenre[];
}

interface Product {
  id: number;
  name: string;
  title: string;
  release_date: string;
  first_air_date: string;
  poster_path: string;
  backdrop_path: string;
  media_type: string;
  vote_average: number;
  genre_ids: number[];
}

interface ProductGenre {
  id: number;
  name: string;
}

export function useApi() {
  const [movies, setMovies] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [query, setQuery] = useState("");
  const [genreTv, setGenreTv] = useState<ProductGenre[]>([]);
  const [genreMovie, setGenreMovie] = useState<ProductGenre[]>([]);

  const apiKey = process.env.REACT_APP_API_KEY;

  const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
  });

  async function apiFetch() {
    await api
      .get<Movie>(`trending/all/week`, {
        params: {
          api_key: apiKey,
          language: "pt-BR",
          page: currentPage,
        },
      })
      .then((response) => {
        const res = response.data;

        setMovies(res.results);
        setTotalPages(res.total_pages);
      });
  }

  function handleChange(_event: unknown, newPage: number) {
    setCurrentPage(newPage);
    apiFetch().catch((err) => console.log(err));
    window.scrollTo(0, 0);
  }

  const apiSearch = useCallback(() => {
    if (!query) {
      return;
    }

    try {
      api
        .get<Movie>(`/search/multi`, {
          params: {
            api_key: apiKey,
            language: "pt-BR",
            query,
            page: currentPage,
          },
        })
        .then((response) => {
          const newSearch = response.data;

          setMovies(newSearch.results);
          setTotalPages(newSearch.total_pages);
        });
    } catch (err) {
      console.log(err);
    }
  }, [api, apiKey, currentPage, query]);

  function handleSearch(e: any) {
    setQuery(e.target.value);
  }

  async function apiGenre() {
    try {
      await axios
        .all([
          api.get<Genre>(`/genre/movie/list`, {
            params: {
              api_key: apiKey,
              language: "pt-BR",
            },
          }),
          api.get<Genre>(`/genre/tv/list`, {
            params: {
              api_key: apiKey,
              language: "pt-BR",
            },
          }),
        ])
        .then(
          axios.spread((movie, tv) => {
            const moviesGenre = movie.data;
            const tvGenre = tv.data;

            setGenreMovie(moviesGenre.genres);
            setGenreTv(tvGenre.genres);
          })
        );
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    apiFetch().catch((err) => console.log(err));
    apiGenre().catch((err) => console.log(err));
    window.scrollTo(0, 0);
  }, [currentPage, !query]);

  useEffect(() => {
    apiSearch();
  }, [apiSearch, query]);

  return {
    api,
    apiKey,
    movies,
    currentPage,
    totalPages,
    handleChange,
    handleSearch,
    query,
    genreTv,
    genreMovie,
  };
}
