'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Player Schema
 */
var PlayerSchema = new Schema({
	name: { type: String, default: '', required: 'Please fill Player name', trim: true },
	team: { type: Schema.ObjectId, ref: 'Team' },
	position: { type: String },
    value: {type: Number},
    history_values: {}
});

mongoose.model('Player', PlayerSchema);