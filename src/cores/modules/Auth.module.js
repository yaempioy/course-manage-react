const localStorageTokenKey = 'AuthToken'
export function getToken () {
  return localStorage.getItem(localStorageTokenKey)
}
function setToken (token) {
  localStorage.setItem(localStorageTokenKey, token)
}
function clearToken () {
  localStorage.removeItem(localStorageTokenKey)
}
export function login (token) {
  setToken(token)
}
export function logout () {
  clearToken()
}
export function loggedIn () {
  return localStorage.getItem(localStorageTokenKey) !== null
}
