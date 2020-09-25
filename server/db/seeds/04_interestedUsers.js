exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('interestedUsers').del()
    .then(function () {
      // Inserts seed entries
      return knex('interestedUsers').insert([
        { id: 1, interested_id: 2, user_id: 1 },
        { id: 2, interested_id: 3, user_id: 2 },
        { id: 3, interested_id: 1, user_id: 2 }
      ])
    })
}
