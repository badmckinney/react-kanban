
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('cards').del()
    .then(function () {
      // Inserts seed entries
      return knex('cards').insert([
        { title: 'do dishes', body: 'make sure they sparkle', priority_id: 1, status_id: 1, created_by: 1, assigned_to: 2 },
        { title: 'eat food', body: 'eat alot', priority_id: 2, status_id: 2, created_by: 2, assigned_to: 3 },
        { title: 'fix changes', body: 'let us know if you have questions', priority_id: 3, status_id: 3, created_by: 3, assigned_to: 1 }
      ]);
    });
};
