'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	errorHandler = require('./errors'),
	Lineup = mongoose.model('Lineup'),
	_ = require('lodash');

/**
 * Create a Lineup
 */
exports.create = function(req, res) {
	var lineup = new Lineup(req.body);
	lineup.user = req.user;

	lineup.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(lineup);
		}
	});
};

/**
 * Show the current Lineup
 */
exports.read = function(req, res) {
	res.jsonp(req.lineup);
};

/**
 * Update a Lineup
 */
exports.update = function(req, res) {
	var lineup = req.lineup ;

	lineup = _.extend(lineup , req.body);

	lineup.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(lineup);
		}
	});
};

/**
 * Delete an Lineup
 */
exports.delete = function(req, res) {
	var lineup = req.lineup ;

	lineup.remove(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(lineup);
		}
	});
};

/**
 * List of Lineups
 */
exports.list = function(req, res) { Lineup.find().sort('-created').populate('user', 'displayName').exec(function(err, lineups) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(lineups);
		}
	});
};

/**
 * Lineup middleware
 */
exports.lineupByID = function(req, res, next, id) { Lineup.findById(id).populate('user', 'displayName').exec(function(err, lineup) {
		if (err) return next(err);
		if (! lineup) return next(new Error('Failed to load Lineup ' + id));
		req.lineup = lineup ;
		next();
	});
};

/**
 * Lineup authorization middleware
 */
exports.hasAuthorization = function(req, res, next) {
	if (req.lineup.user.id !== req.user.id) {
		return res.status(403).send('User is not authorized');
	}
	next();
};