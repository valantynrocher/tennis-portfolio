import { Switch, Route, Redirect } from "react-router-dom";
import React from "react";
import Home from "../views/Home";
import Works from "../views/Works";
import About from "../views/About";
import NotFound from "../views/NotFound";

const Routes = () => (
  <Switch>
    <Redirect exact path="/" to="/accueil" />
    <Route path="/accueil" component={Home} />
    <Route path="/a-propos" component={About} />
    <Route path="/realisations" component={Works} />
    <Route path="/notfound" component={NotFound} />
    <Redirect to="/notfound" />
  </Switch>
);

export default Routes;
