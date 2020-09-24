
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('listings').del()
    .then(function () {
      // Inserts seed entries
      return knex('listings').insert([
        {id: 1, title: 'Help needed with redux', subject: 'redux', description: 'placeholder', counter: '1', interested: '4', author: 'Bhiv'},
        {id: 2, title: 'Looking to pair up yo learn hooks', subject: 'react hooks', description: 'placeholder', counter: '2', interested: '0', author: 'Tati'},
        {id: 3, title: 'Needing some help with sass', subject: 'sass', description: 'placeholder', counter: '3', interested: '3', author: 'Andras'},
        {id: 4, title: 'Back to basics. Need help with HTML',subject: 'HTML', description: 'placeholder', counter: '4', interested: '2', author: 'Daryl'}
      ]);
    });
};
