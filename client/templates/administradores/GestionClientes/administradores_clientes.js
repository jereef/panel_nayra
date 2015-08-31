Meteor.users.initEasySearch('profile.nombre');

Template.administradoresClientes.helpers({
   users: function() {
    return Meteor.users.find();
  }
});

Template.administradoresClientes.events({

  "keydown .buscar" : function(e,t){

if ($(".buscar").val() == "") {
  $(".defaulttable").show();
}
else{
   $(".defaulttable").hide();
}
  },

   "click .delete": function (e, t) {

var contacto = $(e.target).closest('.delete').data('name');
       if (confirm("Desea eliminar a " + contacto + "?")) {
       Meteor.users.remove($(e.target).closest('.delete').data('id'));
        }
    },

    "click .update": function (e, t) {

    	Router.go('administradoresClientesModificar',{_id:$(e.target).closest('.update').data('id')})
    }
})

