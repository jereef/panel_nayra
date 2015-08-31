Clientes = new Mongo.Collection('clientes');

Clientes.allow({
  insert: function(userId, doc) {
    return !! userId;
  }
});


