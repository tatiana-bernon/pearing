exports.up = (knex) => {
  return knex.schema.createTable('listings', table => {
    table.increments('id')
    table.string('listings')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('listings')
}