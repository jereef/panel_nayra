
Template.clientePerfil.events({
	'submit form': function(e) {

		
		e.preventDefault();

		var cliente = {
			username: $(e.target).find('[name=username]').val(),
			password: $(e.target).find('[name=password]').val(),
			emails: [{ address: $(e.target).find('[name=email]').val(), verified:false
		}],
			profile: {
			nombre: $(e.target).find('[name=nombre]').val(),
			apellido: $(e.target).find('[name=apellido]').val(),
			fechadenacimiento: $(e.target).find('[name=fechadenacimiento]').val(),
			direccion: $(e.target).find('[name=direccion]').val(),
			cp: $(e.target).find('[name=cp]').val(),
			ciudad: $(e.target).find('[name=ciudad]').val(),
			provincia: $(e.target).find('[name=provincia]').val(),
			telefono: $(e.target).find('[name=telefono]').val()
		},
		};


		//Meteor.users.update({_id:Meteor.user()._id}, {$set:cliente})
	}
})

Template.clientePerfil.helpers({
   users: function() {
    return Meteor.users.find();
  }
});


//Meteor.users.update({_id:Meteor.user()._id}, {$set:{"profile.nombre":$(e.target).find('[name=username]').val(),}})