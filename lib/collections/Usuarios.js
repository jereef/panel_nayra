Meteor.users.allow({
  update: function(userId, doc) {
    return !! userId;
  },

  remove: function(userId, doc) {
    return !! userId;
  }
});