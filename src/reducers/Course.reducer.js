const initialState = {
  course: {},
  courses: []
}
const ACTION_HANDLERS = {
  FETCH_COURSES_SUCCESS: (state, action) => Object.assign({}, state, {
    courses: action.courses
  }),
  CREATE_COURSE_SUCCESS: (state, action) => Object.assign({}, state, {
    course: action.course
  })
}

export default function authReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
