Router.configure({
  layoutTemplate: 'layout',
   loadingTemplate: 'loading',
     notFoundTemplate: 'notFound'
});

Router.route('/clientes', {name: 'clientesMain'});
Router.route('/clientes/home', {name: 'clienteHome'});
Router.route('/clientes/servicios', {name: 'clienteServicios'});
Router.route('/clientes/pago', {name: 'clientePagos'});

Router.route('/clientes/tienda', {name: 'clienteTienda'});
Router.route('/clientes/perfil', {name: 'clientePerfil'});
Router.route('/clientes/mesa', {name: 'clienteMesa'});
Router.route('/clientes/mesa/:_id/post', {
  name: 'clientePost',
  data: function() { return Consultas.find(this.params._id); }
});


Router.route('/administradores', {name: 'administradoresMain'});
Router.route('/administradores/clientes', {name: 'administradoresClientes'});
Router.route('/administradores/clientes-agregar', {name: 'administradoresClientesAgregar'});
Router.route('/administradores/clientes/:_id/modificar', {
  name: 'administradoresClientesModificar',
  data: function() { return Meteor.users.findOne(this.params._id); }
});
Router.route('/administradores/proyectos', {name: 'administradoresProyectos'});
Router.route('/administradores/proyectos-agregar', {name: 'administradoresProyectosAgregar'});
Router.route('/administradores/facturas', {name: 'administradoresFacturas'});
Router.route('/administradores/tienda', {name: 'administradoresTienda'});
Router.route('/administradores/tickets', {name: 'administradoresTickets'});
Router.route('/administradores/clientes/:_id/post', {
  name: 'administradoresPost',
  data: function() { return Consultas.find(this.params._id); }
});
Router.route('/administradores/mesa/:_id/facturasPost', {
  name: 'facturasPost',
  data: function() { return Consultas.find(this.params._id); }
});


var requireLogin = function() {
  if (! Meteor.user()) {
   if (Meteor.loggingIn()) {
      this.render(this.loadingTemplate);
    } else {
      this.render('accessDenied');
    }
  } else {
    this.next();
  }
}
