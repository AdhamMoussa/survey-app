import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const SignedInLinks = () => {
  return (
    <Fragment>
      <li>
        <Link to="/add-credits" className="waves-effect waves-light btn red">
          Add Credits
        </Link>
      </li>
      <li>
        <Link to="/surveys" className="waves-effect waves-light blue">
          Surveys
        </Link>
      </li>
      <li>
        <Link
          to="/surveys/new"
          className="waves-effect waves-light blue"
        >
          New Survey
        </Link>
      </li>
      <li>
        <a href="/api/logout" className="waves-effect waves-light blue">Logout</a>
      </li>
    </Fragment>
  );
};

export default SignedInLinks;
