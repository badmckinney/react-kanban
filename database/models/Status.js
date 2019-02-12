const bookshelf = require('./bookshelf');

class Status extends bookshelf.Model {
  get tableName() { return 'statuses'; }
  get hasTimestamps() { return true; }
  card() {
    return this.belongsTo(Card);
  }
}

module.exports = bookshelf.model('Status', Status);