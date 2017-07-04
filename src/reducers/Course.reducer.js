const initialState = {
  course: {}
}
const ACTION_HANDLERS = {
  CREATE_COURSE_SUCCESS: (state, action) => Object.assign({}, state, {
    course: action.course
  })
}

export default function authReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
