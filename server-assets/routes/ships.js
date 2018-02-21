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
    Ships.findById(req.params.id)
        .then(ship =>{
            Logs.find({shipId: ship._id})
                .then(logs =>{
                    res.send(logs)
                })
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
    Ships.findById(req.params.id)
        .then(ship =>{
            if(ship){
                for(var key in req.body){
                    if(ship[key] && key != "_id"){
                        ship[key] = req.body[key]
                    }
                }
                ship.update(ship).then(()=>{return res.send(ship)})
            }else{return res.status(400).send({error: "Change did not go through."})}
        })
        .catch(next)
})
router.delete('/api/ships/:id', (req, res, next)=>{
    Ships.findByIdAndRemove(req.params.id)
        .then(ship =>{
            return res.send({message: 'Ship Deleted!'})
        })
})
module.exports = {router}