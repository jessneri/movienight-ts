/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/order */
import Button from "@material-ui/core/Button";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useStores } from "../../stores";
import "./style.scss";

interface Params {
  id: string;
  media: string;
}

interface Details {
  poster_path: string;
  backdrop_path: string;
  title: string;
  name: string;
  original_name: string;
  original_title: string;
  first_air_date: string;
  release_date: string;
  runtime: number;
  seasons: [
    {
      episode_count: number;
    },
  ];
  genres: [
    {
      name: string;
    },
  ];
  budget: number;
  production_companies: [
    {
      name: string;
    },
  ];
  overview: string;
  vote_average: number;
}

export function MovieDetails() {
  const [details, setDetails] = useState<Details>();

  const { id, media } = useParams<Params>();

  const {
    apiStore: { api, apiKey },
  } = useStores();

  async function getDetails() {
    try {
      await api
        .get(`/${media}/${id}`, {
          params: {
            api_key: apiKey,
            language: "pt-BR",
          },
        })
        .then(res => {
          setDetails(res.data);
        });
    } catch (err) {
      console.log(err);
    }
  }

  console.log(details)

  useEffect(() => {
    getDetails().catch(err => console.log(err));
    window.scrollTo(0, 0);
  }, [id]);

  const urlImage = `https://image.tmdb.org/t/p/w500${details?.poster_path ?? details?.backdrop_path}`;

  const date = details?.release_date ?? details?.first_air_date;

  function formatRuntime(total: number) {
    const hours = Math.floor(total / 60);
    const minutes = total % 60;

    const runtime = `${hours}h ${minutes}min`;

    return runtime;
  }

  function formatBudget(total: number) {
    return new Intl.NumberFormat("en-US").format(total);
  }

  const history = useHistory();

  function handleClick() {
    history.push("movienight-ts/home");
  }

  return (
    <div className="container-details">
      <div
        className="backgroundImage"
        style={{
          backgroundImage: `url(${
            details?.poster_path ? urlImage : "https://www.brdtex.com/wp-content/uploads/2019/09/no-image-480x480.png"
          })`,
        }}
      >
        <div className="backgroundOverlay">
          <main className="movie">
            <Button className="button" onClick={handleClick} startIcon={<ChevronLeftIcon />}>
              voltar
            </Button>
            <div className="info">
              <section className="poster">
                <img src={urlImage} alt="poster" />
              </section>
              <section className="column">
                <div className="column_title">
                  <div>
                    <h1>{details?.name ?? details?.title}</h1>
                    <span>TÍTULO ORIGINAL: {details?.original_name ?? details?.original_title}</span>
                  </div>
                  <div className="span_vote">
                    <span className="vote">{details?.vote_average}</span>
                    <span>/ 10</span>
                  </div>
                </div>
                <div className="sideInfo">
                  <div className="span_sideInfo">
                    <span>{date?.slice(0, 4)}</span>
                    <span>Ano</span>
                  </div>
                  <div className="span_sideInfo">
                    <span>{details?.runtime ? formatRuntime(details.runtime) : details?.seasons[0].episode_count}</span>
                    <span>{details?.runtime ? "Duração" : "Episódios"}</span>
                  </div>
                </div>
                <div className="span_genres">
                  {details?.genres.map(genre => (
                    <span key={genre.name}>{genre.name}</span>
                  ))}
                </div>
                <div className="span_description">
                  <p>Descrição</p>
                  <span>{details?.overview}</span>
                </div>
              </section>
              <section className="columnLeft">
                <div>
                  <div className="budget">
                    {details?.budget ? (
                      <p>Orçamento: $ {details.budget === 0 ? "" : formatBudget(details.budget)}</p>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="production">
                    <p>Produtoras:</p>
                    {details?.production_companies.map(production => (
                      <span key={production.name}>{production.name}</span>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
