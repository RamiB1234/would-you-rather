import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { logoutUser } from "../actions/authedUser";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/add" activeClassName="active">
              Add Question
            </NavLink>
          </li>
          <li>
            <NavLink to="/leaderboard" activeClassName="active">
              Leaderboard
            </NavLink>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <b>Welcome {this.props.authedUser}</b>
          </li>
          <li className="nav-item">
            <Route
              render={({ history }) => (
                <button
                  type="button"
                  onClick={() => {
                    history.push("/");
                    this.props.dispatch(logoutUser());
                  }}
                  className="btn btn-primary btn-logout">
                  Logout
                </button>
              )}
            />
          </li>
        </ul>
      </nav>
    );
  }
}

export default connect()(Nav);
