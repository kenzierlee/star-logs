var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.SchemaTypes.ObjectId;
var schemaName = 'Comment';

var schema = new Schema({
    name: {type: String, required: true},
    posted: {type: Date, required: true, default: Date.now()},
    commentBody: {type: String, required: true},
    logId: {type: ObjectId, ref: 'Log', required: true}
});
module.exports = mongoose.model(schemaName, schema);