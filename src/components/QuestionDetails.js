import React, { Component } from "react";
import { connect } from "react-redux";
import { isAnsweredQuestion, fetchUserAnswer } from "../utils/helpers";
import { handleAddQuestionAnswer } from "../actions/shared";
import { ProgressBar } from "react-bootstrap";
import NotFound from './NotFound'

class QuestionDetails extends Component {
  state = {
    selectedOption: "optionOne"
  };

  handleOptionChange = changeEvent =>
    this.setState({
      selectedOption: changeEvent.target.value
    });

  handleFormSubmit = e => {
    e.preventDefault();

    const { dispatch } = this.props;

    console.log("You have selected:", this.state.selectedOption);

    dispatch(
      handleAddQuestionAnswer(this.state.selectedOption, this.props.questionId)
    );
  };

  render() {

    let totalVotes,optionOnePercentage,
    optionTwoPercentage, answered, userAnswer

    const {questionFound} = this.props
    
    if(questionFound === true) {
      answered = isAnsweredQuestion(
        this.props.questionId,
        this.props.questions,
        this.props.authedUser
      );
      userAnswer = fetchUserAnswer(
        this.props.questionId,
        this.props.questions,
        this.props.authedUser
      );

      totalVotes = this.props.optionOneVotes + this.props.optionTwoVotes;
      optionOnePercentage = (this.props.optionOneVotes * 100) / totalVotes;
      optionTwoPercentage = (this.props.optionTwoVotes * 100) / totalVotes;
    }

    return (
      <div>
        {questionFound === true && (
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6 text-center">
              <br />
              <br />
              <br />
              <div className="card mb-3" style={{ maxWidth: "540px" }}>
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img
                      src={this.props.avatarURL}
                      width="90"
                      height="90"
                      alt="avatar"
                    />
                    <br />
                    <b>By : {this.props.authorName}</b>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Would you Rather..</h5>

                      {answered === false && (
                        <form onSubmit={this.handleFormSubmit}>
                          <div className="radio">
                            <label>
                              <input
                                type="radio"
                                value="optionOne"
                                checked={
                                  this.state.selectedOption === "optionOne"
                                }
                                onChange={this.handleOptionChange}
                              />
                              {this.props.optionOne}
                            </label>
                          </div>
                          <div className="radio">
                            <label>
                              <input
                                type="radio"
                                value="optionTwo"
                                checked={
                                  this.state.selectedOption === "optionTwo"
                                }
                                onChange={this.handleOptionChange}
                              />
                              {this.props.optionTwo}
                            </label>
                          </div>

                          <button className="btn btn-primary" type="submit">
                            Save
                          </button>
                        </form>
                      )}
                      {answered === true && (
                        <div>
                          <div className="radio">
                            <label>
                              <input
                                type="radio"
                                checked={userAnswer === "optionOne"}
                                readOnly
                              />
                              {this.props.optionOne}
                              <br />
                            </label>
                            <br />
                            <ProgressBar
                              now={optionOnePercentage}
                              label={`${optionOnePercentage.toFixed(2)}%`}
                              striped={true}
                            />
                            <small>
                              {this.props.optionOneVotes} out of {totalVotes}{" "}
                              votes
                            </small>
                          </div>
                          <div className="radio">
                            <label>
                              <input
                                type="radio"
                                checked={userAnswer === "optionTwo"}
                                readOnly
                              />
                              {this.props.optionTwo}
                              <br />
                            </label>
                            <br />
                            <ProgressBar
                              now={optionTwoPercentage}
                              label={`${optionTwoPercentage.toFixed(2)}%`}
                              striped={true}
                            />
                            <small>
                              {this.props.optionTwoVotes} out of {totalVotes}{" "}
                              votes
                            </small>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3"></div>
          </div>
        )}
        {questionFound === false && (
          <NotFound />
        )}
      </div>
    );
  }
}

function mapStateToProps({ questions, users, authedUser }, { questionId }) {
  const question = questions[questionId];
  const questionFound = (typeof question === 'undefined') ? false : true

  if (questionFound=== true) {
    const author = users[question.author];
    return {
      questionFound,
      questionId,
      authedUser,
      author: author,
      authorName: author.name,
      avatarURL: author.avatarURL,
      optionOne: question.optionOne.text,
      optionTwo: question.optionTwo.text,
      optionOneVotes: question.optionOne.votes.length,
      optionTwoVotes: question.optionTwo.votes.length,
      questions
    };
  } else {
    return {
      questionFound
    }
  }
}

export default connect(mapStateToProps)(QuestionDetails);
