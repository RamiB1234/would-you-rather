export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_USER_QUESTION = 'ADD_USER_QUESTION'
export const ADD_USER_QUESTION_ANSWER = 'ADD_USER_QUESTION_ANSWER'


export function receiveUsers (users) {
    return {
        type: RECEIVE_USERS,
        users,

    }
}

export function addUserQuestion (questionId, userId){
    return {
        type : ADD_USER_QUESTION,
        questionId,
        userId
    }
}

export function addUserQuestionAnswer(questionId, userId, answer){
    return {
        type: ADD_USER_QUESTION_ANSWER,
        questionId,
        userId,
        answer
    }
}