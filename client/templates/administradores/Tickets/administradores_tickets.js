Template.administradoresTickets.helpers({
  consultas: function() {
	    return Consultas.find();
	  }
	
});

Template.administradoresTickets.events({
	'click .responder': function (e,t) {
		Router.go('administradoresPost',{_id:$(e.target).closest('.responder').data('id')})
	}
});