Uploads = new FS.Collection('uploads',{
	stores:[new FS.Store.FileSystem('uploads',{path:'~/uploads'})]
});

Uploads.allow({
  insert: function(userId, doc) {
    return !! userId;
  },
  update: function(userId, doc) {
    return !! userId;
  },

  remove: function(userId, doc) {
    return !! userId;
  }
});