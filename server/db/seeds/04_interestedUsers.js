exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('interestedUsers').del()
    .then(function () {
      // Inserts seed entries
      return knex('interestedUsers').insert([
        { id: 1, listing_id: 2, user_id: 1, author_id: 3 },
        { id: 2, listing_id: 2, user_id: 1, author_id: 3 },
        { id: 3, listing_id: 3, user_id: 1, author_id: 2 },
        { id: 4, listing_id: 3, user_id: 1, author_id: 2 },
        { id: 5, listing_id: 4, user_id: 1, author_id: 2 }
      ])
    })
}
