export const ACTION_TYPES = {
  FETCH_COURSES_REQUEST: 'FETCH_COURSES_REQUEST',
  FETCH_COURSES_SUCCESS: 'FETCH_COURSES_SUCCESS',
  CREATE_COURSE_REQUEST: 'CREATE_COURSE_REQUEST',
  CREATE_COURSE_SUCCESS: 'CREATE_COURSE_SUCCESS'
}

export const fetchCourses = () => ({ type: ACTION_TYPES.FETCH_COURSES_REQUEST })
export const createCourseProcess = (course = {}) => ({
  type: ACTION_TYPES.CREATE_COURSE_REQUEST, course
})
