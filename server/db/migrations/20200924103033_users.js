exports.up = (knex) => {
  return knex.schema.createTable('users', table => {
    table.increments('id')
    table.string('username')
    table.binary('hash')
    table.string('email')
    table.string('phone')
    table.string('linkedin')
    table.string('discord')
    table.string('info')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('users')
}
