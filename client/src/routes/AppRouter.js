import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import LandingPage from "../components/LandingPage";
import Dashboard from "../components/Dashboard";
import NewSurvey from "../components/NewSurvey";

const AppRouter = () => (
  <Router>
    <Fragment>
      <Header />
      <Switch>
        <Route path="/" component={LandingPage} exact />
        <Route path="/surveys" component={Dashboard} exact />
        <Route path="/surveys/new" component={NewSurvey} />
      </Switch>
    </Fragment>
  </Router>
);

export default AppRouter;
