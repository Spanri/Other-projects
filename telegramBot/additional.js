"use strict";

/// There are additional functions ///

// random integer for "joke"
function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}

module.exports.randomInteger = randomInteger;