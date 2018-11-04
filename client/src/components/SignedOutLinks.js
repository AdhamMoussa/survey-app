import React, { Fragment } from "react";

const SignedOutLinks = () => {
  return (
    <Fragment>
      <li>
        <a href="/auth/google" className="waves-effect waves-light btn blue">Login with Google</a>
      </li>
    </Fragment>
  );
};

export default SignedOutLinks;
