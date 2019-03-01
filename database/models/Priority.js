const bookshelf = require('./bookshelf');

let Priority = bookshelf.Model.extend({
  tableName: 'priorities',
  hasTimestamps: true,

  card: function () {
    return this.belongsTo('Card', 'card');
  }
});

module.exports = bookshelf.model('Priority', Priority);