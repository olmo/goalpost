'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	errorHandler = require('./errors'),
	Matchevent = mongoose.model('Matchevent'),
	_ = require('lodash');

/**
 * Create a Matchevent
 */
exports.create = function(req, res) {
	var matchevent = new Matchevent(req.body);
	matchevent.user = req.user;

	matchevent.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(matchevent);
		}
	});
};

/**
 * Show the current Matchevent
 */
exports.read = function(req, res) {
	res.jsonp(req.matchevent);
};

/**
 * Update a Matchevent
 */
exports.update = function(req, res) {
	var matchevent = req.matchevent ;

	matchevent = _.extend(matchevent , req.body);

	matchevent.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(matchevent);
		}
	});
};

/**
 * Delete an Matchevent
 */
exports.delete = function(req, res) {
	var matchevent = req.matchevent ;

	matchevent.remove(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(matchevent);
		}
	});
};

/**
 * List of Matchevents
 */
exports.list = function(req, res) { Matchevent.find().sort('-created').populate('user', 'displayName').exec(function(err, matchevents) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(matchevents);
		}
	});
};

/**
 * Matchevent middleware
 */
exports.matcheventByID = function(req, res, next, id) { Matchevent.findById(id).populate('user', 'displayName').exec(function(err, matchevent) {
		if (err) return next(err);
		if (! matchevent) return next(new Error('Failed to load Matchevent ' + id));
		req.matchevent = matchevent ;
		next();
	});
};

/**
 * Matchevent authorization middleware
 */
exports.hasAuthorization = function(req, res, next) {
	if (req.matchevent.user.id !== req.user.id) {
		return res.status(403).send('User is not authorized');
	}
	next();
};