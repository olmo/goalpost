'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Day Schema
 */
var DaySchema = new Schema({
	name: { type: String, default: '', required: 'Please fill Day name', trim: true },
	season: { type: String }
});

mongoose.model('Day', DaySchema);