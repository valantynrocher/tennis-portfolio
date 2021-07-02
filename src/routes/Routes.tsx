import { Switch, Route, Redirect } from "react-router-dom";
import React from "react";
import Home from "../views/pages/Home";
import Works from "../views/pages/Works";
import About from "../views/pages/About";
import NotFound from "../views/pages/NotFound";

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
