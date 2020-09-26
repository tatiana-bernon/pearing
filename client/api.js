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

export function getList () {
  return request
    .get(url + '/listings')
    .then(res => {
      return res.body
    })
}

export function getListItem (id) {
  return request
    .get(url + '/listings/' + id)
    .then(res => {
      return res.body
    })
}

export function getUserById (id) {
  return request
    .get(url + '/users/' + id)
    .then(res => {
      return res.body
    })
}

export function addForm (id) {
  return request
    .get(url + '/addform/' + id)
    .then(res => {
      return res.body
    })
}

export function showInterest (interest, id) {
  return request
    .post(url + '/listings/' + id)
    .send(interest)
    .then(res => res.body)
}
