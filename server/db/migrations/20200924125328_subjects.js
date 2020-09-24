
exports.up = (knex) => {
  return knex.schema.createTable('subjects', table => {
    table.increments('id')
    table.string('subject')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('subjects')
}