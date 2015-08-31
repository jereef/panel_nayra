Template.administradoresProyectosAgregar.events({
	'submit form': function(e) {

		
		e.preventDefault();

		var proyecto = {
			nombre: $(e.target).find('[name=nombre]').val(),
			descripcion: $(e.target).find('[name=descripcion]').val(),
			//ultimamodificacion: ultimamodificaicon,
			idcliente: $(e.target).find(':selected').val(),
			progreso: "0"
		};
			Proyectos.insert(proyecto);
			Router.go('administradoresProyectos');

	},
	'change .fileInput':function(event,template){
		FS.Utility.eachFile(event, function(file){
			var fileObj = new FS.File(file);
			Uploads.insert(fileObj, function(err){
				console.log(err);
			})
		})
	}

})

Template.administradoresProyectosAgregar.helpers({

	usuarios:function(){
		return Meteor.users.find();

	}

});