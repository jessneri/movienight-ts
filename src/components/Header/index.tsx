import { InputBase, Paper } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import * as React from "react";
import { Link } from "react-router-dom";
import { useStores } from "../../stores";
import "./style.scss";

export function Header() {
  const {
    apiStore: { handleSearch, query },
  } = useStores();

  return (
    <header className="header">
      <div className="container">
        <div className="container-title">
            <Link to="/" className="title">
            <span>movie night</span>
            </Link>
            <span className="subtitle">Informações dos melhores filmes e séries</span>
        </div>
        <Paper className="paper" id="outlined-basic" variant="outlined">
          <InputBase
            className="input"
            value={query}
            placeholder="Pesquise por filmes ou séries"
            onChange={handleSearch}
          />
          <IconButton type="submit" aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </div>
    </header>
  );
}
