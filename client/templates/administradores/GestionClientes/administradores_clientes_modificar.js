Template.administradoresClientesModificar.events({
  'submit form': function(e) {
    e.preventDefault();

    var clienteActualId = this._id;

    var clienteProperties = {
     username: $(e.target).find('[name=username]').val(),
      password: $(e.target).find('[name=password]').val(),
      email: $(e.target).find('[name=email]').val(),
      profile: {
      nombre: $(e.target).find('[name=nombre]').val(),
      apellido: $(e.target).find('[name=apellido]').val(),
      fechadenacimiento: $(e.target).find('[name=fechadenacimiento]').val(),
      direccion: $(e.target).find('[name=direccion]').val(),
      cp: $(e.target).find('[name=cp]').val(),
      ciudad: $(e.target).find('[name=ciudad]').val(),
      provincia: $(e.target).find('[name=provincia]').val(),
      telefono: $(e.target).find('[name=telefono]').val()
    }}

    Meteor.users.update(clienteActualId, {$set: clienteProperties}, function(error) {
      if (error) {
        alert(error.reason);
      } else {
        Router.go('administradoresClientes');
      }
    });
  },

   "click .delete": function (e, t) {

       var contacto = $(e.target).closest('.delete').data('name');
       if (confirm("Desea eliminar a " + contacto + "?")) {
       Meteor.users.remove($(e.target).closest('.delete').data('id'));
       Router.go('administradoresClientes');
        }
    },
});