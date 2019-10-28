import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Nav from './Nav'
import Dashboard from './Dashboard'
import AddPoll from './AddPoll'
import Leaderboard from './Leaderboard'

function App() {
  return (
    <Router>
      <Nav />
      <div>
        <Route path="/" exact component={Dashboard} />
        <Route path="/add" component={AddPoll} />
        <Route path="/leaderboard" component={Leaderboard} />
      </div>
      
    </Router>
  );
}

export default App;
