import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddQuestion } from "../actions/shared";
import { Redirect } from "react-router-dom";

class AddQuestion extends Component {
  state = {
    optionA: "",
    optionB: "",
    redirectToHome: false
  };

  handleChangeOptionA = e => {
    const text = e.target.value;

    this.setState(() => ({
      optionA: text
    }));
  };

  handleChangeOptionB = e => {
    const text = e.target.value;

    this.setState(() => ({
      optionB: text
    }));
  };

  handleSubmit = e => {
    e.preventDefault();

    const { dispatch } = this.props;

    const { optionA } = this.state;
    const { optionB } = this.state;

    dispatch(handleAddQuestion(optionA, optionB));

    this.setState({
      optionA: "",
      optionB: "",
      redirectToHome: true
    });
  };

  render() {
    const { optionA, optionB, redirectToHome } = this.state;

    if (redirectToHome === true) {
      // Redirect to dashboard:
      return <Redirect to="/" />;
    }
    return (
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className="card text-center">
            <div className="card-header">
              <h3>Would You Rather .. </h3>
            </div>
            <div className="card-body">
              <form onSubmit={this.handleSubmit}>
                <label>1. </label>
                <input
                  type="text"
                  placeholder="Your first option"
                  value={optionA}
                  onChange={this.handleChangeOptionA}
                />
                <br />
                <br />
                <b>OR</b>
                <br />
                <br />
                <label>2. </label>
                <input
                  type="text"
                  placeholder="Your second option"
                  value={optionB}
                  onChange={this.handleChangeOptionB}
                />
                <br />
                <br />
                <button
                  className="btn btn-success"
                  type="submit"
                  disabled={optionA === "" || optionB === ""}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    );
  }
}

export default connect()(AddQuestion);
