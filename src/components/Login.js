import React, { Component } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";

class Login extends Component {
  state = {
    selectedUser: ""
  };
  handleSubmit = e => {
    e.preventDefault();

    alert(this.state.selectedUser)
    
    // dispatch
    this.props.dispatch(setAuthedUser(this.state.selectedUser));
  };
  static getDerivedStateFromProps(props, state) {
    if (props.userIds.length > 0 && state.selectedUser === '') {
        return{
            selectedUser : props.userIds[0]
        }
    }
    else{
        return null
    }
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <br />
          <br />
          <div className="card text-center">
            <div className="card-header">Login</div>
            <div className="card-body">
              <h5 className="card-title">Welcome to Would you Rather App</h5>
              <img
                src={process.env.PUBLIC_URL + "/images/react and redux.jpg"}
                alt="react logo"
              />
              <p className="card-text">Please select a user</p>
              <form onSubmit={this.handleSubmit}>
                <select
                  value={this.state.selectedUser}
                  onChange={e =>
                    this.setState({ selectedUser: e.target.value })
                  }
                >
                  {this.props.userIds.map(id => (
                    <option key={id} value={id}>
                      {id}
                    </option>
                  ))}
                </select>
                <br />
                <br />
                <button className="btn btn-primary" type="submit">
                  Login
                </button>
              </form>
            </div>
            <div className="card-footer text-muted">
              Powered by React & Redux
            </div>
          </div>
        </div>
        <div className="col-md-4"></div>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  const userIds = Object.keys(users);
  return {
    userIds
  };
}

export default connect(mapStateToProps)(Login);
