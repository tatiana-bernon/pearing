const { del } = require('superagent')
const connection = require('./connection')

module.exports = {
  getList,
  getListingById,
  checkInterest,
  showInterest,
  removeInterest,
  getInterestById,
  addNewListing,
  getMyList,
  deleteListing
}

function getList (db = connection) {
  return db('listings')
    .join('subjects', 'listings.subject_id', 'subjects.id')
    .select('listings.id', 'listings.title', 'listings.status', 'listings.interested', 'subjects.subject')
    .catch(err => {
      console.error(err)
      throw err
    })
}

function getListingById (id, db = connection) {
  return db('listings')
    .select()
    .where('id', id)
    .first()
    .catch(err => {
      console.error(err)
      throw err
    })
}

function checkInterest (interest, db = connection) {
  return db('interestedUsers')
    .where('user_id', interest.userId)
    .where('listing_id', interest.listingId)
    .catch(err => {
      console.error(err)
      throw err
    })
}

function showInterest (interest, db = connection) {
  return db('interestedUsers')
    .insert(interest)
    .catch(err => {
      console.error(err)
      throw err
    })
}

function removeInterest (interest, db = connection) {
  return db('interestedUsers')
    .where('listing_id', interest.listing_id)
    .where('user_id', interest.user_id)
    .del()
    .catch(err => {
      console.error(err)
      throw err
    })
}

function getInterestById (id, db = connection) {
  return db('interestedUsers')
    .where('listing_id', id)
    .count('listing_id as count')
    .first()
    .then(count => {
      return db('listings')
        .where('listings.id', id)
        .update({ interested: count.count })
    })
    .catch(err => {
      console.error(err)
      throw err
    })
}

function addNewListing (newListing, db = connection) {
  return db('listings')
    .insert(newListing)
    .catch(err => {
      console.error(err)
      throw err
    })
}

function getMyList (id, db = connection) {
  return db('listings')
    .select()
    .where('user_id', id)
    .catch(err => {
      console.error(err)
      throw err
    })
}

function deleteListing (id, db = connection) {
  return db('listings')
    .select()
    .where('id', id)
    .del()
    .catch(err => {
      console.error(err)
      throw err
    })
}