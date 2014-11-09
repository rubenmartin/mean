'use strict';

//Load the controller 'users'
var users = require('../../app/controllers/users.server.controller');

// Define the method routes module
module.exports = function(app){
	//Set  up the 'users' base routes
	app.route('users').post(users.create).get(users.list);
	app.route('/users/:userId').get(users.read);
	app.param('userId', users.userByID);
};



                   