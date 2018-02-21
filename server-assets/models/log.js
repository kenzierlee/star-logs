var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.SchemaTypes.ObjectId;
var schemaName = 'Log';

var schema = new Schema({
    name: {type: String, required: true},
    recorded: {type: Date, required: true, default: Date.now()},
    shipId: {type: ObjectId, ref: 'Ship', required: true}
});
module.exports = mongoose.model(schemaName, schema);