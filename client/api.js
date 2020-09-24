import request from 'superagent'

const url = '/api/v1'

export function getSubjects () {
  return request
    .get(url + '/subjects')
    .then(res => {
      return res.body
    })
}

export function updatePersonalInfo (info) {
  return request
  .post(url + '/users')
  .send(info)
  .then(res => res.body)
}
