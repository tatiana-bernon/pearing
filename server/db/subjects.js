const connection = require('./connection')

module.exports = {
  getSubjects
}
function getSubjects (db = connection) {
return db('subjects')
  .select()
  .catch(err => {
    console.error(err)
    throw err
  })
}