Meteor.users.initEasySearch('profile.nombre');

Template.administradoresFacturas.helpers({
   users: function() {
    return Meteor.users.find();
  }
});

Template.administradoresFacturas.events({

  "keydown .buscar" : function(e,t){

if ($(".buscar").val() == "") {
  $(".defaulttable").show();
}
else{
   $(".defaulttable").hide();
}
  },

  'click .responder': function (e,t) {
    Router.go('facturasPost',{_id:$(e.target).closest('.responder').data('id')})
  }

})

