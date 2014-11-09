'use strict';

// Load new the model moongoose 'user'
var User = require('mongoose'). model('User');

// New method controller 'create' which creates new instance of the model mongoose 'user'
// then creates method save to load new document
exports.create = function(res,req,next){

var user  =  new User(req.body);

user.save(function(err){
	if(err){
		//Just call the next middleware with error message
		return next(err);
	}else{
		// We send the model inside the response with JSON.
		res.json(user);
	}

});

};

//Create new method controller 'list'

exports.list =  function(req, res, next){
	User.find({}, 'username email  ',function(err,users){
		if(err){
			return next(err);
		}else{
			res.json(users);
		}
	});

};

exports.read = function(req, res){
	// Uses object 'response' to send the request in JSON
	res.json(req.user);
};


// Creates new method controler 'userByID'
exports.userByID = function(res, req, next, id){
	// Use static method 'findOne ' from 'User' to find one document

	User.findOne({	_id:id}, 
		function(err, user){
			if(err){
				//Call the next middleware the message error
				return next(err);
			}else{
				//config the property 'req.user'
				req.user = user;
				//call next middleware
				next();
			}

		}
	);

};