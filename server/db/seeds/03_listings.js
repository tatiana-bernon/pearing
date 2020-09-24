
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('listings').del()
    .then(function () {
      // Inserts seed entries
      return knex('listings').insert([
        {id: 1, title: 'Help needed with redux', subject_id: 'redux', description: 'placeholder', counter: '1', interested: '4', user_id: 'Bhiv'},
        {id: 2, title: 'Looking to pair up yo learn hooks', subject_id: 'react hooks', description: 'placeholder', counter: '2', interested: '0', user_id: 'Tati'},
        {id: 3, title: 'Needing some help with sass', subject_id: 'sass', description: 'placeholder', counter: '3', interested: '3', user_id: 'Andras'},
        {id: 4, title: 'Back to basics. Need help with HTML',subject_id: 'HTML', description: 'placeholder', counter: '4', interested: '2', user_id: 'Daryl'}
      ]);
    });
};
