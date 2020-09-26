exports.up = (knex) => {
  return knex.schema.createTable('interestedUsers', table => {
    table.increments('id')
    table.integer('listing_id')
    table.integer('user_id')
    table.integer('author_id')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('interestedUsers')
}
