const connection = require('./connection')

module.exports = {
  getList,
  getListingById,
  showInterest,
  addNewListing
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

function showInterest (interest, db = connection) {
  return db('interestedUsers')
    .insert(interest)
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
