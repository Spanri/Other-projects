"use strict";
const mongoose = require('mongoose');

const aboutSchema = mongoose.Schema({
    fetch: {
        type: String,
        required: [true, 'Fetch is required'],
        unique: true,
        index: true
    },
    desc: String,
}, { versionKey: false }
);

module.exports = mongoose.model('About', aboutSchema);