import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="active">
              <b>Home</b>
            </NavLink>
          </li>
          <li>
            <NavLink to="/add" activeClassName="active">
              <b>Add Question</b>
            </NavLink>
          </li>
          <li>
            <NavLink to="/leaderboard" activeClassName="active">
              <b>Leaderboard</b>
            </NavLink>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li class="nav-item">
            <b>Welcome {this.props.authedUser}</b>
          </li>
          <li class="nav-item">
            <butto className='btn btn-primary btn-logout'>Logout</butto>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav
