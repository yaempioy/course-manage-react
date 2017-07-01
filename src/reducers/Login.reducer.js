const initialState = {
  authentication: false,
  user: {
    _id: '',
    name: '',
    type: ''
  }
}
const ACTION_HANDLERS = {
  AUTHENTICATION_SUCCESS: (state, action) =>
    Object.assign({}, state, {
      user: action.user,
      authentication: action.authentication
    })
}

export default function authReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
