var mongoose = require('mongoose');
var connectionString = "mongodb://test:test@ds042698.mlab.com:42698/star-logs";
var mongoose = require('mongoose');
var connection = mongoose.connection;
mongoose.connect(connectionString);

connection.on('error', (err)=>{
    console.log('mlab Error: ', err);
});
connection.once('open', ()=>{
    console.log('connected to Mlab');
});