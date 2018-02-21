var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schemaName = 'Ship';

var schema = new Schema({
    name: {type: String, required: true},
    size: {type: String, enum: ['Small', 'Medium', 'Large']},
    built: {type: Date, required: true, default: Date.now()},
    shipType: {type: String, enum: ['Battleship','Cargo','Cruise']}
});
module.exports = mongoose.model(schemaName, schema);