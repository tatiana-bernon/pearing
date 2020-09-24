const { generateHash } = require('authenticare/server')

exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(() => Promise.all([
      generateHash('daryl'),
      generateHash('tati'),
      generateHash('bhiv'),
      generateHash('andras')
    ]))
    .then(([ darylHash, tatiHash, bhivHash, andrasHash ]) =>
      knex('users').insert([
        { id: 1, username: 'daryl', hash: darylHash },
        { id: 2, username: 'tati', hash: tatiHash },
        { id: 3, username: 'bhiv', hash: bhivHash },
        { id: 4, username: 'andras', hash: andrasHash }
      ])
    )
}