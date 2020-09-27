exports.up = (knex) => {
  return knex.schema.createTable('subjects', table => {
    table.increments('id').primary()
    table.string('subject')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('subjects')
}
