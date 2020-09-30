exports.seed = (knex) => {
  return knex('subjects').del()
    .then(() => {
      return knex('subjects').insert([
        { id: 1, subject: 'promises' },
        { id: 2, subject: 'knex' },
        { id: 3, subject: 'react hooks' },
        { id: 4, subject: 'redux' }
      ])
    })
}
