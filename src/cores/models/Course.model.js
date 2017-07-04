import { api } from '../libraries/Api'
const url = '/courses'

export const createCourse = (course = {}) => {
  return api(url, {
    method: 'POST',
    body: { course }
  })
}
