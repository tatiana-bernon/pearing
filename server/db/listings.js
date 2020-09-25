const connection = require('./connection')

module.exports = {
  getList,
  getListingById
}

function getList (db = connection) {
  return db('listings')
    .select()
    .catch(err => {
      console.error(err)
      throw err
    })
}

function getListingById (id, db = connection) {
  return db('listings')
    .select()
    .catch(err => {
      console.error(err)
      throw err
    })
}
