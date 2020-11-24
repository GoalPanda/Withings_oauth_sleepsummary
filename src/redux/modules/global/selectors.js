import { get } from 'lodash'

export const globalStateSelector = (state) =>
  get(state, 'global')

export const loadingStatusSelector = (state) =>
  get(state, 'global.status', 'INIT')

export const passwordCheckStatusSelector = (state) =>
  get(state, 'global.isPasswordMartched', null)
