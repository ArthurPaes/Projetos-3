import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Lesson from "../pages/Lesson";
import Login from "../pages/Login";

const Routes: React.FunctionComponent = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/Dashboard" exact component={Dashboard} />
    <Route path="/lesson" component={Lesson} />
  </Switch>
);

export default Routes;
