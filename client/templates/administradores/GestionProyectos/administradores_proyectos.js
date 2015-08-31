Proyectos.initEasySearch('nombre');
Template.administradoresProyectos.helpers({
   proyectos: function() {
    return Proyectos.find();
  },
  usuarios: function(){
  return Meteor.users.find();
  },
  data: function(idcliente){
  	return Meteor.users.findOne({_id:idcliente});
  }
});
