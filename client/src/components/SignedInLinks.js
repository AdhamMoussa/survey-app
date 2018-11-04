import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const SignedInLinks = () => {
  return (
    <Fragment>
      <li>
        <Link to="/surveys" className="waves-effect waves-light btn-large blue">
          Surveys
        </Link>
      </li>
      <li>
        <Link
          to="/surveys/new"
          className="waves-effect waves-light btn-large blue"
        >
          New Survey
        </Link>
      </li>
      <li>
        <a href="/api/logout" className="waves-effect waves-light btn blue">Logout</a>
      </li>
    </Fragment>
  );
};

export default SignedInLinks;
