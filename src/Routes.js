import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Inventory from "./pages/Inventory";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./pages/About";
import Alliance from "./pages/Alliance";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" exact component={About} />
        <Route path="/inventory" exact component={Inventory} />
        <Route path="/alliance" exact component={Alliance} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
