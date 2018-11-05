import React from "react";
import { connect } from "react-redux";

import AppRouter from "./routes/AppRouter";
import { startFetchAuth } from "./actions/authActions";

class App extends React.Component {
  componentDidMount() {
    this.props.startFetchAuth();
  }
  render() {
    return (
      <div className="container">
        <AppRouter />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    startFetchAuth: () => dispatch(startFetchAuth())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(App);
