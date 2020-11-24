import { handleActions } from 'redux-actions'
import { requestSuccess, requestFail } from 'redux/api/request'
import * as CONSTANTS from './constants'

const getInitialState = () => {
  let authRestore = JSON.parse(localStorage.getItem('visesole_auth') || null)
  return {
    token: authRestore ? authRestore.tokens.refresh.token : null,
    me: authRestore ? authRestore.user : null, // current loged in user,
    isLicenseVerified: false,
    licenseKey: null,
    status: 'INIT',
    error: null,
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions({
  [requestSuccess(CONSTANTS.DO_LOGIN)]: (state, { payload }) => ({
    ...state,
    token: payload.tokens.refresh.token,
    status: requestSuccess(CONSTANTS.DO_LOGIN),
    me: payload.user
  }),

  [requestFail(CONSTANTS.DO_LOGIN)]: (state, { payload }) => ({
    ...state,
    token: null,
    status: requestFail(CONSTANTS.DO_LOGIN),
    me: null,
    error: payload
  }),

  [requestSuccess(CONSTANTS.DO_SIGNUP)]: (state, { payload }) => ({
    ...state,
    token: payload.tokens.refresh.token,
    status: requestSuccess(CONSTANTS.DO_SIGNUP),
    me: payload.user
  }),

  [requestFail(CONSTANTS.DO_SIGNUP)]: (state, { payload }) => ({
    ...state,
    token: null,
    status: requestFail(CONSTANTS.DO_SIGNUP),
    me: null,
    error: payload
  }),

  [CONSTANTS.DO_LOGOUT]: (state, { payload }) => ({
    ...state,
    token: null,
    status: CONSTANTS.DO_LOGOUT,
    me: null,
    error: null
  }),

  [requestSuccess(CONSTANTS.CHECK_LICENSE_KEY)]: (state, { payload }) => ({
    ...state,
    isLicenseVerified: payload.isMatched
  }),

  [requestFail(CONSTANTS.CHECK_LICENSE_KEY)]: (state, { payload }) => ({
    ...state,
    isLicenseVerified: false,
  }),

  [CONSTANTS.SAVE_LICENSE_KEY]: (state, { payload }) => ({
    ...state,
    licenseKey: payload
  })

}, getInitialState())
