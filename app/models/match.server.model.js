'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Match Schema
 */
var MatchSchema = new Schema({
    local: { type: Schema.ObjectId, ref: 'Team' },
    visitor: { type: Schema.ObjectId, ref: 'Team' },
    local_goals: { type: Number },
    visitor_goals: { type: Number },
    local_lineup: [ { player: { type: Schema.ObjectId, ref: 'Player' }, points: { type: Number }, ycard: { type: Number },
        rcard: { type: Number }, goals: { type: Number }, assistances: { type: Number }, in: { type: Number }, out: { type: Number } } ],
    visitor_lineup: [ { player: { type: Schema.ObjectId, ref: 'Player' }, points: { type: Number }, ycard: { type: Number },
        rcard: { type: Number }, goals: { type: Number }, assistances: { type: Number }, in: { type: Number }, out: { type: Number } } ],
	date: { type: Date },
	day: { type: Schema.ObjectId, ref: 'Day' }
});

mongoose.model('Match', MatchSchema);