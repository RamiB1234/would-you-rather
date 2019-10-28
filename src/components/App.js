import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'

import './App.css';
import Nav from './Nav'
import Dashboard from './Dashboard'
import AddQuestion from './AddQuestion'
import Leaderboard from './Leaderboard'

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render(){
    return (
      <Router>
        <Nav />
        {this.props.loading === true ? null :
          <div>
          <Route path="/" exact component={Dashboard} />
          <Route path="/add" component={AddQuestion} />
          <Route path="/leaderboard" component={Leaderboard} />
        </div>
        }
        
      </Router>
    )
  }

}

function mapStateToProps({authedUser}){
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App);
