import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper grey">
          <Link to={this.props.auth ? "/surveys" : "/"} className="brand-logo">
            Logo
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {this.props.auth === null ? null : this.props.auth === false ? (
              <SignedOutLinks />
            ) : (
              <SignedInLinks />
            )}
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(Header);
