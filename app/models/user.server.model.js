'use strict';

var mongoose = require('mongoose'), Schema = mongoose.Schema;

var UserSchema = new Schema({
	firstName : String,
	lastName : String,
	email: String,
	username: String,
	password: String
});

// Creates the model 'User' from 'UserSchema'

mongoose.model('User', UserSchema);