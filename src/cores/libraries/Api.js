/* global fetch */
import 'whatwg-fetch'
import { getToken } from '../modules/Auth.module'
import queryString from 'query-string'

const serverUrl = process.env.API_URI
export const api = (additionalUrl, options) => {
  let headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: 'JWT ' + getToken(),
    ...options.headers
  }
  let responseFormatter = accept => {
    return accept === 'application/json'
      ? header => Promise.all([header.json(), header])
      : header => Promise.all([header.blob(), header])
  }
  // remove undefined key
  Object.keys(headers).map(key => {
    if (!headers[key]) {
      delete headers[key]
    }
  })
  if (headers['Content-Type'] && options.body) {
    options.body = JSON.stringify(options.body)
  }
  return fetch(
    serverUrl + additionalUrl + '?' + queryString.stringify(options.params),
    { ...options, headers: { ...headers } }
  )
    .then(responseFormatter(headers.Accept))
    .then(function(result) {
      return {
        response: result[0],
        header: result[1]
      }
    })
}
