Template.administradoresPost.helpers({
consultas: function() {
	   return Meteor.users.findOne({_id:  Router.current().params._id});
	   alert(Router.current().params._id);
	  },


	
});

