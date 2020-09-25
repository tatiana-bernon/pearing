
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('listings').del()
    .then(function () {
      // Inserts seed entries
      return knex('listings').insert([
        {id: 1, title: 'Help needed with redux', subject_id: 1, description: 'placeholder 01', status: 4, interested: 0, user_id: 1},
        {id: 2, title: 'Looking to pair up yo learn hooks', subject_id: 2, description: 'placeholder 02', status: 2, interested: 33, user_id: 2},
        {id: 3, title: 'Needing some help with sass', subject_id: 3, description: 'placeholder 03', status: 1, interested: 11, user_id: 3},
        {id: 4, title: 'Back to basics. Need help with HTML', subject_id: 4, description: 'placeholder 04', status: 3, interested: 3, user_id: 4}
      ]);
    });
};
