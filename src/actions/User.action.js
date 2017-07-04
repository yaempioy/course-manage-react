export const ACTION_TYPES = {
  UPDATE_PROFILE_REQUEST: 'UPDATE_PROFILE_REQUEST',
  UPDATE_PROFILE_SUCCESS: 'UPDATE_PROFILE_SUCCESS'
}

export const updateProfile = (id, user = {}) => ({
  type: ACTION_TYPES.UPDATE_PROFILE_REQUEST, id, user
})

export const updateBirthDate = (date) => ({
  type: 'UPDATE_BIRTHDATE', date
})
