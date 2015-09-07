Template.clientePost.helpers({
consultas: function() {
	  return Consultas.find({_id: Router.current().params._id});
	},
comentarios: function() {

	  return Comentarios.find({idconsulta: Router.current().params._id});

	},
data: function(usuario) {
return Meteor.users.findOne({_id: usuario});
}, 
comentario: function(consulta) {
	
	return Comentarios.findOne({idusuario: consulta});
}

});
Template.clientePost.events({
	'submit form': function(e) {

		
		e.preventDefault();

	 var today = new Date();
	 var hh = today.getHours();
	 var mmi = today.getMinutes();
    var dd = today.getDate();
    var mm = today.getMonth()+1; 
    var yyyy = today.getFullYear();
     if(mmi<10){
        mmi='0'+mmi
    } 
    if(hh<10){
        hh='0'+hh
    } 
    if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 
    var today = dd+'/'+mm+'/'+yyyy+' '+hh + ':' + mmi + 'Hs ' ;


		var comentario = {
			idusuario: Meteor.userId(),
			texto: $(e.target).find('[name=texto]').val(),
			idconsulta: Router.current().params._id,
			date: today
		};
		
			Comentarios.insert(comentario);

	}
})