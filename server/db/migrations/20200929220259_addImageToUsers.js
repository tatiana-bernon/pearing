exports.up = function (knex) {
  return knex.schema.table('users', function (t) {
    t.string('image')
  })
}

exports.down = function (knex) {
  return knex.schema.table('users', function (t) {
    t.dropColumn('image')
  })
}
