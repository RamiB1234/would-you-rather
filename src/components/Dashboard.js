import React , { Component } from 'react'
import {connect} from 'react-redux'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import {isAnsweredQuestion} from '../utils/helpers'

import Question from './Question'

class Dashboard extends Component{
    render(){
        return(
            <div className='text-center'>
                <Tabs>
                    <TabList>
                    <Tab>Unanswered</Tab>
                    <Tab>Answered</Tab>
                    </TabList>
                
                    <TabPanel>
                    <ul>
                    {this.props.questionIds.filter((id)=> (
                        isAnsweredQuestion(id, this.props.questions, this.props.authedUser)===false
                    )).map((id) => {
                        return(
                                    <li key={id}>
                                        <Question id={id}/>
                                    </li>
                            )
      
                        })}
                </ul>
                    </TabPanel>
                    <TabPanel>
                    <ul>
                    {this.props.questionIds.filter((id)=> (
                        isAnsweredQuestion(id, this.props.questions, this.props.authedUser)===true
                    )).map((id) => {
                        return(
                                    <li key={id}>
                                        <Question id={id}/>
                                    </li>
                            )
      
                        })}
                </ul>
                    </TabPanel>
                </Tabs>
            </div>
        )
    }
}

function mapStateToProps ({questions, authedUser}) {
    return {
        questions,
        authedUser,
        questionIds: Object.keys(questions)
        .sort((a,b)=> questions[b].timestamp - questions[a].timestamp),

    }
}

export default connect(mapStateToProps)(Dashboard)