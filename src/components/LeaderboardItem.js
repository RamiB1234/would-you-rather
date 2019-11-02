import React, { Component } from "react";
import {connect} from 'react-redux'

class LeaderboardItem extends Component {
  render() {
    const {name, avatarURL, asked, answered} = this.props
    return (
      <div className="card mb-3" style={{'maxWidth': '540px'}}>
        <div className="row no-gutters">
          <div className="col-md-2">
          <h4>Rank: {this.props.rank}</h4><br/><br/>
          <img src={avatarURL} width='90' height='90' alt='avatar'/>
          </div>
          <div className="col-md-10">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <div className='row'>
                  <div className='col-md-4'>
                    <div className="card text-white bg-primary mb-3" style={{"maxWidth": "18rem"}}>
                    <div className="card-header">Asked</div>
                    <div className="card-body">
                        <h5 className="card-title">{asked}</h5>
                    </div>
                    </div>
                  </div>
                  <div className='col-md-4'>
                  <div className="card text-white bg-secondary mb-3" style={{"maxWidth": "18rem"}}>
                    <div className="card-header">Answered</div>
                    <div className="card-body">
                        <h5 className="card-title">{answered}</h5>
                    </div>
                    </div>
                  </div>
                  <div className='col-md-4'>
                  <div className="card text-white bg-success mb-3" style={{"maxWidth": "18rem"}}>
                    <div className="card-header">Score</div>
                    <div className="card-body">
                        <h5 className="card-title">{asked+answered}</h5>
                    </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ users }, {id}) {
    const user = users[id];
    return {
      avatarURL: user.avatarURL,
      name : user.name,
      asked : user.questions.length,
      answered: Object.keys(user.answers).length,
  }
}

export default connect(mapStateToProps)(LeaderboardItem)
