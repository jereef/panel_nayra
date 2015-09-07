Template.clienteMesa.helpers({
   servicios: function() {
    return Servicios.find({idcliente: Meteor.userId()});
 }, 
	consultas: function() {
	    return Consultas.find({usuario: Meteor.userId()});
	  }
});

Template.clienteMesa.events({
	'submit form': function(e,t) {

		
		e.preventDefault();

		var cliente = {
			tema: $(e.target).find('[name=tema]').val(),
			servicio: $(e.target).find('[name=servicio]').val(),
			descripcion: $(e.target).find('[name=descripcion]').val(),
			archivo: "0",
			estado: "Pendiente",
			mail: $(e.target).find('[name=mail]').val(),
			usuario: Meteor.userId()
		};
			Consultas.insert(cliente);
	}})


Template.clienteMesa.events({
	'click tr': function(e,t) {
Router.go('clientePost',{_id:$(e.target).closest('.responder').data('id')})
	}})
