import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import LandingPage from "../components/LandingPage";
import Dashboard from "../components/Dashboard";
import NewSurvey from "../components/NewSurvey";
import Checkout from "../components/Checkout";

const AppRouter = () => (
  <Router>
    <Fragment>
      <Header />
      <Switch>
        <Route path="/" component={LandingPage} exact />
        <Route path="/surveys" component={Dashboard} exact />
        <Route path="/surveys/new" component={NewSurvey} />
        <Route path="/add-credits" component={Checkout} />
      </Switch>
    </Fragment>
  </Router>
);

export default AppRouter;
