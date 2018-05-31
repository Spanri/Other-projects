"use strict";
var mongoose = require('mongoose');
var mongooseUnique = require('mongoose-unique-validator');
var mongooseBcrypt = require('mongoose-bcrypt');

const textSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    unique: true,
    index: true,
    },
  text: String
}, { versionKey: false }
);

textSchema.plugin(mongooseUnique);
textSchema.plugin(mongooseBcrypt);

module.exports = mongoose.model('Text', textSchema);