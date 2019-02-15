const bookshelf = require('./bookshelf');

let Card = bookshelf.Model.extend({
  tableName: 'cards',
  hasTimestamps: true,

  priority: function () {
    return this.hasOne('Priority', 'id', 'priority_id');
  },

  status: function () {
    return this.hasOne('Status', 'id', 'status_id');
  },

  createdBy: function () {
    return this.hasOne('User', 'id', 'created_by');
  },

  assignedTo: function () {
    return this.hasOne('User', 'id', 'assigned_to');
  }
});

module.exports = bookshelf.model('Card', Card);