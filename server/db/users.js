const connection = require('./connection')
const { generateHash } = require('authenticare/server')

module.exports = {
  createUser,
  userExists,
  getUserByName,
  getUserById,
  updatePersonalInfoById,
  getInterestedList
}

function createUser (user, db = connection) {
  return userExists(user.username, db)
    .then((exists) => {
      if (exists) {
        throw new Error('User exists')
      }
      return false
    })
    .then(() => generateHash(user.password))
    .then((passwordHash) => {
      return db('users').insert({
        username: user.username,
        hash: passwordHash
      })
    })
}

function userExists (username, db = connection) {
  return db('users')
    .count('id as n')
    .where('username', username)
    .then((count) => {
      return count[0].n > 0
    })
}

function getUserByName (username, db = connection) {
  return db('users').select().where('username', username).first()
}

function getUserById (id, db = connection) {
  return db('users').select('id', 'username', 'email', 'info').where('id', id).first()
}

function updatePersonalInfoById (update, db = connection) {
  return db('users')
    .select()
    .where('username', update.username)
    .first()
    .update('email', update.email)
    .update('info', update.info)
}

function getInterestedList (id, db = connection) {
  return db('listings')
    .join('interestedUsers', 'listings.id', 'interestedUsers.listing_id')
    .select('interestedUsers.user_id', 'interestedUsers.listing_id')
    .where('listings.id', id)
    .catch(err => {
      console.error(err)
      throw err
    })
}
