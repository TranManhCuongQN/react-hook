import { ActionType } from './actions'
export const initalState = { age: 0 }

export const init = (initalArg: typeof initalState) => {
  return { ...initalArg, age: initalArg.age + 4 }
}

const reducer = (state: typeof initalState, action: ActionType) => {
  if (action.type === 'increase') {
    return { ...state, age: state.age + 1 }
  }
  if (action.type === 'decrease') {
    return { ...state, age: state.age - 1 }
  }
  if (action.type === 'increaseX') {
    return { ...state, age: state.age + action.payload }
  }
  // return state
  throw Error('Invalid Action', action)
}
export default reducer
