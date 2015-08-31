Meteor.publish('clientes', function() {
  return Clientes.find();
});
Meteor.publish('proyectos', function() {
  return Proyectos.find();
});
Meteor.publish("directory", function() {
  return Meteor.users.find({}, {fields: {username: 1, emails: 1, profile: 1}});
});
Meteor.publish('servicios', function() {
  return Servicios.find();
});
Meteor.publish('consultas', function() {
  return Consultas.find();
});
Meteor.publish('comentarios', function() {
  return Comentarios.find();
});