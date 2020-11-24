import { combineReducers } from 'redux'

import global from './modules/global/reducers'
import auth from './modules/auth/reducers'

export default combineReducers({
  global,
  auth
})
