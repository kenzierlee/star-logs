var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var server = express();
var port = 3000;
require('./server-assets/db/mlab-config');
server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));

var shipRouter = require('./server-assets/routes/ships');
var logRouter = require('./server-assets/routes/logs');
var commentRouter = require('./server-assets/routes/comments');

server.use(shipRouter.router);
server.use(logRouter.router);
server.use(commentRouter.router);

server.get('*', (error, req, res, next)=>{
    res.status(400).send(error)
});

server.listen(port,()=>{
    console.log('Server is running on port: ', port);
});