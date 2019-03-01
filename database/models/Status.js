const bookshelf = require('./bookshelf');

let Status = bookshelf.Model.extend({
  tableName: 'statuses',
  hasTimestamps: true,

  card: function () {
    return this.belongsTo('Card', 'card');
  }
});

module.exports = bookshelf.model('Status', Status);