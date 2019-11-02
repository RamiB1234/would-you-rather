import React, { Component } from "react";
import { connect } from "react-redux";
import LeaderboardItem from "./LeaderboardItem";

class Leaderboard extends Component {
  render() {
    const { userIds } = this.props;
    let rankCounter = 0;
    return (
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6 text-center">
          <div>
            <h3>Leaderboard</h3>
            <ul>
              {userIds.map(id => {
                rankCounter++;
                return (
                  <li key={id}>
                    <LeaderboardItem id={id} rank={rankCounter} />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    // Return user IDs from the store and sort them by score: user.question.length + user.answers.length:
    userIds: Object.keys(users).sort(
      (a, b) =>
        (Object.keys(users[b].answers).length + users[b].questions.length) -
        (Object.keys(users[a].answers).length + users[a].questions.length)
    )
  };
}

export default connect(mapStateToProps)(Leaderboard);
