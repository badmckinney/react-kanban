
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { username: 'user1', password: 'abc123', first_name: 'testUser1', last_name: 'name1', email: 'test1@example.com' },
        { username: 'user2', password: 'abc123', first_name: 'testUser2', last_name: 'name2', email: 'test2@example.com' },
        { username: 'user3', password: 'abc123', first_name: 'testUser3', last_name: 'name3', email: 'test3@example.com' }
      ]);
    });
};
