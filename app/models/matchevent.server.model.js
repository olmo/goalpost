'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Matchevent Schema
 */
var MatcheventSchema = new Schema({
	match: { type: Schema.ObjectId, ref: 'Match' },
    player: {type: Schema.ObjectId, ref: 'Player' },
    type: { type: String },
    minute: { type: Number}
});

mongoose.model('Matchevent', MatcheventSchema);