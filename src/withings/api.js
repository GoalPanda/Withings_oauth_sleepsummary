import axios from 'axios'

export const APP_BASE_URL = 'http://localhost:3000/'
export const CONSUMER_KEY = '11e5abf0750ebe990f7b2dda143be0856da0d062a9c7ec956fa4e05e7d7f67ac'
export const CONSUMER_SECRET = 'f64086aba6580edfa0e71bfd5ea5f72c2a08c8509b07ce123418454bfae55db4'
export const REDIRECT_URL = `${APP_BASE_URL}withings/callback`
const SERVER_AUTH_URL = 'https://account.withings.com/oauth2_user/authorize2'
export const AUTH_URL = `${SERVER_AUTH_URL}?response_type=code&client_id=${CONSUMER_KEY}&state=true
&scope=user.activity,user.sleepevents&redirect_uri=${REDIRECT_URL}`

export const requestToken = async (code) => {
  return axios({
    method: 'post',
    url: 'https://wbsapi.withings.net/v2/oauth2',
    params: {
      'action': 'requesttoken',
      'grant_type': 'authorization_code',
      'client_id': CONSUMER_KEY,
      'client_secret': CONSUMER_SECRET,
      'code': code,
      'redirect_uri': REDIRECT_URL
    }
  })
    .then((res) => res.data.body)
}

export const getSleepSummary = async (token) => {
  return axios.post('https://wbsapi.withings.net/v2/sleep', null,
    {
      headers: {
        'Authorization': 'Bearer ' + token.access_token,
      },
      params: {
        'action': 'getsummary',
        'startdateymd' : '2020-01-01',
        'enddateymd' : '2020-12-02'
      }
    })
    .then((res) => res.data.body.series)
    .catch((e) => {return {err: e}})
}

export const withings_oauth_login = () => {
  window.location.replace(AUTH_URL)
}