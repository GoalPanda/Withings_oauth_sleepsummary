import { handleActions } from 'redux-actions'
import { requestSuccess, requestFail } from 'redux/api/request'
import * as CONSTANTS from './constants'

const getInitialState = () => {
  return {
    isPasswordMartched: null,
    status: 'INIT',
    error: null,
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions({
  [CONSTANTS.CHECK_GLOBAL_PASSWORD]: (state, { payload }) => ({
    ...state,
    status: 'PENDING',
  }),

  [requestSuccess(CONSTANTS.CHECK_GLOBAL_PASSWORD)]: (state, { payload }) => ({
    ...state,
    isPasswordMartched: payload.code === '200' ? true : false,
    status: requestSuccess(CONSTANTS.CHECK_GLOBAL_PASSWORD),
    error: null
  }),

  [requestFail(CONSTANTS.CHECK_GLOBAL_PASSWORD)]: (state, { payload }) => ({
    ...state,
    status: requestFail(CONSTANTS.CHECK_GLOBAL_PASSWORD),
    error: payload
  }),

}, getInitialState())
