import actions from './actions'


export function MainReducer(action, state) {
  switch (action) {
    case actions.ADD_GITHUB_USER:
      return {
        ...state.payload,
      }
    case actions.REMOVE_GITHUB_USER:
      return {}
    default: state
  }
}