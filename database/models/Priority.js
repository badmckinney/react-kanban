const bookshelf = require('./bookshelf');

class Priority extends bookshelf.Model {
  get tableName() { return 'priorities'; }
  get hasTimestamps() { return true; }
  card() {
    return this.belongsTo(Card);
  }
}

module.exports = bookshelf.model('Priority', Priority);