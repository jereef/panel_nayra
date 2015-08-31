Proyectos.initEasySearch('nombre');
Template.administradoresProyectos.helpers({
   proyectos: function() {
    return Proyectos.find();
  }
});
