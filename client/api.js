import request from 'superagent'

const url = '/api/v1'

export function getSubjects() {
  return request
    .get(url + '/subjects')
    .then(res => {
      return res.body
    })
}