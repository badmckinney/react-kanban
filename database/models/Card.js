const bookshelf = require('./bookshelf');

class Card extends bookshelf.Model {
  get tableName() { return 'cards'; }
  get hasTimestamps() { return true; }
  user() {
    return this.belongsTo(User);
  };
  status() {
    return this.hasOne(Status);
  };
  priority() {
    return this.hasOne(Priority);
  };
}

module.exports = bookshelf.model('Card', Card);