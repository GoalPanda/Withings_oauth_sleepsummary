import { takeLatest } from 'redux-saga/effects'
import * as CONSTANTS from 'redux/modules/global/constants'
import apiCall from '../api/apiCall'

const doCheckGlobalPassword = apiCall({
  type: CONSTANTS.CHECK_GLOBAL_PASSWORD,
  method: 'post',
  path: 'global/check'
})

export default function* rootSaga () {
  yield takeLatest(CONSTANTS.CHECK_GLOBAL_PASSWORD, doCheckGlobalPassword)
}
