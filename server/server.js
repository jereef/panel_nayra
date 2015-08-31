Meteor.startup(function(){

	if (Meteor.users.find().count() < 1) {

		var users = [
		{name:'Cliente',email:'cliente@test.com',roles:['cliente']},
		{name:'Administrador',email:'administrador@test.com',roles:['administrador']}
		];
		_.each(users,function(userData){

			var userid = Accounts.createUser({
				email:userData.email,
				password:'test1',
				username:userData.email,
				profile:{name:userData.name}
			})
			Meteor.users.update({_id:userid},{$set:{'email.0.verified':true}});
			Roles.addUsersToRoles(userid,userData.roles);
		})
	}
});

