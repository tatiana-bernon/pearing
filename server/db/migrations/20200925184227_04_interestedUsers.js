exports.up = (knex) => {
  return knex.schema.createTable('interestedUsers', table => {
    table.increments('id')
    table.integer('interested_id')
    table.integer('user_id')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('interestedUsers')
}
