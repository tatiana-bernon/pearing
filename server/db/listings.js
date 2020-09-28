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
  deleteListing,
  changeStatusToZero,
  changeStatusToOne,
  changeStatusToTwo,
  changeStatusToThree,
  getMyPearings,
  getMyPearingsByOthers,
  addPear,
  getMyCompleted,
  getMyCompletedByOthers,
  getMyInterests
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
    .where('status', '<', 2)
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

function changeStatusToZero (id, db = connection) {
  return db('listings')
    .select()
    .where('id', id)
    .where('status', 1)
    .where('interested', 1)
    .update('status', 0)
    .catch(err => {
      console.error(err)
      throw err
    })
}

function changeStatusToOne (id, db = connection) {
  return db('listings')
    .select()
    .where('id', id)
    .where('status', 0)
    .update('status', 1)
    .catch(err => {
      console.error(err)
      throw err
    })
}

function changeStatusToTwo (id, db = connection) {
  return db('listings')
    .select()
    .where('id', id)
    .update('status', 2)
    .catch(err => {
      console.error(err)
      throw err
    })
}

function changeStatusToThree (id, db = connection) {
  return db('listings')
    .select()
    .where('id', id)
    .update('status', 3)
    .catch(err => {
      console.error(err)
      throw err
    })
}

function getMyPearings (id, db = connection) {
  return db('listings')
    .join('users', 'listings.pear_id', 'users.id')
    .select('listings.id', 'listings.title', 'listings.description', 'users.username')
    .where('listings.user_id', id)
    .where('listings.status', 2)
    .catch(err => {
      console.error(err)
      throw err
    })
}

function getMyPearingsByOthers (id, db = connection) {
  return db('listings')
    .join('users', 'listings.user_id', 'users.id')
    .select('listings.id', 'listings.title', 'listings.description', 'users.username')
    .where('listings.pear_id', id)
    .where('listings.status', 2)
    .catch(err => {
      console.error(err)
      throw err
    })
}

function addPear (pearId, id, db = connection) {
  return db('listings')
    .select()
    .where('id', id)
    .update('pear_id', pearId)
    .catch(err => {
      console.error(err)
      throw err
    })
}

function getMyCompleted (id, db = connection) {
  return db('listings')
    .join('users', 'listings.pear_id', 'users.id')
    .select('listings.id', 'listings.title', 'users.username')
    .where('listings.user_id', id)
    .where('listings.status', 3)
    .catch(err => {
      console.error(err)
      throw err
    })
}

function getMyCompletedByOthers (id, db = connection) {
  return db('listings')
    .join('users', 'listings.user_id', 'users.id')
    .select('listings.id', 'listings.title', 'users.username')
    .where('listings.pear_id', id)
    .where('listings.status', 3)
    .catch(err => {
      console.error(err)
      throw err
    })
}

function getMyInterests (id, db = connection) {
  return db('interestedUsers')
    .join('listings', 'interestedUsers.listing_id', 'listings.id')
    .select('listings.id', 'listings.title', 'listings.user_id')
    .where('interestedUsers.user_id', id)
    .where('listings.status', 1)
    .catch(err => {
      console.error(err)
      throw err
    })
}
