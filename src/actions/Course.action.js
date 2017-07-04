export const ACTION_TYPES = {
  CREATE_COURSE_REQUEST: 'CREATE_COURSE_REQUEST',
  CREATE_COURSE_SUCCESS: 'CREATE_COURSE_SUCCESS'
}

export const createCourseProcess = (course = {}) => ({
  type: ACTION_TYPES.CREATE_COURSE_REQUEST, course
})
