import React, {Component} from 'react'
import {connect} from 'react-redux'
import {formatQuestion} from '../utils/helpers'
import {Link} from "react-router-dom"

class Question extends Component{
    render(){
        console.log(this.props)
        return(
            <div>
                <div className='row'>
                    <div className='col-md-3'></div>
                    <div className='col-md-6 text-center'>
                    <div className="card" style={{width: '100%'}}>
                <h5 className="card-header">{this.props.question.name} asks would you rather:</h5>
                <div className="card-body">
                    <div className='row'>
                        <div className='col-md-6'>
                        <img src={this.props.question.avatarURL} width='120' height='120' alt='avatar'/>
                        </div>
                        <div className='col-md-6'>
                        <p className="card-text">
                        1. {this.props.question.optionOne}<br/>
                         <b>OR</b><br/>
                        2. {this.props.question.optionTwo}
                    </p>
                    <Link to={`/questions/${this.props.question.id}`} className="btn btn-success">Details</Link>
                        </div>
                    </div>
                </div>
                </div>
                    </div>
                    <div className='col-md-3'></div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({authedUser, users, questions}, {id}){
    const question= questions[id]
    return{
        authedUser,
        question: formatQuestion(question, users[question.author], authedUser)
    }

}


export default connect(mapStateToProps)(Question)