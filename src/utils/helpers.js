export function formatQuestion (question, author, authedUser){
    const {id} = question
    const {name, avatarURL} = author

    return{
        name,
        id,
        authedUser,
        avatarURL,
        optionOne: question.optionOne.text,
        optionTwo: question.optionTwo.text
    }
}

export function isAnsweredQuestion(questionId, questions, authedUser){
    const question = questions[questionId]
    const optionOneVotes = question.optionOne.votes
    const optionTwoVotes = question.optionTwo.votes

    if(optionOneVotes.includes(authedUser) || optionTwoVotes.includes(authedUser)){
        return true
    }
    else{
        return false
    }
}