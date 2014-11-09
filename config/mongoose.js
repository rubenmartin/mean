'use strict'

// Request the dpendences of the model
var config = require('./config'),  
	mongoose = require('mongoose');

// define the configuration of mongoose
module.exports = function(){
	var db = mongoose. connect(config.db);
	
	// We define de model
	require('../app/models/user.server.model');

	return db;
}		

