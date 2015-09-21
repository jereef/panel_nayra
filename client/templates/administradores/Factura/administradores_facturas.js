var selecte_id;
selecteDep = new Tracker.Dependency();

Template.administradoresFacturas.helpers({
   users: function() {
    return Meteor.users.find();
   },
   proyectos: function() {
    selecteDep.depend();
    return Proyectos.find({idcliente:selecte_id});
  }
 });


  Template.administradoresFacturas.events({

  'click #popup': function () {
    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').focus()
    })
},
'click .filtrar': function (e, t) {
     selecte_id =  $(e.target).closest('.filtrar').data('id');
     selecteDep.changed();
    },
     "click .agregar": function (e, t) {
      Router.go('administradoresFacturasAgregar',{_id:$(e.target).closest('.agregar').data('id')});
      $('#myModal').on('hidden', function(){
        $(this).data('modal', null);
      });
    }
});