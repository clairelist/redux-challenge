// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux'

let newState = {className:'cog'} //this is psuedocode, only representational of what the actual newState will do!

const initialWheelState = 0
function wheel(state = initialWheelState, action) {
  switch (action.type) {
    case 'CLOCKWISE': {
      //need to return a new state object, with the old state and newState, which for this component I believe is classname 'active' added to the wheel cog
      return {...state, newState}
    }
    default: return state;

  }
}

const initialQuizState = null
function quiz(state = initialQuizState, action) {
  return state
}

const initialSelectedAnswerState = null
function selectedAnswer(state = initialSelectedAnswerState, action) {
  return state
}

const initialMessageState = ''
function infoMessage(state = initialMessageState, action) {
  return state
}

const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}
function form(state = initialFormState, action) {
  return state
}

export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })
