import React, { Component, Fragment } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";

import "./App.css";
import Nav from "./Nav";
import Dashboard from "./Dashboard";
import AddQuestion from "./AddQuestion";
import Leaderboard from "./Leaderboard";
import QuestionDetails from "./QuestionDetails";
import Login from "./Login";
import LoadingBar from "react-redux-loading-bar";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <div>
        {this.props.authedUser === null ? (
          <Login />
        ) : (
          <Fragment>
            <LoadingBar />
            <Router basename="/">
              <Nav authedUser={this.props.authedUser} />
              {this.props.loading === true ? null : (
                <div>
                  <Route path="/" exact component={Dashboard} />
                  <Route path="/add" component={AddQuestion} />
                  <Route path="/leaderboard" component={Leaderboard} />
                  <Route
                    path="/questions/:questionId"
                    render={props => (
                      <QuestionDetails
                        questionId={props.match.params.questionId}
                      />
                    )}
                  />
                </div>
              )}
            </Router>
          </Fragment>
        )}
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
    loading: authedUser === null
  };
}

export default connect(mapStateToProps)(App);
