exports.render = function(req,res){
	// checking if the variable lastVisit was there configured if not add a new one
	console.log("index.server.controller.js");

	if(req.session.lastVisit){
		console.log("lastVisit:"+req.session.lastVisit);
	}

	req.session.lastVisit = new Date();

	// We draw the page and their variable

	res.render('index', {
		title:'Hola Mundos'
	});

};


/**

exports.render = function(req,res){
	res.send('Hola Mundo');
};

**/

