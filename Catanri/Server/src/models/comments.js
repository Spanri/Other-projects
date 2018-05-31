"use strict";
const mongoose = require('mongoose');

const comSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required'],
        unique: true,
        index: true
    },
    comment: String,
}, { versionKey: false }
);

module.exports = mongoose.model('Comment', comSchema);