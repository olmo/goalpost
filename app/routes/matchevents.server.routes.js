'use strict';

module.exports = function(app) {
	var users = require('../../app/controllers/users');
	var matchevents = require('../../app/controllers/matchevents');

	// Matchevents Routes
	app.route('/matchevents')
		.get(matchevents.list)
		.post(users.requiresLogin, matchevents.create);

	app.route('/matchevents/:matcheventId')
		.get(matchevents.read)
		.put(users.requiresLogin, matchevents.hasAuthorization, matchevents.update)
		.delete(users.requiresLogin, matchevents.hasAuthorization, matchevents.delete);

	// Finish by binding the Matchevent middleware
	app.param('matcheventId', matchevents.matcheventByID);
};