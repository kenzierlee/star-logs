var router = require('express').Router();
var Logs = require('../models/log');
var Comments = require('../models/comment');
router.get('/api/logs', (req, res, next)=>{
    Logs.find(req.query)
        .then(logs =>{
            res.send(logs)
        })
        .catch(next)
});
router.get('/api/logs/:id', (req, res, next)=>{
    Logs.findById(req.params.id)
        .then(log =>{
            if(!log){
                return res.status(400).send({error: 'Invalid Id'})
            }
            return res.send(log)
        })
        .catch(next)
});
router.get('/api/logs/:id/comments', (req, res, next)=>{
    Comments.find({logId: req.params.id})
        .then(comments =>{
            return res.send(comments)
        })
        .catch(next)
});
router.post('/api/logs', (req, res, next)=>{
    Logs.create(req.body)
        .then(log =>{
            return res.send(log)
        })
        .catch(next)
})
router.put('/api/logs/:id', (req, res, next)=>{
    Logs.findByIdAndUpdate(req.params.id, req.body)
        .then(log =>{
            return res.send(log)
        })
        .catch(err => res.status(400).send(err))        
})
router.delete('/api/logs/:id', (req, res, next)=>{
    Logs.findByIdAndRemove(req.params.id)
        .then(log =>{
            return res.send({message: 'Log Deleted!'})
        })
})
module.exports = {router}