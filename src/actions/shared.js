import {getInitialData, saveQuestionAnswer} from '../utils/api'
import {receiveUsers} from '../actions/users'
import {receiveQuestions} from '../actions/questions'
import {saveQuestion} from '../utils/api'
import {addQuestion} from './questions'
import {addUserQuestion} from './users'
import {addQuestionAnswer} from './questions'
import {addUserQuestionAnswer} from './users'
import { showLoading, hideLoading } from 'react-redux-loading-bar'

export function handleInitialData() {
    return (dispatch) => {
        return getInitialData()
            .then(({users, questions}) => {
                dispatch(receiveUsers(users))
                dispatch(receiveQuestions(questions))
            })
    }
}

export function handleAddQuestion(optionA, optionB){
    return (dispatch, getState) =>{
        dispatch(showLoading())
        const {authedUser} = getState()

        return saveQuestion({optionOneText: optionA, optionTwoText: optionB, author: authedUser})
        .then((question)=>{
            dispatch(addQuestion(question))
            dispatch(addUserQuestion(question.id, authedUser))
            dispatch(hideLoading())
        })
    }
}

export function handleAddQuestionAnswer(answer, qid){
    return (dispatch, getState) =>{

        const {authedUser} = getState()
        return saveQuestionAnswer({authedUser, qid, answer})
        .then( () => {
            dispatch(addQuestionAnswer(answer, qid, authedUser))
            dispatch(addUserQuestionAnswer(qid, authedUser, answer))
        })

    }
}