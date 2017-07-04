import { api } from '../libraries/Api'
const url = '/courses'

export const getCourses = (query) => {
  return api(url, {
    method: 'GET',
    params: {...query}
  })
}

export const createCourse = (course = {}) => {
  return api(url, {
    method: 'POST',
    body: { course }
  })
}
