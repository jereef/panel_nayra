Meteor.subscribe('clientes');
Meteor.subscribe('proyectos');
Meteor.subscribe("directory");
Meteor.subscribe('servicios');
Meteor.subscribe('consultas');
Meteor.subscribe('comentarios');

Transitioner.transition({
    fromRoute: 'administradoresClientes',
    toRoute: 'administradoresMain',
    velocityAnimation: {
        in: 'transition.slideRightIn',
  out: 'transition.slideRightOut'
}})