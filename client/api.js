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

export function checkInterest (userId, listingId) {
  return request
    .post(url + '/listings/checkinterest')
    .send({ userId, listingId })
    .then(res => res.body)
}

export function showInterest (interest) {
  return request
    .post(url + '/listings/show')
    .send(interest)
    .then(res => res.body)
}

export function removeInterest (interest) {
  return request
    .post(url + '/listings/remove')
    .send(interest)
    .then(res => res.body)
}

export function addNewListing (newListing) {
  return request
    .post(url + '/listings')
    .send(newListing)
    .then(res => res.body)
}

export function countInterested (id) {
  return request
    .get(url + '/listings/interest/' + id)
    .then(res => {
      return res.body
    })
}

export function getMyList (id) {
  return request
    .get(url + '/listings/mylist/' + id)
    .then(res => {
      return res.body
    })
}

export function deleteListing (id) {
  return request
    .post(url + '/listings/delete/' + id)
    .send()
    .then(res => res.body)
}

export function getInterestedList (id) {
  return request
    .get(url + '/users/interested/' + id)
    .then(res => {
      return res.body
    })
}

export function changeStatusToTwo (id) {
  return request
    .post(url + '/listings/statustwo/' + id)
    .send()
    .then(res => res.body)
}

export function getMyPearings (id) {
  return request
    .get(url + '/listings/mypearings/' + id)
    .then(res => {
      return res.body
    })
}

export function addPear (pearing) {
  // console.log(pearId)
  return request
    .post(url + '/listings/addpear/')
    .send(pearing)
    .then(res => res.body)
}
