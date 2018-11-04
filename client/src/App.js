import React from "react";
import AppRouter from "./routes/AppRouter";
import { connect } from "react-redux";
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

const mapDispatchToProps = (dispatch) => {
  return {
    startFetchAuth: () => dispatch(startFetchAuth())
  };
};

export default connect(null, mapDispatchToProps)(App);
