import { createAction } from 'redux-actions'
import * as CONSTANTS from './constants'

export const login = createAction(CONSTANTS.DO_LOGIN)
export const signup = createAction(CONSTANTS.DO_SIGNUP)
export const logout = createAction(CONSTANTS.DO_LOGOUT, () => {
  localStorage.removeItem('visesole_auth')
})

export const checkLicenseKey = createAction(CONSTANTS.CHECK_LICENSE_KEY)
export const saveLicenseKey = createAction(CONSTANTS.SAVE_LICENSE_KEY)