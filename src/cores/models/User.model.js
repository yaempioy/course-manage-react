import { api } from '../libraries/Api'
const url = '/users'

export const updateUser = (id, user = {}) => {
  return api(`${url}/${id}`, {
    method: 'PUT',
    body: { user }
  })
}
