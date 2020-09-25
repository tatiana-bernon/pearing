const connection = require('./connection')

module.exports = {
  getList
}
function getList (db = connection) {
  return db('listings')
    .select()
    .catch(err => {
      console.error(err)
      throw err
    })
}
