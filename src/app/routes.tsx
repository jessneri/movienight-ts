import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

const Home = React.lazy(async () => import("../containers/Home").then(m => ({ default: m.Home })));
const MovieDetails = React.lazy(async () =>
  import("../containers/MovieDetails").then(m => ({ default: m.MovieDetails })),
);

export function Routes() {
  return (
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/home" />} />
      <Route path="/home" component={Home} />
      <Route exact path="/:media/:id" component={MovieDetails} />
    </Switch>
  );
}
