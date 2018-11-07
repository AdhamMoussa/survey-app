import React from "react";
import { connect } from "react-redux";

import loadingImg from "../loading.gif";

const Credits = props => {
  const creditColor = props.creditsCount > 0 ? "black" : "red";
  return (
    <li style={{ display: "flex", alignItems: "center" }}>
      <span style={{ display: "flex", alignItems: "center" }}>
        {props.credits.loading && (
          <img
            src={loadingImg}
            alt="loading..."
            style={{ width: "30px", height: "30px" }}
          />
        )}
      </span>
      <span>
        Credits:{" "}
        <span style={{ color: creditColor, fontWeight: "bold" }}>
          {props.creditsCount}
        </span>
      </span>
    </li>
  );
};

const mapStateToProps = ({ credits }) => ({ credits });

export default connect(mapStateToProps)(Credits);
