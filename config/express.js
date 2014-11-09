var 	config = require('./config'),
	session = require('express-session'),
	express = require('express'),
	morgan = require('morgan'),
	compress =  require('compress'),
	bodyParser = require('body-parser'),
	methodOverride = require('method-override');

module.exports = function(){
	var app = express();
	
	// We personalize the envirmoment depend where we are : development (we use morgan) 
	//or production  (we use comress)

	if(process.env.NODE_ENV ==='development'){
		app.use(morgan('dev'));
	}else if (process.env.NODE_ENV ==='production'){
		app.use(compress());
	}

	// bodyparser and methdoverride we will use allways

	app.use(bodyParser.urlencoded({
		extended:true
	}));

	app.use(bodyParser.json());
	app.use(methodOverride());

	// we add here the obj session to mantain the session

	app.use (session({
		saveUninitialized:true,
		resave:true,
		secret: config.sessionSecret

	}));

	// We configure the dir views as a view
	// We configure the motor ejs as a template.

	app.set('views', './app/views');
	app.set('view engine', 'ejs');

	// We load the files for the routing
	require('../app/routes/index.server.routes.js')(app);
	require('../app/routes/users.server.routes.js')(app);

	// to add express static files, below route file.

	app.use(express.static('./public'));

	return app;
};