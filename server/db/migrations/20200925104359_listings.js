exports.up = (knex) => {
  return knex.schema.createTable('listings', table => {
    table.increments('id')
    table.string('title')
    table.integer('subject_id')
    table.string('description')
    table.integer('status')
    table.integer('interested')
    table.integer('user_id')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('listings')
}