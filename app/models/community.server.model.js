'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Community Schema
 */
var CommunitySchema = new Schema({
	name: { type: String, default: '', required: 'Please fill Community name', trim: true },
	created: { type: Date, default: Date.now },
	users: [ { user: { type: Schema.ObjectId, ref: 'User' }, permission: {type: String, default: 'user'}}]
});

mongoose.model('Community', CommunitySchema);