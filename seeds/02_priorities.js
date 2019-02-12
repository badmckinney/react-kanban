
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('priorities').del()
    .then(function () {
      // Inserts seed entries
      return knex('priorities').insert([
        { name: 'low', rank: '4' },
        { name: 'medium', rank: '3' },
        { name: 'high', rank: '2' },
        { name: 'blocker', rank: '1' }
      ]);
    });
};
