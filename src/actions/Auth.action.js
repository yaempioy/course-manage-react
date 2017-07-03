export const ACTION_TYPES = {
  AUTHENTICATION_REQUEST: 'AUTHENTICATION_REQUEST',
  AUTHENTICATION_SUCCESS: 'AUTHENTICATION_SUCCESS',
  AUTHENTICATION_FAILED: 'AUTHENTICATION_FAILED',
  GET_AUTHENTICATION_PROFILE_REQUEST: 'GET_AUTHENTICATION_PROFILE_REQUEST',
  GET_AUTHENTICATION_PROFILE_SUCCESS: 'GET_AUTHENTICATION_PROFILE_SUCCESS'
}

export const loginProcess = (username = '', password = '') => ({
  type: ACTION_TYPES.AUTHENTICATION_REQUEST,
  username,
  password
})
export const getAuthenticationProfile = () => ({type: ACTION_TYPES.GET_AUTHENTICATION_PROFILE_REQUEST})
