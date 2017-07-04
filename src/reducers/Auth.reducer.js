const initialState = {
  authentication: false,
  user: {
    _id: '',
    firstname: '',
    lastname: '',
    gender: '',
    type: ''
  }
}
const ACTION_HANDLERS = {
  UPDATE_PROFILE_SUCCESS: (state, action) => Object.assign({}, state, {
    user: action.user
  }),
  GET_AUTHENTICATION_PROFILE_SUCCESS: (state, action) => {
    return Object.assign({}, state, {
      user: action.user,
      authentication: action.user._id !== initialState.user._id
    })
  },
  AUTHENTICATION_SUCCESS: (state, action) => {
    return Object.assign({}, state, {
      user: action.user,
      authentication: action.authentication
    })
  }
}

export default function authReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
