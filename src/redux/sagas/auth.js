import { takeLatest } from 'redux-saga/effects'
import * as CONSTANTS from 'redux/modules/auth/constants'
import apiCall from '../api/apiCall'

const doLogin = apiCall({
  type: CONSTANTS.DO_LOGIN,
  method: 'post',
  path: 'auth/login'
})

const doSignup = apiCall({
  type: CONSTANTS.DO_SIGNUP,
  method: 'post',
  path: 'auth/register',
  success: (res, action) => {
    localStorage.setItem('visesole_auth', JSON.stringify(res.data))
  }
})

const checkLicenseKey = apiCall({
  type: CONSTANTS.CHECK_LICENSE_KEY,
  method: 'post',
  path: 'auth/check/license',
  success: (res, action) => {},
  fail: ({ data }) => {}
}) 

export default function* rootSaga () {
  yield takeLatest(CONSTANTS.DO_LOGIN, doLogin)
  yield takeLatest(CONSTANTS.DO_SIGNUP, doSignup)
  yield takeLatest(CONSTANTS.CHECK_LICENSE_KEY, checkLicenseKey)
}
