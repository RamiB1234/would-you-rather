import {saveQuestion} from '../utils/api'
import {addUserQuestion} from './users'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'

export function receiveQuestions (questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,

    }
}

export function addQuestion(question){
    return {
        type: ADD_QUESTION,
        question
    }
}

export function handleAddQuestion(optionA, optionB){
    return (dispatch, getState) =>{

        const {authedUser} = getState()

        return saveQuestion({optionOneText: optionA, optionTwoText: optionB, author: authedUser})
        .then((question)=>{
            dispatch(addQuestion(question))
            dispatch(addUserQuestion(question.id, authedUser))
        })
    }
}
