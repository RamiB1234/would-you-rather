import {RECEIVE_QUESTIONS
    , ADD_QUESTION
    , ADD_QUESTION_ANSWER} from '../actions/questions'


export default function questions (state={}, action) {
    switch(action.type){
        case RECEIVE_QUESTIONS:
            return{
                ...state,
                ...action.questions
            }

        case ADD_QUESTION:
            return{
                ...state,
                [action.question.id] : action.question
            }
        case ADD_QUESTION_ANSWER:
                if(action.answer==='optionOne'){
                    return{
                        ...state,
                        [action.qid] : {
                            ...state[action.qid],
                            optionOne:{
                                ...state[action.qid].optionOne,
                                votes: state[action.qid].optionOne.votes.concat([action.userId])
                            }   
                        }
                    }
                }
                else{
                    return{
                        ...state,
                        [action.qid] : {
                            ...state[action.qid],
                            optionTwo:{
                                ...state[action.qid].optionTwo,
                                votes: state[action.qid].optionTwo.votes.concat([action.userId])
                            }   
                        }
                    }   
                }

        default:
            return state
    }
}