'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Team Schema
 */
var TeamSchema = new Schema({
	name: { type: String, default: '', required: 'Please fill Team name', trim: true },
    players: [{type: Schema.ObjectId, ref: 'Player'}],
    logo: { type: String }
});

mongoose.model('Team', TeamSchema);