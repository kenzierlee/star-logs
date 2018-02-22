var router = require('express').Router();
var Comments = require('../models/comment');
router.get('/api/comments', (req, res, next)=>{
    Comments.find(req.query)
        .then(comments =>{
            res.send(comments)
        })
        .catch(next)
});
router.get('/api/comments/:id', (req, res, next)=>{
    Comments.findById(req.params.id)
        .then(comment =>{
            if(!comment){
                return res.status(400).send({error: 'Invalid Id'})
            }
            return res.send(comment)
        })
        .catch(next)
});
router.post('/api/comments', (req, res, next)=>{
    Comments.create(req.body)
        .then(comment =>{
            return res.send(comment)
        })
        .catch(next)
})
router.put('/api/comments/:id', (req, res, next)=>{
    Comments.findByIdAndUpdate(req.params.id, req.body)
        .then(comment =>{
            return res.send(comment)
        })
        .catch(err => res.status(400).send(err))        
})
router.delete('/api/comments/:id', (req, res, next)=>{
    Comments.findByIdAndRemove(req.params.id)
        .then(comment =>{
            return res.send({message: 'Comment Deleted!'})
        })
})
module.exports = {router}