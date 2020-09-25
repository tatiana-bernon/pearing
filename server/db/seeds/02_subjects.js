exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('subjects').del()
    .then(() => {
      // Inserts seed entries
      return knex('subjects').insert([
        { id: 1, subject: 'promises' },
        { id: 2, subject: 'knex' },
        { id: 3, subject: 'react hooks' },
        { id: 4, subject: 'redux' }
      ])
    })
}
