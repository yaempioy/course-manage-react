import { api } from '../libraries/Api'
const url = '/auth'

export const postAuthentication = (username, password) => {
  return api(url, {
    method: 'POST',
    body: { username, password }
  })
}
