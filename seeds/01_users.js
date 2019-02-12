
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { first_name: 'testUser1', last_name: 'name1', email: 'test1@example.com' },
        { first_name: 'testUser2', last_name: 'name2', email: 'test2@example.com' },
        { first_name: 'testUser3', last_name: 'name3', email: 'test3@example.com' }
      ]);
    });
};
