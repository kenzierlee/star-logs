var router = require('express').Router();
var Ships = require('../models/ship');
var Logs = require('../models/log');
var Comments = require('../models/comment');
router.get('/api/ships', (req, res, next)=>{
    Ships.find(req.query)
        .then(ships =>{
            res.send(ships)
        })
        .catch(next)
});
router.get('/api/ships/:id', (req, res, next)=>{
    Ships.findById(req.params.id)
        .then(ship =>{
            if(!ship){
                return res.status(400).send({error: 'Invalid Id'})
            }
            return res.send(ship)
        })
        .catch(next)
});
router.get('/api/ships/:id/logs', (req, res, next)=>{
    Logs.find({shipId: req.params.id})
        .then(logs =>{
            return res.send(logs)
        })
        .catch(next)
});
router.get('/api/ships/:shipId/logs/:id/comments', (req, res, next)=>{
    Comments.find({logId: req.params.id})
        .then(comments =>{
            return res.send(comments)
        })
})
router.post('/api/ships', (req, res, next)=>{
    Ships.create(req.body)
        .then(ship =>{
            return res.send(ship)
        })
        .catch(next)
})
router.put('/api/ships/:id', (req, res, next)=>{
    Ships.findByIdAndUpdate(req.params.id, req.body)
        .then(ship =>{
            return res.send(ship)
        })
        .catch(err => res.status(400).send(err))        
})
router.delete('/api/ships/:id', (req, res, next)=>{
    Ships.findByIdAndRemove(req.params.id)
        .then(ship =>{
            return res.send({message: 'Ship Deleted!'})
        })
})
module.exports = {router}