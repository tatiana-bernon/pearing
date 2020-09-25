const connection = require('./connection')

module.exports = {
  getList
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
