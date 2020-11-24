import { get } from 'lodash'

export const authStateSelector = (state) =>
  get(state, 'auth')

export const currentUserSelector = (state) =>
  get(state, 'auth.me', null)

export const authStatusSelector = (state) =>
  get(state, 'auth.status')

export const authTokenSelector = (state) =>
  get(state, 'auth.token')

export const isLicenseVerified = (state) =>
  get(state, 'auth.isLicenseVerified')

export const licenseKeySelector = (state) =>
  get(state, 'auth.licenseKey')