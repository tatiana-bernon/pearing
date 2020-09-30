const { generateHash } = require('authenticare/server')

exports.seed = (knex) => {
  return knex('users').del()
    .then(() => Promise.all([
      generateHash('daryl'),
      generateHash('tati'),
      generateHash('bhiv'),
      generateHash('andras')
    ]))
    .then(([darylHash, tatiHash, bhivHash, andrasHash]) =>
      knex('users').insert([
        { id: 1, username: 'daryl', hash: darylHash, email: 'test1@test.com', phone: null, linkedin: null, discord: null, info: 'yeah' },
        { id: 2, username: 'tati', hash: tatiHash, email: 'test2@test.com', phone: null, linkedin: null, discord: null, info: 'nah' },
        { id: 3, username: 'bhiv', hash: bhivHash, email: 'test3@test.com', phone: null, linkedin: null, discord: null, info: 'maybe' },
        { id: 4, username: 'andras', hash: andrasHash, email: 'test4@test.com', phone: null, linkedin: null, discord: null, info: 'what?' }
      ])
    )
}
