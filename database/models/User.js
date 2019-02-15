const bookshelf = require('./bookshelf');

let User = bookshelf.Model.extend({
  tableName: 'users',
  hasTimestamps: true,

  createdCards: function () {
    return this.hasMany('Card', 'cards');
  },

  assignedCards: function () {
    return this.hasMany('Card', 'cards');
  }
});

module.exports = bookshelf.model('User', User);
